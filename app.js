// App State
let state = {
  screen: 'home', // home, select, scenario, debrief
  level: null,
  currentScenario: null,
  questionIndex: 0,
  answers: [],
  answered: false,
  selectedOptions: new Set()
};

const app = document.getElementById('app');

function render() {
  switch(state.screen) {
    case 'home': renderHome(); break;
    case 'select': renderSelect(); break;
    case 'scenario': renderScenario(); break;
    case 'debrief': renderDebrief(); break;
  }
  window.scrollTo(0, 0);
}

function renderHome() {
  app.innerHTML = `
    <h1>🚑 RI EMS Scenario Trainer</h1>
    <p class="subtitle">Train with real Rhode Island protocols</p>
    <p style="text-align:center;color:#8b92a8;font-size:.85em;margin-bottom:24px">Select your certification level</p>
    <div class="level-cards">
      <div class="card level-card" data-level="E" onclick="selectLevel('E')">
        EMT
        <div class="desc">Emergency Medical Technician</div>
      </div>
      <div class="card level-card" data-level="A" onclick="selectLevel('A')">
        AEMT
        <div class="desc">Advanced EMT</div>
      </div>
      <div class="card level-card" data-level="C" onclick="selectLevel('C')">
        AEMT-C
        <div class="desc">Advanced EMT-Cardiac</div>
      </div>
      <div class="card level-card" data-level="P" onclick="selectLevel('P')">
        Paramedic
        <div class="desc">Paramedic</div>
      </div>
    </div>
  `;
}

function selectLevel(level) {
  state.level = level;
  state.screen = 'select';
  render();
}

function getAvailableScenarios() {
  const levelOrder = {E:1, A:2, C:3, P:4};
  const userLevel = levelOrder[state.level] || 1;
  return SCENARIOS.filter(s => {
    const minLevel = levelOrder[s.level_min] || 1;
    return userLevel >= minLevel;
  });
}

function renderSelect() {
  const scenarios = getAvailableScenarios();
  const categories = {};
  scenarios.forEach(s => {
    if (!categories[s.category]) categories[s.category] = [];
    categories[s.category].push(s);
  });

  let html = `
    <button class="back-btn" onclick="state.screen='home';render()">Back</button>
    <h1 style="font-size:1.3em;margin-bottom:4px">Choose a Scenario</h1>
    <p class="subtitle">${scenarios.length} scenarios available</p>
    <button class="btn btn-primary" onclick="startRandom()" style="margin-bottom:20px">🎲 Random Scenario</button>
  `;

  for (const [cat, items] of Object.entries(categories)) {
    html += `<div class="category-header">${cat}</div>`;
    items.forEach(s => {
      const diffClass = s.difficulty === 'Easy' ? 'tag-easy' : s.difficulty === 'Medium' ? 'tag-medium' : 'tag-hard';
      html += `
        <div class="card" onclick="startScenario('${s.id}')" style="margin-bottom:8px">
          <div class="scenario-item">
            <div>
              <div class="title">${s.title}</div>
              <div class="tags" style="margin-top:6px">
                <span class="tag ${diffClass}">${s.difficulty}</span>
                <span class="tag tag-proto">${s.primary_protocol}</span>
              </div>
            </div>
            <span style="color:#8b92a8">›</span>
          </div>
        </div>`;
    });
  }

  app.innerHTML = html;
}

function startRandom() {
  const scenarios = getAvailableScenarios();
  const s = scenarios[Math.floor(Math.random() * scenarios.length)];
  startScenario(s.id);
}

function startScenario(id) {
  state.currentScenario = SCENARIOS.find(s => s.id === id);
  state.questionIndex = 0;
  state.answers = [];
  state.answered = false;
  state.selectedOptions = new Set();
  state.screen = 'scenario';
  render();
}

function getFilteredQuestions() {
  const levelMap = {E:'E', A:'A', C:'C', P:'P'};
  const userLevel = state.level;
  return state.currentScenario.questions.filter(q => {
    return q.level_filter.includes(userLevel);
  });
}

