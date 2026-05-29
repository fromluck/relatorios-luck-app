const MATERIAL_TYPES = [
  { label: "Vídeo (Reels)", color: "#e11d48" },
  { label: "Criativo (Arte)", color: "#64748b" },
  { label: "Publicação (Fotos)", color: "#7c3aed" },
  { label: "Flyer", color: "#16a34a" },
  { label: "Impresso", color: "#f59e0b" }
];

const STORAGE_KEY = "luck-production-reports-v2";
const STATE_STORAGE_KEY = "luck-production-state-v1";
const SUPABASE_SESSION_KEY = "luck-supabase-session-v1";
const LEGACY_STORAGE_KEYS = [
  "luck-production-reports-v1",
  "luck-production-reports",
  "production-reports",
  "monthly-production-reports",
  "reports"
];
const TARGETS_STORAGE_KEY = "luck-contract-targets-v1";
const BACKUP_VERSION = 1;
const CONTRACT_TARGETS = {
  "Alsol Telecom": { videos: 4, creatives: 8 },
  "Rede de Postos SJ": { videos: 17, creatives: 18 },
  "RC Construtora": { videos: 0, creatives: 0 },
  Luck: { videos: 0, creatives: 0 }
};
const MONTH_WORDS = {
  janeiro: "01",
  fevereiro: "02",
  marco: "03",
  abril: "04",
  maio: "05",
  junho: "06",
  julho: "07",
  agosto: "08",
  setembro: "09",
  outubro: "10",
  novembro: "11",
  dezembro: "12"
};

const initialReports = [
  {
    company: "Rede de Postos SJ",
    month: "2026-05",
    title: "Relatório de Produção - Rede de Postos SJ",
    sections: [
      {
        label: "",
        rows: [
          { topic: "Kit TRESemme - Drogaria", material: "Criativo (Arte)", date: "2026-05-06" },
          { topic: "Você ainda acha que toda conveniência...", material: "Vídeo (Reels)", date: "2026-05-06" },
          { topic: "Ambiente Drogaria - espaço", material: "Vídeo (Reels)", date: "2026-05-07" },
          { topic: "Entrega dos mimos para as colaboradoras", material: "Vídeo (Reels)", date: "2026-05-08" },
          { topic: "Fotos de colaboradoras com os mimos", material: "Publicação (Fotos)", date: "2026-05-09" },
          { topic: "O que e ser mãe", material: "Vídeo (Reels)", date: "2026-05-10" },
          { topic: "Sem complicação do inicio ao fim", material: "Criativo (Arte)", date: "2026-05-11" },
          { topic: "Ambiente do posto", material: "Vídeo (Reels)", date: "2026-05-13" },
          { topic: "Confiança no dia a dia", material: "Criativo (Arte)", date: "2026-05-13" },
          { topic: "Grid perfil - Posto São João", material: "Criativo (Arte)", date: "2026-05-13" },
          { topic: "O Carned da Copa", material: "Criativo (Arte)", date: "2026-05-13" },
          { topic: "O album oficial da Copa do Mundo", material: "Criativo (Arte)", date: "2026-05-13" },
          { topic: "Divulgação figurinhas - Copa do Mundo", material: "Criativo (Arte)", date: "2026-05-15" },
          { topic: "Hoje eu não me estresso", material: "Vídeo (Reels)", date: "2026-05-15" },
          { topic: "Top 3 produtos básicos", material: "Vídeo (Reels)", date: "2026-05-15" },
          { topic: "Arte extra posto", material: "Criativo (Arte)", date: "2026-05-16" },
          { topic: "Arte extra drogaria", material: "Criativo (Arte)", date: "2026-05-16" }
        ]
      },
      {
        label: "Datas Comemorativas",
        rows: [
          { topic: "Dia do Trabalhador", material: "Flyer", date: "2026-05-01" },
          { topic: "Dia do Trabalhador SUTEX", material: "Flyer", date: "2026-05-01" },
          { topic: "Dia das mães", material: "Flyer", date: "2026-05-10" }
        ]
      },
      {
        label: "Solicitação avulsa",
        rows: [
          { topic: "Cartao tag - Mensagem Dia das mães", material: "Impresso", date: "2026-05-08" },
          { topic: "Moldura Semana Dia das mães", material: "Criativo (Arte)", date: "2026-05-06" }
        ]
      }
    ]
  },
  {
    company: "Rede de Postos SJ",
    month: "2026-04",
    title: "Relatório de Produção - Rede de Postos SJ",
    sections: [
      {
        label: "",
        rows: [
          { topic: "Nutella Biscuits - Produto menor", material: "Criativo (Arte)", date: "2026-04-08" },
          { topic: "Video - Thiago Você Sabia Que Vo...", material: "Vídeo (Reels)", date: "2026-04-08" },
          { topic: "Isca de carne com fritas", material: "Criativo (Arte)", date: "2026-04-13" },
          { topic: "Isca de frango com fritas", material: "Criativo (Arte)", date: "2026-04-13" },
          { topic: "Fritas da casa", material: "Criativo (Arte)", date: "2026-04-13" },
          { topic: "não esqueca cuide da sua saude", material: "Criativo (Arte)", date: "2026-04-14" },
          { topic: "Video aéreo - Posto Paulista", material: "Vídeo (Reels)", date: "2026-04-14" },
          { topic: "Dica do Joãozinho", material: "Criativo (Arte)", date: "2026-04-15" },
          { topic: "Video ambiente", material: "Vídeo (Reels)", date: "2026-04-15" },
          { topic: "Sua pele protegida todos os dias", material: "Criativo (Arte)", date: "2026-04-16" },
          { topic: "Video meme - Posto", material: "Vídeo (Reels)", date: "2026-04-16" },
          { topic: "Spoiler do que vem ai", material: "Vídeo (Reels)", date: "2026-04-16" },
          { topic: "Você sabia que muitas mulheres", material: "Vídeo (Reels)", date: "2026-04-17" },
          { topic: "Arte Prime Burguer", material: "Criativo (Arte)", date: "2026-04-21" },
          { topic: "Arte Bacon Supremo", material: "Criativo (Arte)", date: "2026-04-21" },
          { topic: "Arte Classic Burguer", material: "Criativo (Arte)", date: "2026-04-21" },
          { topic: "Arte American Burguer", material: "Criativo (Arte)", date: "2026-04-21" },
          { topic: "Mais que abastecer, e ser bem ate...", material: "Criativo (Arte)", date: "2026-04-21" },
          { topic: "Video - Thiago Pressão Alta", material: "Vídeo (Reels)", date: "2026-04-21" },
          { topic: "Nutella Biscuits - Produto", material: "Criativo (Arte)", date: "2026-04-21" },
          { topic: "Sabor que combine com seu momento", material: "Criativo (Arte)", date: "2026-04-24" },
          { topic: "Video Joãozinho institucional", material: "Vídeo (Reels)", date: "2026-04-24" },
          { topic: "Dica do Joãozinho", material: "Criativo (Arte)", date: "2026-04-25" }
        ]
      },
      {
        label: "Datas Comemorativas",
        rows: [
          { topic: "Sexta Feira Santa", material: "Flyer", date: "2026-04-03" },
          { topic: "Páscoa", material: "Flyer", date: "2026-04-05" },
          { topic: "Tiradentes", material: "Flyer", date: "2026-04-21" },
          { topic: "Emancipação Política de Sao Bento", material: "Flyer", date: "2026-04-29" }
        ]
      },
      {
        label: "Solicitação avulsa",
        rows: [
          { topic: "Folheto - Páscoa", material: "Impresso", date: "2026-04-01" },
          { topic: "Semana Santa", material: "Criativo (Arte)", date: "2026-04-01" },
          { topic: "Fotos produtos - Semana Santa", material: "Publicação (Fotos)", date: "2026-04-01" },
          { topic: "Petiscos / Batata Frita", material: "Publicação (Fotos)", date: "2026-04-09" },
          { topic: "Hamburgueres", material: "Publicação (Fotos)", date: "2026-04-16" },
          { topic: "Selo 3D - Semana das mães", material: "Criativo (Arte)", date: "2026-04-21" }
        ]
      }
    ]
  },
  {
    company: "Alsol Telecom",
    month: "2026-05",
    title: "Relatório de Produção - Alsol Telecom",
    sections: [
      {
        label: "",
        rows: [
          { topic: "Plano Fibra Residencial", material: "Criativo (Arte)", date: "2026-05-03" },
          { topic: "Video - Instalação de Internet", material: "Vídeo (Reels)", date: "2026-05-08" },
          { topic: "Post cobertura de bairro", material: "Publicação (Fotos)", date: "2026-05-12" },
          { topic: "Arte atendimento via WhatsApp", material: "Criativo (Arte)", date: "2026-05-18" }
        ]
      },
      {
        label: "Solicitação avulsa",
        rows: [
          { topic: "Banner promocional fibra", material: "Impresso", date: "2026-05-21" }
        ]
      }
    ]
  },
  {
    company: "RC Construtora",
    month: "2026-05",
    title: "Relatório de Produção - RC Construtora",
    sections: [
      {
        label: "",
        rows: [
          { topic: "Obra em andamento - fachada", material: "Publicação (Fotos)", date: "2026-05-05" },
          { topic: "Video institucional da empresa", material: "Vídeo (Reels)", date: "2026-05-09" },
          { topic: "Arte venda de empreendimento", material: "Criativo (Arte)", date: "2026-05-14" },
          { topic: "Antes e depois - reforma", material: "Vídeo (Reels)", date: "2026-05-20" }
        ]
      },
      {
        label: "Solicitação avulsa",
        rows: [
          { topic: "Placa de obra", material: "Impresso", date: "2026-05-22" }
        ]
      }
    ]
  },
  {
    company: "Luck",
    month: "2026-05",
    title: "Relatório de Produção - Luck",
    sections: [
      {
        label: "Solicitação avulsa",
        rows: [
          { topic: "Arte institucional Luck", material: "Criativo (Arte)", date: "2026-05-06" },
          { topic: "Video bastidores da equipe", material: "Vídeo (Reels)", date: "2026-05-13" },
          { topic: "Apresentação comercial", material: "Impresso", date: "2026-05-20" }
        ]
      }
    ]
  },
  {
    company: "Luck",
    month: "2026-04",
    title: "Relatório de Produção - Luck",
    sections: [
      {
        label: "Solicitação avulsa",
        rows: [
          { topic: "Portfolio de campanhas", material: "Criativo (Arte)", date: "2026-04-04" },
          { topic: "Fotos internas da equipe", material: "Publicação (Fotos)", date: "2026-04-11" },
          { topic: "Modelo de Relatório mensal", material: "Criativo (Arte)", date: "2026-04-18" }
        ]
      }
    ]
  }
];