function renderScenario() {
  const s = state.currentScenario;
  const questions = getFilteredQuestions();
  
  if (state.questionIndex >= questions.length) {
    state.screen = 'debrief';
    render();
    return;
  }

  const q = questions[state.questionIndex];
  const phases = ['scene','assessment','treatment','transport'];
  const phaseLabels = {scene:'Scene Size-Up',assessment:'Assessment',treatment:'Treatment',transport:'Transport'};
  
  // Progress bar
  let progressHtml = '<div class="progress-bar">';
  const usedPhases = [...new Set(questions.map(qq => qq.phase))];
  usedPhases.forEach(p => {
    const qIdx = questions.findIndex(qq => qq.phase === p);
    let cls = '';
    if (p === q.phase) cls = 'active';
    else if (qIdx < state.questionIndex) cls = 'done';
    progressHtml += `<div class="progress-step ${cls}">${phaseLabels[p] || p}</div>`;
  });
  progressHtml += '</div>';

  // Vitals
  let vitalsHtml = '';
  if (s.vitals && state.questionIndex === 0) {
    const v = s.vitals;
    vitalsHtml = `
      <div class="narrative">
        <div class="label">Vitals</div>
        <div class="vitals-grid">
          ${v.hr !== undefined ? `<div class="vital"><div class="val">${v.hr}</div><div class="lbl">HR</div></div>` : ''}
          ${v.bp ? `<div class="vital"><div class="val">${v.bp}</div><div class="lbl">BP</div></div>` : ''}
          ${v.rr !== undefined ? `<div class="vital"><div class="val">${v.rr}</div><div class="lbl">RR</div></div>` : ''}
          ${v.spo2 !== undefined ? `<div class="vital"><div class="val">${v.spo2}${typeof v.spo2 === 'number' ? '%' : ''}</div><div class="lbl">SpO₂</div></div>` : ''}
          ${v.gcs !== undefined ? `<div class="vital"><div class="val">${v.gcs}</div><div class="lbl">GCS</div></div>` : ''}
          ${v.temp ? `<div class="vital"><div class="val">${v.temp}</div><div class="lbl">Temp</div></div>` : ''}
          ${v.bg ? `<div class="vital"><div class="val">${v.bg}</div><div class="lbl">BG</div></div>` : ''}
        </div>
      </div>`;
  }

  // Build HTML
  let html = `
    <button class="back-btn" onclick="state.screen='select';render()">Exit Scenario</button>
    ${progressHtml}
    <div style="margin-bottom:6px"><span class="tag tag-proto">${s.primary_protocol}</span> <span style="color:#8b92a8;font-size:.85em">${s.title}</span></div>
  `;

  // Show dispatch/scene on first question
  if (state.questionIndex === 0) {
    html += `
      <div class="narrative">
        <div class="label">📟 Dispatch</div>
        ${s.dispatch}
      </div>
      <div class="narrative">
        <div class="label">🏥 Scene</div>
        ${s.scene}
      </div>
      <div class="narrative">
        <div class="label">👤 Patient</div>
        ${s.patient.age}yo ${s.patient.sex === 'M' ? 'male' : 'female'} — ${s.patient.cc}<br>
        <span style="color:#8b92a8;font-size:.9em">PMH: ${s.history.pmh} | Meds: ${s.history.meds} | Allergies: ${s.history.allergies}</span>
      </div>
      <div class="narrative">
        <div class="label">🔍 Presentation</div>
        ${s.presentation}
      </div>
      ${vitalsHtml}
    `;
  }

  html += `
    <div class="phase-label">${phaseLabels[q.phase] || q.phase}</div>
    <div class="question-prompt">Question ${state.questionIndex + 1} of ${questions.length}: ${q.prompt}</div>
  `;

  if (q.multi_select) {
    html += `<div class="multi-hint">Select all that apply</div>`;
  }

  // Options
  q.options.forEach((opt, i) => {
    let cls = 'option';
    let extra = '';
    
    if (state.answered) {
      if (opt.correct) {
        cls += ' correct';
        extra = `<div class="explanation"><span class="indicator"></span> ✅ ${opt.explanation} <span class="ref">(${opt.protocol_ref})</span></div>`;
      } else if (state.selectedOptions.has(i)) {
        cls += ' incorrect';
        extra = `<div class="explanation"><span class="indicator"></span> ❌ ${opt.explanation} <span class="ref">(${opt.protocol_ref})</span></div>`;
      }
    } else {
      if (state.selectedOptions.has(i)) cls += ' selected';
    }

    html += `
      <div class="${cls}" onclick="selectOption(${i})">
        ${opt.text}
        ${extra}
      </div>`;
  });

  // Button
  if (!state.answered) {
    const disabled = state.selectedOptions.size === 0 ? 'disabled' : '';
    html += `<button class="btn btn-primary" onclick="submitAnswer()" ${disabled}>Submit Answer</button>`;
  } else {
    const isLast = state.questionIndex + 1 >= questions.length;
    const label = isLast ? 'View Results 📊' : 'Next Question →';
    html += `<button class="btn btn-primary" onclick="nextQuestion()">${label}</button>`;
  }

  app.innerHTML = `<div class="fade-in">${html}</div>`;
}

function selectOption(i) {
  if (state.answered) return;
  const q = getFilteredQuestions()[state.questionIndex];
  if (q.multi_select) {
    if (state.selectedOptions.has(i)) state.selectedOptions.delete(i);
    else state.selectedOptions.add(i);
  } else {
    state.selectedOptions = new Set([i]);
  }
  renderScenario();
}

function submitAnswer() {
  if (state.selectedOptions.size === 0) return;
  state.answered = true;
  
  const q = getFilteredQuestions()[state.questionIndex];
  const correctIndices = new Set(q.options.map((o,i) => o.correct ? i : -1).filter(i => i >= 0));
  const selected = state.selectedOptions;
  
  // Check if correct
  let isCorrect = false;
  if (q.multi_select) {
    isCorrect = selected.size === correctIndices.size && [...selected].every(i => correctIndices.has(i));
  } else {
    isCorrect = selected.size === 1 && correctIndices.has([...selected][0]);
  }

  state.answers.push({
    question: q.prompt,
    phase: q.phase,
    correct: isCorrect,
    selected: [...selected].map(i => q.options[i].text),
    correctAnswer: q.options.filter(o => o.correct).map(o => o.text),
    protocol: q.options.find(o => o.correct)?.protocol_ref || ''
  });

  renderScenario();
}

function nextQuestion() {
  state.questionIndex++;
  state.answered = false;
  state.selectedOptions = new Set();
  render();
}

function renderDebrief() {
  const s = state.currentScenario;
  const total = state.answers.length;
  const correct = state.answers.filter(a => a.correct).length;
  const pct = total > 0 ? Math.round(correct / total * 100) : 0;
  
  let scoreClass = 'score-bad';
  if (pct >= 80) scoreClass = 'score-good';
  else if (pct >= 60) scoreClass = 'score-ok';

  let html = `
    <h1 style="font-size:1.3em;text-align:center">📊 Scenario Debrief</h1>
    <p style="text-align:center;color:#8b92a8;margin-bottom:16px">${s.title}</p>
    
    <div class="score-circle ${scoreClass}">
      ${correct}/${total}
      <div class="pct">${pct}%</div>
    </div>
    
    <p style="text-align:center;margin:16px 0;font-size:.95em">
      ${pct >= 80 ? '🎉 Excellent work! Strong protocol knowledge.' : 
        pct >= 60 ? '👍 Good effort. Review the protocols you missed.' : 
        '📚 Keep studying. Review the referenced protocols.'}
    </p>
    
    <div class="category-header">Question Review</div>
  `;

  state.answers.forEach((a, i) => {
    const icon = a.correct ? '✅' : '❌';
    html += `
      <div class="review-item">
        <div class="q">${icon} Q${i+1}: ${a.question}</div>
        <div class="your-ans ${a.correct ? '' : 'wrong'}">Your answer: ${a.selected.join(', ')}</div>
        ${!a.correct ? `<div class="correct-ans">Correct: ${a.correctAnswer.join(', ')}</div>` : ''}
        <div style="margin-top:4px"><span class="tag tag-proto">${a.protocol}</span></div>
      </div>`;
  });

  html += `
    <button class="btn btn-primary" onclick="startScenario('${s.id}')" style="margin-top:16px">🔄 Try Again</button>
    <button class="btn btn-secondary" onclick="state.screen='select';render()">← Choose Another Scenario</button>
    <button class="btn btn-secondary" onclick="state.screen='home';render()">🏠 Home</button>
    <div style="height:40px"></div>
  `;

  app.innerHTML = `<div class="fade-in">${html}</div>`;
}

// Start
render();