let remoteSyncReady = false;
let remoteSaveTimer = null;
let reportData = normalizeReportData(loadReports());
ensureRowIds();
let parsedQuickItems = [];
let editingItemId = null;
let contractTargets = loadContractTargets();
let supabaseSession = loadSupabaseSession();
saveLocalState();

const DIALOG_CLOSE_DELAY = 260;
const monthName = new Intl.DateTimeFormat("pt-BR", { month: "long", timeZone: "UTC" });

const elements = {
  appShell: document.querySelector("#appShell"),
  loginScreen: document.querySelector("#loginScreen"),
  loginEmailInput: document.querySelector("#loginEmailInput"),
  loginPasswordInput: document.querySelector("#loginPasswordInput"),
  loginButton: document.querySelector("#loginButton"),
  googleLoginButton: document.querySelector("#googleLoginButton"),
  signupButton: document.querySelector("#signupButton"),
  loginStatus: document.querySelector("#loginStatus"),
  companySelect: document.querySelector("#companySelect"),
  monthSelect: document.querySelector("#monthSelect"),
  targetVideosInput: document.querySelector("#targetVideosInput"),
  targetCreativesInput: document.querySelector("#targetCreativesInput"),
  searchInput: document.querySelector("#searchInput"),
  sectionInput: document.querySelector("#sectionInput"),
  topicInput: document.querySelector("#topicInput"),
  materialInput: document.querySelector("#materialInput"),
  dateInput: document.querySelector("#dateInput"),
  quickTextInput: document.querySelector("#quickTextInput"),
  interpretButton: document.querySelector("#interpretButton"),
  addParsedButton: document.querySelector("#addParsedButton"),
  parsePreview: document.querySelector("#parsePreview"),
  editDialog: document.querySelector("#editDialog"),
  editForm: document.querySelector("#editForm"),
  editSectionInput: document.querySelector("#editSectionInput"),
  editTopicInput: document.querySelector("#editTopicInput"),
  editMaterialInput: document.querySelector("#editMaterialInput"),
  editDateInput: document.querySelector("#editDateInput"),
  closeEditButton: document.querySelector("#closeEditButton"),
  deleteEditButton: document.querySelector("#deleteEditButton"),
  entryForm: document.querySelector("#entryForm"),
  pdfButton: document.querySelector("#pdfButton"),
  cloudSaveButton: document.querySelector("#cloudSaveButton"),
  syncStatus: document.querySelector("#syncStatus"),
  authPanel: document.querySelector("#authPanel"),
  authStatus: document.querySelector("#authStatus"),
  authEmailInput: document.querySelector("#authEmailInput"),
  authPasswordInput: document.querySelector("#authPasswordInput"),
  authLoginButton: document.querySelector("#authLoginButton"),
  authSignupButton: document.querySelector("#authSignupButton"),
  authLogoutButton: document.querySelector("#authLogoutButton"),
  saveDialog: document.querySelector("#saveDialog"),
  saveDialogTitle: document.querySelector("#saveDialogTitle"),
  saveDialogMessage: document.querySelector("#saveDialogMessage"),
  closeSaveDialogButton: document.querySelector("#closeSaveDialogButton"),
  monthTitle: document.querySelector("#monthTitle"),
  reportTitle: document.querySelector("#reportTitle"),
  reportSections: document.querySelector("#reportSections"),
  statsGrid: document.querySelector("#statsGrid"),
  contractVideoCount: document.querySelector("#contractVideoCount"),
  contractCreativeCount: document.querySelector("#contractCreativeCount"),
  contractVideoProgress: document.querySelector("#contractVideoProgress"),
  contractCreativeProgress: document.querySelector("#contractCreativeProgress"),
  summaryNote: document.querySelector("#summaryNote")
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function readSavedState() {
  const saved = localStorage.getItem(STATE_STORAGE_KEY);
  if (!saved) return null;

  try {
    const state = JSON.parse(saved);
    return Array.isArray(state?.reports) ? state : null;
  } catch {
    return null;
  }
}

function stateTime(state) {
  const timestamp = Date.parse(state?.updatedAt || state?.exportedAt || "");
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function getSharedState() {
  if (!Array.isArray(window.LUCK_SHARED_BACKUP?.reports)) return null;
  return {
    reports: window.LUCK_SHARED_BACKUP.reports,
    contractTargets: window.LUCK_SHARED_BACKUP.contractTargets || null,
    updatedAt: window.LUCK_SHARED_BACKUP.updatedAt || window.LUCK_SHARED_BACKUP.exportedAt || ""
  };
}

function loadReports() {
  const sharedState = getSharedState();
  const sharedReports = sharedState?.reports;
  const forceShared = new URLSearchParams(window.location.search).has("shared");
  if (forceShared && Array.isArray(sharedReports)) return clone(sharedReports);

  const savedState = readSavedState();
  if (savedState?.reports && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return clone(savedState.reports);
  }

  const candidates = [STORAGE_KEY, ...LEGACY_STORAGE_KEYS]
    .map((key) => {
      const saved = localStorage.getItem(key);
      if (!saved) return null;

      try {
        const reports = JSON.parse(saved);
        return Array.isArray(reports) ? { key, reports, score: reportScore(reports) } : null;
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  if (Array.isArray(sharedReports)) {
    candidates.push({ key: "shared", reports: sharedReports, score: reportScore(sharedReports) });
  }

  candidates
    .sort((a, b) => b.score - a.score);

  return clone(candidates[0]?.reports || initialReports);
}

function reportScore(reports) {
  return reports.reduce(
    (total, report) =>
      total + (report.sections || []).reduce((sectionTotal, section) => sectionTotal + (section.rows || []).length, 0),
    0
  );
}

function loadContractTargets() {
  const sharedState = getSharedState();
  const sharedTargets = sharedState?.contractTargets;
  const forceShared = new URLSearchParams(window.location.search).has("shared");
  if (sharedTargets && typeof sharedTargets === "object") {
    if (forceShared) return { ...CONTRACT_TARGETS, ...sharedTargets };
  }

  const savedState = readSavedState();
  if (savedState?.contractTargets && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return { ...CONTRACT_TARGETS, ...savedState.contractTargets };
  }

  const saved = localStorage.getItem(TARGETS_STORAGE_KEY);
  if (!saved) return { ...CONTRACT_TARGETS, ...(sharedTargets || {}) };

  try {
    return { ...CONTRACT_TARGETS, ...JSON.parse(saved) };
  } catch {
    return { ...CONTRACT_TARGETS };
  }
}

function saveLocalState() {
  const state = getCurrentState();
  localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reportData));
  localStorage.setItem(TARGETS_STORAGE_KEY, JSON.stringify(contractTargets));
}

function saveContractTargets() {
  saveLocalState();
  scheduleRemoteSave();
}

function saveReports() {
  saveLocalState();
  scheduleRemoteSave();
}

function hasAppsScriptBackend() {
  return Boolean(window.google?.script?.run);
}

function getSupabaseConfig() {
  const config = window.LUCK_SUPABASE || {};
  return {
    url: String(config.url || "").replace(/\/$/, ""),
    anonKey: String(config.anonKey || "")
  };
}

function hasSupabaseBackend() {
  const config = getSupabaseConfig();
  return Boolean(config.url && config.anonKey);
}

function isGoogleAuthEnabled() {
  return Boolean(window.LUCK_SUPABASE?.googleAuthEnabled);
}

function loadSupabaseSession() {
  const saved = localStorage.getItem(SUPABASE_SESSION_KEY);
  if (!saved) return null;

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

function saveSupabaseSession(session) {
  supabaseSession = session;
  if (session) {
    localStorage.setItem(SUPABASE_SESSION_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(SUPABASE_SESSION_KEY);
  }
  renderAuthState();
}

function isSupabaseSessionValid() {
  if (!supabaseSession?.access_token) return false;
  const expiresAt = Number(supabaseSession.expires_at || 0);
  return !expiresAt || expiresAt * 1000 > Date.now() + 30000;
}

function requiresLogin() {
  return hasSupabaseBackend() && !isSupabaseSessionValid();
}

function setLoginStatus(message) {
  if (elements.loginStatus) elements.loginStatus.textContent = message;
  if (elements.authStatus) elements.authStatus.textContent = message;
}

function getAuthRedirectUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function decodeJwtPayload(token) {
  try {
    const payload = token.split(".")[1];
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(window.atob(normalized));
  } catch {
    return {};
  }
}

function captureSupabaseOAuthSession() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const accessToken = params.get("access_token");

  if (!accessToken) return false;

  const jwt = decodeJwtPayload(accessToken);
  saveSupabaseSession({
    access_token: accessToken,
    refresh_token: params.get("refresh_token") || "",
    expires_at: Number(params.get("expires_at") || 0) || Math.floor(Date.now() / 1000) + Number(params.get("expires_in") || 3600),
    expires_in: Number(params.get("expires_in") || 3600),
    token_type: params.get("token_type") || "bearer",
    user: {
      id: jwt.sub || "",
      email: jwt.email || ""
    }
  });
  window.history.replaceState({}, document.title, getAuthRedirectUrl());
  return true;
}

function renderAuthState() {
  const hasBackend = hasSupabaseBackend();
  const isLoggedIn = isSupabaseSessionValid();
  const mustLogin = hasBackend && !isLoggedIn;

  if (elements.loginScreen) elements.loginScreen.hidden = !mustLogin;
  if (elements.appShell) elements.appShell.hidden = mustLogin;
  if (elements.authPanel) elements.authPanel.hidden = !hasBackend || mustLogin;

  if (!hasBackend) {
    setLoginStatus("Modo local ativo.");
    return;
  }

  elements.authStatus.textContent = isLoggedIn
    ? `Conectado como ${supabaseSession.user?.email || "Luck"}.`
    : "Entre para sincronizar os dados entre dispositivos.";
  if (elements.loginStatus) {
    elements.loginStatus.textContent = isLoggedIn
      ? `Conectado como ${supabaseSession.user?.email || "Luck"}.`
      : "Use o acesso Luck para continuar.";
  }
  if (elements.googleLoginButton) {
    const googleEnabled = isGoogleAuthEnabled();
    elements.googleLoginButton.hidden = !googleEnabled;
    elements.googleLoginButton.disabled = !googleEnabled;
    elements.googleLoginButton.title = googleEnabled
      ? "Entrar usando a conta Google"
      : "Configure o provedor Google no Supabase para habilitar";
  }
  elements.authEmailInput.hidden = isLoggedIn;
  elements.authPasswordInput.hidden = isLoggedIn;
  elements.authLoginButton.hidden = isLoggedIn;
  elements.authSignupButton.hidden = isLoggedIn;
  elements.authLogoutButton.hidden = !isLoggedIn;
}

function readAuthCredentials() {
  const config = getSupabaseConfig();
  const email = (elements.loginEmailInput.value || elements.authEmailInput.value).trim();
  const password = elements.loginPasswordInput.value || elements.authPasswordInput.value;

  if (!email || !password) {
    setLoginStatus("Informe o e-mail e a senha para continuar.");
    return null;
  }

  return { config, email, password };
}

function setAuthBusy(isBusy, message) {
  elements.loginButton.disabled = isBusy;
  elements.signupButton.disabled = isBusy;
  elements.googleLoginButton.disabled = isBusy || !isGoogleAuthEnabled();
  elements.authLoginButton.disabled = isBusy;
  elements.authSignupButton.disabled = isBusy;
  if (message) setLoginStatus(message);
}

function startAuthenticatedApp() {
  renderAuthState();
  populateControls();
  render();
  exposeBackupData();
  loadRemoteState();
}

function handleSupabaseSession(session) {
  saveSupabaseSession({
    ...session,
    expires_at: session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600)
  });
  elements.authPasswordInput.value = "";
  elements.loginPasswordInput.value = "";
  setSyncStatus("Banco conectado. Carregando dados...", "online");
  startAuthenticatedApp();
}

async function parseSupabaseResponse(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

function getSupabaseAuthMessage(payload, fallback) {
  const rawMessage = [
    payload?.msg,
    payload?.message,
    payload?.error_description,
    payload?.error
  ].filter(Boolean).join(" ");
  const message = rawMessage.toLowerCase();

  if (message.includes("email not confirmed") || message.includes("not confirmed")) {
    return "O acesso foi criado, mas o e-mail ainda não foi confirmado. Confirme o e-mail recebido e tente entrar novamente.";
  }

  if (message.includes("invalid login credentials")) {
    return "E-mail ou senha incorretos. Confira os dados e tente novamente.";
  }

  if (message.includes("already registered") || message.includes("user already")) {
    return "Esse e-mail já tem acesso. Use Entrar com a senha cadastrada.";
  }

  if (message.includes("password") && message.includes("at least")) {
    return "Use uma senha com pelo menos 8 caracteres.";
  }

  return rawMessage || fallback;
}

async function signInSupabase() {
  const credentials = readAuthCredentials();
  if (!credentials) return;

  const { config, email, password } = credentials;

  setAuthBusy(true, "Entrando...");

  try {
    const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const session = await parseSupabaseResponse(response);

    if (!response.ok) {
      throw new Error(getSupabaseAuthMessage(session, "Não foi possível entrar. Confira o e-mail e a senha."));
    }

    handleSupabaseSession(session);
  } catch (error) {
    const message = error?.message || "Não foi possível entrar. Confira o e-mail e a senha.";
    saveSupabaseSession(null);
    setSyncStatus("Não foi possível entrar no Supabase.", "error");
    setLoginStatus(message);
  } finally {
    setAuthBusy(false);
    if (isSupabaseSessionValid()) renderAuthState();
  }
}

function signInWithGoogle() {
  const config = getSupabaseConfig();

  if (!hasSupabaseBackend()) {
    setLoginStatus("O banco de dados ainda não está configurado.");
    return;
  }

  if (!isGoogleAuthEnabled()) {
    setLoginStatus("O Google ainda precisa ser habilitado no Supabase.");
    return;
  }

  const redirectTo = encodeURIComponent(getAuthRedirectUrl());
  window.location.assign(`${config.url}/auth/v1/authorize?provider=google&redirect_to=${redirectTo}`);
}

async function signUpSupabase() {
  const credentials = readAuthCredentials();
  if (!credentials) return;

  const { config, email, password } = credentials;

  if (password.length < 8) {
    setLoginStatus("Use uma senha com pelo menos 8 caracteres.");
    return;
  }

  setAuthBusy(true, "Criando acesso...");

  try {
    const response = await fetch(`${config.url}/auth/v1/signup`, {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const session = await parseSupabaseResponse(response);

    if (!response.ok) {
      throw new Error(getSupabaseAuthMessage(session, "Não foi possível criar o acesso."));
    }

    if (session.access_token) {
      handleSupabaseSession(session);
      showSaveDialog("Acesso criado", "Acesso criado e conectado ao banco de dados.");
      return;
    }

    elements.authPasswordInput.value = "";
    elements.loginPasswordInput.value = "";
    setLoginStatus("Confirme o e-mail enviado e depois clique em Entrar.");
    showSaveDialog("Confirme seu e-mail", "Enviamos um link de confirmação. Depois de confirmar, volte aqui e clique em Entrar com o mesmo e-mail e senha.");
  } catch (error) {
    const message = error?.message || "Não foi possível criar. Se o acesso já existir, use Entrar.";
    setSyncStatus("Não foi possível criar o acesso.", "error");
    setLoginStatus(message);
  } finally {
    setAuthBusy(false);
    if (isSupabaseSessionValid()) renderAuthState();
  }
}

function signOutSupabase() {
  saveSupabaseSession(null);
  remoteSyncReady = false;
  setSyncStatus("Sessão encerrada. Entre para sincronizar os dados.");
  setLoginStatus("Sessão encerrada. Entre novamente para continuar.");
}

function getCurrentState() {
  return {
    version: BACKUP_VERSION,
    updatedAt: new Date().toISOString(),
    reports: reportData,
    contractTargets
  };
}

function setSyncStatus(message, type = "local") {
  if (!elements.syncStatus) return;

  elements.syncStatus.textContent = message;
  elements.syncStatus.classList.toggle("is-online", type === "online");
  elements.syncStatus.classList.toggle("is-error", type === "error");
}

function showSaveDialog(title, message) {
  if (!elements.saveDialog) {
    window.alert(message);
    return;
  }

  elements.saveDialogTitle.textContent = title;
  elements.saveDialogMessage.textContent = message;

  openDialogSmooth(elements.saveDialog);
}

function openDialogSmooth(dialog) {
  dialog.classList.remove("is-closing");
  if (!dialog.open) dialog.showModal();
}

function closeDialogSmooth(dialog, afterClose) {
  if (!dialog?.open) {
    afterClose?.();
    return;
  }

  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.close();
    dialog.classList.remove("is-closing");
    afterClose?.();
  }, DIALOG_CLOSE_DELAY);
}

function scheduleRemoteSave() {
  if (!remoteSyncReady || (!hasAppsScriptBackend() && !hasSupabaseBackend())) return;

  window.clearTimeout(remoteSaveTimer);
  remoteSaveTimer = window.setTimeout(() => saveRemoteState({ quiet: true }), 500);
}

function loadRemoteState() {
  if (hasSupabaseBackend()) {
    renderAuthState();
    if (!isSupabaseSessionValid()) {
      remoteSyncReady = false;
      setSyncStatus("Entre para sincronizar com o banco de dados.");
      return;
    }
    setSyncStatus("Carregando dados do banco...");
    loadSupabaseState();
    return;
  }

  if (!hasAppsScriptBackend()) {
    setSyncStatus("Modo local: conecte o banco para sincronizar entre dispositivos.");
    return;
  }

  setSyncStatus("Carregando dados do banco...");

  window.google.script.run
    .withSuccessHandler((state) => {
      remoteSyncReady = true;
      setSyncStatus("Banco conectado. Alterações salvas automaticamente.", "online");

      if (Array.isArray(state?.reports)) {
        reportData = normalizeReportData(state.reports);
        contractTargets = {
          ...CONTRACT_TARGETS,
          ...(state.contractTargets || contractTargets)
        };
        ensureRowIds();
        saveReports();
        saveContractTargets();
        populateControls();
        render();
        exposeBackupData();
        return;
      }

      scheduleRemoteSave();
    })
    .withFailureHandler(() => {
      remoteSyncReady = false;
      setSyncStatus("Não foi possível conectar ao banco de dados.", "error");
    })
    .getState();
}

async function loadSupabaseState() {
  const config = getSupabaseConfig();

  try {
    const response = await fetch(`${config.url}/rest/v1/reports_state?id=eq.main&select=state`, {
      headers: supabaseHeaders(config)
    });
    if (!response.ok) throw new Error("Falha ao carregar o Supabase.");

    const [record] = await response.json();
    remoteSyncReady = true;
    setSyncStatus("Banco conectado. Alterações salvas automaticamente.", "online");

    if (Array.isArray(record?.state?.reports)) {
      reportData = normalizeReportData(record.state.reports);
      contractTargets = {
        ...CONTRACT_TARGETS,
        ...(record.state.contractTargets || contractTargets)
      };
      ensureRowIds();
      saveReports();
      saveContractTargets();
      populateControls();
      render();
      exposeBackupData();
      return;
    }

    scheduleRemoteSave();
  } catch (error) {
    remoteSyncReady = false;
    setSyncStatus("Não foi possível conectar ao banco de dados.", "error");
    console.warn(error);
  }
}

async function saveSupabaseState(state) {
  const config = getSupabaseConfig();

  try {
    const response = await fetch(`${config.url}/rest/v1/reports_state?on_conflict=id`, {
      method: "POST",
      headers: {
        ...supabaseHeaders(config),
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        id: "main",
        state,
        updated_at: new Date().toISOString()
      })
    });

    if (!response.ok) throw new Error("Falha ao salvar no Supabase.");
    setSyncStatus("Dados salvos no banco.", "online");
    return true;
  } catch (error) {
    setSyncStatus("Erro ao salvar no banco de dados.", "error");
    console.warn(error);
    return false;
  }
}

function supabaseHeaders(config) {
  return {
    apikey: config.anonKey,
    Authorization: `Bearer ${isSupabaseSessionValid() ? supabaseSession.access_token : config.anonKey}`
  };
}

function saveAppsScriptState(state) {
  return new Promise((resolve) => {
    window.google.script.run
      .withSuccessHandler(() => {
        setSyncStatus("Dados salvos no banco.", "online");
        resolve(true);
      })
      .withFailureHandler(() => {
        setSyncStatus("Erro ao salvar no banco de dados.", "error");
        resolve(false);
      })
      .saveState(state);
  });
}

async function saveRemoteState(options = {}) {
  const state = getCurrentState();

  if (hasAppsScriptBackend()) {
    const saved = await saveAppsScriptState(state);
    if (!options.quiet) {
      showSaveDialog(
        saved ? "Dados salvos" : "Não foi possível salvar",
        saved ? "As informações de todas as empresas foram salvas no banco de dados." : "Não consegui salvar no banco de dados. Tente novamente em alguns instantes."
      );
    }
    return saved;
  }

  if (hasSupabaseBackend()) {
    renderAuthState();
    if (!isSupabaseSessionValid()) {
      setSyncStatus("Entre para salvar no banco de dados.", "error");
      if (!options.quiet) {
        showSaveDialog("Acesso necessário", "Entre com o acesso Luck para salvar os dados no banco e sincronizar entre dispositivos.");
      }
      return false;
    }

    const saved = await saveSupabaseState(state);
    if (!options.quiet) {
      showSaveDialog(
        saved ? "Dados salvos" : "Não foi possível salvar",
        saved ? "As informações de todas as empresas foram salvas no banco de dados." : "Não consegui salvar no banco de dados. Tente novamente em alguns instantes."
      );
    }
    return saved;
  }

  saveLocalState();
  setSyncStatus("Dados salvos neste dispositivo. Conecte o banco para sincronizar entre aparelhos.");
  if (!options.quiet) {
    showSaveDialog(
      "Dados salvos",
      "As informações foram salvas neste dispositivo. Para aparecer em outros aparelhos, ainda precisamos conectar o banco de dados."
    );
  }
  return true;
}

function saveBackupFile() {
  const payload = getCurrentState();
  payload.exportedAt = payload.updatedAt;
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `backup-relatorios-luck-${today}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function restoreBackupFile(event) {
  const [file] = event.target.files;
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const nextReports = Array.isArray(payload) ? payload : payload.reports;

      if (!Array.isArray(nextReports)) {
        throw new Error("Arquivo inválido");
      }

      const selectedCompany = elements.companySelect.value;
      const selectedMonth = elements.monthSelect.value;

      reportData = normalizeReportData(nextReports);
      contractTargets = {
        ...CONTRACT_TARGETS,
        ...(payload.contractTargets || contractTargets)
      };
      ensureRowIds();
      saveReports();
      saveContractTargets();
      populateControls();

      if ([...elements.companySelect.options].some((option) => option.value === selectedCompany)) {
        elements.companySelect.value = selectedCompany;
      }
      refreshMonthOptions();
      if ([...elements.monthSelect.options].some((option) => option.value === selectedMonth)) {
        elements.monthSelect.value = selectedMonth;
      }

      render();
      window.alert("Dados restaurados com sucesso.");
    } catch {
      window.alert("Não consegui restaurar esse arquivo. Verifique se ele é um backup do relatório.");
    } finally {
      elements.restoreInput.value = "";
    }
  });
  reader.readAsText(file);
}

function normalizeReportData(reports) {
  return reports.map((report) => ({
    ...report,
    title: fixPortuguese(report.title),
    sections: report.sections.map((section) => ({
      ...section,
      label: normalizeSection(section.label),
      rows: section.rows.map((row) => ({
        ...row,
        topic: fixPortuguese(row.topic),
        material: normalizeMaterial(row.material)
      }))
    }))
  }));
}

function normalizeMaterial(material) {
  const normalized = normalizeText(material);
  if (normalized.includes("video")) return "Vídeo (Reels)";
  if (normalized.includes("publicacao") || normalized.includes("foto")) return "Publicação (Fotos)";
  if (normalized.includes("impresso")) return "Impresso";
  if (normalized.includes("flyer")) return "Flyer";
  return "Criativo (Arte)";
}

function normalizeSection(section) {
  const normalized = normalizeText(section || "");
  if (normalized.includes("solicitacao")) return "Solicitação avulsa";
  if (normalized.includes("data")) return "Datas Comemorativas";
  if (normalized.includes("aniversariante")) return "Aniversariantes";
  return "";
}

function fixPortuguese(value) {
  return String(value || "")
    .replaceAll("Relatorio", "Relatório")
    .replaceAll("Producao", "Produção")
    .replaceAll("Publicacao", "Publicação")
    .replaceAll("Solicitacao", "Solicitação")
    .replaceAll("Video", "Vídeo")
    .replaceAll("Instalacao", "Instalação")
    .replaceAll("Apresentacao", "Apresentação")
    .replaceAll("Emancipacao", "Emancipação")
    .replaceAll("Politica", "Política")
    .replaceAll("Pascoa", "Páscoa")
    .replaceAll("Maes", "Mães")
    .replaceAll("mães", "Mães")
    .replaceAll("Voce", "Você")
    .replaceAll("Nao", "Não")
    .replaceAll("nao", "não")
    .replaceAll("ate", "até")
    .replaceAll("inicio", "início")
    .replaceAll("saude", "saúde")
    .replaceAll("esqueca", "esqueça")
    .replaceAll("album", "álbum")
    .replaceAll(" ai", " aí")
    .replaceAll("basicos", "básicos")
    .replaceAll("aereo", "aéreo")
    .replaceAll("Cartao", "Cartão")
    .replaceAll("Joao", "João")
    .replaceAll("Sao", "São")
    .replaceAll("Confianca", "Confiança")
    .replaceAll("Divulgacao", "Divulgação")
    .replaceAll("Pressao", "Pressão")
    .replaceAll("das mães", "das Mães")
    .replaceAll("relatorio", "relatório");
}

function ensureRowIds() {
  reportData.forEach((report) => {
    report.sections.forEach((section) => {
      section.rows.forEach((row) => {
        row.id ||= `item-${Math.random().toString(16).slice(2)}-${Date.now()}`;
      });
    });
  });
}

function unique(values) {
  return [...new Set(values)];
}

function formatMonth(month) {
  return monthName.format(new Date(`${month}-01T00:00:00Z`)).toUpperCase();
}

function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

function monthYear(month) {
  const [year, monthNumber] = month.split("-");
  return { year, monthNumber };
}

function toTitleCase(value) {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function materialMeta(material) {
  const normalizedMaterial = normalizeMaterial(material);
  return MATERIAL_TYPES.find((type) => type.label === normalizedMaterial) || MATERIAL_TYPES[1];
}

function getSelectedReport() {
  return reportData.find(
    (report) => report.company === elements.companySelect.value && report.month === elements.monthSelect.value
  ) || reportData[0];
}

function getContractTarget(company) {
  return contractTargets[company] || { videos: 0, creatives: 0 };
}

function syncTargetInputs() {
  const targets = getContractTarget(elements.companySelect.value);
  elements.targetVideosInput.value = targets.videos || 0;
  elements.targetCreativesInput.value = targets.creatives || 0;
}

function populateControls() {
  elements.companySelect.innerHTML = unique(reportData.map((report) => report.company))
    .map((company) => `<option>${company}</option>`)
    .join("");

  elements.materialInput.innerHTML = MATERIAL_TYPES
    .map((type) => `<option>${type.label}</option>`)
    .join("");
  elements.editMaterialInput.innerHTML = elements.materialInput.innerHTML;

  refreshMonthOptions();
}

function refreshMonthOptions() {
  const selectedMonth = elements.monthSelect.value;
  const months = reportData
    .filter((report) => report.company === elements.companySelect.value)
    .map((report) => report.month)
    .sort()
    .reverse();

  elements.monthSelect.innerHTML = months
    .map((month) => `<option value="${month}">${formatMonth(month)}</option>`)
    .join("");

  if (months.includes(selectedMonth)) {
    elements.monthSelect.value = selectedMonth;
  }

  syncTargetInputs();
}

function getVisibleSections(report) {
  const query = elements.searchInput?.value.trim().toLowerCase() || "";

  return report.sections
    .map((section) => ({
      ...section,
      rows: section.rows.filter((row) =>
        !query || [section.label || "Principal", row.topic, row.material, formatDate(row.date)]
          .some((value) => value.toLowerCase().includes(query))
      )
    }))
    .filter((section) => section.rows.length > 0);
}

function renderTable(section) {
  const title = section.label || "Principal";

  return `
    <section class="section-block">
      <div class="section-title">
        <h3>${title}</h3>
        <span>${section.rows.length} itens</span>
      </div>
      <table class="production-table">
        <colgroup><col><col><col><col class="action-column"></colgroup>
        <thead>
          <tr>
            <th>Tema</th>
            <th>Material</th>
            <th>Data</th>
            <th class="action-column">Ações</th>
          </tr>
        </thead>
        <tbody>
          ${section.rows
            .map((row) => {
              const material = normalizeMaterial(row.material);
              const meta = materialMeta(material);
              return `
                <tr>
                  <td title="${row.topic}">${row.topic}</td>
                  <td class="material-cell">
                    <span class="tag" style="--tag-color: ${meta.color}">${material}</span>
                  </td>
                  <td class="date-cell">${formatDate(row.date)}</td>
                  <td class="action-cell">
                    <button class="row-action" type="button" data-edit-id="${row.id}">Editar</button>
                    <button class="row-action danger" type="button" data-remove-id="${row.id}">Excluir</button>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderSummary(sections) {
  const rows = sections.flatMap((section) => section.rows);
  renderContractSummary(rows);

  elements.statsGrid.innerHTML = MATERIAL_TYPES
    .map((type) => {
      const count = rows.filter((row) => normalizeMaterial(row.material) === type.label).length;
      return `
        <article class="stat-card" style="--tag-color: ${type.color}">
          <span>${type.label}</span>
          <strong>${count}</strong>
          <div class="tag" style="--tag-color: ${type.color}">${type.label}</div>
        </article>
      `;
    })
    .join("");

  elements.summaryNote.textContent = `${rows.length} itens no total`;
}

function renderContractSummary(rows) {
  const report = getSelectedReport();
  const targets = getContractTarget(report.company);
  const videos = rows.filter((row) => normalizeMaterial(row.material) === "Vídeo (Reels)").length;
  const creatives = rows.filter((row) => row.material === "Criativo (Arte)").length;
  const videoTarget = targets.videos || videos || 0;
  const creativeTarget = targets.creatives || creatives || 0;

  elements.contractVideoCount.textContent = videoTarget ? `${videos} / ${videoTarget}` : `${videos}`;
  elements.contractCreativeCount.textContent = creativeTarget ? `${creatives} / ${creativeTarget}` : `${creatives}`;
  elements.contractVideoProgress.style.width = `${progressPercent(videos, videoTarget)}%`;
  elements.contractCreativeProgress.style.width = `${progressPercent(creatives, creativeTarget)}%`;
}

function progressPercent(current, target) {
  if (!target) return current > 0 ? 100 : 0;
  return Math.min(100, Math.round((current / target) * 100));
}

function render() {
  const report = getSelectedReport();
  const sections = getVisibleSections(report);

  elements.monthTitle.textContent = formatMonth(report.month);
  elements.reportTitle.textContent = report.title;
  elements.dateInput.value = `${report.month}-01`;
  elements.reportSections.innerHTML = sections.length
    ? sections.map(renderTable).join("")
    : `<div class="empty-state">Nenhum item encontrado para os filtros atuais.</div>`;
  renderSummary(sections);
}

function addItem(event) {
  event.preventDefault();

  const report = getSelectedReport();
  const sectionLabel = elements.sectionInput.value;
  const topic = elements.topicInput.value.trim();
  const material = elements.materialInput.value;
  const date = elements.dateInput.value;

  if (!topic || !date) return;

  let section = report.sections.find((item) => item.label === sectionLabel);
  if (!section) {
    section = { label: sectionLabel, rows: [] };
    report.sections.push(section);
  }

    section.rows.push({ topic: fixPortuguese(topic), material: normalizeMaterial(material), date });
  ensureRowIds();
  section.rows.sort((a, b) => a.date.localeCompare(b.date));
  saveReports();
  elements.topicInput.value = "";
  render();
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function inferMaterial(line) {
  const normalized = normalizeText(line);

  if (normalized.includes("flyer")) return "Flyer";
  if (normalized.includes("impresso") || normalized.includes("banner") || normalized.includes("placa") || normalized.includes("cartao")) return "Impresso";
  if (normalized.includes("foto") || normalized.includes("Publicação")) return "Publicação (Fotos)";
  if (normalized.includes("video") || normalized.includes("reels") || normalized.includes("meme")) return "Vídeo (Reels)";
  if (normalized.includes("arte") || normalized.includes("criativo") || normalized.includes("post")) return "Criativo (Arte)";

  return "Criativo (Arte)";
}

function inferSection(line) {
  const normalized = normalizeText(line);

  if (normalized.includes("avulso") || normalized.includes("Solicitação")) return "Solicitação avulsa";
  if (normalized.includes("aniversariante") || normalized.includes("aniversario")) return "Aniversariantes";
  if (normalized.includes("data comemorativa") || normalized.includes("dia das") || normalized.includes("dia dos") || normalized.includes("Páscoa") || normalized.includes("natal")) {
    return "Datas Comemorativas";
  }

  return "";
}

function inferDate(line, reportMonth) {
  const dateMatch = line.match(/\b(\d{1,2})(?:[./-]|\s+)(\d{1,2})(?:[./-](\d{2,4}))?\b/);
  const { year, monthNumber } = monthYear(reportMonth);

  if (normalizeText(line).includes("ontem")) return relativeDate(-1);

  const dayOnlyMatch = line.match(/\bdia\s+(\d{1,2})\b/i);
  if (dayOnlyMatch) return `${year}-${monthNumber}-${dayOnlyMatch[1].padStart(2, "0")}`;

  const monthWordMatch = normalizeText(line).match(/\b(\d{1,2})\s+de\s+(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/);
  if (monthWordMatch) return `${year}-${MONTH_WORDS[monthWordMatch[2]]}-${monthWordMatch[1].padStart(2, "0")}`;

  if (!dateMatch) return `${reportMonth}-01`;

  const day = dateMatch[1].padStart(2, "0");
  const month = dateMatch[2].padStart(2, "0");
  const rawYear = dateMatch[3];
  const fullYear = rawYear ? (rawYear.length === 2 ? `20${rawYear}` : rawYear) : year;

  return `${fullYear}-${month || monthNumber}-${day}`;
}

function relativeDate(offsetDays) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function cleanTopic(line) {
  return line
    .replace(/\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b/g, "")
    .replace(/\b(video|reels|meme|arte|criativo|Publicação|publicação|fotos|foto|flyer|impresso|avulso|Solicitação|solicitação)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^[\s:-]+|[\s:-]+$/g, "")
    .trim();
}

function cleanQuickTopic(line) {
  return line
    .replace(/\b\d{1,2}(?:[./-]|\s+)\d{1,2}(?:[./-]\d{2,4})?\b/g, "")
    .replace(/\bdia\s+\d{1,2}\b/gi, "")
    .replace(/\b\d{1,2}\s+de\s+(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/gi, "")
    .replace(/\b(um|uma|1|video|reels|meme|arte|artes|criativo|Publicação|publicação|fotos|foto|flyer|impresso|avulso|Solicitação|solicitação|postado|publicado|feito|feitas|foi|foram|ontem)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^[\s:-]+|[\s:-]+$/g, "")
    .trim();
}

function parseQuickText() {
  const report = getSelectedReport();
  parsedQuickItems = parseProductionText(elements.quickTextInput.value, report.month);

  renderParsePreview();
}

function parseProductionText(text, reportMonth) {
  const originalLines = text
    .split(/\n|;/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (originalLines.length > 1) {
    return dedupeParsedItems(originalLines.flatMap((line) => parseProductionChunk(line, reportMonth)));
  }

  const compactText = (originalLines[0] || text).replace(/\s+/g, " ").trim();
  if (!compactText) return [];

  return dedupeParsedItems(parseProductionChunk(compactText, reportMonth));
}

function parseProductionChunk(compactText, reportMonth) {
  const parsed = [
    ...parseGeneralProductions(compactText, reportMonth),
    ...parseCommemorativeDates(compactText, reportMonth),
    ...parseBirthdays(compactText, reportMonth),
    ...parseLooseProductions(compactText, reportMonth)
  ];

  return parsed.length ? parsed : parseFallbackProductions(compactText, reportMonth);
}

function parseGeneralProductions(text, reportMonth) {
  const beforeLists = text
    .split(/\bdatas comemorativas\b/i)[0]
    .split(/\baniversariantes\b/i)[0]
    .trim();
  const items = [];

  const gridMatch = beforeLists.match(/\b(?:um|uma|1)\s+grid\b.*?\b(?:composta?\s+por\s+)?(\d+)\s+artes?\b.*?(?:dia\s+(\d{1,2})|\b(\d{1,2})[/-](\d{1,2})|\bontem\b)?/i);
  if (gridMatch) {
    const quantity = Number(gridMatch[1]);
    const gridSource = beforeLists.match(/\b(?:um|uma|1)\s+grid\b.*?(?=,\s*um\s+reels|,\s*um\s+video| e foram feitas| datas comemorativas|$)/i)?.[0] || gridMatch[0];
    const date = inferDate(gridSource, reportMonth);

    for (let index = 1; index <= quantity; index += 1) {
      items.push({
        section: "",
        topic: quantity > 1 ? `Grid - Arte ${index}/${quantity}` : "Grid",
        material: "Criativo (Arte)",
        date
      });
    }
  }

  const reelsMatches = beforeLists.matchAll(/\b(?:um|uma|1)?\s*(?:reels|video)\b[^,.]*?(?:ontem|dia\s+\d{1,2}|\d{1,2}[/-]\d{1,2})?/gi);
  for (const match of reelsMatches) {
    const source = match[0].trim();
    if (!source || normalizeText(source).includes("grid")) continue;

    items.push({
      section: "",
      topic: cleanQuickTopic(source) || "Reels",
      material: "Vídeo (Reels)",
      date: inferDate(source, reportMonth)
    });
  }

  return items;
}

function parseCommemorativeDates(text, reportMonth) {
  const start = text.search(/\bdatas comemorativas\b/i);
  if (start === -1) return [];

  const endMatch = text.slice(start).search(/\baniversariantes\b/i);
  const listText = endMatch === -1 ? text.slice(start) : text.slice(start, start + endMatch);
  const matches = listText.matchAll(/(\d{1,2})[/-](\d{1,2})\s*[–-]\s*(.*?)(?=\s+\d{1,2}[/-]\d{1,2}\s*[–-]|\s*$)/g);

  return [...matches].map((match) => ({
    section: "Datas Comemorativas",
    topic: fixPortuguese(match[3].trim()),
    material: "Flyer",
    date: inferDate(`${match[1]}/${match[2]}`, reportMonth)
  }));
}

function parseBirthdays(text, reportMonth) {
  const start = text.search(/\baniversariantes\b/i);
  if (start === -1) return [];

  const listText = text.slice(start).replace(/\baniversariantes\s*(tbm|tambem)?\b/i, " ");
  const matches = listText.matchAll(/([A-ZÀ-Ú][A-ZÀ-Ú\s.'-]{2,}?)\s+(\d{1,2})\s+DE\s+(JANEIRO|FEVEREIRO|MAR[CÇ]O|ABRIL|MAIO|JUNHO|JULHO|AGOSTO|SETEMBRO|OUTUBRO|NOVEMBRO|DEZEMBRO)/gi);

  return [...matches].map((match) => {
    const name = toTitleCase(match[1].trim());

    return {
      section: "Aniversariantes",
      topic: `Aniversariante - ${fixPortuguese(name)}`,
      material: "Criativo (Arte)",
      date: inferDate(`${match[2]} de ${normalizeText(match[3])}`, reportMonth)
    };
  });
}

function parseLooseProductions(text, reportMonth) {
  const beforeLists = text
    .split(/\bdatas comemorativas\b/i)[0]
    .split(/\baniversariantes\b/i)[0]
    .trim();
  const matches = beforeLists.matchAll(/(.+?)\s+(\d{1,2})(?:[./-]|\s+)(\d{1,2})(?=\s+|$)/g);

  return [...matches]
    .map((match) => {
      const source = match[0].trim();
      const topic = cleanQuickTopic(match[1]).replace(/,\s*$/g, "").trim();

      if (!topic || normalizeText(topic).includes("grid")) return null;

      return {
        section: inferSection(source),
        topic: fixPortuguese(topic),
        material: normalizeMaterial(inferMaterial(source)),
        date: inferDate(`${match[2]}/${match[3]}`, reportMonth)
      };
    })
    .filter(Boolean);
}

function parseFallbackProductions(text, reportMonth) {
  const chunks = text
    .split(/\n|;/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  return chunks.flatMap((chunk) => {
    const quantityMatch = normalizeText(chunk).match(/\b(\d+)\s+art(?:e|es|eres)\b/);
    const quantity = quantityMatch ? Number(quantityMatch[1]) : 1;
    const baseTopic = chunk
      .replace(/\b\d{1,2}(?:[./-]|\s+)\d{1,2}(?:[./-]\d{2,4})?\b/g, "")
      .replace(/\b\d+\s+art(?:e|es|eres)\b/gi, "")
      .replace(/^(flyer|impresso|video|reels|criativo)\s*[-:]?\s*/i, "")
      .replace(/\s{2,}/g, " ")
      .replace(/^[\s,:-]+|[\s,:-]+$/g, "")
      .trim() || chunk;

    return Array.from({ length: quantity }, (_, index) => ({
      section: inferSection(chunk),
      topic: fixPortuguese(quantity > 1 ? `${baseTopic} - Arte ${index + 1}/${quantity}` : baseTopic),
      material: normalizeMaterial(inferMaterial(chunk)),
      date: inferDate(chunk, reportMonth)
    }));
  });
}

function dedupeParsedItems(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = `${item.section}|${item.topic}|${item.material}|${item.date}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderParsePreview() {
  elements.addParsedButton.disabled = parsedQuickItems.length === 0;

  if (!parsedQuickItems.length) {
    elements.parsePreview.innerHTML = `<div class="empty-state">Escreva uma ou mais linhas para interpretar.</div>`;
    return;
  }

  elements.parsePreview.innerHTML = parsedQuickItems
    .map((item, index) => {
      const material = normalizeMaterial(item.material);
      const meta = materialMeta(material);
      return `
        <div class="parse-row">
          <span class="section-chip">${item.section || "Principal"}</span>
          <strong title="${item.topic}">${item.topic}</strong>
          <select class="parse-material" data-preview-material="${index}" style="--tag-color: ${meta.color}">
            ${MATERIAL_TYPES
              .map((type) => `<option value="${type.label}" ${type.label === material ? "selected" : ""}>${type.label}</option>`)
              .join("")}
          </select>
          <span>${formatDate(item.date)}</span>
        </div>
      `;
    })
    .join("");
}

function addParsedItems() {
  const report = getSelectedReport();

  parsedQuickItems.forEach((item) => {
    let section = report.sections.find((sectionItem) => sectionItem.label === item.section);
    if (!section) {
      section = { label: item.section, rows: [] };
      report.sections.push(section);
    }

    section.rows.push({
      topic: fixPortuguese(item.topic),
      material: normalizeMaterial(item.material),
      date: item.date
    });
    section.rows.sort((a, b) => a.date.localeCompare(b.date));
  });

  ensureRowIds();
  saveReports();
  parsedQuickItems = [];
  elements.quickTextInput.value = "";
  renderParsePreview();
  render();
}

function removeItem(itemId) {
  const report = getSelectedReport();

  report.sections.forEach((section) => {
    section.rows = section.rows.filter((row) => row.id !== itemId);
  });
  report.sections = report.sections.filter((section) => section.rows.length > 0);
  saveReports();
  render();
}

function findItem(itemId) {
  const report = getSelectedReport();

  for (const section of report.sections) {
    const row = section.rows.find((item) => item.id === itemId);
    if (row) return { report, section, row };
  }

  return null;
}

function openEditItem(itemId) {
  const found = findItem(itemId);
  if (!found) return;

  editingItemId = itemId;
  elements.editSectionInput.value = found.section.label;
  elements.editTopicInput.value = found.row.topic;
  elements.editMaterialInput.value = found.row.material;
  elements.editDateInput.value = found.row.date;
  openDialogSmooth(elements.editDialog);
}

function closeEditDialog() {
  closeDialogSmooth(elements.editDialog, () => {
    editingItemId = null;
  });
}

function saveEditedItem(event) {
  event.preventDefault();

  const found = findItem(editingItemId);
  if (!found) return;

  const nextSectionLabel = elements.editSectionInput.value;
  const nextRow = {
    ...found.row,
    topic: fixPortuguese(elements.editTopicInput.value.trim()),
    material: normalizeMaterial(elements.editMaterialInput.value),
    date: elements.editDateInput.value
  };

  found.section.rows = found.section.rows.filter((row) => row.id !== editingItemId);

  let nextSection = found.report.sections.find((section) => section.label === nextSectionLabel);
  if (!nextSection) {
    nextSection = { label: nextSectionLabel, rows: [] };
    found.report.sections.push(nextSection);
  }

  nextSection.rows.push(nextRow);
  nextSection.rows.sort((a, b) => a.date.localeCompare(b.date));
  found.report.sections = found.report.sections.filter((section) => section.rows.length > 0);

  saveReports();
  closeEditDialog();
  render();
}

function deleteEditingItem() {
  if (!editingItemId) return;

  removeItem(editingItemId);
  closeEditDialog();
}

function fileSafeName(value) {
  return value.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "");
}

function exportPdf() {
  window.print();
}

function exposeBackupData() {
  const backup = {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    reports: reportData,
    contractTargets
  };
  let backupNode = document.querySelector("#backupData");
  if (!backupNode) {
    backupNode = document.createElement("script");
    backupNode.id = "backupData";
    backupNode.type = "application/json";
    document.body.appendChild(backupNode);
  }
  backupNode.textContent = JSON.stringify(backup);
  window.getLuckReportBackup = () => backup;
}

elements.companySelect.addEventListener("change", () => {
  refreshMonthOptions();
  render();
});
elements.targetVideosInput.addEventListener("input", () => {
  contractTargets[elements.companySelect.value] = {
    ...getContractTarget(elements.companySelect.value),
    videos: Number(elements.targetVideosInput.value) || 0
  };
  saveContractTargets();
  render();
});
elements.targetCreativesInput.addEventListener("input", () => {
  contractTargets[elements.companySelect.value] = {
    ...getContractTarget(elements.companySelect.value),
    creatives: Number(elements.targetCreativesInput.value) || 0
  };
  saveContractTargets();
  render();
});
elements.monthSelect.addEventListener("change", render);
elements.searchInput?.addEventListener("input", render);
elements.entryForm.addEventListener("submit", addItem);
elements.interpretButton.addEventListener("click", parseQuickText);
elements.addParsedButton.addEventListener("click", addParsedItems);
elements.parsePreview.addEventListener("change", (event) => {
  const materialSelect = event.target.closest("[data-preview-material]");
  if (!materialSelect) return;

  const item = parsedQuickItems[Number(materialSelect.dataset.previewMaterial)];
  if (!item) return;

  item.material = materialSelect.value;
  renderParsePreview();
});
elements.reportSections.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-id]");
  const editButton = event.target.closest("[data-edit-id]");

  if (editButton) openEditItem(editButton.dataset.editId);
  if (removeButton) removeItem(removeButton.dataset.removeId);
});
elements.editForm.addEventListener("submit", saveEditedItem);
elements.closeEditButton.addEventListener("click", closeEditDialog);
elements.deleteEditButton.addEventListener("click", deleteEditingItem);
elements.pdfButton.addEventListener("click", exportPdf);
elements.cloudSaveButton.addEventListener("click", () => saveRemoteState());
elements.loginButton.addEventListener("click", signInSupabase);
elements.googleLoginButton.addEventListener("click", signInWithGoogle);
elements.signupButton.addEventListener("click", signUpSupabase);
elements.loginPasswordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") signInSupabase();
});
elements.authLoginButton.addEventListener("click", signInSupabase);
elements.authPasswordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") signInSupabase();
});
elements.authSignupButton.addEventListener("click", signUpSupabase);
elements.authLogoutButton.addEventListener("click", signOutSupabase);
elements.closeSaveDialogButton.addEventListener("click", () => closeDialogSmooth(elements.saveDialog));
elements.saveDialog.addEventListener("click", (event) => {
  if (event.target === elements.saveDialog) closeDialogSmooth(elements.saveDialog);
});
elements.saveDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.saveDialog);
});
elements.editDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeEditDialog();
});

renderAuthState();
captureSupabaseOAuthSession();
if (!requiresLogin()) {
  startAuthenticatedApp();
}

window.parseProductionText = parseProductionText;
