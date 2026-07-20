const MATERIAL_TYPES = [
  { label: "Vídeo (Reels)", color: "#e54668" },
  { label: "Vídeo Editado", color: "#2f80ed" },
  { label: "Criativo (Arte)", color: "#64748b" },
  { label: "Publicação (Fotos)", color: "#7a5af8" },
  { label: "Flyer", color: "#24965a" },
  { label: "Impresso", color: "#d97706" }
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
const COMPANY_SETTINGS_STORAGE_KEY = "luck-company-settings-v1";
const DELETED_COMPANIES_STORAGE_KEY = "luck-deleted-companies-v1";
const FINANCE_STORAGE_KEY = "luck-finance-records-v1";
const QUOTE_STORAGE_KEY = "luck-quote-data-v1";
const QUOTE_HISTORY_STORAGE_KEY = "luck-quote-history-v1";
const QUOTE_MONTH_STORAGE_KEY = "luck-quote-month-v1";
const FINANCE_MONTH_STORAGE_KEY = "luck-finance-month-v1";
const PENDING_MONTH_STORAGE_KEY = "luck-pending-month-v1";
const DASHBOARD_MONTH_STORAGE_KEY = "luck-dashboard-month-v1";
const SCHEDULE_MONTH_STORAGE_KEY = "luck-schedule-month-v1";
const SCHEDULE_COMPANY_STORAGE_KEY = "luck-schedule-company-v1";
const SCHEDULE_STORAGE_KEY = "luck-schedule-data-v1";
const PROFILE_STORAGE_KEY = "luck-profile-v1";
const THEME_STORAGE_KEY = "luck-theme-v1";
const REMINDER_SETTINGS_STORAGE_KEY = "luck-reminder-settings-v1";
const REMINDER_READ_STORAGE_KEY = "luck-reminder-read-v1";
const DEFAULT_PROFILE = { firstName: "Lucas", lastName: "Costa", email: "", avatarDataUrl: "" };
const DEFAULT_REMINDER_SETTINGS = { sound: true, visual: true };
const REMINDER_READ_TTL_MS = 24 * 60 * 60 * 1000;
const PROFILE_PHOTO_MAX_SIZE = 1.5 * 1024 * 1024;
const COMPANY_LOGO_MAX_SIZE = 2.5 * 1024 * 1024;
const COMPANY_LOGO_SCALE_MIN = 60;
const COMPANY_LOGO_SCALE_MAX = 220;
const DEFAULT_SCHEDULE_THEME = {
  titleColor: "#ea5a00",
  solidColor: "#ea5a00",
  gradientStart: "#e11d48",
  gradientEnd: "#f59e0b"
};
const BACKUP_VERSION = 1;
const PENDING_COLUMNS = [
  { id: "conteudos", label: "Conteúdos" },
  { id: "videos", label: "Vídeos" },
  { id: "avulso", label: "Avulso" },
  { id: "materiais", label: "Materiais" },
  { id: "aprovados", label: "Aprovados" }
];
const PENDING_TYPES = PENDING_COLUMNS.filter((column) => column.id !== "aprovados");
const FINANCE_TYPES = ["Mensalidade", "Avulso", "Extra", "Outro"];
const FINANCE_STATUSES = [
  { value: "pending", label: "Pendente" },
  { value: "paid", label: "Pago" }
];
const SCHEDULE_TYPES = ["Vídeo", "Criativo", "Reels", "Post estático", "Story", "Carrossel", "Data comemorativa"];
const SCHEDULE_STATUSES = ["Planejado", "Em produção", "Aguardando aprovação", "Aprovado", "Publicado"];
const DEFAULT_QUOTE_CALCULATOR = {
  videoQty: 0,
  videoPrice: 170,
  artQty: 0,
  artPrice: 65,
  includeManagement: true,
  managementPrice: 350,
  bonusDates: true,
  bonusPrint: true,
  discountPercent: 0
};
const DEFAULT_QUOTE_DATA = {
  client: "",
  service: "",
  description: "",
  amount: 0,
  issuedAt: "",
  validUntil: "",
  deadline: "",
  payment: "",
  calculator: { ...DEFAULT_QUOTE_CALCULATOR },
  terms: "Esta proposta contempla apenas os serviços descritos no escopo. Ajustes adicionais, novas demandas ou alterações fora do combinado podem gerar novo orçamento."
};
const SCHEDULE_MONTHS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" }
];
const CONTRACT_TARGETS = {
  "Alsol Telecom": { videos: 4, creatives: 8 },
  "Rede de Postos SJ": { videos: 17, creatives: 18 },
  "RC Construtora": { videos: 0, creatives: 0 },
  Luck: { videos: 0, creatives: 0 }
};
const COMMEMORATIVE_DATE_LIBRARY = [
  { date: "2026-05-01", topic: "Dia do Trabalho" },
  { date: "2026-05-10", topic: "Dia das Mães" },
  { date: "2026-05-17", topic: "Dia Mundial da Internet" },
  { date: "2026-05-26", topic: "Emancipação Política de Catolé do Rocha" },
  { date: "2026-05-28", topic: "Morte de Francisco Ferreira de Lima (Chico Maroca)" },
  { date: "2026-05-28", topic: "Falecimento do Cel. Manoel Emídio de Sousa" },
  { date: "2026-06-12", topic: "Dia dos Namorados" },
  { date: "2026-06-19", topic: "Jogo do Brasil" },
  { date: "2026-06-23", topic: "Véspera de São João" },
  { date: "2026-06-24", topic: "São João" },
  { date: "2026-06-27", topic: "Padroeira de Pilões" },
  { date: "2026-06-29", topic: "São Pedro" },
  { date: "2026-07-16", topic: "Dia do Comerciante" },
  { date: "2026-07-26", topic: "Emancipação de Catolé do Rocha" },
  { date: "2026-08-09", topic: "Dia dos Pais" }
];
const HUB_DASHBOARD_DATA = {
  period: "Junho 2026",
  month: "2026-06",
  indicators: [
    { label: "Clientes ativos", value: 4, tone: "orange" },
    { label: "Projetos em andamento", value: 17, tone: "blue" },
    { label: "Vídeos pendentes", value: 12, tone: "red" },
    { label: "Artes pendentes", value: 8, tone: "purple" },
    { label: "Conteúdos entregues no mês", value: 36, tone: "green" },
    { label: "Datas comemorativas restantes", value: 5, tone: "yellow" }
  ],
  clients: [
    {
      name: "Alsol Telecom",
      accent: "#ea5a00",
      metrics: ["12 vídeos planejados", "8 artes planejadas", "7 vídeos concluídos", "4 artes concluídas"],
      next: "Indique e Ganhe"
    },
    {
      name: "Rede São João",
      accent: "#e11d48",
      metrics: ["10 vídeos Posto", "5 vídeos Drogaria", "4 vídeos Prime", "15 artes produzidas"],
      next: "Café Junino"
    },
    {
      name: "RC Construtora",
      accent: "#64748b",
      metrics: ["8 criativos", "3 aprovados", "5 pendentes"],
      next: "Campanha institucional"
    },
    {
      name: "Premium Perfumaria",
      accent: "#7c3aed",
      metrics: ["7 vídeos planejados", "3 concluídos", "4 pendentes"],
      next: "Dia dos Pais"
    }
  ],
  calendarEvents: [
    { date: "2026-06-05", title: "Reunião de pauta Luck", type: "meeting" },
    { date: "2026-06-09", title: "Aprovação Alsol", type: "approval" },
    { date: "2026-06-13", title: "Gravação Drogaria São João", type: "recording" },
    { date: "2026-06-18", title: "Entrega RC Construtora", type: "delivery" },
    { date: "2026-06-23", title: "Café Junino São João", type: "recording" },
    { date: "2026-06-24", title: "Brasil x Escócia", type: "commemorative" },
    { date: "2026-06-27", title: "Padroeira de Pilões", type: "commemorative" },
    { date: "2026-06-30", title: "Encerramento Campanha Conexão Campeã", type: "delivery" }
  ],
  dates: [
    { date: "2026-06-24", name: "São João", clients: ["Rede São João", "Alsol"], status: "Em aprovação" },
    { date: "2026-06-27", name: "Padroeira de Pilões", clients: ["RC Construtora"], status: "Em produção" },
    { date: "2026-07-16", name: "Dia do Comerciante", clients: ["Drogaria", "Prime", "Premium"], status: "Não iniciado" },
    { date: "2026-07-26", name: "Emancipação de Catolé do Rocha", clients: ["Alsol", "Rede São João"], status: "Não iniciado" },
    { date: "2026-08-09", name: "Dia dos Pais", clients: ["Alsol", "Drogaria", "Prime", "Premium"], status: "Não iniciado" }
  ],
  production: [
    { label: "Vídeos", planned: 28, delivered: 18, color: "#e11d48" },
    { label: "Artes", planned: 18, delivered: 12, color: "#64748b" },
    { label: "Stories", planned: 90, delivered: 64, color: "#16a34a" }
  ],
  pipeline: [
    { label: "A produzir", items: ["Arte Dia dos Pais", "Reels Alsol"] },
    { label: "Em produção", items: ["Vídeo Café Junino", "RC Construtora 04"] },
    { label: "Aguardando aprovação", items: ["Reels Drogaria", "Arte Prime Brasil"] },
    { label: "Finalizados", items: ["Vídeo Voucher", "Arte Conexão Campeã"] }
  ],
  alerts: [
    { level: "danger", text: "Cliente sem postagem há 5 dias" },
    { level: "danger", text: "Campanha sem arte aprovada" },
    { level: "warning", text: "Vídeo atrasado" },
    { level: "success", text: "Todas as entregas da semana concluídas" }
  ],
  ranking: [
    { client: "São João", videos: 12, arts: 9 },
    { client: "Alsol", videos: 7, arts: 4 },
    { client: "RC", videos: 0, arts: 3 },
    { client: "Premium", videos: 2, arts: 1 }
  ],
  recordings: [
    { when: "Hoje", title: "Gravação Posto São João" },
    { when: "Amanhã", title: "Drogaria São João" },
    { when: "Sexta", title: "Alsol Telecom" }
  ]
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
let deletedCompanies = loadDeletedCompanies();
let reportData = normalizeReportData(loadReports());
ensureRowIds();
let parsedQuickItems = [];
let editingItemId = null;
let editingCompanyName = "";
let companyContractDraft = null;
let contractTargets = loadContractTargets();
let companySettings = loadCompanySettings();
syncContractTargetsFromCompanySettings();
let supabaseSession = loadSupabaseSession();
let profileData = loadProfile();
let profilePhotoDraft = profileData.avatarDataUrl || "";
let selectedTheme = loadTheme();
let reminderSettings = loadReminderSettings();
let readReminderTimestamps = loadReadReminderTimestamps();
let loginRequested = new URLSearchParams(window.location.search).get("login") === "1";
let pendingBoards = normalizePendingBoards(loadPendingBoards());
let financialRecords = normalizeFinancialRecords(loadFinancialRecords());
let quoteData = normalizeQuoteData(loadQuoteData());
let quoteHistory = normalizeQuoteHistory(loadQuoteHistory());
let scheduleData = normalizeScheduleData(loadScheduleData());
let selectedFinanceMonth = loadFinanceMonth();
let selectedPendingMonth = loadPendingMonth();
let selectedDashboardMonth = loadDashboardMonth();
let selectedQuoteMonth = loadQuoteMonth();
let selectedScheduleMonth = loadScheduleMonth();
let selectedScheduleCompany = loadScheduleCompany();
let editingScheduleTaskId = null;
let selectedQuoteHistoryId = null;
let parsedScheduleItems = [];
let activeReminders = [];
let lastReminderSignature = "";
let dismissedReminderSignature = sessionStorage.getItem("luck-reminder-dismissed-signature") || "";
let reminderSoundUnlocked = false;
let pendingReminderSound = false;
applyTheme(selectedTheme);
saveLocalState();

const DIALOG_CLOSE_DELAY = 260;
const monthName = new Intl.DateTimeFormat("pt-BR", { month: "long", timeZone: "UTC" });

const elements = {
  appShell: document.querySelector("#appShell"),
  contextPanel: document.querySelector(".context-panel"),
  welcomeScreen: document.querySelector("#welcomeScreen"),
  welcomeLoginButtons: document.querySelectorAll("[data-open-login]"),
  loginBackButton: document.querySelector("#loginBackButton"),
  loginScreen: document.querySelector("#loginScreen"),
  loginEmailInput: document.querySelector("#loginEmailInput"),
  loginPasswordInput: document.querySelector("#loginPasswordInput"),
  loginButton: document.querySelector("#loginButton"),
  googleLoginButton: document.querySelector("#googleLoginButton"),
  signupButton: document.querySelector("#signupButton"),
  loginStatus: document.querySelector("#loginStatus"),
  companySelect: document.querySelector("#companySelect"),
  monthSelect: document.querySelector("#monthSelect"),
  dashboardViewButton: document.querySelector("#dashboardViewButton"),
  settingsViewButton: document.querySelector("#settingsViewButton"),
  reportViewButton: document.querySelector("#reportViewButton"),
  pendingViewButton: document.querySelector("#pendingViewButton"),
  companyViewButton: document.querySelector("#companyViewButton"),
  scheduleViewButton: document.querySelector("#scheduleViewButton"),
  financeViewButton: document.querySelector("#financeViewButton"),
  quoteViewButton: document.querySelector("#quoteViewButton"),
  dashboardView: document.querySelector("#dashboardView"),
  scheduleView: document.querySelector("#scheduleView"),
  reportView: document.querySelector("#reportView"),
  pendingView: document.querySelector("#pendingView"),
  companyView: document.querySelector("#companyView"),
  financeView: document.querySelector("#financeView"),
  quoteView: document.querySelector("#quoteView"),
  deleteMonthButton: document.querySelector("#deleteMonthButton"),
  targetVideosInput: document.querySelector("#targetVideosInput"),
  targetCreativesInput: document.querySelector("#targetCreativesInput"),
  companySettingsForm: document.querySelector("#companySettingsForm"),
  companySettingsDialog: document.querySelector("#companySettingsDialog"),
  closeCompanySettingsDialogButton: document.querySelector("#closeCompanySettingsDialogButton"),
  cancelCompanySettingsButton: document.querySelector("#cancelCompanySettingsButton"),
  companySettingsTitle: document.querySelector("#companySettingsTitle"),
  companySettingsBadge: document.querySelector("#companySettingsBadge"),
  companyList: document.querySelector("#companyList"),
  companyNameInput: document.querySelector("#companyNameInput"),
  companySegmentInput: document.querySelector("#companySegmentInput"),
  companyContactInput: document.querySelector("#companyContactInput"),
  companyContactInfoInput: document.querySelector("#companyContactInfoInput"),
  companyNotesInput: document.querySelector("#companyNotesInput"),
  companyContractFileInput: document.querySelector("#companyContractFileInput"),
  companyContractFileName: document.querySelector("#companyContractFileName"),
  companyContractStatusPreview: document.querySelector("#companyContractStatusPreview"),
  companyContractOpenLink: document.querySelector("#companyContractOpenLink"),
  companyContractStartInput: document.querySelector("#companyContractStartInput"),
  companyContractEndInput: document.querySelector("#companyContractEndInput"),
  removeCompanyContractButton: document.querySelector("#removeCompanyContractButton"),
  newCompanyForm: document.querySelector("#newCompanyForm"),
  newCompanyNameInput: document.querySelector("#newCompanyNameInput"),
  newCompanyVideosInput: document.querySelector("#newCompanyVideosInput"),
  newCompanyCreativesInput: document.querySelector("#newCompanyCreativesInput"),
  financeMonthTitle: document.querySelector("#financeMonthTitle"),
  financeTitle: document.querySelector("#financeTitle"),
  financeMonthSelect: document.querySelector("#financeMonthSelect"),
  financeTotal: document.querySelector("#financeTotal"),
  financeSummary: document.querySelector("#financeSummary"),
  financeForm: document.querySelector("#financeForm"),
  financeDescriptionInput: document.querySelector("#financeDescriptionInput"),
  financeTypeInput: document.querySelector("#financeTypeInput"),
  financeAmountInput: document.querySelector("#financeAmountInput"),
  financeDueDateInput: document.querySelector("#financeDueDateInput"),
  financeStatusInput: document.querySelector("#financeStatusInput"),
  financeRecurringPrompt: document.querySelector("#financeRecurringPrompt"),
  financeList: document.querySelector("#financeList"),
  quoteForm: document.querySelector("#quoteForm"),
  quoteCalculator: document.querySelector("#quoteCalculator"),
  quoteVideoQtyInput: document.querySelector("#quoteVideoQtyInput"),
  quoteVideoPriceInput: document.querySelector("#quoteVideoPriceInput"),
  quoteArtQtyInput: document.querySelector("#quoteArtQtyInput"),
  quoteArtPriceInput: document.querySelector("#quoteArtPriceInput"),
  quoteManagementInput: document.querySelector("#quoteManagementInput"),
  quoteDiscountInput: document.querySelector("#quoteDiscountInput"),
  quoteIncludeManagementInput: document.querySelector("#quoteIncludeManagementInput"),
  quoteBonusDatesInput: document.querySelector("#quoteBonusDatesInput"),
  quoteBonusPrintInput: document.querySelector("#quoteBonusPrintInput"),
  quoteCalculatorSubtotal: document.querySelector("#quoteCalculatorSubtotal"),
  quoteCalculatorDiscount: document.querySelector("#quoteCalculatorDiscount"),
  quoteCalculatorTotal: document.querySelector("#quoteCalculatorTotal"),
  quoteApplyCalculatorButton: document.querySelector("#quoteApplyCalculatorButton"),
  quoteClientInput: document.querySelector("#quoteClientInput"),
  quoteServiceInput: document.querySelector("#quoteServiceInput"),
  quoteAmountInput: document.querySelector("#quoteAmountInput"),
  quoteValidUntilInput: document.querySelector("#quoteValidUntilInput"),
  quoteDeadlineInput: document.querySelector("#quoteDeadlineInput"),
  quotePaymentInput: document.querySelector("#quotePaymentInput"),
  quoteDescriptionInput: document.querySelector("#quoteDescriptionInput"),
  quoteTermsInput: document.querySelector("#quoteTermsInput"),
  quoteSaveButton: document.querySelector("#quoteSaveButton"),
  quoteClearButton: document.querySelector("#quoteClearButton"),
  quotePdfButton: document.querySelector("#quotePdfButton"),
  quoteHistoryMonthSelect: document.querySelector("#quoteHistoryMonthSelect"),
  quoteHistoryCount: document.querySelector("#quoteHistoryCount"),
  quoteHistoryList: document.querySelector("#quoteHistoryList"),
  quotePrintArea: document.querySelector("#quotePrintArea"),
  quoteDocumentTotal: document.querySelector("#quoteDocumentTotal"),
  quoteDocumentClient: document.querySelector("#quoteDocumentClient"),
  quoteDocumentDate: document.querySelector("#quoteDocumentDate"),
  quoteDocumentService: document.querySelector("#quoteDocumentService"),
  quoteDocumentDescription: document.querySelector("#quoteDocumentDescription"),
  quoteDocumentValidUntil: document.querySelector("#quoteDocumentValidUntil"),
  quoteDocumentDeadlineCard: document.querySelector("#quoteDocumentDeadlineCard"),
  quoteDocumentDeadline: document.querySelector("#quoteDocumentDeadline"),
  quoteDocumentPayment: document.querySelector("#quoteDocumentPayment"),
  quoteDocumentTerms: document.querySelector("#quoteDocumentTerms"),
  dashboardMonthSelect: document.querySelector("#dashboardMonthSelect"),
  dashboardKpis: document.querySelector("#dashboardKpis"),
  dashboardClientsMeta: document.querySelector("#dashboardClientsMeta"),
  dashboardClientsGrid: document.querySelector("#dashboardClientsGrid"),
  dashboardCalendarMonth: document.querySelector("#dashboardCalendarMonth"),
  dashboardCalendarGrid: document.querySelector("#dashboardCalendarGrid"),
  dashboardCalendarAgenda: document.querySelector("#dashboardCalendarAgenda"),
  dashboardProductionMeta: document.querySelector("#dashboardProductionMeta"),
  dashboardProductionBars: document.querySelector("#dashboardProductionBars"),
  dashboardAlertsList: document.querySelector("#dashboardAlertsList"),
  dashboardSmartCallout: document.querySelector("#dashboardSmartCallout"),
  dashboardDatesList: document.querySelector("#dashboardDatesList"),
  scheduleMonthSelect: document.querySelector("#scheduleMonthSelect"),
  scheduleCompanySelect: document.querySelector("#scheduleCompanySelect"),
  scheduleYearSelect: document.querySelector("#scheduleYearSelect"),
  schedulePdfButton: document.querySelector("#schedulePdfButton"),
  scheduleQuickTextInput: document.querySelector("#scheduleQuickTextInput"),
  scheduleInterpretButton: document.querySelector("#scheduleInterpretButton"),
  scheduleAddParsedButton: document.querySelector("#scheduleAddParsedButton"),
  scheduleParsePreview: document.querySelector("#scheduleParsePreview"),
  scheduleSummary: document.querySelector("#scheduleSummary"),
  schedulePrintMonth: document.querySelector("#schedulePrintMonth"),
  schedulePrintArea: document.querySelector("#schedulePrintArea"),
  scheduleClientLogo: document.querySelector("#scheduleClientLogo"),
  scheduleSettingsButton: document.querySelector("#scheduleSettingsButton"),
  scheduleSettingsDialog: document.querySelector("#scheduleSettingsDialog"),
  closeScheduleSettingsDialogButton: document.querySelector("#closeScheduleSettingsDialogButton"),
  scheduleLogoPreview: document.querySelector("#scheduleLogoPreview"),
  scheduleLogoInput: document.querySelector("#scheduleLogoInput"),
  scheduleLogoSizeInput: document.querySelector("#scheduleLogoSizeInput"),
  scheduleLogoSizeValue: document.querySelector("#scheduleLogoSizeValue"),
  scheduleLogoRemoveButton: document.querySelector("#scheduleLogoRemoveButton"),
  scheduleThemePreview: document.querySelector("#scheduleThemePreview"),
  scheduleTitleColorInput: document.querySelector("#scheduleTitleColorInput"),
  scheduleTitleHexInput: document.querySelector("#scheduleTitleHexInput"),
  scheduleSolidColorInput: document.querySelector("#scheduleSolidColorInput"),
  scheduleSolidHexInput: document.querySelector("#scheduleSolidHexInput"),
  scheduleGradientStartInput: document.querySelector("#scheduleGradientStartInput"),
  scheduleGradientStartHexInput: document.querySelector("#scheduleGradientStartHexInput"),
  scheduleGradientEndInput: document.querySelector("#scheduleGradientEndInput"),
  scheduleGradientEndHexInput: document.querySelector("#scheduleGradientEndHexInput"),
  scheduleThemeResetButton: document.querySelector("#scheduleThemeResetButton"),
  scheduleCalendarGrid: document.querySelector("#scheduleCalendarGrid"),
  scheduleAgendaMeta: document.querySelector("#scheduleAgendaMeta"),
  scheduleAgendaList: document.querySelector("#scheduleAgendaList"),
  scheduleDatesList: document.querySelector("#scheduleDatesList"),
  scheduleHolidaysList: document.querySelector("#scheduleHolidaysList"),
  scheduleGeneralNotesText: document.querySelector("#scheduleGeneralNotesText"),
  scheduleTaskForm: document.querySelector("#scheduleTaskForm"),
  scheduleFormTitle: document.querySelector("#scheduleFormTitle"),
  scheduleTaskDateInput: document.querySelector("#scheduleTaskDateInput"),
  scheduleTaskTypeInput: document.querySelector("#scheduleTaskTypeInput"),
  scheduleTaskTitleInput: document.querySelector("#scheduleTaskTitleInput"),
  scheduleTaskDescriptionInput: document.querySelector("#scheduleTaskDescriptionInput"),
  scheduleTaskStatusInput: document.querySelector("#scheduleTaskStatusInput"),
  scheduleTaskNotesInput: document.querySelector("#scheduleTaskNotesInput"),
  scheduleCancelEditButton: document.querySelector("#scheduleCancelEditButton"),
  scheduleDateForm: document.querySelector("#scheduleDateForm"),
  scheduleDateInput: document.querySelector("#scheduleDateInput"),
  scheduleDateTitleInput: document.querySelector("#scheduleDateTitleInput"),
  scheduleHolidayForm: document.querySelector("#scheduleHolidayForm"),
  scheduleHolidayDateInput: document.querySelector("#scheduleHolidayDateInput"),
  scheduleHolidayCityInput: document.querySelector("#scheduleHolidayCityInput"),
  scheduleHolidayDescriptionInput: document.querySelector("#scheduleHolidayDescriptionInput"),
  scheduleGeneralNotesInput: document.querySelector("#scheduleGeneralNotesInput"),
  searchInput: document.querySelector("#searchInput"),
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
  editContractMonthInput: document.querySelector("#editContractMonthInput"),
  closeEditButton: document.querySelector("#closeEditButton"),
  deleteEditButton: document.querySelector("#deleteEditButton"),
  pdfButton: document.querySelector("#pdfButton"),
  cloudSaveButton: document.querySelector("#cloudSaveButton"),
  syncStatus: document.querySelector("#syncStatus"),
  authPanel: document.querySelector("#authPanel"),
  authStatus: document.querySelector("#authStatus"),
  profileButton: document.querySelector("#profileButton"),
  profileMenu: document.querySelector("#profileMenu"),
  profileAccountButton: document.querySelector("#profileAccountButton"),
  profileEditButton: document.querySelector("#profileEditButton"),
  profileSettingsButton: document.querySelector("#profileSettingsButton"),
  profileEditForm: document.querySelector("#profileEditForm"),
  profileAvatar: document.querySelector("#profileAvatar"),
  profileDisplayName: document.querySelector("#profileDisplayName"),
  profileEmail: document.querySelector("#profileEmail"),
  profilePhotoPreview: document.querySelector("#profilePhotoPreview"),
  profilePhotoInput: document.querySelector("#profilePhotoInput"),
  removeProfilePhotoButton: document.querySelector("#removeProfilePhotoButton"),
  profileFirstNameInput: document.querySelector("#profileFirstNameInput"),
  profileLastNameInput: document.querySelector("#profileLastNameInput"),
  profileEmailInput: document.querySelector("#profileEmailInput"),
  profilePasswordInput: document.querySelector("#profilePasswordInput"),
  profilePasswordConfirmInput: document.querySelector("#profilePasswordConfirmInput"),
  profileEditStatus: document.querySelector("#profileEditStatus"),
  accountDialog: document.querySelector("#accountDialog"),
  closeAccountDialogButton: document.querySelector("#closeAccountDialogButton"),
  accountDialogAvatar: document.querySelector("#accountDialogAvatar"),
  accountDialogName: document.querySelector("#accountDialogName"),
  accountDialogEmail: document.querySelector("#accountDialogEmail"),
  accountDialogStatus: document.querySelector("#accountDialogStatus"),
  accountDialogSync: document.querySelector("#accountDialogSync"),
  profileEditDialog: document.querySelector("#profileEditDialog"),
  closeProfileEditDialogButton: document.querySelector("#closeProfileEditDialogButton"),
  cancelProfileEditButton: document.querySelector("#cancelProfileEditButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  closeSettingsDialogButton: document.querySelector("#closeSettingsDialogButton"),
  settingsThemeText: document.querySelector("#settingsThemeText"),
  settingsSyncText: document.querySelector("#settingsSyncText"),
  settingsSyncBadge: document.querySelector("#settingsSyncBadge"),
  settingsReminderText: document.querySelector("#settingsReminderText"),
  reminderSoundButtons: document.querySelectorAll("[data-reminder-sound]"),
  authLogoutButton: document.querySelector("#authLogoutButton"),
  reminderLayer: document.querySelector("#reminderLayer"),
  reminderButton: document.querySelector("#reminderButton"),
  reminderBadge: document.querySelector("#reminderBadge"),
  reminderToast: document.querySelector("#reminderToast"),
  reminderToastCount: document.querySelector("#reminderToastCount"),
  reminderToastTitle: document.querySelector("#reminderToastTitle"),
  reminderToastText: document.querySelector("#reminderToastText"),
  reminderToastOpenButton: document.querySelector("#reminderToastOpenButton"),
  reminderToastDismissButton: document.querySelector("#reminderToastDismissButton"),
  reminderDialog: document.querySelector("#reminderDialog"),
  closeReminderDialogButton: document.querySelector("#closeReminderDialogButton"),
  reminderList: document.querySelector("#reminderList"),
  reminderEmpty: document.querySelector("#reminderEmpty"),
  saveDialog: document.querySelector("#saveDialog"),
  saveDialogTitle: document.querySelector("#saveDialogTitle"),
  saveDialogMessage: document.querySelector("#saveDialogMessage"),
  closeSaveDialogButton: document.querySelector("#closeSaveDialogButton"),
  deleteMonthDialog: document.querySelector("#deleteMonthDialog"),
  deleteMonthMessage: document.querySelector("#deleteMonthMessage"),
  cancelDeleteMonthButton: document.querySelector("#cancelDeleteMonthButton"),
  confirmDeleteMonthButton: document.querySelector("#confirmDeleteMonthButton"),
  monthTitle: document.querySelector("#monthTitle"),
  reportTitle: document.querySelector("#reportTitle"),
  reportSections: document.querySelector("#reportSections"),
  statsGrid: document.querySelector("#statsGrid"),
  contractVideoCount: document.querySelector("#contractVideoCount"),
  contractCreativeCount: document.querySelector("#contractCreativeCount"),
  contractVideoProgress: document.querySelector("#contractVideoProgress"),
  contractCreativeProgress: document.querySelector("#contractCreativeProgress"),
  contractVideoDetail: document.querySelector("#contractVideoDetail"),
  contractCreativeDetail: document.querySelector("#contractCreativeDetail"),
  autoCompensateButton: document.querySelector("#autoCompensateButton"),
  undoCompensationButton: document.querySelector("#undoCompensationButton"),
  compensationHint: document.querySelector("#compensationHint"),
  summaryNote: document.querySelector("#summaryNote"),
  pendingMonthTitle: document.querySelector("#pendingMonthTitle"),
  pendingTitle: document.querySelector("#pendingTitle"),
  pendingTotal: document.querySelector("#pendingTotal"),
  pendingMonthSelect: document.querySelector("#pendingMonthSelect"),
  pendingBoard: document.querySelector("#pendingBoard")
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
    companySettings: window.LUCK_SHARED_BACKUP.companySettings || null,
    deletedCompanies: window.LUCK_SHARED_BACKUP.deletedCompanies || null,
    profile: window.LUCK_SHARED_BACKUP.profile || null,
    pendingBoards: window.LUCK_SHARED_BACKUP.pendingBoards || null,
    financialRecords: window.LUCK_SHARED_BACKUP.financialRecords || null,
    quoteData: window.LUCK_SHARED_BACKUP.quoteData || null,
    quoteHistory: window.LUCK_SHARED_BACKUP.quoteHistory || null,
    scheduleData: window.LUCK_SHARED_BACKUP.scheduleData || null,
    reminderSettings: window.LUCK_SHARED_BACKUP.reminderSettings || null,
    readReminderTimestamps: window.LUCK_SHARED_BACKUP.readReminderTimestamps || null,
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

  return filterActiveReports(clone(candidates[0]?.reports || initialReports));
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

function normalizeCompanyName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizeDeletedCompanies(values = []) {
  return unique((Array.isArray(values) ? values : [])
    .map(normalizeCompanyName)
    .filter(Boolean));
}

function isDeletedCompanyName(company, list = deletedCompanies) {
  const normalizedCompany = normalizeText(normalizeCompanyName(company));
  if (!normalizedCompany) return false;
  return (list || []).some((item) => normalizeText(item) === normalizedCompany);
}

function filterActiveCompanies(companies) {
  return unique((companies || [])
    .map(normalizeCompanyName)
    .filter((company) => company && !isDeletedCompanyName(company)));
}

function filterActiveReports(reports = []) {
  return (Array.isArray(reports) ? reports : [])
    .filter((report) => !isDeletedCompanyName(report?.company));
}

function filterActiveScheduleData(data = {}) {
  return Object.fromEntries(Object.entries(data || {})
    .filter(([key, record]) => {
      const keyCompany = key.split("::")[0];
      const company = record?.client || keyCompany;
      return !isDeletedCompanyName(company);
    }));
}

function restoreDeletedCompanyName(company) {
  const normalizedCompany = normalizeText(normalizeCompanyName(company));
  deletedCompanies = deletedCompanies.filter((item) => normalizeText(item) !== normalizedCompany);
}

function loadDeletedCompanies() {
  const sharedState = getSharedState();
  const sharedDeletedCompanies = sharedState?.deletedCompanies;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && Array.isArray(sharedDeletedCompanies)) {
    return normalizeDeletedCompanies(sharedDeletedCompanies);
  }

  const savedState = readSavedState();
  if (Array.isArray(savedState?.deletedCompanies) && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeDeletedCompanies(savedState.deletedCompanies);
  }

  const saved = localStorage.getItem(DELETED_COMPANIES_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeDeletedCompanies(JSON.parse(saved));
    } catch {
      return normalizeDeletedCompanies(sharedDeletedCompanies || []);
    }
  }

  return normalizeDeletedCompanies(sharedDeletedCompanies || []);
}

function normalizeHexColor(value, fallback) {
  const raw = String(value || "").trim();
  const withHash = raw.startsWith("#") ? raw : `#${raw}`;
  return /^#[0-9a-f]{6}$/i.test(withHash) ? withHash.toLowerCase() : fallback;
}

function normalizeScheduleTheme(theme = {}) {
  return {
    titleColor: normalizeHexColor(theme?.titleColor, DEFAULT_SCHEDULE_THEME.titleColor),
    solidColor: normalizeHexColor(theme?.solidColor, DEFAULT_SCHEDULE_THEME.solidColor),
    gradientStart: normalizeHexColor(theme?.gradientStart, DEFAULT_SCHEDULE_THEME.gradientStart),
    gradientEnd: normalizeHexColor(theme?.gradientEnd, DEFAULT_SCHEDULE_THEME.gradientEnd)
  };
}

function getKnownCompanyNames(settings = companySettings, targets = contractTargets) {
  return filterActiveCompanies([
    ...initialReports.map((report) => report.company),
    ...reportData.map((report) => report.company),
    ...Object.keys(CONTRACT_TARGETS),
    ...Object.keys(targets || {}),
    ...Object.keys(settings || {})
  ]);
}

function normalizeCompanySetting(company, setting = {}, targets = contractTargets) {
  const normalizedCompany = normalizeCompanyName(setting.name || company);
  const target = targets?.[company] || CONTRACT_TARGETS[company] || {};
  const videos = Number(setting.videos ?? target.videos ?? 0);
  const creatives = Number(setting.creatives ?? target.creatives ?? 0);
  const logoDataUrl = String(setting.logoDataUrl || "").startsWith("data:image/")
    ? String(setting.logoDataUrl)
    : "";
  const logoScale = Number(setting.logoScale ?? 100);

  return {
    name: normalizedCompany,
    segment: String(setting.segment || "").trim(),
    contact: String(setting.contact || "").trim(),
    contactInfo: String(setting.contactInfo || "").trim(),
    notes: String(setting.notes || "").trim(),
    logoDataUrl,
    logoScale: Number.isFinite(logoScale)
      ? Math.min(COMPANY_LOGO_SCALE_MAX, Math.max(COMPANY_LOGO_SCALE_MIN, logoScale))
      : 100,
    theme: normalizeScheduleTheme(setting.theme),
    contractFileName: String(setting.contractFileName || "").trim(),
    contractFileType: String(setting.contractFileType || "").trim(),
    contractFileDataUrl: String(setting.contractFileDataUrl || "").startsWith("data:")
      ? String(setting.contractFileDataUrl)
      : "",
    contractStartDate: isValidDate(setting.contractStartDate) ? setting.contractStartDate : "",
    contractEndDate: isValidDate(setting.contractEndDate) ? setting.contractEndDate : "",
    videos: Number.isFinite(videos) ? Math.max(0, videos) : 0,
    creatives: Number.isFinite(creatives) ? Math.max(0, creatives) : 0
  };
}

function normalizeCompanySettings(settings = {}, targets = contractTargets) {
  const nextSettings = {};
  const knownNames = filterActiveCompanies([
    ...initialReports.map((report) => report.company),
    ...reportData.map((report) => report.company),
    ...Object.keys(CONTRACT_TARGETS),
    ...Object.keys(targets || {}),
    ...Object.keys(settings || {})
  ]);

  knownNames.forEach((company) => {
    nextSettings[company] = normalizeCompanySetting(company, settings?.[company] || {}, targets);
  });

  return nextSettings;
}

function loadCompanySettings() {
  const sharedState = getSharedState();
  const sharedSettings = sharedState?.companySettings;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && sharedSettings && typeof sharedSettings === "object") {
    return normalizeCompanySettings(sharedSettings);
  }

  const savedState = readSavedState();
  if (savedState?.companySettings && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeCompanySettings(savedState.companySettings);
  }

  const saved = localStorage.getItem(COMPANY_SETTINGS_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeCompanySettings(JSON.parse(saved));
    } catch {
      return normalizeCompanySettings(sharedSettings || {});
    }
  }

  return normalizeCompanySettings(sharedSettings || {});
}

function syncContractTargetsFromCompanySettings() {
  contractTargets = {
    ...CONTRACT_TARGETS,
    ...contractTargets
  };

  Object.entries(companySettings || {}).forEach(([company, setting]) => {
    contractTargets[company] = {
      videos: Number(setting.videos) || 0,
      creatives: Number(setting.creatives) || 0
    };
  });

  deletedCompanies.forEach((company) => {
    const deletedCompanyKey = normalizeText(company);
    Object.keys(contractTargets).forEach((key) => {
      if (normalizeText(key) === deletedCompanyKey) delete contractTargets[key];
    });
  });
}

function getCompanySetting(company) {
  const normalizedCompany = normalizeCompanyName(company);
  if (!normalizedCompany) return normalizeCompanySetting("");

  if (!companySettings[normalizedCompany]) {
    companySettings[normalizedCompany] = normalizeCompanySetting(normalizedCompany);
    syncContractTargetsFromCompanySettings();
  }

  return companySettings[normalizedCompany];
}

function normalizeProfile(profile) {
  const firstName = String(profile?.firstName || "").trim();
  const lastName = String(profile?.lastName || "").trim();
  const email = String(profile?.email || "").trim();
  const avatarDataUrl = String(profile?.avatarDataUrl || "").startsWith("data:image/")
    ? String(profile.avatarDataUrl)
    : "";

  if (!firstName && !lastName && !email && !avatarDataUrl) return { ...DEFAULT_PROFILE };

  return { firstName, lastName, email, avatarDataUrl };
}

function normalizeTheme(theme) {
  return theme === "dark" ? "dark" : "light";
}

function loadTheme() {
  const sharedState = getSharedState();
  const savedState = readSavedState();

  if (savedState?.theme && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeTheme(savedState.theme);
  }

  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved) return normalizeTheme(saved);

  return normalizeTheme(sharedState?.theme);
}

function normalizeReminderSettings(settings = DEFAULT_REMINDER_SETTINGS) {
  const source = { ...DEFAULT_REMINDER_SETTINGS, ...(settings || {}) };
  return {
    sound: source.sound !== false,
    visual: source.visual !== false
  };
}

function loadReminderSettings() {
  const sharedState = getSharedState();
  const savedState = readSavedState();

  if (savedState?.reminderSettings && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeReminderSettings(savedState.reminderSettings);
  }

  const saved = localStorage.getItem(REMINDER_SETTINGS_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeReminderSettings(JSON.parse(saved));
    } catch {
      return normalizeReminderSettings(sharedState?.reminderSettings);
    }
  }

  return normalizeReminderSettings(sharedState?.reminderSettings);
}

function normalizeReadReminderTimestamps(source = {}) {
  const now = Date.now();
  const today = todayDateKey();
  return Object.entries(source || {}).reduce((next, [id, timestamp]) => {
    const value = Number(timestamp);
    if (!id || !Number.isFinite(value)) return next;
    if (dateKeyFromTimestamp(value) !== today) return next;
    if (now - value >= REMINDER_READ_TTL_MS) return next;
    next[id] = value;
    return next;
  }, {});
}

function loadReadReminderTimestamps() {
  const sharedState = getSharedState();
  const savedState = readSavedState();

  if (savedState?.readReminderTimestamps && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeReadReminderTimestamps(savedState.readReminderTimestamps);
  }

  const saved = localStorage.getItem(REMINDER_READ_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeReadReminderTimestamps(JSON.parse(saved));
    } catch {
      return normalizeReadReminderTimestamps(sharedState?.readReminderTimestamps);
    }
  }

  return normalizeReadReminderTimestamps(sharedState?.readReminderTimestamps);
}

function loadProfile() {
  const sharedState = getSharedState();
  const sharedProfile = normalizeProfile(sharedState?.profile);
  const savedState = readSavedState();

  if (savedState?.profile && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeProfile(savedState.profile);
  }

  const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeProfile(JSON.parse(saved));
    } catch {
      return sharedProfile;
    }
  }

  return sharedProfile;
}

function loadPendingBoards() {
  const sharedState = getSharedState();
  const sharedPendingBoards = sharedState?.pendingBoards;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && sharedPendingBoards && typeof sharedPendingBoards === "object") {
    return clone(sharedPendingBoards);
  }

  const savedState = readSavedState();
  if (savedState?.pendingBoards && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return clone(savedState.pendingBoards);
  }

  return clone(sharedPendingBoards || {});
}

function normalizeScheduleTask(task = {}) {
  return {
    id: task.id || `schedule-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    date: isValidDate(task.date) ? task.date : `${currentMonthKey()}-01`,
    type: SCHEDULE_TYPES.includes(task.type) ? task.type : "Criativo",
    title: String(task.title || task.titulo || "").trim(),
    description: String(task.description || task.descricao || "").trim(),
    client: normalizeCompanyName(task.client || task.cliente || ""),
    status: SCHEDULE_STATUSES.includes(task.status) ? task.status : "Planejado",
    notes: String(task.notes || task.observacoes || "").trim()
  };
}

function normalizeScheduleDateItem(item = {}) {
  return {
    id: item.id || `date-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    date: isValidDate(item.date || item.data) ? item.date || item.data : `${currentMonthKey()}-01`,
    title: String(item.title || item.titulo || item.topic || item.name || "").trim()
  };
}

function normalizeScheduleHoliday(item = {}) {
  return {
    id: item.id || `holiday-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    date: isValidDate(item.date || item.data) ? item.date || item.data : `${currentMonthKey()}-01`,
    city: String(item.city || item.cidade || "").trim(),
    description: String(item.description || item.descricao || "").trim()
  };
}

function normalizeScheduleRecord(record = {}, fallbackCompany = "", fallbackMonth = currentMonthKey()) {
  return {
    client: normalizeCompanyName(record.client || record.cliente || fallbackCompany),
    month: isValidMonth(record.month || record.mes) ? record.month || record.mes : fallbackMonth,
    tasks: Array.isArray(record.tasks || record.conteudos)
      ? (record.tasks || record.conteudos).map(normalizeScheduleTask)
      : [],
    commemorativeDates: Array.isArray(record.commemorativeDates || record.datasComemorativas)
      ? (record.commemorativeDates || record.datasComemorativas).map(normalizeScheduleDateItem)
      : [],
    holidays: Array.isArray(record.holidays || record.feriados)
      ? (record.holidays || record.feriados).map(normalizeScheduleHoliday)
      : [],
    notes: String(record.notes || record.observacoes || "").trim()
  };
}

function normalizeScheduleData(data = {}) {
  return Object.entries(data || {}).reduce((records, [key, record]) => {
    const [company = "", month = currentMonthKey()] = key.split("::");
    if (!isValidMonth(month)) return records;
    records[key] = normalizeScheduleRecord(record, company, month);
    return records;
  }, {});
}

function loadScheduleData() {
  const sharedState = getSharedState();
  const sharedSchedules = sharedState?.scheduleData;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && sharedSchedules && typeof sharedSchedules === "object") {
    return clone(sharedSchedules);
  }

  const savedState = readSavedState();
  if (savedState?.scheduleData && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return clone(savedState.scheduleData);
  }

  const saved = localStorage.getItem(SCHEDULE_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return clone(sharedSchedules || {});
    }
  }

  return clone(sharedSchedules || {});
}

function isValidDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
}

function normalizeFinancialRecord(record) {
  const amount = Number(record?.amount || 0);
  return {
    id: record?.id || `finance-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    description: fixPortuguese(String(record?.description || "").trim()),
    type: FINANCE_TYPES.includes(record?.type) ? record.type : FINANCE_TYPES[0],
    amount: Number.isFinite(amount) ? Math.max(0, amount) : 0,
    dueDate: isValidDate(record?.dueDate) ? record.dueDate : "",
    status: record?.status === "paid" ? "paid" : "pending",
    recurringFrom: record?.recurringFrom || "",
    recurringSourceMonth: isValidMonth(record?.recurringSourceMonth) ? record.recurringSourceMonth : "",
    createdAt: record?.createdAt || new Date().toISOString()
  };
}

function normalizeFinancialRecords(records = {}) {
  if (!records || typeof records !== "object") return {};

  return Object.entries(records).reduce((normalized, [key, items]) => {
    normalized[key] = Array.isArray(items)
      ? items.map(normalizeFinancialRecord).filter((item) => item.description)
      : [];
    return normalized;
  }, {});
}

function loadFinancialRecords() {
  const sharedState = getSharedState();
  const sharedRecords = sharedState?.financialRecords;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && sharedRecords && typeof sharedRecords === "object") {
    return clone(sharedRecords);
  }

  const savedState = readSavedState();
  if (savedState?.financialRecords && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return clone(savedState.financialRecords);
  }

  const saved = localStorage.getItem(FINANCE_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return clone(sharedRecords || {});
    }
  }

  return clone(sharedRecords || {});
}

function normalizeQuoteNumber(value, fallback = 0, options = {}) {
  const min = Number.isFinite(options.min) ? options.min : 0;
  const max = Number.isFinite(options.max) ? options.max : Infinity;
  const numeric = Number(String(value ?? "").replace(",", "."));
  const safe = Number.isFinite(numeric) ? numeric : fallback;
  return Math.min(max, Math.max(min, safe));
}

function normalizeQuoteCalculator(data = {}) {
  const base = { ...DEFAULT_QUOTE_CALCULATOR, ...(data || {}) };
  return {
    videoQty: Math.round(normalizeQuoteNumber(base.videoQty, DEFAULT_QUOTE_CALCULATOR.videoQty)),
    videoPrice: normalizeQuoteNumber(base.videoPrice, DEFAULT_QUOTE_CALCULATOR.videoPrice),
    artQty: Math.round(normalizeQuoteNumber(base.artQty, DEFAULT_QUOTE_CALCULATOR.artQty)),
    artPrice: normalizeQuoteNumber(base.artPrice, DEFAULT_QUOTE_CALCULATOR.artPrice),
    includeManagement: base.includeManagement !== false,
    managementPrice: normalizeQuoteNumber(base.managementPrice, DEFAULT_QUOTE_CALCULATOR.managementPrice),
    bonusDates: base.bonusDates !== false,
    bonusPrint: base.bonusPrint !== false,
    discountPercent: normalizeQuoteNumber(base.discountPercent, DEFAULT_QUOTE_CALCULATOR.discountPercent, { max: 100 })
  };
}

function normalizeQuoteData(data = {}) {
  const amount = Number(data?.amount || 0);
  return {
    ...DEFAULT_QUOTE_DATA,
    client: fixPortuguese(String(data?.client || DEFAULT_QUOTE_DATA.client).trim()),
    service: fixPortuguese(String(data?.service || DEFAULT_QUOTE_DATA.service).trim()),
    description: fixPortuguese(String(data?.description || DEFAULT_QUOTE_DATA.description).trim()),
    amount: Number.isFinite(amount) ? Math.max(0, amount) : 0,
    issuedAt: isValidDate(data?.issuedAt) ? data.issuedAt : "",
    validUntil: isValidDate(data?.validUntil) ? data.validUntil : "",
    deadline: fixPortuguese(String(data?.deadline || DEFAULT_QUOTE_DATA.deadline).trim()),
    payment: fixPortuguese(String(data?.payment || DEFAULT_QUOTE_DATA.payment).trim()),
    calculator: normalizeQuoteCalculator(data?.calculator),
    terms: fixPortuguese(String(data?.terms || DEFAULT_QUOTE_DATA.terms).trim())
  };
}

function loadQuoteData() {
  const sharedState = getSharedState();
  const sharedQuote = sharedState?.quoteData;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && sharedQuote && typeof sharedQuote === "object") {
    return normalizeQuoteData(sharedQuote);
  }

  const savedState = readSavedState();
  if (savedState?.quoteData && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeQuoteData(savedState.quoteData);
  }

  const saved = localStorage.getItem(QUOTE_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeQuoteData(JSON.parse(saved));
    } catch {
      return normalizeQuoteData(sharedQuote || {});
    }
  }

  return normalizeQuoteData(sharedQuote || {});
}

function normalizeQuoteHistoryItem(item = {}) {
  const data = normalizeQuoteData(item?.data || item);
  const issuedAt = isValidDate(item?.issuedAt || data.issuedAt) ? item.issuedAt || data.issuedAt : todayDateKey();
  const month = isValidMonth(item?.month) ? item.month : issuedAt.slice(0, 7);
  const createdAt = Number.isFinite(Date.parse(item?.createdAt || "")) ? item.createdAt : new Date().toISOString();
  const updatedAt = Number.isFinite(Date.parse(item?.updatedAt || "")) ? item.updatedAt : createdAt;
  const title = fixPortuguese(String(item?.title || data.client || data.service || "Orçamento sem título").trim());

  return {
    id: String(item?.id || `quote-${Math.random().toString(16).slice(2)}-${Date.now()}`),
    month,
    title,
    issuedAt,
    createdAt,
    updatedAt,
    data: normalizeQuoteData({ ...data, issuedAt })
  };
}

function normalizeQuoteHistory(data = []) {
  if (!Array.isArray(data)) return [];

  return data
    .map(normalizeQuoteHistoryItem)
    .sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
}

function loadQuoteHistory() {
  const sharedState = getSharedState();
  const sharedHistory = sharedState?.quoteHistory;
  const forceShared = new URLSearchParams(window.location.search).has("shared");

  if (forceShared && Array.isArray(sharedHistory)) {
    return normalizeQuoteHistory(sharedHistory);
  }

  const savedState = readSavedState();
  if (Array.isArray(savedState?.quoteHistory) && (!sharedState || stateTime(savedState) >= stateTime(sharedState))) {
    return normalizeQuoteHistory(savedState.quoteHistory);
  }

  const saved = localStorage.getItem(QUOTE_HISTORY_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeQuoteHistory(JSON.parse(saved));
    } catch {
      return normalizeQuoteHistory(sharedHistory || []);
    }
  }

  return normalizeQuoteHistory(sharedHistory || []);
}

function loadQuoteMonth() {
  const saved = localStorage.getItem(QUOTE_MONTH_STORAGE_KEY);
  return isValidMonth(saved) ? saved : currentMonthKey();
}

function loadFinanceMonth() {
  const saved = localStorage.getItem(FINANCE_MONTH_STORAGE_KEY);
  return isValidMonth(saved) ? saved : currentMonthKey();
}

function loadPendingMonth() {
  const saved = localStorage.getItem(PENDING_MONTH_STORAGE_KEY);
  return isValidMonth(saved) ? saved : currentMonthKey();
}

function loadDashboardMonth() {
  const saved = localStorage.getItem(DASHBOARD_MONTH_STORAGE_KEY);
  return isValidMonth(saved) ? saved : currentMonthKey();
}

function loadScheduleMonth() {
  const saved = localStorage.getItem(SCHEDULE_MONTH_STORAGE_KEY);
  return isValidMonth(saved) ? saved : currentMonthKey();
}

function loadScheduleCompany() {
  return normalizeCompanyName(localStorage.getItem(SCHEDULE_COMPANY_STORAGE_KEY) || "") || "Alsol Telecom";
}

function isValidMonth(value) {
  return /^\d{4}-\d{2}$/.test(String(value || ""));
}

function getProfileDisplayName() {
  const fullName = [profileData.firstName, profileData.lastName].filter(Boolean).join(" ");
  return fullName || `${DEFAULT_PROFILE.firstName} ${DEFAULT_PROFILE.lastName}`;
}

function getProfileEmail() {
  return profileData.email || supabaseSession?.user?.email || "lucasrppe@gmail.com";
}

function getProfileInitials() {
  const names = getProfileDisplayName().split(" ").filter(Boolean);
  return names
    .slice(0, 2)
    .map((name) => name.charAt(0).toUpperCase())
    .join("") || "LC";
}

function renderAvatarElement(element, avatarDataUrl = profileData.avatarDataUrl) {
  if (!element) return;

  const hasImage = Boolean(avatarDataUrl);
  element.classList.toggle("has-image", hasImage);
  element.style.backgroundImage = hasImage ? `url("${avatarDataUrl}")` : "";
  element.textContent = hasImage ? "" : getProfileInitials();
}

function syncProfilePanel() {
  if (elements.profileFirstNameInput) elements.profileFirstNameInput.value = profileData.firstName;
  if (elements.profileLastNameInput) elements.profileLastNameInput.value = profileData.lastName;
  if (elements.profileEmailInput) elements.profileEmailInput.value = getProfileEmail();
  if (elements.profileDisplayName) elements.profileDisplayName.textContent = getProfileDisplayName();
  if (elements.profileEmail) elements.profileEmail.textContent = getProfileEmail();
  renderAvatarElement(elements.profileAvatar);
  renderAvatarElement(elements.accountDialogAvatar);
  renderAvatarElement(elements.profilePhotoPreview, profilePhotoDraft);
  if (elements.accountDialogName) elements.accountDialogName.textContent = getProfileDisplayName();
  if (elements.accountDialogEmail) elements.accountDialogEmail.textContent = getProfileEmail();
  if (elements.accountDialogStatus) {
    elements.accountDialogStatus.textContent = isSupabaseSessionValid()
      ? "Conta conectada com acesso ao sistema."
      : "Modo local ou sessão desconectada.";
  }
  if (elements.accountDialogSync) {
    elements.accountDialogSync.textContent = hasSupabaseBackend()
      ? "Banco Supabase configurado para sincronizar os dados."
      : "Modo local ativo neste navegador.";
  }
  if (elements.settingsSyncText) {
    elements.settingsSyncText.textContent = hasSupabaseBackend()
      ? "Os dados podem ser sincronizados entre dispositivos após salvar."
      : "Sem banco conectado: os dados ficam salvos neste navegador.";
  }
  if (elements.settingsSyncBadge) elements.settingsSyncBadge.textContent = hasSupabaseBackend() ? "Online" : "Local";
  if (elements.authStatus) elements.authStatus.textContent = "Conta Luck conectada.";
  syncThemeControls();
  syncReminderControls();
}

function setProfileEditStatus(message = "", type = "") {
  if (!elements.profileEditStatus) return;

  elements.profileEditStatus.textContent = message;
  elements.profileEditStatus.classList.toggle("is-error", type === "error");
  elements.profileEditStatus.classList.toggle("is-success", type === "success");
}

async function updateSupabaseUser(updates) {
  const config = getSupabaseConfig();
  const response = await fetchSupabaseAuth(`${config.url}/auth/v1/user`, {
    method: "PUT",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${supabaseSession.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  });
  const payload = await parseSupabaseResponse(response);

  if (!response.ok) {
    throw new Error(getSupabaseAuthMessage(payload, "Não foi possível atualizar os dados da conta."));
  }

  return payload;
}

async function saveProfile(event) {
  event?.preventDefault();
  const nextEmail = elements.profileEmailInput?.value.trim() || "";
  const currentEmail = getProfileEmail();
  const nextPassword = elements.profilePasswordInput?.value || "";
  const nextPasswordConfirm = elements.profilePasswordConfirmInput?.value || "";

  if (nextEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextEmail)) {
    setProfileEditStatus("Informe um e-mail válido.", "error");
    return;
  }

  if (nextPassword || nextPasswordConfirm) {
    if (nextPassword.length < 8) {
      setProfileEditStatus("A nova senha precisa ter pelo menos 8 caracteres.", "error");
      return;
    }

    if (nextPassword !== nextPasswordConfirm) {
      setProfileEditStatus("A confirmação da senha não confere.", "error");
      return;
    }
  }

  const accountUpdates = {};
  if (nextEmail && nextEmail !== currentEmail) accountUpdates.email = nextEmail;
  if (nextPassword) accountUpdates.password = nextPassword;

  setProfileEditStatus("Salvando perfil...");

  try {
    if (Object.keys(accountUpdates).length) {
      if (!hasSupabaseBackend() || !isSupabaseSessionValid()) {
        throw new Error("Entre na conta Luck para alterar e-mail ou senha.");
      }

      const updatedUser = await updateSupabaseUser(accountUpdates);
      if (accountUpdates.email) {
        const updatedEmail = updatedUser?.email || accountUpdates.email;
        profileData.email = updatedEmail;
        if (supabaseSession?.user) {
          saveSupabaseSession({
            ...supabaseSession,
            user: { ...supabaseSession.user, email: updatedEmail }
          });
        }
      }
    }

    profileData = normalizeProfile({
      ...profileData,
      firstName: elements.profileFirstNameInput?.value,
      lastName: elements.profileLastNameInput?.value,
      email: profileData.email,
      avatarDataUrl: profilePhotoDraft
    });
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
    saveLocalState();
    scheduleRemoteSave();
    syncProfilePanel();
    elements.profilePasswordInput.value = "";
    elements.profilePasswordConfirmInput.value = "";

    closeDialogSmooth(elements.profileEditDialog, () => {
      const accountText = nextPassword ? " A senha também foi atualizada." : "";
      showSaveDialog("Perfil atualizado", `As informações do perfil foram salvas.${accountText}`);
    });
  } catch (error) {
    setProfileEditStatus(error?.message || "Não foi possível salvar o perfil.", "error");
  }
}

function setProfileMenuOpen(isOpen) {
  if (!elements.profileMenu || !elements.profileButton) return;

  elements.profileMenu.hidden = !isOpen;
  elements.profileButton.setAttribute("aria-expanded", String(isOpen));
}

function toggleProfileMenu() {
  setProfileMenuOpen(Boolean(elements.profileMenu?.hidden));
}

function openAccountDialog() {
  setProfileMenuOpen(false);
  syncProfilePanel();
  openDialogSmooth(elements.accountDialog);
}

function openProfileEditDialog() {
  setProfileMenuOpen(false);
  profilePhotoDraft = profileData.avatarDataUrl || "";
  syncProfilePanel();
  if (elements.profilePhotoInput) elements.profilePhotoInput.value = "";
  if (elements.profilePasswordInput) elements.profilePasswordInput.value = "";
  if (elements.profilePasswordConfirmInput) elements.profilePasswordConfirmInput.value = "";
  setProfileEditStatus("");
  openDialogSmooth(elements.profileEditDialog);
}

function openSettingsDialog() {
  setProfileMenuOpen(false);
  syncProfilePanel();
  openDialogSmooth(elements.settingsDialog);
}

function openScheduleSettingsDialog() {
  renderScheduleLogoManager();
  renderScheduleThemeManager();
  openDialogSmooth(elements.scheduleSettingsDialog);
}

function syncThemeControls() {
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const isActive = button.dataset.themeOption === selectedTheme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const themeText = document.querySelector("#settingsThemeText");
  if (themeText) {
    themeText.textContent = selectedTheme === "dark"
      ? "Tema escuro ativo para reduzir brilho e destacar os dados."
      : "Tema claro ativo com identidade visual da Luck.";
  }
}

function applyTheme(theme, options = {}) {
  selectedTheme = normalizeTheme(theme);
  document.documentElement.dataset.theme = selectedTheme;
  document.documentElement.style.colorScheme = selectedTheme;
  syncThemeControls();

  if (options.save) {
    localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    saveLocalState();
    scheduleRemoteSave();
    exposeBackupData();
  }
}

function handleProfilePhotoChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setProfileEditStatus("Escolha uma imagem em PNG, JPG ou WebP.", "error");
    event.target.value = "";
    return;
  }

  if (file.size > PROFILE_PHOTO_MAX_SIZE) {
    setProfileEditStatus("Escolha uma imagem menor que 1,5 MB.", "error");
    event.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    profilePhotoDraft = String(reader.result || "");
    renderAvatarElement(elements.profilePhotoPreview, profilePhotoDraft);
    setProfileEditStatus("Foto pronta para salvar.", "success");
  });
  reader.readAsDataURL(file);
}

function removeProfilePhoto() {
  profilePhotoDraft = "";
  if (elements.profilePhotoInput) elements.profilePhotoInput.value = "";
  renderAvatarElement(elements.profilePhotoPreview, "");
  setProfileEditStatus("Foto removida. Salve o perfil para confirmar.", "success");
}

function saveLocalState() {
  syncContractTargetsFromCompanySettings();
  const state = getCurrentState();
  localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reportData));
  localStorage.setItem(TARGETS_STORAGE_KEY, JSON.stringify(contractTargets));
  localStorage.setItem(COMPANY_SETTINGS_STORAGE_KEY, JSON.stringify(companySettings));
  localStorage.setItem(DELETED_COMPANIES_STORAGE_KEY, JSON.stringify(deletedCompanies));
  localStorage.setItem(FINANCE_STORAGE_KEY, JSON.stringify(financialRecords));
  localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(quoteData));
  localStorage.setItem(QUOTE_HISTORY_STORAGE_KEY, JSON.stringify(quoteHistory));
  localStorage.setItem(SCHEDULE_STORAGE_KEY, JSON.stringify(scheduleData));
  localStorage.setItem(FINANCE_MONTH_STORAGE_KEY, selectedFinanceMonth);
  localStorage.setItem(PENDING_MONTH_STORAGE_KEY, selectedPendingMonth);
  localStorage.setItem(QUOTE_MONTH_STORAGE_KEY, selectedQuoteMonth);
  localStorage.setItem(SCHEDULE_MONTH_STORAGE_KEY, selectedScheduleMonth);
  localStorage.setItem(SCHEDULE_COMPANY_STORAGE_KEY, selectedScheduleCompany);
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
  localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
  localStorage.setItem(REMINDER_SETTINGS_STORAGE_KEY, JSON.stringify(reminderSettings));
  localStorage.setItem(REMINDER_READ_STORAGE_KEY, JSON.stringify(readReminderTimestamps));
}

function saveCompanySettings() {
  saveLocalState();
  scheduleRemoteSave();
  exposeBackupData();
}

function saveContractTargets() {
  saveLocalState();
  scheduleRemoteSave();
}

function saveReports() {
  saveLocalState();
  scheduleRemoteSave();
}

function savePendingBoards() {
  saveLocalState();
  scheduleRemoteSave();
  exposeBackupData();
}

function saveFinancialRecords() {
  saveLocalState();
  scheduleRemoteSave();
  exposeBackupData();
}

function saveQuoteData() {
  saveLocalState();
  scheduleRemoteSave();
  exposeBackupData();
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
}

function setLoginRequested(nextValue) {
  loginRequested = Boolean(nextValue);
  renderAuthState();
  if (loginRequested) {
    window.setTimeout(() => elements.loginEmailInput?.focus(), 60);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
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
  const showWelcome = mustLogin && !loginRequested;

  if (elements.welcomeScreen) elements.welcomeScreen.hidden = !showWelcome;
  if (elements.loginScreen) elements.loginScreen.hidden = !mustLogin || showWelcome;
  if (elements.appShell) elements.appShell.hidden = mustLogin;
  if (elements.authPanel) elements.authPanel.hidden = !hasBackend || mustLogin;

  if (!hasBackend) {
    setLoginStatus("Modo local ativo.");
    syncProfilePanel();
    return;
  }

  syncProfilePanel();
  if (elements.loginStatus) {
    elements.loginStatus.textContent = isLoggedIn
      ? `Conectado como ${supabaseSession.user?.email || "Luck"}.`
      : "Use o acesso Luck para continuar.";
  }
  if (elements.googleLoginButton) {
    const googleEnabled = isGoogleAuthEnabled();
    elements.googleLoginButton.hidden = false;
    elements.googleLoginButton.disabled = false;
    elements.googleLoginButton.title = googleEnabled
      ? "Entrar usando a conta Google"
      : "Configure o provedor Google no Supabase para habilitar";
  }
  if (elements.authLogoutButton) elements.authLogoutButton.hidden = !isLoggedIn;
}

function readAuthCredentials() {
  const config = getSupabaseConfig();
  const email = elements.loginEmailInput.value.trim();
  const password = elements.loginPasswordInput.value;

  if (!email || !password) {
    setLoginStatus("Informe o e-mail e a senha para continuar.");
    return null;
  }

  return { config, email, password };
}

function setAuthBusy(isBusy, message) {
  elements.loginButton.disabled = isBusy;
  elements.signupButton.disabled = isBusy;
  elements.googleLoginButton.disabled = isBusy;
  if (message) setLoginStatus(message);
}

function getRequestedView() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("page") === "dashboard" || window.location.hash === "#dashboard") {
    return "dashboard";
  }

  if (params.get("page") === "producao" || window.location.hash === "#producao") {
    return "relatorios";
  }

  if (params.get("page") === "relatorios" || window.location.hash === "#relatorios") {
    return "relatorios";
  }

  if (params.get("page") === "cronograma" || window.location.hash === "#cronograma") {
    return "cronograma";
  }

  if (params.get("page") === "empresas" || window.location.hash === "#empresas") {
    return "empresas";
  }

  if (params.get("page") === "financeiro" || window.location.hash === "#financeiro") {
    return "financeiro";
  }

  if (params.get("page") === "orcamentos" || window.location.hash === "#orcamentos") {
    return "orcamentos";
  }

  if (params.get("page") === "pendencias" || window.location.hash === "#pendencias") {
    return "pendencias";
  }

  return "dashboard";
}

function updateViewUrl(view, replace = false) {
  const url = new URL(window.location.href);
  if (["relatorios", "cronograma", "pendencias", "empresas", "financeiro", "orcamentos"].includes(view)) {
    url.searchParams.set("page", view);
  } else {
    url.searchParams.delete("page");
  }
  url.hash = "";

  const state = { view };
  if (url.toString() === window.location.href) return;
  if (replace) {
    window.history.replaceState(state, document.title, url);
    return;
  }

  window.history.pushState(state, document.title, url);
}

function setActiveView(view, options = {}) {
  const validViews = ["dashboard", "relatorios", "cronograma", "pendencias", "empresas", "financeiro", "orcamentos"];
  const activeView = validViews.includes(view) ? view : "dashboard";
  const isDashboardView = activeView === "dashboard";
  const isReportView = activeView === "relatorios";
  const isReportWorkspace = isReportView;
  const isScheduleView = activeView === "cronograma";
  const isPendingView = activeView === "pendencias";
  const isCompanyView = activeView === "empresas";
  const isFinanceView = activeView === "financeiro";
  const isQuoteView = activeView === "orcamentos";

  elements.dashboardView.hidden = !isDashboardView;
  elements.scheduleView.hidden = !isScheduleView;
  elements.reportView.hidden = !isReportWorkspace;
  elements.pendingView.hidden = !isPendingView;
  elements.companyView.hidden = !isCompanyView;
  elements.financeView.hidden = !isFinanceView;
  elements.quoteView.hidden = !isQuoteView;
  elements.contextPanel.hidden = isDashboardView || isScheduleView || isFinanceView || isPendingView || isQuoteView;
  elements.pdfButton.hidden = !isReportView;
  elements.dashboardViewButton.classList.toggle("is-active", isDashboardView);
  elements.scheduleViewButton.classList.toggle("is-active", isScheduleView);
  elements.reportViewButton.classList.toggle("is-active", isReportView);
  elements.pendingViewButton.classList.toggle("is-active", isPendingView);
  elements.companyViewButton.classList.toggle("is-active", isCompanyView);
  elements.financeViewButton.classList.toggle("is-active", isFinanceView);
  elements.quoteViewButton.classList.toggle("is-active", isQuoteView);
  elements.dashboardViewButton.setAttribute("aria-pressed", String(isDashboardView));
  elements.scheduleViewButton.setAttribute("aria-pressed", String(isScheduleView));
  elements.reportViewButton.setAttribute("aria-pressed", String(isReportView));
  elements.pendingViewButton.setAttribute("aria-pressed", String(isPendingView));
  elements.companyViewButton.setAttribute("aria-pressed", String(isCompanyView));
  elements.financeViewButton.setAttribute("aria-pressed", String(isFinanceView));
  elements.quoteViewButton.setAttribute("aria-pressed", String(isQuoteView));

  if (options.updateUrl) updateViewUrl(activeView, Boolean(options.replaceUrl));
  if (options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: options.smooth ? "smooth" : "auto" });
  }
}

function startAuthenticatedApp() {
  renderAuthState();
  populateControls();
  render();
  setActiveView(getRequestedView(), { scroll: false, updateUrl: window.location.hash.startsWith("#"), replaceUrl: true });
  exposeBackupData();
  loadRemoteState();
}

function handleSupabaseSession(session) {
  saveSupabaseSession({
    ...session,
    expires_at: session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600)
  });
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

async function fetchSupabaseAuth(url, options, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } finally {
    window.clearTimeout(timeoutId);
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

function getAuthErrorMessage(error, fallback) {
  if (error?.name === "AbortError") {
    return "A conexão demorou demais. Confira a internet e tente entrar novamente.";
  }

  return error?.message || fallback;
}

async function signInSupabase() {
  const credentials = readAuthCredentials();
  if (!credentials) return;

  const { config, email, password } = credentials;

  setAuthBusy(true, "Entrando...");

  try {
    const response = await fetchSupabaseAuth(`${config.url}/auth/v1/token?grant_type=password`, {
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
    const message = getAuthErrorMessage(error, "Não foi possível entrar. Confira o e-mail e a senha.");
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
    const response = await fetchSupabaseAuth(`${config.url}/auth/v1/signup`, {
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

    elements.loginPasswordInput.value = "";
    setLoginStatus("Confirme o e-mail enviado e depois clique em Entrar.");
    showSaveDialog("Confirme seu e-mail", "Enviamos um link de confirmação. Depois de confirmar, volte aqui e clique em Entrar com o mesmo e-mail e senha.");
  } catch (error) {
    const message = getAuthErrorMessage(error, "Não foi possível criar. Se o acesso já existir, use Entrar.");
    setSyncStatus("Não foi possível criar o acesso.", "error");
    setLoginStatus(message);
  } finally {
    setAuthBusy(false);
    if (isSupabaseSessionValid()) renderAuthState();
  }
}

function signOutSupabase() {
  setProfileMenuOpen(false);
  loginRequested = true;
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
    contractTargets,
    companySettings,
    deletedCompanies,
    profile: profileData,
    theme: selectedTheme,
    reminderSettings,
    readReminderTimestamps,
    pendingBoards,
    financialRecords,
    quoteData,
    quoteHistory,
    scheduleData
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
        deletedCompanies = normalizeDeletedCompanies(state.deletedCompanies || deletedCompanies);
        reportData = normalizeReportData(filterActiveReports(state.reports));
        contractTargets = {
          ...CONTRACT_TARGETS,
          ...(state.contractTargets || contractTargets)
        };
        companySettings = normalizeCompanySettings(state.companySettings || companySettings);
        syncContractTargetsFromCompanySettings();
        profileData = normalizeProfile(state.profile || profileData);
        selectedTheme = normalizeTheme(state.theme || selectedTheme);
        reminderSettings = normalizeReminderSettings(state.reminderSettings || reminderSettings);
        readReminderTimestamps = normalizeReadReminderTimestamps(state.readReminderTimestamps || readReminderTimestamps);
        applyTheme(selectedTheme);
        pendingBoards = normalizePendingBoards(state.pendingBoards || pendingBoards);
        financialRecords = normalizeFinancialRecords(state.financialRecords || financialRecords);
        quoteData = normalizeQuoteData(state.quoteData || quoteData);
        quoteHistory = normalizeQuoteHistory(state.quoteHistory || quoteHistory);
        scheduleData = normalizeScheduleData(filterActiveScheduleData(state.scheduleData || scheduleData));
        ensureRowIds();
        saveReports();
        saveCompanySettings();
        saveLocalState();
        syncProfilePanel();
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
      deletedCompanies = normalizeDeletedCompanies(record.state.deletedCompanies || deletedCompanies);
      reportData = normalizeReportData(filterActiveReports(record.state.reports));
      contractTargets = {
        ...CONTRACT_TARGETS,
        ...(record.state.contractTargets || contractTargets)
      };
      companySettings = normalizeCompanySettings(record.state.companySettings || companySettings);
      syncContractTargetsFromCompanySettings();
      profileData = normalizeProfile(record.state.profile || profileData);
      selectedTheme = normalizeTheme(record.state.theme || selectedTheme);
      reminderSettings = normalizeReminderSettings(record.state.reminderSettings || reminderSettings);
      readReminderTimestamps = normalizeReadReminderTimestamps(record.state.readReminderTimestamps || readReminderTimestamps);
      applyTheme(selectedTheme);
      pendingBoards = normalizePendingBoards(record.state.pendingBoards || pendingBoards);
      financialRecords = normalizeFinancialRecords(record.state.financialRecords || financialRecords);
      quoteData = normalizeQuoteData(record.state.quoteData || quoteData);
      quoteHistory = normalizeQuoteHistory(record.state.quoteHistory || quoteHistory);
      scheduleData = normalizeScheduleData(filterActiveScheduleData(record.state.scheduleData || scheduleData));
      ensureRowIds();
      saveReports();
      saveCompanySettings();
      saveLocalState();
      syncProfilePanel();
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

      deletedCompanies = normalizeDeletedCompanies(payload.deletedCompanies || deletedCompanies);
      reportData = normalizeReportData(filterActiveReports(nextReports));
      contractTargets = {
        ...CONTRACT_TARGETS,
        ...(payload.contractTargets || contractTargets)
      };
      companySettings = normalizeCompanySettings(payload.companySettings || companySettings);
      syncContractTargetsFromCompanySettings();
      profileData = normalizeProfile(payload.profile || profileData);
      selectedTheme = normalizeTheme(payload.theme || selectedTheme);
      reminderSettings = normalizeReminderSettings(payload.reminderSettings || reminderSettings);
      readReminderTimestamps = normalizeReadReminderTimestamps(payload.readReminderTimestamps || readReminderTimestamps);
      applyTheme(selectedTheme);
      pendingBoards = normalizePendingBoards(payload.pendingBoards || pendingBoards);
      financialRecords = normalizeFinancialRecords(payload.financialRecords || financialRecords);
      quoteData = normalizeQuoteData(payload.quoteData || quoteData);
      quoteHistory = normalizeQuoteHistory(payload.quoteHistory || quoteHistory);
      scheduleData = normalizeScheduleData(filterActiveScheduleData(payload.scheduleData || scheduleData));
      ensureRowIds();
      saveReports();
      saveCompanySettings();
      saveLocalState();
      syncProfilePanel();
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
        material: normalizeMaterial(row.material),
        contractMonth: row.contractMonth || undefined
      }))
    }))
  }));
}

function normalizePendingCard(card) {
  const title = fixPortuguese(String(card?.title || card?.text || "").trim());

  if (!title) return null;

  return {
    id: card.id || `pending-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    title,
    category: PENDING_TYPES.some((type) => type.id === card.category) ? card.category : "",
    status: card.status === "done" ? "done" : card.status === "pending" ? "pending" : "",
    createdAt: card.createdAt || new Date().toISOString()
  };
}

function normalizePendingBoards(boards) {
  if (!boards || typeof boards !== "object") return {};

  return Object.entries(boards).reduce((normalized, [key, board]) => {
    normalized[key] = {};

    PENDING_COLUMNS.forEach((column) => {
      normalized[key][column.id] = Array.isArray(board?.[column.id])
        ? board[column.id].map(normalizePendingCard).filter(Boolean)
        : [];
    });

    return normalized;
  }, {});
}

function normalizeMaterial(material) {
  const normalized = normalizeText(material);
  if (
    normalized.includes("video editado") ||
    normalized.includes("edicao de video") ||
    normalized.includes("editar video") ||
    normalized.includes("ajuste de video")
  ) {
    return "Vídeo Editado";
  }
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
    .replace(/\bate\b/g, "até")
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

function currentMonthKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
}

function shiftMonth(month, offset) {
  const { year, monthNumber } = monthYear(month);
  const date = new Date(Number(year), Number(monthNumber) - 1 + offset, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function nextMonthKey() {
  return shiftMonth(currentMonthKey(), 1);
}

function previousMonthKey(month) {
  return shiftMonth(month, -1);
}

function daysInMonthKey(month) {
  const { year, monthNumber } = monthYear(month);
  return new Date(Number(year), Number(monthNumber), 0).getDate();
}

function monthsUntilCurrent() {
  const today = new Date();
  const year = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  return Array.from({ length: currentMonth }, (_, index) => `${year}-${String(index + 1).padStart(2, "0")}`);
}

function getCompanyMonths(company) {
  return reportData
    .filter((report) => report.company === company)
    .map((report) => report.month);
}

function getSelectableMonths(company) {
  return unique([...getCompanyMonths(company), ...monthsUntilCurrent()])
    .sort()
    .reverse();
}

function getFallbackMonthAfterDelete(company, deletedMonth) {
  const remainingMonths = getSelectableMonths(company).filter((month) => month !== deletedMonth);
  const currentMonth = currentMonthKey();

  if (remainingMonths.includes(currentMonth)) return currentMonth;
  return remainingMonths[0] || currentMonth;
}

function buildEmptyReport(company, month) {
  return {
    company,
    month,
    title: `Relatório de Produção - ${company}`,
    sections: [
      { label: "", rows: [] },
      { label: "Datas Comemorativas", rows: [] },
      { label: "Aniversariantes", rows: [] },
      { label: "Solicitação avulsa", rows: [] }
    ]
  };
}

function ensureReport(company, month, options = {}) {
  let report = reportData.find((item) => item.company === company && item.month === month);

  if (!report) {
    report = buildEmptyReport(company, month);
    reportData.push(report);
    if (options.save) {
      saveReports();
      exposeBackupData();
    }
  }

  return report;
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
  const company = elements.companySelect.value;
  const month = elements.monthSelect.value;

  if (!company || !month) return reportData[0];

  return ensureReport(company, month);
}

function escapeHTML(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCompanyContractStatus(setting = {}) {
  const hasFile = Boolean(setting.contractFileDataUrl || setting.contractFileName);
  const startDate = setting.contractStartDate || "";
  const endDate = setting.contractEndDate || "";
  const today = todayDateKey();

  if (!hasFile && !startDate && !endDate) {
    return {
      label: "Sem contrato",
      detail: "Anexe o contrato e informe a vigência.",
      tone: "empty"
    };
  }

  if (!startDate || !endDate) {
    return {
      label: hasFile ? "Contrato anexado" : "Vigência incompleta",
      detail: "Informe início e fim para validar o status.",
      tone: "warning"
    };
  }

  if (today < startDate) {
    return {
      label: "Contrato agendado",
      detail: `Vigência começa em ${formatDate(startDate)}.`,
      tone: "scheduled"
    };
  }

  if (today > endDate) {
    return {
      label: "Contrato vencido",
      detail: `Venceu em ${formatDate(endDate)}.`,
      tone: "expired"
    };
  }

  const daysLeft = Math.round((new Date(`${endDate}T00:00:00`).getTime() - new Date(`${today}T00:00:00`).getTime()) / 86400000);
  if (daysLeft <= 30) {
    return {
      label: "Vence em breve",
      detail: `${daysLeft} ${daysLeft === 1 ? "dia restante" : "dias restantes"}.`,
      tone: "warning"
    };
  }

  return {
    label: "Contrato ativo",
    detail: `Válido até ${formatDate(endDate)}.`,
    tone: "active"
  };
}

function formatContractPeriod(setting = {}) {
  if (setting.contractStartDate && setting.contractEndDate) {
    return `${formatDate(setting.contractStartDate)} até ${formatDate(setting.contractEndDate)}`;
  }

  if (setting.contractStartDate) return `Desde ${formatDate(setting.contractStartDate)}`;
  if (setting.contractEndDate) return `Até ${formatDate(setting.contractEndDate)}`;
  return "Vigência não informada";
}

function renderCompanyList() {
  if (!elements.companyList) return;

  const companies = getKnownCompanyNames()
    .filter((company) => company && normalizeText(company) !== "luck");

  elements.companySettingsBadge.textContent = `${companies.length} ${companies.length === 1 ? "cliente" : "clientes"}`;

  elements.companyList.innerHTML = companies.length
    ? companies.map((company) => {
      const setting = getCompanySetting(company);
      const status = getCompanyContractStatus(setting);
      const isSelected = company === elements.companySelect.value;
      const initials = company.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part.charAt(0)).join("").toUpperCase() || "CL";
      const fileText = setting.contractFileName || "Nenhum contrato anexado";

      return `
        <article class="company-card ${isSelected ? "is-selected" : ""}">
          <div class="company-card-header">
            <span class="company-card-avatar">${escapeHTML(initials)}</span>
            <div>
              <h3>${escapeHTML(company)}</h3>
              <p>${escapeHTML(setting.segment || "Segmento não informado")}</p>
            </div>
            <span class="company-contract-status ${status.tone}">${escapeHTML(status.label)}</span>
          </div>

          <div class="company-card-metrics">
            <span><small>Vídeos</small><strong>${Number(setting.videos) || 0}</strong></span>
            <span><small>Criativos</small><strong>${Number(setting.creatives) || 0}</strong></span>
            <span><small>Vigência</small><strong>${escapeHTML(formatContractPeriod(setting))}</strong></span>
          </div>

          <div class="company-card-details">
            <span>Responsável: ${escapeHTML(setting.contact || "Não informado")}</span>
            <span>Contato: ${escapeHTML(setting.contactInfo || "Não informado")}</span>
            <span>Contrato: ${escapeHTML(fileText)}</span>
          </div>

          <div class="company-card-actions">
            <button class="secondary-button" type="button" data-company-select="${escapeHTML(company)}">Selecionar</button>
            <button class="export-main-button" type="button" data-company-config="${escapeHTML(company)}">Configurar</button>
            <button class="danger-button" type="button" data-company-delete="${escapeHTML(company)}">Excluir</button>
          </div>
        </article>
      `;
    }).join("")
    : `<div class="empty-state">Nenhum cliente cadastrado ainda.</div>`;
}

function pendingBoardKey(month) {
  return `luck::${month}`;
}

function migrateLegacyPendingBoards(month) {
  const key = pendingBoardKey(month);
  if (!pendingBoards[key]) pendingBoards[key] = {};

  PENDING_COLUMNS.forEach((column) => {
    if (!Array.isArray(pendingBoards[key][column.id])) {
      pendingBoards[key][column.id] = [];
    }
  });

  Object.entries(pendingBoards).forEach(([legacyKey, board]) => {
    if (legacyKey === key || !legacyKey.endsWith(`::${month}`) || !board || typeof board !== "object") return;

    PENDING_COLUMNS.forEach((column) => {
      if (Array.isArray(board[column.id])) {
        pendingBoards[key][column.id].push(...board[column.id]);
      }
    });
    delete pendingBoards[legacyKey];
  });

  return pendingBoards[key];
}

function getPendingBoard(month) {
  const key = pendingBoardKey(month);
  if (!pendingBoards[key]) pendingBoards[key] = {};

  PENDING_COLUMNS.forEach((column) => {
    if (!Array.isArray(pendingBoards[key][column.id])) {
      pendingBoards[key][column.id] = [];
    }
  });

  return migrateLegacyPendingBoards(month);
}

function getSelectedPendingBoard() {
  return getPendingBoard(selectedPendingMonth);
}

function getReportRows(report) {
  return (report?.sections || []).flatMap((section) => section.rows || []);
}

function getContractTarget(company) {
  const setting = companySettings?.[company];
  if (setting) {
    return {
      videos: Number(setting.videos) || 0,
      creatives: Number(setting.creatives) || 0
    };
  }

  return contractTargets[company] || { videos: 0, creatives: 0 };
}

function getRowContractMonth(row, reportMonth) {
  return row.contractMonth || reportMonth;
}

function isMetricMaterial(row, metric) {
  const material = normalizeMaterial(row.material);
  if (metric === "videos") return material === "Vídeo (Reels)";
  return material === "Criativo (Arte)";
}

function getMetricLabel(metric) {
  return metric === "videos" ? "vídeo" : "criativo";
}

function getMetricPlural(metric, count) {
  if (metric === "videos") return count === 1 ? "vídeo" : "vídeos";
  return count === 1 ? "criativo" : "criativos";
}

function getCompanyProductionRows(company) {
  return reportData
    .filter((report) => report.company === company)
    .flatMap((report) => getReportRows(report).map((row) => ({ report, row })));
}

function getContractMonthsForCompany(company) {
  return unique([
    ...getCompanyMonths(company),
    ...getCompanyProductionRows(company).map(({ report, row }) => getRowContractMonth(row, report.month))
  ])
    .filter(Boolean)
    .sort();
}

function getContractCountsForMonth(company, month) {
  const counts = { videos: 0, creatives: 0 };

  getCompanyProductionRows(company).forEach(({ report, row }) => {
    if (getRowContractMonth(row, report.month) !== month) return;
    if (isMetricMaterial(row, "videos")) counts.videos += 1;
    if (isMetricMaterial(row, "creatives")) counts.creatives += 1;
  });

  return counts;
}

function getActualContractCounts(report) {
  const counts = { videos: 0, creatives: 0 };

  getReportRows(report).forEach((row) => {
    if (isMetricMaterial(row, "videos")) counts.videos += 1;
    if (isMetricMaterial(row, "creatives")) counts.creatives += 1;
  });

  return counts;
}

function updateBacklog(previousBacklog, monthlyTarget, produced) {
  if (!monthlyTarget) return 0;
  return Math.max(0, previousBacklog + monthlyTarget - produced);
}

function getPreviousContractBacklog(company, month) {
  const targets = getContractTarget(company);
  const backlog = { videos: 0, creatives: 0 };
  const previousMonths = getContractMonthsForCompany(company).filter((item) => item < month);

  previousMonths.forEach((previousMonth) => {
    const counts = getContractCountsForMonth(company, previousMonth);
    backlog.videos = updateBacklog(backlog.videos, targets.videos || 0, counts.videos);
    backlog.creatives = updateBacklog(backlog.creatives, targets.creatives || 0, counts.creatives);
  });

  return backlog;
}

function getDirectDeficit(company, month, metric) {
  const targets = getContractTarget(company);
  const target = metric === "videos" ? targets.videos || 0 : targets.creatives || 0;
  const counts = getContractCountsForMonth(company, month);
  const produced = metric === "videos" ? counts.videos : counts.creatives;

  return Math.max(0, target - produced);
}

function groupRowsByMonth(rows, monthGetter) {
  return rows.reduce((groups, item) => {
    const month = monthGetter(item);
    groups[month] = (groups[month] || 0) + 1;
    return groups;
  }, {});
}

function formatMonthGroups(groups, connector = "de") {
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, count]) => `${count} ${connector} ${formatMonth(month)}`)
    .join(", ");
}

function getReceivedCompensations(company, month) {
  return getCompanyProductionRows(company)
    .filter(({ report, row }) => report.month !== month && getRowContractMonth(row, report.month) === month)
    .sort((a, b) => `${a.report.month}-${a.row.date}`.localeCompare(`${b.report.month}-${b.row.date}`));
}

function getSentCompensations(report) {
  return getReportRows(report)
    .filter((row) => getRowContractMonth(row, report.month) !== report.month)
    .map((row) => ({ report, row }))
    .sort((a, b) => `${a.row.contractMonth}-${a.row.date}`.localeCompare(`${b.row.contractMonth}-${b.row.date}`));
}

function isRowFreeForContract(row, reportMonth) {
  return getRowContractMonth(row, reportMonth) === reportMonth;
}

function getAssignableRowsAfter(company, month, metric) {
  return getCompanyProductionRows(company)
    .filter(({ report, row }) => report.month > month && isMetricMaterial(row, metric) && isRowFreeForContract(row, report.month))
    .sort((a, b) => `${a.report.month}-${a.row.date}`.localeCompare(`${b.report.month}-${b.row.date}`));
}

function getAssignableRowsInReport(report, metric) {
  return getReportRows(report)
    .filter((row) => isMetricMaterial(row, metric) && isRowFreeForContract(row, report.month))
    .map((row) => ({ report, row }))
    .sort((a, b) => a.row.date.localeCompare(b.row.date));
}

function getPreviousDirectDeficits(company, month, metric) {
  return getContractMonthsForCompany(company)
    .filter((previousMonth) => previousMonth < month)
    .map((previousMonth) => ({
      month: previousMonth,
      missing: getDirectDeficit(company, previousMonth, metric)
    }))
    .filter((item) => item.missing > 0);
}

function getSelectedMonthCompensationPlan(report) {
  const metrics = ["videos", "creatives"];
  const futurePlan = metrics.map((metric) => {
    const missing = getDirectDeficit(report.company, report.month, metric);
    const available = getAssignableRowsAfter(report.company, report.month, metric).length;
    return { metric, missing, available, usable: Math.min(missing, available) };
  });
  const futureUsable = futurePlan.reduce((total, item) => total + item.usable, 0);

  if (futureUsable > 0) {
    return {
      mode: "future-to-current",
      plan: futurePlan,
      total: futureUsable,
      label: "Quitar este mês com produções seguintes",
      hint: `Há ${futureUsable} ${futureUsable === 1 ? "item disponível" : "itens disponíveis"} em meses seguintes para compensar ${formatMonth(report.month).toLowerCase()}.`
    };
  }

  const previousPlan = metrics.map((metric) => {
    const deficits = getPreviousDirectDeficits(report.company, report.month, metric);
    const missing = deficits.reduce((total, item) => total + item.missing, 0);
    const available = getAssignableRowsInReport(report, metric).length;
    return { metric, deficits, missing, available, usable: Math.min(missing, available) };
  });
  const previousUsable = previousPlan.reduce((total, item) => total + item.usable, 0);

  if (previousUsable > 0) {
    return {
      mode: "current-to-previous",
      plan: previousPlan,
      total: previousUsable,
      label: "Usar este mês para pendências anteriores",
      hint: `Há ${previousUsable} ${previousUsable === 1 ? "item livre" : "itens livres"} neste mês para quitar pendências anteriores.`
    };
  }

  return {
    mode: "none",
    plan: [],
    total: 0,
    label: "Compensar pendências",
    hint: "Sem pendências com produção disponível para compensar agora."
  };
}

function syncCompensationAction(report) {
  const compensationPlan = getSelectedMonthCompensationPlan(report);
  const undoCount = getRelatedCompensations(report).length;

  elements.autoCompensateButton.textContent = compensationPlan.label;
  elements.autoCompensateButton.disabled = compensationPlan.total === 0;
  elements.undoCompensationButton.disabled = undoCount === 0;
  elements.compensationHint.textContent = undoCount
    ? `${compensationPlan.hint} ${undoCount} ${undoCount === 1 ? "compensação pode" : "compensações podem"} ser desfeita${undoCount === 1 ? "" : "s"}.`
    : compensationPlan.hint;
}

function applyFutureRowsToCurrentMonth(report, plan) {
  let total = 0;
  const totals = { videos: 0, creatives: 0 };

  plan.forEach(({ metric, usable }) => {
    const rows = getAssignableRowsAfter(report.company, report.month, metric).slice(0, usable);

    rows.forEach(({ row }) => {
      row.contractMonth = report.month;
      total += 1;
      totals[metric] += 1;
    });
  });

  return { total, totals };
}

function applyCurrentRowsToPreviousMonths(report, plan) {
  let total = 0;
  const totals = { videos: 0, creatives: 0 };

  plan.forEach(({ metric, deficits }) => {
    const rows = getAssignableRowsInReport(report, metric);
    let rowIndex = 0;

    deficits.forEach((deficit) => {
      for (let index = 0; index < deficit.missing && rowIndex < rows.length; index += 1) {
        rows[rowIndex].row.contractMonth = deficit.month;
        rowIndex += 1;
        total += 1;
        totals[metric] += 1;
      }
    });
  });

  return { total, totals };
}

function compensationResultMessage(result) {
  const parts = [];

  if (result.totals.videos) parts.push(`${result.totals.videos} ${getMetricPlural("videos", result.totals.videos)}`);
  if (result.totals.creatives) parts.push(`${result.totals.creatives} ${getMetricPlural("creatives", result.totals.creatives)}`);

  return parts.join(" e ") || `${result.total || 0} ${result.total === 1 ? "item" : "itens"}`;
}

function autoCompensateContract() {
  const report = getSelectedReport();
  const compensationPlan = getSelectedMonthCompensationPlan(report);

  if (!compensationPlan.total) {
    showSaveDialog("Sem compensação disponível", "Não há itens livres suficientes em outros meses para compensar agora.");
    return;
  }

  const result = compensationPlan.mode === "future-to-current"
    ? applyFutureRowsToCurrentMonth(report, compensationPlan.plan)
    : applyCurrentRowsToPreviousMonths(report, compensationPlan.plan);

  if (!result.total) {
    showSaveDialog("Sem compensação disponível", "Não consegui encontrar itens livres para compensar.");
    return;
  }

  saveReports();
  render();
  showSaveDialog(
    "Compensação aplicada",
    `${compensationResultMessage(result)} ${result.total === 1 ? "foi vinculado" : "foram vinculados"} ao mês correto do contrato.`
  );
}

function getRelatedCompensations(report) {
  const sent = getSentCompensations(report);
  const received = getReceivedCompensations(report.company, report.month);

  return [...sent, ...received];
}

function undoCompensationContract() {
  const report = getSelectedReport();
  const relatedCompensations = getRelatedCompensations(report);
  const totals = { videos: 0, creatives: 0 };

  if (!relatedCompensations.length) {
    showSaveDialog("Nada para desfazer", "Este mês não tem compensações aplicadas.");
    return;
  }

  relatedCompensations.forEach(({ row }) => {
    if (isMetricMaterial(row, "videos")) totals.videos += 1;
    if (isMetricMaterial(row, "creatives")) totals.creatives += 1;
    delete row.contractMonth;
  });

  saveReports();
  render();
  showSaveDialog(
    "Compensação desfeita",
    `${compensationResultMessage({ totals, total: relatedCompensations.length })} ${relatedCompensations.length === 1 ? "voltou" : "voltaram"} para o mês original de produção.`
  );
}

function missingText(count) {
  if (count <= 0) return "Quitado.";
  return count === 1 ? "Falta 1." : `Faltam ${count}.`;
}

function compensationText(company, month, metric) {
  const received = getReceivedCompensations(company, month).filter(({ row }) => isMetricMaterial(row, metric));
  const report = reportData.find((item) => item.company === company && item.month === month);
  const sent = report ? getSentCompensations(report).filter(({ row }) => isMetricMaterial(row, metric)) : [];
  const parts = [];

  if (received.length) {
    parts.push(`Entraram ${formatMonthGroups(groupRowsByMonth(received, ({ report: sourceReport }) => sourceReport.month))}.`);
  }

  if (sent.length) {
    parts.push(`Saíram ${formatMonthGroups(groupRowsByMonth(sent, ({ row }) => getRowContractMonth(row, month)), "para")}.`);
  }

  return parts.join(" ");
}

function contractDetailText(monthlyTarget, previousBacklog, produced, compensation = "") {
  if (!monthlyTarget) return "Sem meta configurada.";

  const effectiveTarget = monthlyTarget + previousBacklog;
  const targetText = previousBacklog
    ? `${monthlyTarget} do mês + ${previousBacklog} pendentes`
    : `Meta mensal: ${monthlyTarget}`;

  return [targetText, missingText(effectiveTarget - produced), compensation]
    .filter(Boolean)
    .join(". ")
    .replaceAll("..", ".");
}

function syncTargetInputs() {
  syncCompanySettingsInputs();
}

function companyContractFromSetting(setting = {}) {
  return {
    contractFileName: setting.contractFileName || "",
    contractFileType: setting.contractFileType || "",
    contractFileDataUrl: setting.contractFileDataUrl || ""
  };
}

function updateCompanyContractPreview() {
  if (!elements.companyContractFileName) return;

  const setting = {
    ...(getCompanySetting(editingCompanyName || elements.companySelect.value)),
    ...(companyContractDraft || {}),
    contractStartDate: elements.companyContractStartInput?.value || "",
    contractEndDate: elements.companyContractEndInput?.value || ""
  };
  const status = getCompanyContractStatus(setting);
  const fileName = setting.contractFileName || "Nenhum contrato anexado";

  elements.companyContractFileName.textContent = fileName;
  elements.companyContractStatusPreview.textContent = `${status.label}. ${status.detail}`;
  elements.companyContractStatusPreview.dataset.contractTone = status.tone;

  if (elements.companyContractOpenLink) {
    const hasFile = Boolean(setting.contractFileDataUrl);
    elements.companyContractOpenLink.hidden = !hasFile;
    elements.companyContractOpenLink.href = hasFile ? setting.contractFileDataUrl : "#";
  }
}

function syncCompanySettingsInputs() {
  const company = elements.companySelect.value;
  const settings = getCompanySetting(company);

  elements.companySettingsTitle.textContent = company || "Empresa";
  elements.companyNameInput.value = settings.name || company || "";
  elements.companySegmentInput.value = settings.segment || "";
  elements.companyContactInput.value = settings.contact || "";
  elements.companyContactInfoInput.value = settings.contactInfo || "";
  elements.companyNotesInput.value = settings.notes || "";
  elements.targetVideosInput.value = settings.videos || 0;
  elements.targetCreativesInput.value = settings.creatives || 0;
  if (elements.companyContractStartInput) elements.companyContractStartInput.value = settings.contractStartDate || "";
  if (elements.companyContractEndInput) elements.companyContractEndInput.value = settings.contractEndDate || "";
  if (elements.companyContractFileInput) elements.companyContractFileInput.value = "";
  companyContractDraft = companyContractFromSetting(settings);
  updateCompanyContractPreview();
}

function populateControls() {
  const selectedCompany = elements.companySelect.value;
  const companies = getKnownCompanyNames();

  elements.companySelect.innerHTML = companies
    .map((company) => `<option>${company}</option>`)
    .join("");

  if (companies.includes(selectedCompany)) {
    elements.companySelect.value = selectedCompany;
  }

  const materialOptions = MATERIAL_TYPES
    .map((type) => `<option>${type.label}</option>`)
    .join("");
  elements.editMaterialInput.innerHTML = materialOptions;

  refreshMonthOptions();
  refreshDashboardMonthOptions();
  refreshScheduleMonthOptions();
  refreshPendingMonthOptions();
  refreshFinanceMonthOptions();
  refreshQuoteMonthOptions();
}

function refreshMonthOptions() {
  const selectedMonth = elements.monthSelect.value;
  const company = elements.companySelect.value;
  const existingMonths = new Set(getCompanyMonths(company));
  const months = getSelectableMonths(company);
  const latestExistingMonth = [...existingMonths].sort().reverse()[0];
  const preferredMonth = months.includes(selectedMonth)
    ? selectedMonth
    : latestExistingMonth || currentMonthKey();

  elements.monthSelect.innerHTML = months
    .map((month) => `<option value="${month}">${formatMonth(month)}${existingMonths.has(month) ? "" : " (novo)"}</option>`)
    .join("");

  if (months.includes(preferredMonth)) {
    elements.monthSelect.value = preferredMonth;
  }

  syncTargetInputs();
}

function getFinanceRecordMonths() {
  return Object.keys(financialRecords)
    .map((key) => key.split("::").pop())
    .filter(isValidMonth);
}

function getSelectableDashboardMonths() {
  return unique([
    ...monthsUntilCurrent(),
    ...reportData.map((report) => report.month).filter(isValidMonth)
  ])
    .sort()
    .reverse();
}

function refreshDashboardMonthOptions() {
  const months = getSelectableDashboardMonths();
  const preferredMonth = months.includes(selectedDashboardMonth) ? selectedDashboardMonth : currentMonthKey();

  elements.dashboardMonthSelect.innerHTML = months
    .map((month) => `<option value="${month}">${dashboardPeriodLabel(month)}</option>`)
    .join("");

  selectedDashboardMonth = preferredMonth;
  elements.dashboardMonthSelect.value = selectedDashboardMonth;
}

function getSelectableScheduleMonths() {
  return unique([
    ...getSelectableDashboardMonths(),
    ...getPendingBoardMonths(),
    ...Object.keys(scheduleData).map((key) => key.split("::").pop()).filter(isValidMonth)
  ])
    .sort()
    .reverse();
}

function getScheduleCompanyNames() {
  const companies = unique([
    ...getKnownCompanyNames(),
    ...Object.values(scheduleData || {}).map((record) => record?.client)
  ])
    .filter((company) => company && normalizeText(company) !== "luck" && !isDeletedCompanyName(company))
    .sort((a, b) => a.localeCompare(b, "pt-BR"));
  return unique([...companies, "Luck Produtora"]);
}

function refreshScheduleMonthOptions() {
  const companies = getScheduleCompanyNames();
  if (!companies.includes(selectedScheduleCompany)) selectedScheduleCompany = companies[0] || "Alsol Telecom";
  elements.scheduleCompanySelect.innerHTML = companies
    .map((company) => `<option value="${escapeHTML(company)}">${escapeHTML(company)}</option>`)
    .join("");
  elements.scheduleCompanySelect.value = selectedScheduleCompany;

  const { year, monthNumber } = monthYear(selectedScheduleMonth);
  const years = unique([
    String(new Date().getFullYear() - 1),
    String(new Date().getFullYear()),
    String(new Date().getFullYear() + 1),
    ...getSelectableScheduleMonths().map((month) => monthYear(month).year)
  ]).sort();

  elements.scheduleMonthSelect.innerHTML = SCHEDULE_MONTHS
    .map((month) => `<option value="${month.value}">${month.label}</option>`)
    .join("");
  elements.scheduleYearSelect.innerHTML = years
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
  elements.scheduleMonthSelect.value = monthNumber;
  elements.scheduleYearSelect.value = year;
  elements.scheduleTaskTypeInput.innerHTML = SCHEDULE_TYPES
    .map((type) => `<option>${type}</option>`)
    .join("");
  elements.scheduleTaskStatusInput.innerHTML = SCHEDULE_STATUSES
    .map((status) => `<option>${status}</option>`)
    .join("");
}

function getPendingBoardMonths() {
  return Object.keys(pendingBoards)
    .map((key) => key.split("::").pop())
    .filter(isValidMonth);
}

function getSelectablePendingMonths() {
  return unique([...monthsUntilCurrent(), ...getPendingBoardMonths()])
    .sort()
    .reverse();
}

function refreshPendingMonthOptions() {
  const months = getSelectablePendingMonths();
  const preferredMonth = months.includes(selectedPendingMonth) ? selectedPendingMonth : currentMonthKey();

  elements.pendingMonthSelect.innerHTML = months
    .map((month) => `<option value="${month}">${formatMonth(month)}</option>`)
    .join("");

  selectedPendingMonth = preferredMonth;
  elements.pendingMonthSelect.value = selectedPendingMonth;
}

function getSelectableFinanceMonths() {
  return unique([...monthsUntilCurrent(), currentMonthKey(), nextMonthKey(), selectedFinanceMonth, ...getFinanceRecordMonths()])
    .filter(isValidMonth)
    .sort()
    .reverse();
}

function refreshFinanceMonthOptions() {
  const months = getSelectableFinanceMonths();
  const preferredMonth = months.includes(selectedFinanceMonth) ? selectedFinanceMonth : currentMonthKey();

  elements.financeMonthSelect.innerHTML = months
    .map((month) => `<option value="${month}">${formatMonth(month)}</option>`)
    .join("");

  selectedFinanceMonth = preferredMonth;
  elements.financeMonthSelect.value = selectedFinanceMonth;
}

function getQuoteHistoryMonths() {
  return quoteHistory
    .map((item) => item.month)
    .filter(isValidMonth);
}

function getSelectableQuoteMonths() {
  return unique([...monthsUntilCurrent(), currentMonthKey(), selectedQuoteMonth, ...getQuoteHistoryMonths()])
    .filter(isValidMonth)
    .sort()
    .reverse();
}

function refreshQuoteMonthOptions() {
  if (!elements.quoteHistoryMonthSelect) return;

  const months = getSelectableQuoteMonths();
  const preferredMonth = months.includes(selectedQuoteMonth) ? selectedQuoteMonth : currentMonthKey();

  elements.quoteHistoryMonthSelect.innerHTML = months
    .map((month) => `<option value="${month}">${formatMonth(month)}</option>`)
    .join("");

  selectedQuoteMonth = preferredMonth;
  elements.quoteHistoryMonthSelect.value = selectedQuoteMonth;
}

function getVisibleSections(report) {
  const forPrint = isReportPrintMode();
  const query = elements.searchInput?.value.trim().toLowerCase() || "";

  return report.sections
    .map((section) => ({
      ...section,
      rows: section.rows.filter((row) =>
        (!forPrint || shouldPrintReportRow(row, report)) &&
        (!query || [section.label || "Principal", row.topic, row.material, formatDate(row.date)]
          .some((value) => value.toLowerCase().includes(query)))
      )
    }))
    .filter((section) => section.rows.length > 0);
}

function isReportPrintMode() {
  return document.body.classList.contains("printing-report");
}

function shouldPrintReportRow(row, report) {
  return getRowContractMonth(row, report.month) === report.month;
}

function renderAllocationNote(row, report) {
  const contractMonth = getRowContractMonth(row, report.month);

  if (contractMonth === report.month) return "";

  return `<small class="allocation-note">Conta para ${formatMonth(contractMonth)}</small>`;
}

function renderTable(section, report) {
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
                  <td title="${row.topic}">
                    <span class="topic-title">${row.topic}</span>
                    ${renderAllocationNote(row, report)}
                  </td>
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

function renderReceivedCompensations(report) {
  const query = elements.searchInput?.value.trim().toLowerCase() || "";
  const rows = getReceivedCompensations(report.company, report.month)
    .filter(({ report: sourceReport, row }) =>
      !query || [sourceReport.month, formatMonth(sourceReport.month), row.topic, row.material, formatDate(row.date)]
        .some((value) => String(value).toLowerCase().includes(query))
    );

  if (!rows.length) return "";

  return `
    <section class="section-block compensation-section">
      <div class="section-title">
        <h3>Compensações recebidas</h3>
        <span>${rows.length} ${rows.length === 1 ? "item" : "itens"}</span>
      </div>
      <table class="production-table">
        <colgroup><col><col><col><col></colgroup>
        <thead>
          <tr>
            <th>Tema</th>
            <th>Material</th>
            <th>Produzido em</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(({ report: sourceReport, row }) => {
              const material = normalizeMaterial(row.material);
              const meta = materialMeta(material);
              return `
                <tr>
                  <td title="${row.topic}">
                    <span class="topic-title">${row.topic}</span>
                    <small class="allocation-note">Veio de ${formatMonth(sourceReport.month)}</small>
                  </td>
                  <td class="material-cell">
                    <span class="tag" style="--tag-color: ${meta.color}">${material}</span>
                  </td>
                  <td class="date-cell">${formatMonth(sourceReport.month)}</td>
                  <td class="date-cell">${formatDate(row.date)}</td>
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
  const report = getSelectedReport();
  const contractCounts = getContractCountsForMonth(report.company, report.month);
  renderContractSummary();

  elements.statsGrid.innerHTML = MATERIAL_TYPES
    .map((type) => {
      const rawCount = rows.filter((row) => normalizeMaterial(row.material) === type.label).length;
      const count = type.label === "Vídeo (Reels)"
        ? contractCounts.videos
        : type.label === "Criativo (Arte)"
          ? contractCounts.creatives
          : rawCount;
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

function getPendingRows(board) {
  return PENDING_COLUMNS.flatMap((column) =>
    board[column.id].map((card) => {
      const status = card.status || (column.id === "aprovados" ? "done" : "pending");
      const type = PENDING_TYPES.some((item) => item.id === card.category)
        ? card.category
        : column.id === "aprovados"
          ? "avulso"
          : column.id;

      return {
        card,
        columnId: column.id,
        type,
        status
      };
    })
  );
}

function pendingTypeOptions(selectedType) {
  return PENDING_TYPES
    .map((type) => `<option value="${type.id}" ${type.id === selectedType ? "selected" : ""}>${type.label}</option>`)
    .join("");
}

function pendingStatusOptions(selectedStatus) {
  return `
    <option value="pending" ${selectedStatus === "pending" ? "selected" : ""}>Pendente</option>
    <option value="done" ${selectedStatus === "done" ? "selected" : ""}>Concluído</option>
  `;
}

function renderPendingRow(row) {
  const typeMeta = PENDING_TYPES.find((type) => type.id === row.type) || PENDING_TYPES[0];
  const isDone = row.status === "done";

  return `
    <article class="pending-row ${isDone ? "is-done" : ""}">
      <div>
        <strong>${escapeHTML(row.card.title)}</strong>
        <small>${typeMeta.label}</small>
      </div>
      <select data-pending-type="${row.card.id}" aria-label="Tipo da pendência">
        ${pendingTypeOptions(row.type)}
      </select>
      <select class="pending-status-select" data-pending-status="${row.card.id}" aria-label="Status da pendência">
        ${pendingStatusOptions(row.status)}
      </select>
      <button class="row-action danger" type="button" data-pending-delete="${row.card.id}">Excluir</button>
    </article>
  `;
}

function renderPendingBoard() {
  const board = getPendingBoard(selectedPendingMonth);
  const rows = getPendingRows(board);
  const doneCount = rows.filter((row) => row.status === "done").length;
  const pendingCount = rows.length - doneCount;

  elements.pendingMonthTitle.textContent = formatMonth(selectedPendingMonth);
  elements.pendingTitle.textContent = "Pendências - Luck";
  elements.pendingTotal.textContent = `${pendingCount} pendentes`;
  elements.pendingBoard.innerHTML = `
    <section class="pending-overview" aria-label="Resumo das pendências">
      <article>
        <span>Pendentes</span>
        <strong>${pendingCount}</strong>
      </article>
      <article>
        <span>Concluídas</span>
        <strong>${doneCount}</strong>
      </article>
      <article>
        <span>Total</span>
        <strong>${rows.length}</strong>
      </article>
    </section>

    <form class="pending-list-form" data-pending-form>
      <label>
        Trabalho ou projeto
        <input type="text" name="title" placeholder="Ex.: Banner promocional, ajuste de vídeo, campanha avulsa">
      </label>
      <label>
        Tipo
        <select name="type">${pendingTypeOptions("avulso")}</select>
      </label>
      <label>
        Status
        <select name="status">${pendingStatusOptions("pending")}</select>
      </label>
      <button class="export-main-button" type="submit">Adicionar</button>
    </form>

    <section class="pending-list-table" aria-label="Lista de pendências">
      ${rows.length
        ? rows.map(renderPendingRow).join("")
        : `<div class="empty-state">Nenhuma pendência cadastrada na Luck neste mês.</div>`}
    </section>
  `;
}

function financeRecordKey(month) {
  return `luck::${month}`;
}

function getFinanceRecords(month) {
  const key = financeRecordKey(month);
  if (!Array.isArray(financialRecords[key])) financialRecords[key] = [];
  Object.entries(financialRecords).forEach(([legacyKey, records]) => {
    if (legacyKey === key || !legacyKey.endsWith(`::${month}`) || !Array.isArray(records)) return;

    financialRecords[key].push(...records);
    delete financialRecords[legacyKey];
  });
  return financialRecords[key];
}

function financeMonthlyKey(record) {
  return normalizeText(record?.description || "").replace(/\s+/g, " ").trim();
}

function moveDueDateToMonth(dueDate, targetMonth) {
  if (!isValidDate(dueDate)) return "";

  const day = Math.min(Number(dueDate.slice(8, 10)), daysInMonthKey(targetMonth));
  return `${targetMonth}-${String(day).padStart(2, "0")}`;
}

function getFinanceRecurringCandidates(month) {
  if (!isValidMonth(month)) return { sourceMonth: "", records: [] };

  const sourceMonth = previousMonthKey(month);
  const targetMonthlyKeys = new Set(
    getFinanceRecords(month)
      .filter((record) => record.type === "Mensalidade")
      .map(financeMonthlyKey)
  );
  const records = getFinanceRecords(sourceMonth)
    .filter((record) => record.type === "Mensalidade" && record.amount > 0)
    .filter((record) => !targetMonthlyKeys.has(financeMonthlyKey(record)));

  return { sourceMonth, records };
}

function buildRecurringFinanceRecord(record, targetMonth, sourceMonth) {
  return {
    id: `finance-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    description: record.description,
    type: "Mensalidade",
    amount: record.amount,
    dueDate: moveDueDateToMonth(record.dueDate, targetMonth),
    status: "pending",
    recurringFrom: record.id,
    recurringSourceMonth: sourceMonth,
    createdAt: new Date().toISOString()
  };
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(value) || 0);
}

function financeStatusLabel(status) {
  return FINANCE_STATUSES.find((item) => item.value === status)?.label || FINANCE_STATUSES[0].label;
}

function renderFinanceSummary(records) {
  const paid = records
    .filter((record) => record.status === "paid")
    .reduce((sum, record) => sum + record.amount, 0);
  const pending = records
    .filter((record) => record.status !== "paid")
    .reduce((sum, record) => sum + record.amount, 0);
  const total = paid + pending;

  elements.financeTotal.textContent = formatCurrency(total);
  elements.financeSummary.innerHTML = [
    { label: "Recebido", value: paid, className: "is-received" },
    { label: "Pendente", value: pending, className: "is-pending" },
    { label: "Total previsto", value: total, className: "is-forecast" }
  ].map((item) => `
    <article class="finance-summary-card ${item.className}">
      <span>${item.label}</span>
      <strong>${formatCurrency(item.value)}</strong>
    </article>
  `).join("");
}

function renderFinanceRow(record) {
  const details = [
    record.type,
    record.dueDate ? formatDate(record.dueDate) : "",
    record.recurringSourceMonth ? `fixo de ${formatMonth(record.recurringSourceMonth)}` : ""
  ].filter(Boolean).join(" · ");

  return `
    <article class="finance-row">
      <div>
        <strong>${escapeHTML(record.description)}</strong>
        <small>${escapeHTML(details)}</small>
      </div>
      <strong>${formatCurrency(record.amount)}</strong>
      <select data-finance-status="${record.id}" aria-label="Status financeiro">
        ${FINANCE_STATUSES
          .map((status) => `<option value="${status.value}" ${status.value === record.status ? "selected" : ""}>${status.label}</option>`)
          .join("")}
      </select>
      <button class="row-action danger" type="button" data-finance-delete="${record.id}">Excluir</button>
    </article>
  `;
}

function renderFinanceRecurringPrompt() {
  if (!elements.financeRecurringPrompt) return;

  const { sourceMonth, records } = getFinanceRecurringCandidates(selectedFinanceMonth);
  elements.financeRecurringPrompt.hidden = records.length === 0;

  if (!records.length) {
    elements.financeRecurringPrompt.innerHTML = "";
    return;
  }

  const total = records.reduce((sum, record) => sum + record.amount, 0);
  const names = records.slice(0, 4).map((record) => record.description).join(", ");
  const extraCount = Math.max(0, records.length - 4);

  elements.financeRecurringPrompt.innerHTML = `
    <div>
      <span class="eyebrow">Mensalidades fixas</span>
      <strong>${records.length} ${records.length === 1 ? "fixo disponível" : "fixos disponíveis"} de ${formatMonth(sourceMonth)}</strong>
      <p>${escapeHTML(names)}${extraCount ? ` e mais ${extraCount}` : ""}. Total previsto: ${formatCurrency(total)}.</p>
    </div>
    <button class="export-main-button" type="button" data-finance-recurring-add>
      Adicionar fixos
    </button>
  `;
}

function formatDashboardDate(date) {
  const value = new Date(`${date}T00:00:00Z`);
  const day = String(value.getUTCDate()).padStart(2, "0");
  const month = value.toLocaleDateString("pt-BR", { month: "short", timeZone: "UTC" }).replace(".", "").toUpperCase();
  return `${day} ${month}`;
}

function todayDateKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function dateKeyFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  if (!Number.isFinite(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function daysUntilDate(date) {
  const today = new Date(`${todayDateKey()}T00:00:00`);
  const target = new Date(`${date}T00:00:00`);
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function daysUntilLabel(date) {
  const days = daysUntilDate(date);
  if (days === 0) return "Hoje";
  if (days === 1) return "Amanhã";
  return `Faltam ${days} dias`;
}

function isTextEditingTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"], [contenteditable="plaintext-only"]'));
}

function clearStaticTextCaret(target = document.activeElement) {
  if (isTextEditingTarget(target)) return;

  const selection = window.getSelection?.();
  if (selection?.type === "Caret" && selection.rangeCount) {
    selection.removeAllRanges();
  }
}

function syncReminderControls() {
  if (elements.settingsReminderText) {
    elements.settingsReminderText.textContent = reminderSettings.sound
      ? "Avisos visuais ativos com som curto para novas necessidades."
      : "Avisos visuais ativos. O som dos lembretes está silenciado.";
  }

  elements.reminderSoundButtons?.forEach((button) => {
    const isActive = button.dataset.reminderSound === (reminderSettings.sound ? "on" : "off");
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function saveReminderSettings() {
  reminderSettings = normalizeReminderSettings(reminderSettings);
  localStorage.setItem(REMINDER_SETTINGS_STORAGE_KEY, JSON.stringify(reminderSettings));
  saveLocalState();
  scheduleRemoteSave();
  syncReminderControls();
}

function setReminderSound(enabled) {
  reminderSettings.sound = Boolean(enabled);
  saveReminderSettings();
  if (reminderSettings.sound && activeReminders.length) requestReminderSound();
}

function saveReadReminderTimestamps() {
  readReminderTimestamps = normalizeReadReminderTimestamps(readReminderTimestamps);
  localStorage.setItem(REMINDER_READ_STORAGE_KEY, JSON.stringify(readReminderTimestamps));
  saveLocalState();
  scheduleRemoteSave();
  exposeBackupData();
}

function isReminderTemporarilyRead(reminder) {
  const readAt = Number(readReminderTimestamps[reminder.id]);
  return Number.isFinite(readAt)
    && dateKeyFromTimestamp(readAt) === todayDateKey()
    && Date.now() - readAt < REMINDER_READ_TTL_MS;
}

function pruneReadReminderTimestamps(reminders) {
  const reminderIds = new Set(reminders.map((reminder) => reminder.id));
  const next = normalizeReadReminderTimestamps(readReminderTimestamps);

  Object.keys(next).forEach((id) => {
    if (!reminderIds.has(id)) delete next[id];
  });

  readReminderTimestamps = next;
  localStorage.setItem(REMINDER_READ_STORAGE_KEY, JSON.stringify(readReminderTimestamps));
}

function markReminderRead(reminderId) {
  if (!reminderId) return;
  readReminderTimestamps[reminderId] = Date.now();
  saveReadReminderTimestamps();
  renderReminderSystem({ sound: false, visual: false });
}

function reminderLevelRank(level) {
  return { danger: 0, warning: 1, info: 2 }[level] ?? 3;
}

function getOpenPendingReminderRows() {
  const months = unique([...getSelectablePendingMonths(), selectedPendingMonth, currentMonthKey()])
    .filter(isValidMonth)
    .sort()
    .reverse();

  return months.flatMap((month) =>
    getPendingRows(getPendingBoard(month))
      .filter((row) => row.status !== "done")
      .map((row) => ({ ...row, month }))
  );
}

function buildPendingReminders() {
  const rows = getOpenPendingReminderRows();
  if (!rows.length) return [];

  const monthGroups = rows.reduce((groups, row) => {
    groups[row.month] = (groups[row.month] || 0) + 1;
    return groups;
  }, {});
  const monthText = Object.entries(monthGroups)
    .map(([month, count]) => `${count} em ${formatMonth(month).toLowerCase()}`)
    .join(", ");
  const reminders = [{
    id: `pending-summary-${rows.map((row) => row.card.id).sort().join("-")}`,
    level: "danger",
    title: `${rows.length} ${rows.length === 1 ? "pendência aberta" : "pendências abertas"} na Luck`,
    body: `Existem trabalhos em aberto para resolver: ${monthText}.`,
    target: { view: "pendencias", month: rows[0].month }
  }];

  rows.slice(0, 6).forEach((row) => {
    const typeMeta = PENDING_TYPES.find((type) => type.id === row.type) || PENDING_TYPES[0];
    reminders.push({
      id: `pending-${row.card.id}-${row.month}`,
      level: "warning",
      title: row.card.title,
      body: `${typeMeta.label} pendente em ${formatMonth(row.month).toLowerCase()}.`,
      target: { view: "pendencias", month: row.month }
    });
  });

  return reminders;
}

function buildContractReminders() {
  const report = getSelectedReport();
  if (!report || normalizeText(report.company) === "luck") return [];

  const targets = getContractTarget(report.company);
  const counts = getContractCountsForMonth(report.company, report.month);
  const backlog = getPreviousContractBacklog(report.company, report.month);
  const metrics = [
    { key: "videos", label: "vídeos", target: targets.videos || 0, produced: counts.videos, backlog: backlog.videos },
    { key: "creatives", label: "criativos", target: targets.creatives || 0, produced: counts.creatives, backlog: backlog.creatives }
  ];

  return metrics
    .map((metric) => {
      const effectiveTarget = metric.target ? metric.target + metric.backlog : 0;
      const missing = Math.max(0, effectiveTarget - metric.produced);
      if (!missing) return null;

      const targetText = metric.backlog
        ? `${metric.target} do mês + ${metric.backlog} pendentes`
        : `${metric.target} no contrato`;

      return {
        id: `contract-${report.company}-${report.month}-${metric.key}-${missing}`,
        level: "warning",
        title: `${report.company}: faltam ${missing} ${metric.label}`,
        body: `${metric.produced} de ${effectiveTarget} entregues em ${formatMonth(report.month).toLowerCase()} (${targetText}).`,
        target: { view: "relatorios", company: report.company, month: report.month }
      };
    })
    .filter(Boolean);
}

function buildFinanceReminders() {
  const today = todayDateKey();
  const soonLimit = new Date(`${today}T00:00:00`);
  soonLimit.setDate(soonLimit.getDate() + 3);
  const soonKey = `${soonLimit.getFullYear()}-${String(soonLimit.getMonth() + 1).padStart(2, "0")}-${String(soonLimit.getDate()).padStart(2, "0")}`;
  const reminders = [];

  Object.entries(financialRecords).forEach(([key, records]) => {
    const month = key.split("::").pop();
    if (!Array.isArray(records)) return;

    records
      .filter((record) => record.status !== "paid")
      .filter((record) => !record.dueDate || record.dueDate <= soonKey || month === currentMonthKey())
      .slice(0, 4)
      .forEach((record) => {
        const isOverdue = record.dueDate && record.dueDate < today;
        reminders.push({
          id: `finance-${record.id}-${record.status}`,
          level: isOverdue ? "danger" : "info",
          title: isOverdue ? `Financeiro atrasado: ${record.description}` : `Financeiro pendente: ${record.description}`,
          body: `${formatCurrency(record.amount)}${record.dueDate ? ` com vencimento em ${formatDate(record.dueDate)}` : ` em ${formatMonth(month).toLowerCase()}`}.`,
          target: { view: "financeiro", month }
        });
      });
  });

  return reminders;
}

function buildScheduleReminders() {
  const today = todayDateKey();
  const reminders = [];

  Object.values(scheduleData).forEach((record) => {
    if (!record?.tasks?.length) return;
    const client = record.client || "Cliente";

    record.tasks
      .filter((task) => !["Aprovado", "Publicado"].includes(task.status))
      .filter((task) => {
        const days = daysUntilDate(task.date);
        return task.date < today || (days >= 0 && days <= 3);
      })
      .slice(0, 4)
      .forEach((task) => {
        const days = daysUntilDate(task.date);
        const level = task.date < today ? "danger" : days <= 1 ? "warning" : "info";
        reminders.push({
          id: `schedule-${task.id}-${task.date}-${task.status}`,
          level,
          title: task.date < today ? `Cronograma atrasado: ${task.title}` : `Cronograma próximo: ${task.title}`,
          body: `${client} · ${task.type} · ${task.status} · ${task.date < today ? formatDate(task.date) : daysUntilLabel(task.date)}.`,
          target: { view: "cronograma", company: client, month: task.date.slice(0, 7) }
        });
      });
  });

  return reminders;
}

function buildReminders() {
  const reminders = [
    ...buildPendingReminders(),
    ...buildContractReminders(),
    ...buildFinanceReminders(),
    ...buildScheduleReminders()
  ];

  pruneReadReminderTimestamps(reminders);

  return reminders
    .filter((reminder) => !isReminderTemporarilyRead(reminder))
    .sort((a, b) => reminderLevelRank(a.level) - reminderLevelRank(b.level) || a.title.localeCompare(b.title, "pt-BR"))
    .slice(0, 20);
}

function reminderSignature(reminders) {
  return reminders.map((reminder) => reminder.id).join("|");
}

function playReminderSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const audioContext = new AudioContextClass();
    const now = audioContext.currentTime;
    const gain = audioContext.createGain();
    const first = audioContext.createOscillator();
    const second = audioContext.createOscillator();

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
    first.type = "sine";
    second.type = "sine";
    first.frequency.setValueAtTime(740, now);
    second.frequency.setValueAtTime(980, now + 0.12);
    first.connect(gain);
    second.connect(gain);
    gain.connect(audioContext.destination);
    first.start(now);
    first.stop(now + 0.18);
    second.start(now + 0.14);
    second.stop(now + 0.34);
    setTimeout(() => audioContext.close(), 520);
  } catch {
    pendingReminderSound = false;
  }
}

function requestReminderSound() {
  if (!reminderSettings.sound) return;
  if (!reminderSoundUnlocked) {
    pendingReminderSound = true;
    return;
  }
  pendingReminderSound = false;
  playReminderSound();
}

function unlockReminderSound() {
  reminderSoundUnlocked = true;
  if (pendingReminderSound && activeReminders.length) requestReminderSound();
}

function renderReminderDialog() {
  if (!elements.reminderList || !elements.reminderEmpty) return;

  elements.reminderEmpty.hidden = activeReminders.length > 0;
  elements.reminderList.innerHTML = activeReminders.map((reminder) => `
    <article class="reminder-item ${reminder.level}">
      <div>
        <strong>${escapeHTML(reminder.title)}</strong>
        <small>${escapeHTML(reminder.body)}</small>
      </div>
      <div class="reminder-item-actions">
        <button class="secondary-button" type="button" data-reminder-open="${escapeHTML(reminder.id)}">Abrir</button>
        <button class="secondary-button reminder-read-button" type="button" data-reminder-read="${escapeHTML(reminder.id)}">Lido</button>
      </div>
    </article>
  `).join("");
}

function renderReminderSystem(options = {}) {
  if (!elements.reminderButton || !elements.reminderBadge) return;

  activeReminders = buildReminders();
  const count = activeReminders.length;
  const signature = reminderSignature(activeReminders);
  const firstReminder = activeReminders[0];

  elements.reminderBadge.textContent = count > 99 ? "99+" : String(count);
  elements.reminderButton.classList.toggle("has-none", count === 0);
  elements.reminderButton.title = count
    ? `${count} ${count === 1 ? "lembrete ativo" : "lembretes ativos"}`
    : "Nenhum lembrete ativo";

  if (elements.reminderToast) {
    const showToast = options.visual !== false && count > 0 && reminderSettings.visual && dismissedReminderSignature !== signature;
    elements.reminderToast.hidden = !showToast;
    if (showToast && firstReminder) {
      elements.reminderToastCount.textContent = String(count);
      elements.reminderToastTitle.textContent = firstReminder.title;
      elements.reminderToastText.textContent = firstReminder.body;
    }
  }

  if (count > 0 && signature && signature !== lastReminderSignature && options.sound !== false) {
    requestReminderSound();
  }

  lastReminderSignature = signature;
  syncReminderControls();
  renderReminderDialog();
}

function dismissReminderToast() {
  dismissedReminderSignature = reminderSignature(activeReminders);
  sessionStorage.setItem("luck-reminder-dismissed-signature", dismissedReminderSignature);
  if (elements.reminderToast) elements.reminderToast.hidden = true;
}

function openReminderDialog() {
  dismissReminderToast();
  renderReminderDialog();
  openDialogSmooth(elements.reminderDialog);
}

function activateReminder(reminderId) {
  const reminder = activeReminders.find((item) => item.id === reminderId);
  if (!reminder?.target) return;

  const { view, company, month } = reminder.target;
  if (view === "pendencias" && isValidMonth(month)) {
    selectedPendingMonth = month;
    localStorage.setItem(PENDING_MONTH_STORAGE_KEY, selectedPendingMonth);
    refreshPendingMonthOptions();
    renderPendingBoard();
  }

  if (view === "financeiro" && isValidMonth(month)) {
    selectedFinanceMonth = month;
    localStorage.setItem(FINANCE_MONTH_STORAGE_KEY, selectedFinanceMonth);
    refreshFinanceMonthOptions();
    renderFinance();
  }

  if (view === "cronograma") {
    if (company) selectedScheduleCompany = normalizeCompanyName(company);
    if (isValidMonth(month)) selectedScheduleMonth = month;
    localStorage.setItem(SCHEDULE_COMPANY_STORAGE_KEY, selectedScheduleCompany);
    localStorage.setItem(SCHEDULE_MONTH_STORAGE_KEY, selectedScheduleMonth);
    refreshScheduleMonthOptions();
    renderSchedule();
  }

  if (view === "relatorios") {
    if (company && [...elements.companySelect.options].some((option) => option.value === company)) {
      elements.companySelect.value = company;
    }
    refreshMonthOptions();
    if (isValidMonth(month) && [...elements.monthSelect.options].some((option) => option.value === month)) {
      elements.monthSelect.value = month;
    }
    render();
  }

  closeDialogSmooth(elements.reminderDialog, () => setActiveView(view, { updateUrl: true }));
}

function dashboardPeriodLabel(month) {
  const { year } = monthYear(month);
  return `${toTitleCase(formatMonth(month))} ${year}`;
}

function dashboardMaterialType(material) {
  const normalized = normalizeMaterial(material);
  if (normalized === "Vídeo (Reels)") return "video";
  if (normalized === "Vídeo Editado") return "edited";
  if (normalized === "Publicação (Fotos)") return "photo";
  if (normalized === "Flyer") return "flyer";
  if (normalized === "Impresso") return "print";
  return "creative";
}

function getDashboardCompanyNames() {
  return unique([
    ...Object.keys(companySettings || {}),
    ...reportData.map((report) => report.company)
  ])
    .map(normalizeCompanyName)
    .filter((company) => company && normalizeText(company) !== "luck")
    .sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function getDashboardDeliveries(month) {
  return reportData
    .filter((report) => report.month === month && normalizeText(report.company) !== "luck")
    .flatMap((report) => report.sections.flatMap((section) =>
      section.rows.map((row) => ({
        ...row,
        company: report.company,
        section: section.label,
        material: normalizeMaterial(row.material)
      }))
    ));
}

function countDashboardMaterial(deliveries, material) {
  return deliveries.filter((delivery) => delivery.material === material).length;
}

function getDashboardCommemorativeOpportunities(month, deliveries) {
  const todayKey = todayDateKey();
  const opportunities = new Map();
  const addOpportunity = (item) => {
    if (!item.date?.startsWith(month) || item.date < todayKey) return;
    const key = `${item.date}|${normalizeText(item.topic)}`;
    const existing = opportunities.get(key) || {
      date: item.date,
      topic: item.topic,
      companies: new Set(),
      materials: new Set(),
      registered: false
    };

    if (item.company) existing.companies.add(item.company);
    if (item.material) existing.materials.add(item.material);
    existing.registered = existing.registered || Boolean(item.registered);
    opportunities.set(key, existing);
  };

  COMMEMORATIVE_DATE_LIBRARY.forEach((item) => addOpportunity({ ...item, registered: false }));
  deliveries
    .filter((delivery) => normalizeSection(delivery.section) === "Datas Comemorativas")
    .forEach((delivery) => addOpportunity({
      date: delivery.date,
      topic: delivery.topic,
      company: delivery.company,
      material: delivery.material,
      registered: true
    }));

  return [...opportunities.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function renderDashboardCalendar(monthKey, deliveries) {
  const [year, month] = monthKey.split("-").map(Number);
  const firstDay = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const eventsByDay = deliveries.reduce((groups, delivery) => {
    if (!delivery.date?.startsWith(monthKey)) return groups;
    const event = {
      date: delivery.date,
      title: `${delivery.company}: ${delivery.topic}`,
      type: dashboardMaterialType(delivery.material)
    };
    const day = Number(event.date.slice(-2));
    groups[day] ||= [];
    groups[day].push(event);
    return groups;
  }, {});
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const cells = [];

  weekDays.forEach((day) => cells.push(`<div class="hub-calendar-weekday">${day}</div>`));
  for (let index = 0; index < firstDay; index += 1) {
    cells.push('<div class="hub-calendar-day is-empty" aria-hidden="true"></div>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const events = eventsByDay[day] || [];
    const eventTitle = events.map((event) => event.title).join(", ");
    cells.push(`
      <div class="hub-calendar-day ${events.length ? "has-event" : ""}" title="${escapeHTML(eventTitle)}">
        <strong>${day}</strong>
        <div class="hub-calendar-dots">
          ${events.map((event) => `<i class="calendar-dot ${event.type}"></i>`).join("")}
        </div>
      </div>
    `);
  }

  elements.dashboardCalendarGrid.innerHTML = cells.join("");
  const latestDeliveries = [...deliveries]
    .filter((delivery) => delivery.date?.startsWith(monthKey))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  elements.dashboardCalendarAgenda.innerHTML = latestDeliveries.length
    ? latestDeliveries.map((delivery) => `
      <article class="hub-agenda-item">
        <time>${formatDashboardDate(delivery.date)}</time>
        <span class="calendar-dot ${dashboardMaterialType(delivery.material)}"></span>
        <strong>${escapeHTML(delivery.company)}: ${escapeHTML(delivery.topic)}</strong>
      </article>
    `).join("")
    : '<div class="hub-empty-message">Nenhuma entrega registrada neste mês.</div>';
}

function scheduleKey(company = selectedScheduleCompany, month = selectedScheduleMonth) {
  return `${normalizeCompanyName(company)}::${month}`;
}

function getScheduleRecord(company = selectedScheduleCompany, month = selectedScheduleMonth) {
  const key = scheduleKey(company, month);
  if (!scheduleData[key]) {
    scheduleData[key] = normalizeScheduleRecord({ client: company, month }, company, month);
  }
  scheduleData[key].client = normalizeCompanyName(scheduleData[key].client || company);
  scheduleData[key].month = month;
  return scheduleData[key];
}

function saveScheduleData() {
  saveLocalState();
  scheduleRemoteSave();
  exposeBackupData();
  renderReminderSystem();
}

function getScheduleCommemorativeDates(record) {
  return [...record.commemorativeDates].sort((a, b) => a.date.localeCompare(b.date));
}

function scheduleTaskClass(type) {
  const normalized = normalizeText(type);
  if (normalized.includes("video") || normalized.includes("reels")) return "is-video";
  if (normalized.includes("criativo") || normalized.includes("post") || normalized.includes("carrossel")) return "is-creative";
  if (normalized.includes("story")) return "is-story";
  return "is-date";
}

function scheduleClientLogoMarkup(company) {
  const logoDataUrl = getCompanySetting(company).logoDataUrl;
  if (logoDataUrl) {
    return `<img src="${escapeHTML(logoDataUrl)}" alt="Logo ${escapeHTML(company)}">`;
  }
  const normalized = normalizeText(company);
  if (normalized.includes("alsol")) return "<strong>alsol</strong><small>TELECOM</small>";
  if (normalized.includes("posto")) return "<strong>SJ</strong><small>São João</small>";
  if (normalized.includes("construtora")) return "<strong>RC</strong><small>Construtora</small>";
  if (normalized.includes("luck")) return "<strong>LUCK</strong><small>Produtora</small>";
  return `<strong>${escapeHTML(company)}</strong>`;
}

function getScheduleLogoScale(company = selectedScheduleCompany) {
  const scale = Number(getCompanySetting(company).logoScale || 100);
  return Number.isFinite(scale)
    ? Math.min(COMPANY_LOGO_SCALE_MAX, Math.max(COMPANY_LOGO_SCALE_MIN, scale))
    : 100;
}

function getScheduleTheme(company = selectedScheduleCompany) {
  return normalizeScheduleTheme(getCompanySetting(company).theme);
}

function applyScheduleThemeToElement(element, theme) {
  if (!element) return;

  element.style.setProperty("--schedule-title-color", theme.titleColor);
  element.style.setProperty("--schedule-solid-color", theme.solidColor);
  element.style.setProperty("--schedule-gradient-start", theme.gradientStart);
  element.style.setProperty("--schedule-gradient-end", theme.gradientEnd);
}

function applyScheduleTheme(company = selectedScheduleCompany) {
  const theme = getScheduleTheme(company);

  applyScheduleThemeToElement(elements.schedulePrintArea, theme);
  applyScheduleThemeToElement(elements.scheduleThemePreview, theme);
}

function setScheduleThemeInputs(theme) {
  const fields = [
    [elements.scheduleTitleColorInput, elements.scheduleTitleHexInput, theme.titleColor],
    [elements.scheduleSolidColorInput, elements.scheduleSolidHexInput, theme.solidColor],
    [elements.scheduleGradientStartInput, elements.scheduleGradientStartHexInput, theme.gradientStart],
    [elements.scheduleGradientEndInput, elements.scheduleGradientEndHexInput, theme.gradientEnd]
  ];

  fields.forEach(([colorInput, hexInput, value]) => {
    if (colorInput) colorInput.value = value;
    if (hexInput) hexInput.value = value;
  });
}

function renderScheduleThemeManager() {
  const theme = getScheduleTheme(selectedScheduleCompany);
  setScheduleThemeInputs(theme);
  applyScheduleTheme(selectedScheduleCompany);
}

function applyScheduleLogoScale(company = selectedScheduleCompany) {
  const scale = getScheduleLogoScale(company);
  const cssScale = String(scale / 100);

  elements.schedulePrintArea?.style.setProperty("--schedule-logo-scale", cssScale);
  elements.scheduleLogoPreview?.style.setProperty("--schedule-logo-scale", cssScale);
  if (elements.scheduleLogoSizeInput) elements.scheduleLogoSizeInput.value = String(scale);
  if (elements.scheduleLogoSizeValue) elements.scheduleLogoSizeValue.textContent = `${scale}%`;
}

function renderScheduleLogoManager() {
  const setting = getCompanySetting(selectedScheduleCompany);
  if (!elements.scheduleLogoPreview) return;

  elements.scheduleLogoPreview.innerHTML = setting.logoDataUrl
    ? `<img src="${escapeHTML(setting.logoDataUrl)}" alt="Logo ${escapeHTML(selectedScheduleCompany)}">`
    : scheduleClientLogoMarkup(selectedScheduleCompany);
  elements.scheduleLogoPreview.classList.toggle("has-image", Boolean(setting.logoDataUrl));
  applyScheduleLogoScale(selectedScheduleCompany);
}

function saveScheduleClientLogo(dataUrl) {
  const setting = getCompanySetting(selectedScheduleCompany);
  setting.logoDataUrl = dataUrl;
  companySettings[selectedScheduleCompany] = normalizeCompanySetting(selectedScheduleCompany, setting);
  saveCompanySettings();
  renderSchedule();
}

function handleScheduleLogoChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (file.type !== "image/png") {
    showSaveDialog("Formato inválido", "Envie a logo em PNG para manter qualidade e transparência no PDF.");
    elements.scheduleLogoInput.value = "";
    return;
  }

  if (file.size > COMPANY_LOGO_MAX_SIZE) {
    showSaveDialog("Arquivo muito grande", "Use uma logo PNG com até 2,5 MB.");
    elements.scheduleLogoInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    saveScheduleClientLogo(String(reader.result || ""));
    elements.scheduleLogoInput.value = "";
    showSaveDialog("Logo adicionada", `A logo de ${selectedScheduleCompany} foi aplicada ao cronograma.`);
  });
  reader.readAsDataURL(file);
}

function removeScheduleClientLogo() {
  saveScheduleClientLogo("");
  if (elements.scheduleLogoInput) elements.scheduleLogoInput.value = "";
  showSaveDialog("Logo removida", `O cronograma voltou a usar o nome de ${selectedScheduleCompany}.`);
}

function updateScheduleLogoScale(value, options = {}) {
  const setting = getCompanySetting(selectedScheduleCompany);
  setting.logoScale = Number(value);
  companySettings[selectedScheduleCompany] = normalizeCompanySetting(selectedScheduleCompany, setting);
  applyScheduleLogoScale(selectedScheduleCompany);
  if (options.save) saveCompanySettings();
}

function updateScheduleTheme(partialTheme, options = {}) {
  const setting = getCompanySetting(selectedScheduleCompany);
  const nextTheme = normalizeScheduleTheme({
    ...setting.theme,
    ...partialTheme
  });

  setting.theme = nextTheme;
  companySettings[selectedScheduleCompany] = normalizeCompanySetting(selectedScheduleCompany, setting);
  setScheduleThemeInputs(nextTheme);
  applyScheduleTheme(selectedScheduleCompany);
  if (options.save) {
    saveCompanySettings();
    renderScheduleCalendar(selectedScheduleMonth, getScheduleRecord());
  }
}

function updateScheduleThemeField(key, value, options = {}) {
  const currentTheme = getScheduleTheme(selectedScheduleCompany);
  const nextColor = normalizeHexColor(value, currentTheme[key] || DEFAULT_SCHEDULE_THEME[key]);
  updateScheduleTheme({ [key]: nextColor }, options);
}

function resetScheduleTheme() {
  updateScheduleTheme({ ...DEFAULT_SCHEDULE_THEME }, { save: true });
  showSaveDialog("Cores restauradas", "O cronograma voltou para as cores padrão da Luck.");
}

function renderScheduleCalendar(monthKey, record) {
  const [year, month] = monthKey.split("-").map(Number);
  const firstDay = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const previousMonthDays = new Date(Date.UTC(year, month - 1, 0)).getUTCDate();
  const dateItems = getScheduleCommemorativeDates(record);
  const holidays = record.holidays || [];
  const tasksByDate = record.tasks.reduce((groups, task) => {
    groups[task.date] ||= [];
    groups[task.date].push(task);
    return groups;
  }, {});
  const datesByDate = dateItems.reduce((groups, item) => {
    groups[item.date] ||= [];
    groups[item.date].push(item);
    return groups;
  }, {});
  const holidaysByDate = holidays.reduce((groups, item) => {
    groups[item.date] ||= [];
    groups[item.date].push(item);
    return groups;
  }, {});
  const weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  const cells = weekDays.map((day) => `<div class="schedule-weekday">${day}</div>`);
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  for (let index = 0; index < totalCells; index += 1) {
    const dayOffset = index - firstDay + 1;
    const isCurrentMonth = dayOffset >= 1 && dayOffset <= daysInMonth;
    const displayDay = isCurrentMonth
      ? dayOffset
      : dayOffset < 1
        ? previousMonthDays + dayOffset
        : dayOffset - daysInMonth;
    const date = `${monthKey}-${String(dayOffset).padStart(2, "0")}`;
    const tasks = isCurrentMonth ? tasksByDate[date] || [] : [];
    const commemoratives = isCurrentMonth ? datesByDate[date] || [] : [];
    const dayHolidays = isCurrentMonth ? holidaysByDate[date] || [] : [];
    const dayClasses = [
      "schedule-day",
      isCurrentMonth ? "" : "is-outside",
      tasks.length ? "has-task" : "",
      tasks.length ? scheduleTaskClass(tasks[0].type) : ""
    ].filter(Boolean).join(" ");

    cells.push(`
      <div class="${dayClasses}" ${isCurrentMonth ? `data-schedule-date="${date}"` : ""}>
        <span class="schedule-day-number">${displayDay}</span>
        <div class="schedule-day-content">
          ${tasks.map((task) => `
            <button class="schedule-task-chip ${scheduleTaskClass(task.type)}" type="button" draggable="true" data-schedule-task="${task.id}" title="${escapeHTML(task.description || task.title)}">
              <strong>${escapeHTML(task.type)}</strong>
              <span>${escapeHTML(task.title)}</span>
            </button>
          `).join("")}
          ${commemoratives.map((item) => `<span class="schedule-date-chip">${escapeHTML(item.title)}</span>`).join("")}
          ${dayHolidays.map((item) => `<span class="schedule-holiday-chip">${escapeHTML(item.city ? `${item.city}: ${item.description}` : item.description)}</span>`).join("")}
        </div>
      </div>
    `);
  }

  elements.scheduleCalendarGrid.innerHTML = cells.join("");
}

function getScheduleMonthBounds(monthKey = selectedScheduleMonth) {
  const [year, month] = monthKey.split("-").map(Number);
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return {
    first: `${monthKey}-01`,
    last: `${monthKey}-${String(lastDay).padStart(2, "0")}`
  };
}

function syncScheduleDateBounds() {
  const bounds = getScheduleMonthBounds();
  [
    elements.scheduleTaskDateInput,
    elements.scheduleDateInput,
    elements.scheduleHolidayDateInput
  ].forEach((input) => {
    if (!input) return;
    input.min = bounds.first;
    input.max = bounds.last;
    if (!input.value || input.value < bounds.first || input.value > bounds.last) {
      input.value = bounds.first;
    }
  });
}

function resetScheduleTaskForm() {
  editingScheduleTaskId = null;
  elements.scheduleFormTitle.textContent = "Novo conteúdo";
  elements.scheduleTaskForm.reset();
  elements.scheduleTaskDateInput.value = `${selectedScheduleMonth}-01`;
  elements.scheduleTaskTypeInput.value = "Reels";
  elements.scheduleTaskStatusInput.value = "Planejado";
  elements.scheduleCancelEditButton.hidden = true;
}

function getScheduleTaskById(taskId) {
  const record = getScheduleRecord();
  return record.tasks.find((task) => task.id === taskId) || null;
}

function fillScheduleTaskForm(task) {
  if (!task) return;
  editingScheduleTaskId = task.id;
  elements.scheduleFormTitle.textContent = "Editar conteúdo";
  elements.scheduleTaskDateInput.value = task.date;
  elements.scheduleTaskTypeInput.value = task.type;
  elements.scheduleTaskTitleInput.value = task.title;
  elements.scheduleTaskDescriptionInput.value = task.description;
  elements.scheduleTaskStatusInput.value = task.status;
  elements.scheduleTaskNotesInput.value = task.notes;
  elements.scheduleCancelEditButton.hidden = false;
  elements.scheduleTaskTitleInput.focus();
}

function syncScheduleSelectedMonth() {
  const year = elements.scheduleYearSelect.value || monthYear(selectedScheduleMonth).year;
  const monthNumber = elements.scheduleMonthSelect.value || monthYear(selectedScheduleMonth).monthNumber;
  selectedScheduleMonth = `${year}-${monthNumber}`;
  localStorage.setItem(SCHEDULE_MONTH_STORAGE_KEY, selectedScheduleMonth);
}

function saveScheduleTask(event) {
  event.preventDefault();
  const task = normalizeScheduleTask({
    id: editingScheduleTaskId || undefined,
    date: elements.scheduleTaskDateInput.value,
    type: elements.scheduleTaskTypeInput.value,
    title: elements.scheduleTaskTitleInput.value,
    description: elements.scheduleTaskDescriptionInput.value,
    client: selectedScheduleCompany,
    status: elements.scheduleTaskStatusInput.value,
    notes: elements.scheduleTaskNotesInput.value
  });

  if (task.date.slice(0, 7) !== selectedScheduleMonth) {
    selectedScheduleMonth = task.date.slice(0, 7);
    refreshScheduleMonthOptions();
  }

  const record = getScheduleRecord();
  const index = record.tasks.findIndex((item) => item.id === task.id);
  if (index >= 0) {
    record.tasks[index] = task;
  } else {
    record.tasks.push(task);
  }

  saveScheduleData();
  resetScheduleTaskForm();
  syncScheduleDateBounds();
  renderSchedule();
}

function duplicateScheduleTask(taskId) {
  const record = getScheduleRecord();
  const task = record.tasks.find((item) => item.id === taskId);
  if (!task) return;
  record.tasks.push(normalizeScheduleTask({
    ...task,
    id: `schedule-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    title: `${task.title} (cópia)`
  }));
  saveScheduleData();
  renderSchedule();
}

function deleteScheduleTask(taskId) {
  const record = getScheduleRecord();
  record.tasks = record.tasks.filter((task) => task.id !== taskId);
  if (editingScheduleTaskId === taskId) resetScheduleTaskForm();
  saveScheduleData();
  renderSchedule();
}

function publishScheduleTask(taskId) {
  const record = getScheduleRecord();
  const task = record.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.status = "Publicado";
  if (editingScheduleTaskId === taskId) resetScheduleTaskForm();
  saveScheduleData();
  renderSchedule();
}

function moveScheduleTask(taskId, date) {
  const record = getScheduleRecord();
  const task = record.tasks.find((item) => item.id === taskId);
  if (!task || !isValidDate(date) || date.slice(0, 7) !== selectedScheduleMonth) return;
  task.date = date;
  saveScheduleData();
  renderSchedule();
}

function addScheduleDate(event) {
  event.preventDefault();
  const record = getScheduleRecord();
  record.commemorativeDates.push(normalizeScheduleDateItem({
    date: elements.scheduleDateInput.value,
    title: elements.scheduleDateTitleInput.value
  }));
  elements.scheduleDateTitleInput.value = "";
  saveScheduleData();
  renderSchedule();
}

function addScheduleHoliday(event) {
  event.preventDefault();
  const record = getScheduleRecord();
  record.holidays.push(normalizeScheduleHoliday({
    date: elements.scheduleHolidayDateInput.value,
    city: elements.scheduleHolidayCityInput.value,
    description: elements.scheduleHolidayDescriptionInput.value
  }));
  elements.scheduleHolidayCityInput.value = "";
  elements.scheduleHolidayDescriptionInput.value = "";
  saveScheduleData();
  renderSchedule();
}

function saveScheduleNotes() {
  const record = getScheduleRecord();
  record.notes = elements.scheduleGeneralNotesInput.value.trim();
  saveScheduleData();
  renderScheduleLists(record);
}

function renderScheduleLists(record) {
  const dates = getScheduleCommemorativeDates(record);
  elements.scheduleDatesList.innerHTML = dates.length
    ? dates.map((item) => `
      <p>
        <span>${item.date.slice(-2)} - ${escapeHTML(item.title)}</span>
        <button type="button" data-schedule-date-delete="${item.id}">Excluir</button>
      </p>
    `).join("")
    : "<p>Sem datas comemorativas cadastradas.</p>";
  elements.scheduleHolidaysList.innerHTML = record.holidays.length
    ? record.holidays.map((item) => `
      <p>
        <span>${escapeHTML(item.city ? `${item.city} — ${formatDate(item.date)}: ${item.description}` : `${formatDate(item.date)}: ${item.description}`)}</span>
        <button type="button" data-schedule-holiday-delete="${item.id}">Excluir</button>
      </p>
    `).join("")
    : "<p>Sem feriados cadastrados.</p>";
  elements.scheduleGeneralNotesText.textContent = record.notes || "Sem observações cadastradas.";
  elements.scheduleGeneralNotesInput.value = record.notes || "";
}

function renderScheduleAgenda(record) {
  const sortedTasks = [...record.tasks].sort((a, b) => `${a.date}-${a.title}`.localeCompare(`${b.date}-${b.title}`, "pt-BR"));
  elements.scheduleAgendaMeta.textContent = `${sortedTasks.length} ${sortedTasks.length === 1 ? "item" : "itens"}`;
  elements.scheduleAgendaList.innerHTML = sortedTasks.length
    ? sortedTasks.map((task) => `
      <article class="schedule-agenda-item">
        <time>${formatDashboardDate(task.date)}</time>
        <span class="calendar-dot ${scheduleTaskClass(task.type).replace("is-", "")}"></span>
        <div>
          <strong>${escapeHTML(task.title)}</strong>
          <small>${escapeHTML(task.type)} · ${escapeHTML(task.status)}${task.description ? ` · ${escapeHTML(task.description)}` : ""}</small>
          <div class="schedule-row-actions">
            <button type="button" data-schedule-edit="${task.id}">Editar</button>
            <button type="button" data-schedule-duplicate="${task.id}">Duplicar</button>
            <button type="button" data-schedule-delete="${task.id}">Excluir</button>
            <button class="schedule-publish-button" type="button" data-schedule-publish="${task.id}" ${task.status === "Publicado" ? "disabled" : ""}>Publicado</button>
          </div>
        </div>
      </article>
    `).join("")
    : '<div class="hub-empty-message">Nenhum conteúdo planejado para este cliente e mês.</div>';
}

function renderSchedule() {
  if (!elements.scheduleView) return;

  const record = getScheduleRecord();
  const dates = getScheduleCommemorativeDates(record);
  const videoCount = record.tasks.filter((task) => scheduleTaskClass(task.type) === "is-video").length;
  const creativeCount = record.tasks.filter((task) => scheduleTaskClass(task.type) === "is-creative").length;
  const summary = [
    { label: "Conteúdos planejados", value: record.tasks.length, tone: "green" },
    { label: "Vídeos/Reels", value: videoCount, tone: "red" },
    { label: "Criativos", value: creativeCount, tone: "orange" },
    { label: "Datas importantes", value: dates.length + record.holidays.length, tone: "blue" }
  ];

  elements.schedulePrintMonth.textContent = dashboardPeriodLabel(selectedScheduleMonth).toUpperCase();
  elements.scheduleClientLogo.innerHTML = scheduleClientLogoMarkup(selectedScheduleCompany);
  renderScheduleLogoManager();
  renderScheduleThemeManager();
  elements.scheduleCompanySelect.value = selectedScheduleCompany;
  elements.scheduleMonthSelect.value = monthYear(selectedScheduleMonth).monthNumber;
  elements.scheduleYearSelect.value = monthYear(selectedScheduleMonth).year;
  syncScheduleDateBounds();
  elements.scheduleSummary.innerHTML = summary.map((item) => `
    <article class="hub-kpi ${item.tone}">
      <span>${escapeHTML(item.label)}</span>
      <strong>${item.value}</strong>
    </article>
  `).join("");

  renderScheduleCalendar(selectedScheduleMonth, record);
  renderScheduleAgenda(record);
  renderScheduleLists(record);
  renderScheduleParsePreview();
}

function schedulePreviewColor(type) {
  const taskClass = scheduleTaskClass(type);
  const theme = getScheduleTheme(selectedScheduleCompany);
  if (taskClass === "is-video") return theme.gradientStart;
  if (taskClass === "is-creative") return theme.solidColor;
  if (taskClass === "is-story") return "#16a34a";
  return "#334155";
}

function inferScheduleType(line) {
  const normalized = normalizeText(line);

  if (normalized.includes("data comemorativa") || normalized.includes("feriado") || normalized.includes("dia dos") || normalized.includes("dia das")) return "Data comemorativa";
  if (normalized.includes("reels")) return "Reels";
  if (normalized.includes("video")) return "Vídeo";
  if (normalized.includes("carrossel")) return "Carrossel";
  if (normalized.includes("story") || normalized.includes("stories")) return "Story";
  if (normalized.includes("post") || normalized.includes("estatico") || normalized.includes("feed")) return "Post estático";
  if (normalized.includes("arte") || normalized.includes("criativo") || normalized.includes("grid")) return "Criativo";

  return "Criativo";
}

function inferScheduleQuantity(line, type) {
  const normalized = normalizeText(line)
    .replace(/\b\d{1,2}[./-]\d{1,2}(?:[./-]\d{2,4})?\b/g, "")
    .replace(/\bdia\s+\d{1,2}\b/g, "");
  const gridMatch = normalized.match(/\bgrid\b.*?\b(\d+)\s+(?:artes|criativos|posts|pecas|pecas graficas)\b/);
  const quantityMatch = normalized.match(/\b(\d+)\s+(?:artes|criativos|posts|reels|videos|conteudos|stories|carrosseis)\b/);
  const rawQuantity = gridMatch?.[1] || quantityMatch?.[1];
  const quantity = Number(rawQuantity || 1);

  if (type === "Data comemorativa") return 1;
  return Number.isFinite(quantity) ? Math.max(1, Math.min(quantity, 20)) : 1;
}

function cleanScheduleTitle(line) {
  return line
    .replace(/\b\d{1,2}(?:[./-]|\s+)\d{1,2}(?:[./-]\d{2,4})?\b/g, "")
    .replace(/\bdia\s+\d{1,2}\b/gi, "")
    .replace(/\b\d{1,2}\s+de\s+(janeiro|fevereiro|março|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/gi, "")
    .replace(/\b(\d+)\s+(artes|criativos|posts|reels|videos|vídeos|conteudos|conteúdos|stories|carrosseis|carrosséis)\b/gi, "")
    .replace(/\b(video|vídeo|reels|arte|artes|criativo|criativos|post\s+est[aá]tico|post|story|stories|carrossel|grid|data comemorativa|conte[uú]do|conte[uú]dos|planejado|planejada|produzir|ser[aá]|fazer)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^[\s:;,.–—-]+|[\s:;,.–—-]+$/g, "")
    .trim();
}

function splitScheduleQuickText(text) {
  return String(text || "")
    .split(/\n|;/)
    .flatMap((line) => {
      const compactLine = line.replace(/\s+/g, " ").trim();
      if (!compactLine) return [];
      return compactLine
        .split(/(?=\s+(?:\d{1,2}[./-]\d{1,2}(?:[./-]\d{2,4})?|\bdia\s+\d{1,2}\b))/gi)
        .map((chunk) => chunk.trim())
        .filter(Boolean);
    });
}

function parseScheduleText(text, monthKey) {
  const chunks = splitScheduleQuickText(text);
  const parsed = [];
  const seen = new Set();

  chunks.forEach((chunk) => {
    const type = inferScheduleType(chunk);
    const quantity = inferScheduleQuantity(chunk, type);
    const date = isValidDate(inferDate(chunk, monthKey)) ? inferDate(chunk, monthKey) : `${monthKey}-01`;
    const title = fixPortuguese(cleanScheduleTitle(chunk)) || type;

    for (let index = 1; index <= quantity; index += 1) {
      const numberedTitle = quantity > 1 ? `${title} ${index}/${quantity}` : title;
      const key = `${date}|${type}|${numberedTitle}`;
      if (seen.has(key)) continue;
      seen.add(key);
      parsed.push({
        date,
        type,
        title: numberedTitle,
        description: "",
        status: "Planejado",
        notes: ""
      });
    }
  });

  return parsed.sort((a, b) => `${a.date}-${a.title}`.localeCompare(`${b.date}-${b.title}`, "pt-BR"));
}

function renderScheduleParsePreview() {
  if (!elements.scheduleParsePreview || !elements.scheduleAddParsedButton) return;

  elements.scheduleAddParsedButton.disabled = parsedScheduleItems.length === 0;

  if (!parsedScheduleItems.length) {
    elements.scheduleParsePreview.innerHTML = '<div class="empty-state">Escreva uma ou mais linhas para planejar conteúdos no cronograma.</div>';
    return;
  }

  elements.scheduleParsePreview.innerHTML = parsedScheduleItems
    .map((item, index) => `
      <div class="parse-row schedule-parse-row">
        <span class="section-chip">${formatDate(item.date)}</span>
        <strong title="${escapeHTML(item.title)}">${escapeHTML(item.title)}</strong>
        <select class="parse-material schedule-parse-select" data-schedule-preview-type="${index}" style="--tag-color: ${schedulePreviewColor(item.type)}">
          ${SCHEDULE_TYPES
            .map((type) => `<option value="${type}" ${type === item.type ? "selected" : ""}>${type}</option>`)
            .join("")}
        </select>
        <select class="schedule-parse-status" data-schedule-preview-status="${index}">
          ${SCHEDULE_STATUSES
            .map((status) => `<option value="${status}" ${status === item.status ? "selected" : ""}>${status}</option>`)
            .join("")}
        </select>
      </div>
    `)
    .join("");
}

function parseScheduleQuickText() {
  parsedScheduleItems = parseScheduleText(elements.scheduleQuickTextInput.value, selectedScheduleMonth);
  renderScheduleParsePreview();
}

function addParsedScheduleItems() {
  if (!parsedScheduleItems.length) return;

  parsedScheduleItems.forEach((item) => {
    const targetMonth = isValidMonth(item.date.slice(0, 7)) ? item.date.slice(0, 7) : selectedScheduleMonth;
    const record = getScheduleRecord(selectedScheduleCompany, targetMonth);
    record.tasks.push(normalizeScheduleTask({
      date: item.date,
      type: item.type,
      title: item.title,
      description: item.description,
      client: selectedScheduleCompany,
      status: item.status,
      notes: item.notes
    }));
    record.tasks.sort((a, b) => `${a.date}-${a.title}`.localeCompare(`${b.date}-${b.title}`, "pt-BR"));
  });

  saveScheduleData();
  parsedScheduleItems = [];
  elements.scheduleQuickTextInput.value = "";
  renderSchedule();
}

function renderDashboard() {
  if (!elements.dashboardView) return;

  const month = selectedDashboardMonth;
  const period = dashboardPeriodLabel(month);
  const deliveries = getDashboardDeliveries(month);
  const companies = getDashboardCompanyNames();
  const companiesWithDelivery = companies.filter((company) => deliveries.some((delivery) => delivery.company === company));
  const videos = countDashboardMaterial(deliveries, "Vídeo (Reels)");
  const creatives = countDashboardMaterial(deliveries, "Criativo (Arte)");
  const photos = countDashboardMaterial(deliveries, "Publicação (Fotos)");
  const avulsos = deliveries.filter((delivery) => normalizeSection(delivery.section) === "Solicitação avulsa").length;
  const indicators = [
    { label: "Clientes com entrega", value: companiesWithDelivery.length, tone: "orange" },
    { label: "Itens entregues no mês", value: deliveries.length, tone: "green" },
    { label: "Vídeos entregues", value: videos, tone: "red" },
    { label: "Criativos entregues", value: creatives, tone: "slate" },
    { label: "Publicações com fotos", value: photos, tone: "purple" },
    { label: "Solicitações avulsas", value: avulsos, tone: "blue" }
  ];

  elements.dashboardCalendarMonth.textContent = period;
  elements.dashboardClientsMeta.textContent = `${companiesWithDelivery.length} com entrega`;
  elements.dashboardProductionMeta.textContent = `${deliveries.length} entregas`;
  elements.dashboardKpis.innerHTML = indicators.map((indicator) => `
    <article class="hub-kpi ${indicator.tone}">
      <span>${escapeHTML(indicator.label)}</span>
      <strong>${indicator.value}</strong>
    </article>
  `).join("");

  const clientColors = ["#ea5a00", "#475467", "#667085", "#344054", "#7a5af8", "#24965a"];
  elements.dashboardClientsGrid.innerHTML = companies.length
    ? companies.map((company, index) => {
      const clientDeliveries = deliveries.filter((delivery) => delivery.company === company);
      const target = getContractTarget(company);
      const contractCounts = getContractCountsForMonth(company, month);
      const previousBacklog = getPreviousContractBacklog(company, month);
      const videoTarget = target.videos ? target.videos + previousBacklog.videos : 0;
      const creativeTarget = target.creatives ? target.creatives + previousBacklog.creatives : 0;
      const contractTarget = videoTarget + creativeTarget;
      const contractDelivered = contractCounts.videos + contractCounts.creatives;
      const actualVideos = countDashboardMaterial(clientDeliveries, "Vídeo (Reels)");
      const actualCreatives = countDashboardMaterial(clientDeliveries, "Criativo (Arte)");
      const otherMaterials = Math.max(0, clientDeliveries.length - actualVideos - actualCreatives);
      const percent = contractTarget
        ? Math.min(100, Math.round((contractDelivered / contractTarget) * 100))
        : clientDeliveries.length ? 100 : 0;
      const accent = clientColors[index % clientColors.length];
      const progressText = contractTarget
        ? `${contractDelivered} de ${contractTarget} entregas contratuais`
        : `${clientDeliveries.length} itens entregues`;
      const displayTotal = contractTarget ? contractDelivered : clientDeliveries.length;

      return `
        <article class="hub-client-summary" style="--client-accent: ${accent}">
          <header>
            <span class="hub-client-mark">${escapeHTML(company.slice(0, 2).toUpperCase())}</span>
            <h3>${escapeHTML(company)}</h3>
            <strong class="hub-client-total">${displayTotal}</strong>
          </header>
          <div class="hub-client-delivery-copy">
            <span>${escapeHTML(progressText)}</span>
            <b>${percent}%</b>
          </div>
          <div class="hub-bar-track"><span style="width: ${percent}%; background: ${accent}"></span></div>
          <small>${contractCounts.videos} vídeos · ${contractCounts.creatives} criativos · ${otherMaterials} outros materiais</small>
        </article>
      `;
    }).join("")
    : '<div class="hub-empty-message">Nenhum cliente cadastrado.</div>';

  renderDashboardCalendar(month, deliveries);

  const production = MATERIAL_TYPES.map((item) => ({
    label: item.label,
    delivered: countDashboardMaterial(deliveries, item.label),
    color: item.color
  }));
  const largestProduction = Math.max(1, ...production.map((item) => item.delivered));
  elements.dashboardProductionBars.innerHTML = production.map((item) => {
    const percent = Math.round((item.delivered / largestProduction) * 100);
    return `
      <article class="hub-production-row" style="--bar-color: ${item.color}">
        <header>
          <strong>${escapeHTML(item.label)}</strong>
          <span>${item.delivered} entregues</span>
        </header>
        <div class="hub-bar-track"><span style="width: ${percent}%"></span></div>
        <small>Quantidade registrada nos relatórios de ${formatMonth(month).toLowerCase()}.</small>
      </article>
    `;
  }).join("");

  const alerts = [];
  const pendingRows = getPendingRows(getPendingBoard(month)).filter((row) => row.status !== "done");
  if (pendingRows.length) {
    alerts.push({ level: "danger", text: `${pendingRows.length} ${pendingRows.length === 1 ? "pendência aberta" : "pendências abertas"} na Luck em ${formatMonth(month).toLowerCase()}.` });
  }

  companies.forEach((company) => {
    const clientDeliveries = deliveries.filter((delivery) => delivery.company === company && delivery.date);
    if (!clientDeliveries.length) {
      alerts.push({ level: "warning", text: `${company} ainda não possui entregas registradas em ${formatMonth(month).toLowerCase()}.` });
      return;
    }

    const lastDate = [...clientDeliveries].sort((a, b) => b.date.localeCompare(a.date))[0].date;
    const elapsedDays = Math.floor((Date.now() - new Date(`${lastDate}T12:00:00`).getTime()) / 86400000);
    if (month === currentMonthKey() && elapsedDays > 5) {
      alerts.push({ level: "warning", text: `${company}: última entrega registrada há ${elapsedDays} dias.` });
    }
  });

  if (!alerts.length) {
    alerts.push({ level: "success", text: `Nenhuma pendência operacional encontrada nos dados de ${formatMonth(month).toLowerCase()}.` });
  }

  elements.dashboardAlertsList.innerHTML = alerts.slice(0, 6).map((alert) => `
    <article class="hub-alert ${alert.level}">
      <span class="hub-alert-indicator"></span>
      <strong>${escapeHTML(alert.text)}</strong>
    </article>
  `).join("");

  const commemorativeOpportunities = getDashboardCommemorativeOpportunities(month, deliveries);
  const registeredFuture = commemorativeOpportunities.filter((item) => item.registered).length;
  elements.dashboardSmartCallout.textContent = commemorativeOpportunities.length
    ? `${commemorativeOpportunities.length} ${commemorativeOpportunities.length === 1 ? "data futura" : "datas futuras"} neste mês${registeredFuture ? `, ${registeredFuture} já ${registeredFuture === 1 ? "tem" : "têm"} material registrado` : " para planejar"}.`
    : "Nenhuma data comemorativa futura cadastrada para este mês.";
  elements.dashboardDatesList.innerHTML = commemorativeOpportunities.length
    ? commemorativeOpportunities.map((item) => {
      const companies = [...item.companies];
      const materials = [...item.materials];
      const statusClass = item.registered ? "registered" : "planned";
      const statusLabel = item.registered ? "Registrado" : "A planejar";
      return `
      <article class="hub-date-item">
        <time>${formatDashboardDate(item.date)}</time>
        <div>
          <h3>${escapeHTML(item.topic)}</h3>
          <p>${companies.length ? `Clientes com material: ${escapeHTML(companies.join(", "))}` : "Clientes: definir"}</p>
          <small>${escapeHTML(daysUntilLabel(item.date))}${materials.length ? ` · ${escapeHTML(materials.join(", "))}` : ""}</small>
          <span class="hub-date-status ${statusClass}">${statusLabel}</span>
        </div>
      </article>
    `;
    }).join("")
    : '<div class="hub-empty-message">Sem datas comemorativas futuras neste período.</div>';
}

function renderFinance() {
  const records = getFinanceRecords(selectedFinanceMonth);

  elements.financeMonthTitle.textContent = formatMonth(selectedFinanceMonth);
  elements.financeTitle.textContent = "Financeiro - Luck";
  renderFinanceSummary(records);
  renderFinanceRecurringPrompt();
  elements.financeList.innerHTML = records.length
    ? records.map(renderFinanceRow).join("")
    : `<div class="empty-state">Nenhum lançamento financeiro da Luck neste mês.</div>`;
}

function quoteFallback(value, fallback = "A definir") {
  return String(value || "").trim() || fallback;
}

function renderQuoteText(value, fallback) {
  return escapeHTML(quoteFallback(value, fallback)).replace(/\n/g, "<br>");
}

function readQuoteCalculator() {
  return normalizeQuoteCalculator({
    videoQty: elements.quoteVideoQtyInput.value,
    videoPrice: elements.quoteVideoPriceInput.value,
    artQty: elements.quoteArtQtyInput.value,
    artPrice: elements.quoteArtPriceInput.value,
    includeManagement: elements.quoteIncludeManagementInput.checked,
    managementPrice: elements.quoteManagementInput.value,
    bonusDates: elements.quoteBonusDatesInput.checked,
    bonusPrint: elements.quoteBonusPrintInput.checked,
    discountPercent: elements.quoteDiscountInput.value
  });
}

function calculateQuotePackage(calculator = quoteData.calculator) {
  const calc = normalizeQuoteCalculator(calculator);
  const videoTotal = calc.videoQty * calc.videoPrice;
  const artTotal = calc.artQty * calc.artPrice;
  const managementTotal = calc.includeManagement ? calc.managementPrice : 0;
  const subtotal = videoTotal + artTotal + managementTotal;
  const discountValue = subtotal * (calc.discountPercent / 100);
  const total = Math.max(0, subtotal - discountValue);

  return {
    calc,
    videoTotal,
    artTotal,
    managementTotal,
    subtotal,
    discountValue,
    total
  };
}

function quoteItemLabel(quantity, singular, plural) {
  return `${quantity} ${quantity === 1 ? singular : plural}`;
}

function getQuoteBonusLabels(calc) {
  return [
    calc.bonusDates ? "Datas comemorativas" : "",
    calc.bonusPrint ? "Materiais impressos" : ""
  ].filter(Boolean);
}

function buildQuoteDescriptionFromCalculator(calculator) {
  const result = calculateQuotePackage(calculator);
  const { calc } = result;
  const lines = ["Pacote de produção mensal:"];

  if (calc.videoQty) {
    lines.push(`- ${quoteItemLabel(calc.videoQty, "vídeo/reels", "vídeos/reels")} x ${formatCurrency(calc.videoPrice)} = ${formatCurrency(result.videoTotal)}`);
  }

  if (calc.artQty) {
    lines.push(`- ${quoteItemLabel(calc.artQty, "criativo/arte", "criativos/artes")} x ${formatCurrency(calc.artPrice)} = ${formatCurrency(result.artTotal)}`);
  }

  if (calc.includeManagement) {
    lines.push(`- Gerenciamento e planejamento do perfil = ${formatCurrency(result.managementTotal)}`);
  }

  const bonus = getQuoteBonusLabels(calc);
  if (bonus.length) {
    lines.push("");
    lines.push(`Bônus inclusos sem custo adicional: ${bonus.join(" e ")}.`);
  }

  lines.push("");
  lines.push(`Subtotal: ${formatCurrency(result.subtotal)}`);
  if (calc.discountPercent > 0) {
    lines.push(`Desconto: ${calc.discountPercent}% (${formatCurrency(result.discountValue)})`);
  }
  lines.push(`Valor final: ${formatCurrency(result.total)}`);

  return lines.join("\n");
}

function buildQuoteTermsFromCalculator(calculator) {
  const result = calculateQuotePackage(calculator);
  const { calc } = result;
  const terms = [
    "Esta proposta contempla apenas os serviços descritos no escopo.",
    "A produção será iniciada após aprovação do orçamento e alinhamento das informações necessárias.",
    "Ajustes adicionais, novas demandas ou alterações fora do combinado podem gerar novo orçamento."
  ];

  if (calc.discountPercent > 0) {
    terms.push(`Foi aplicado desconto comercial de ${calc.discountPercent}% sobre o subtotal, resultando no investimento final de ${formatCurrency(result.total)}.`);
  }

  return terms.join("\n");
}

function syncQuoteCalculatorInputs() {
  const calc = normalizeQuoteCalculator(quoteData.calculator);
  elements.quoteVideoQtyInput.value = calc.videoQty || "";
  elements.quoteVideoPriceInput.value = calc.videoPrice ? String(calc.videoPrice) : "";
  elements.quoteArtQtyInput.value = calc.artQty || "";
  elements.quoteArtPriceInput.value = calc.artPrice ? String(calc.artPrice) : "";
  elements.quoteManagementInput.value = calc.managementPrice ? String(calc.managementPrice) : "";
  elements.quoteDiscountInput.value = calc.discountPercent ? String(calc.discountPercent) : "";
  elements.quoteIncludeManagementInput.checked = calc.includeManagement;
  elements.quoteBonusDatesInput.checked = calc.bonusDates;
  elements.quoteBonusPrintInput.checked = calc.bonusPrint;
}

function renderQuoteCalculatorSummary(calculator = quoteData.calculator) {
  const result = calculateQuotePackage(calculator);
  elements.quoteCalculatorSubtotal.textContent = formatCurrency(result.subtotal);
  elements.quoteCalculatorDiscount.textContent = formatCurrency(result.discountValue);
  elements.quoteCalculatorTotal.textContent = formatCurrency(result.total);
}

function readQuoteForm() {
  return normalizeQuoteData({
    client: elements.quoteClientInput.value,
    service: elements.quoteServiceInput.value,
    description: elements.quoteDescriptionInput.value,
    amount: elements.quoteAmountInput.value,
    issuedAt: quoteData.issuedAt || todayDateKey(),
    validUntil: elements.quoteValidUntilInput.value,
    deadline: elements.quoteDeadlineInput.value,
    payment: elements.quotePaymentInput.value,
    calculator: quoteData.calculator,
    terms: elements.quoteTermsInput.value
  });
}

function syncQuoteForm() {
  elements.quoteClientInput.value = quoteData.client;
  elements.quoteServiceInput.value = quoteData.service;
  elements.quoteAmountInput.value = quoteData.amount ? String(quoteData.amount) : "";
  elements.quoteValidUntilInput.value = quoteData.validUntil;
  elements.quoteDeadlineInput.value = quoteData.deadline;
  elements.quotePaymentInput.value = quoteData.payment;
  elements.quoteDescriptionInput.value = quoteData.description;
  elements.quoteTermsInput.value = quoteData.terms;
}

function renderQuoteDocument() {
  const issuedAt = quoteData.issuedAt || todayDateKey();

  elements.quoteDocumentTotal.textContent = formatCurrency(quoteData.amount);
  elements.quoteDocumentClient.textContent = quoteFallback(quoteData.client, "Cliente não informado");
  elements.quoteDocumentDate.textContent = `Emitido em ${formatDate(issuedAt)}`;
  elements.quoteDocumentService.textContent = quoteFallback(quoteData.service, "Serviço não informado");
  elements.quoteDocumentDescription.innerHTML = renderQuoteText(quoteData.description, "Preencha a descrição do serviço para montar a proposta.");
  elements.quoteDocumentValidUntil.textContent = quoteData.validUntil ? formatDate(quoteData.validUntil) : "A definir";
  const hasDeadline = Boolean(String(quoteData.deadline || "").trim());
  if (elements.quoteDocumentDeadlineCard) {
    elements.quoteDocumentDeadlineCard.hidden = !hasDeadline;
  }
  elements.quoteDocumentDeadline.textContent = hasDeadline ? quoteData.deadline : "";
  elements.quoteDocumentPayment.textContent = quoteFallback(quoteData.payment);
  elements.quoteDocumentTerms.innerHTML = renderQuoteText(quoteData.terms, "Preencha os termos para finalizar o orçamento.");
}

function getQuoteHistoryForMonth(month = selectedQuoteMonth) {
  return quoteHistory
    .filter((item) => item.month === month)
    .sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
}

function quoteHistoryTitle(item) {
  return quoteFallback(item.title || item.data?.client || item.data?.service, "Orçamento sem título");
}

function renderQuoteHistoryItem(item) {
  const data = normalizeQuoteData(item.data);
  const isActive = selectedQuoteHistoryId === item.id;
  const details = [
    data.service || "Serviço não informado",
    item.issuedAt ? `emitido em ${formatDate(item.issuedAt)}` : "",
    data.amount ? formatCurrency(data.amount) : "sem valor definido"
  ].filter(Boolean).join(" · ");

  return `
    <article class="quote-history-item ${isActive ? "is-active" : ""}">
      <div>
        <strong>${escapeHTML(quoteHistoryTitle(item))}</strong>
        <small>${escapeHTML(details)}</small>
      </div>
      <div class="quote-history-actions">
        <button class="secondary-button" type="button" data-quote-history-view="${escapeHTML(item.id)}">Visualizar</button>
        <button class="secondary-button" type="button" data-quote-history-export="${escapeHTML(item.id)}">Exportar</button>
        <button class="danger-button" type="button" data-quote-history-delete="${escapeHTML(item.id)}">Excluir</button>
      </div>
    </article>
  `;
}

function renderQuoteHistory() {
  if (!elements.quoteHistoryList) return;

  refreshQuoteMonthOptions();
  const items = getQuoteHistoryForMonth(selectedQuoteMonth);
  elements.quoteHistoryCount.textContent = `${items.length} ${items.length === 1 ? "orçamento" : "orçamentos"}`;
  elements.quoteHistoryList.innerHTML = items.length
    ? items.map(renderQuoteHistoryItem).join("")
    : `<div class="empty-state">Nenhum orçamento salvo em ${formatMonth(selectedQuoteMonth).toLowerCase()}.</div>`;
}

function renderQuote() {
  syncQuoteForm();
  syncQuoteCalculatorInputs();
  renderQuoteCalculatorSummary();
  renderQuoteDocument();
  renderQuoteHistory();
}

function handleQuoteDraftInput() {
  quoteData = readQuoteForm();
  saveLocalState();
  renderQuoteDocument();
}

function saveQuoteForm(event) {
  event.preventDefault();
  quoteData = readQuoteForm();
  saveQuoteToHistory();
  saveQuoteData();
  renderQuote();
  showSaveDialog("Orçamento salvo", `O orçamento foi salvo no histórico de ${formatMonth(selectedQuoteMonth).toLowerCase()}.`);
}

function clearQuoteForm() {
  quoteData = normalizeQuoteData({});
  selectedQuoteHistoryId = null;
  saveQuoteData();
  renderQuote();
  showSaveDialog("Orçamento limpo", "A página de orçamento voltou para o modelo inicial.");
}

function saveQuoteToHistory() {
  const now = new Date().toISOString();
  const snapshot = normalizeQuoteData({
    ...quoteData,
    issuedAt: quoteData.issuedAt || todayDateKey()
  });
  const existingIndex = selectedQuoteHistoryId
    ? quoteHistory.findIndex((item) => item.id === selectedQuoteHistoryId)
    : -1;
  const previous = existingIndex >= 0 ? quoteHistory[existingIndex] : null;
  const item = normalizeQuoteHistoryItem({
    ...previous,
    id: previous?.id || `quote-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    month: selectedQuoteMonth,
    title: snapshot.client || snapshot.service || "Orçamento sem título",
    issuedAt: snapshot.issuedAt,
    createdAt: previous?.createdAt || now,
    updatedAt: now,
    data: snapshot
  });

  if (existingIndex >= 0) {
    quoteHistory.splice(existingIndex, 1, item);
  } else {
    quoteHistory.unshift(item);
  }

  selectedQuoteHistoryId = item.id;
  quoteHistory = normalizeQuoteHistory(quoteHistory);
}

function handleQuoteCalculatorInput() {
  quoteData = normalizeQuoteData({
    ...quoteData,
    calculator: readQuoteCalculator()
  });
  renderQuoteCalculatorSummary();
  saveLocalState();
}

function applyQuoteCalculatorToForm() {
  const calculator = readQuoteCalculator();
  const result = calculateQuotePackage(calculator);
  const current = readQuoteForm();
  quoteData = normalizeQuoteData({
    ...current,
    calculator,
    service: "Pacote de produção mensal",
    amount: result.total,
    description: buildQuoteDescriptionFromCalculator(calculator),
    terms: buildQuoteTermsFromCalculator(calculator)
  });
  saveQuoteData();
  renderQuote();
  showSaveDialog("Cálculo aplicado", "O valor final com desconto foi aplicado ao orçamento.");
}

function exportQuotePdf() {
  setActiveView("orcamentos", { updateUrl: false, scroll: false });
  quoteData = readQuoteForm();
  saveLocalState();
  renderQuoteDocument();
  document.body.classList.add("printing-quote");
  window.requestAnimationFrame(() => window.print());
}

function findQuoteHistoryItem(id) {
  return quoteHistory.find((item) => item.id === id) || null;
}

function loadQuoteHistoryItem(id) {
  const item = findQuoteHistoryItem(id);
  if (!item) return null;

  selectedQuoteHistoryId = item.id;
  selectedQuoteMonth = item.month;
  quoteData = normalizeQuoteData(item.data);
  saveLocalState();
  renderQuote();
  return item;
}

function revealQuotePreview() {
  if (!elements.quotePrintArea) return;

  elements.quotePrintArea.classList.remove("is-previewing");
  void elements.quotePrintArea.offsetWidth;
  elements.quotePrintArea.classList.add("is-previewing");
  elements.quotePrintArea.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}

function exportQuoteHistoryItem(id) {
  const item = loadQuoteHistoryItem(id);
  if (!item) return;

  window.setTimeout(() => exportQuotePdf(), 80);
}

function deleteQuoteHistoryItem(id) {
  const item = findQuoteHistoryItem(id);
  if (!item) return;

  const confirmed = window.confirm(`Excluir o orçamento "${quoteHistoryTitle(item)}" do histórico?`);
  if (!confirmed) return;

  quoteHistory = quoteHistory.filter((quote) => quote.id !== id);
  if (selectedQuoteHistoryId === id) {
    selectedQuoteHistoryId = null;
  }
  saveQuoteData();
  renderQuoteHistory();
  showSaveDialog("Orçamento excluído", "O orçamento foi removido do histórico.");
}

function handleQuoteHistoryClick(event) {
  const viewButton = event.target.closest("[data-quote-history-view]");
  if (viewButton) {
    const item = loadQuoteHistoryItem(viewButton.dataset.quoteHistoryView);
    if (item) revealQuotePreview();
    return;
  }

  const exportButton = event.target.closest("[data-quote-history-export]");
  if (exportButton) {
    exportQuoteHistoryItem(exportButton.dataset.quoteHistoryExport);
    return;
  }

  const deleteButton = event.target.closest("[data-quote-history-delete]");
  if (deleteButton) {
    deleteQuoteHistoryItem(deleteButton.dataset.quoteHistoryDelete);
  }
}

function renderContractSummary() {
  const report = getSelectedReport();
  const targets = getContractTarget(report.company);
  const counts = getContractCountsForMonth(report.company, report.month);
  const previousBacklog = getPreviousContractBacklog(report.company, report.month);
  const monthlyVideoTarget = targets.videos || 0;
  const monthlyCreativeTarget = targets.creatives || 0;
  const videoTarget = monthlyVideoTarget ? monthlyVideoTarget + previousBacklog.videos : 0;
  const creativeTarget = monthlyCreativeTarget ? monthlyCreativeTarget + previousBacklog.creatives : 0;

  elements.contractVideoCount.textContent = videoTarget ? `${counts.videos} / ${videoTarget}` : `${counts.videos}`;
  elements.contractCreativeCount.textContent = creativeTarget ? `${counts.creatives} / ${creativeTarget}` : `${counts.creatives}`;
  elements.contractVideoDetail.textContent = contractDetailText(
    monthlyVideoTarget,
    previousBacklog.videos,
    counts.videos,
    compensationText(report.company, report.month, "videos")
  );
  elements.contractCreativeDetail.textContent = contractDetailText(
    monthlyCreativeTarget,
    previousBacklog.creatives,
    counts.creatives,
    compensationText(report.company, report.month, "creatives")
  );
  elements.contractVideoProgress.style.width = `${progressPercent(counts.videos, videoTarget)}%`;
  elements.contractCreativeProgress.style.width = `${progressPercent(counts.creatives, creativeTarget)}%`;
  syncCompensationAction(report);
}

function progressPercent(current, target) {
  if (!target) return current > 0 ? 100 : 0;
  return Math.min(100, Math.round((current / target) * 100));
}

function render() {
  const report = getSelectedReport();
  const sections = getVisibleSections(report);
  const reportTables = sections.map((section) => renderTable(section, report)).join("");
  const compensationTables = renderReceivedCompensations(report);

  elements.monthTitle.textContent = formatMonth(report.month);
  elements.reportTitle.textContent = report.title;
  elements.reportSections.innerHTML = reportTables || compensationTables
    ? `${reportTables}${compensationTables}`
    : `<div class="empty-state">Nenhum item encontrado para os filtros atuais.</div>`;
  renderDashboard();
  renderSchedule();
  renderSummary(sections);
  renderCompanyList();
  renderPendingBoard();
  renderFinance();
  renderQuote();
  renderReminderSystem();
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function inferMaterial(line) {
  const normalized = normalizeText(line);

  if (
    normalized.includes("video editado") ||
    normalized.includes("edicao de video") ||
    normalized.includes("editar video") ||
    normalized.includes("ajuste de video")
  ) {
    return "Vídeo Editado";
  }
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
    if (inferMaterial(source) === "Vídeo Editado") continue;

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

function getContractMonthOptions(company, sourceMonth) {
  return unique([...getContractMonthsForCompany(company), ...monthsUntilCurrent(), sourceMonth])
    .filter((month) => month <= sourceMonth)
    .sort()
    .reverse();
}

function fillEditContractMonthOptions(found) {
  const contractMonth = getRowContractMonth(found.row, found.report.month);

  elements.editContractMonthInput.innerHTML = getContractMonthOptions(found.report.company, found.report.month)
    .map((month) => {
      const suffix = month === found.report.month ? " (mês da produção)" : "";
      return `<option value="${month}">${formatMonth(month)}${suffix}</option>`;
    })
    .join("");
  elements.editContractMonthInput.value = contractMonth;
}

function openEditItem(itemId) {
  const found = findItem(itemId);
  if (!found) return;

  editingItemId = itemId;
  elements.editSectionInput.value = found.section.label;
  elements.editTopicInput.value = found.row.topic;
  elements.editMaterialInput.value = found.row.material;
  elements.editDateInput.value = found.row.date;
  fillEditContractMonthOptions(found);
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
    date: elements.editDateInput.value,
    contractMonth: elements.editContractMonthInput.value === found.report.month
      ? undefined
      : elements.editContractMonthInput.value
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

function findPendingCard(cardId) {
  const board = getSelectedPendingBoard();

  for (const column of PENDING_COLUMNS) {
    const index = board[column.id].findIndex((card) => card.id === cardId);
    if (index !== -1) return { board, columnId: column.id, index, card: board[column.id][index] };
  }

  return null;
}

function addPendingCard(type, title, status = "pending") {
  const cleanTitle = fixPortuguese(String(title || "").trim());
  if (!cleanTitle) return;

  const board = getSelectedPendingBoard();
  const nextType = PENDING_TYPES.some((item) => item.id === type) ? type : "avulso";
  const nextStatus = status === "done" ? "done" : "pending";
  const columnId = nextStatus === "done" ? "aprovados" : nextType;

  board[columnId].push({
    id: `pending-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    title: cleanTitle,
    category: nextType,
    status: nextStatus,
    createdAt: new Date().toISOString()
  });

  savePendingBoards();
  renderPendingBoard();
  renderReminderSystem();
}

function updatePendingCard(cardId, updates = {}) {
  const found = findPendingCard(cardId);
  if (!found) return;

  const nextType = PENDING_TYPES.some((item) => item.id === updates.type)
    ? updates.type
    : found.card.category || (found.columnId === "aprovados" ? "avulso" : found.columnId);
  const nextStatus = updates.status || found.card.status || (found.columnId === "aprovados" ? "done" : "pending");
  const nextColumnId = nextStatus === "done" ? "aprovados" : nextType;

  found.board[found.columnId].splice(found.index, 1);
  found.card.category = nextType;
  found.card.status = nextStatus;
  found.board[nextColumnId].push(found.card);

  savePendingBoards();
  renderPendingBoard();
  renderReminderSystem();
}

function removePendingCard(cardId) {
  const found = findPendingCard(cardId);
  if (!found) return;

  found.board[found.columnId].splice(found.index, 1);
  savePendingBoards();
  renderPendingBoard();
  renderReminderSystem();
}

function findCompanyByName(name, ignoredName = "") {
  const normalizedName = normalizeText(normalizeCompanyName(name));
  const normalizedIgnoredName = normalizeText(normalizeCompanyName(ignoredName));

  return getKnownCompanyNames().find((company) => {
    const normalizedCompany = normalizeText(company);
    return normalizedCompany === normalizedName && normalizedCompany !== normalizedIgnoredName;
  });
}

function renameCompanyReferences(oldName, nextName) {
  if (oldName === nextName) return;

  reportData.forEach((report) => {
    if (report.company !== oldName) return;

    report.company = nextName;
    report.title = `Relatório de Produção - ${nextName}`;
  });

  delete companySettings[oldName];
  delete contractTargets[oldName];
}

function readCompanySettingsForm(companyName) {
  const videos = Number(elements.targetVideosInput.value);
  const creatives = Number(elements.targetCreativesInput.value);
  const existingSetting = getCompanySetting(editingCompanyName || elements.companySelect.value);
  const contractDraft = companyContractDraft || companyContractFromSetting(existingSetting);

  return normalizeCompanySetting(companyName, {
    name: companyName,
    segment: elements.companySegmentInput.value,
    contact: elements.companyContactInput.value,
    contactInfo: elements.companyContactInfoInput.value,
    notes: elements.companyNotesInput.value,
    logoDataUrl: existingSetting.logoDataUrl || "",
    logoScale: existingSetting.logoScale || 100,
    theme: existingSetting.theme || DEFAULT_SCHEDULE_THEME,
    contractFileName: contractDraft.contractFileName || "",
    contractFileType: contractDraft.contractFileType || "",
    contractFileDataUrl: contractDraft.contractFileDataUrl || "",
    contractStartDate: elements.companyContractStartInput?.value || "",
    contractEndDate: elements.companyContractEndInput?.value || "",
    videos: Number.isFinite(videos) ? videos : 0,
    creatives: Number.isFinite(creatives) ? creatives : 0
  });
}

function saveCompanySettingsForm(event) {
  event.preventDefault();

  const oldName = editingCompanyName || elements.companySelect.value;
  const nextName = normalizeCompanyName(elements.companyNameInput.value);

  if (!nextName) {
    showSaveDialog("Nome obrigatório", "Informe o nome da empresa para salvar a configuração.");
    return;
  }

  const contractStartDate = elements.companyContractStartInput?.value || "";
  const contractEndDate = elements.companyContractEndInput?.value || "";
  if (contractStartDate && contractEndDate && contractStartDate > contractEndDate) {
    showSaveDialog("Vigência inválida", "A data final do contrato precisa ser igual ou posterior à data inicial.");
    return;
  }

  const duplicate = findCompanyByName(nextName, oldName);
  if (duplicate) {
    showSaveDialog("Empresa já existe", `${duplicate} já está cadastrada. Escolha outro nome.`);
    return;
  }

  const selectedMonth = elements.monthSelect.value || currentMonthKey();
  const settings = readCompanySettingsForm(nextName);

  restoreDeletedCompanyName(nextName);
  renameCompanyReferences(oldName, nextName);
  companySettings[nextName] = settings;
  contractTargets[nextName] = {
    videos: settings.videos,
    creatives: settings.creatives
  };

  ensureReport(nextName, selectedMonth, { save: false });
  saveCompanySettings();
  populateControls();
  elements.companySelect.value = nextName;
  refreshMonthOptions();
  if ([...elements.monthSelect.options].some((option) => option.value === selectedMonth)) {
  elements.monthSelect.value = selectedMonth;
  }
  syncCompanySettingsInputs();
  render();
  closeDialogSmooth(elements.companySettingsDialog, () => {
    showSaveDialog("Empresa salva", `As configurações de ${nextName} foram atualizadas.`);
  });
}

function openCompanySettingsDialog(company = elements.companySelect.value) {
  const normalizedCompany = normalizeCompanyName(company);
  if (!normalizedCompany) return;

  editingCompanyName = normalizedCompany;
  if ([...elements.companySelect.options].some((option) => option.value === normalizedCompany)) {
    elements.companySelect.value = normalizedCompany;
  }
  refreshMonthOptions();
  syncCompanySettingsInputs();
  openDialogSmooth(elements.companySettingsDialog);
}

function closeCompanySettingsDialog() {
  closeDialogSmooth(elements.companySettingsDialog, () => {
    editingCompanyName = "";
    companyContractDraft = null;
    syncCompanySettingsInputs();
  });
}

function selectCompanyFromList(company) {
  const normalizedCompany = normalizeCompanyName(company);
  if (!normalizedCompany) return;

  if ([...elements.companySelect.options].some((option) => option.value === normalizedCompany)) {
    elements.companySelect.value = normalizedCompany;
  }
  refreshMonthOptions();
  syncCompanySettingsInputs();
  render();
}

function getFallbackCompanyAfterDelete(deletedCompany) {
  return getKnownCompanyNames()
    .filter((company) => normalizeText(company) !== normalizeText(deletedCompany))
    .find((company) => normalizeText(company) !== "luck") || "Luck";
}

function deleteCompany(company) {
  const normalizedCompany = normalizeCompanyName(company);
  if (!normalizedCompany || normalizeText(normalizedCompany) === "luck") return;

  const reportCount = reportData.filter((report) => report.company === normalizedCompany).length;
  const scheduleCount = Object.values(scheduleData || {})
    .filter((record) => normalizeText(record?.client) === normalizeText(normalizedCompany))
    .length;
  const confirmed = window.confirm(
    `Excluir ${normalizedCompany} do sistema?\n\n` +
    `Isso vai remover configurações, metas, relatórios e cronogramas deste cliente.` +
    `${reportCount || scheduleCount ? `\n\nItens encontrados: ${reportCount} relatórios e ${scheduleCount} cronogramas.` : ""}`
  );

  if (!confirmed) return;

  deletedCompanies = normalizeDeletedCompanies([...deletedCompanies, normalizedCompany]);
  const deletedCompanyKey = normalizeText(normalizedCompany);
  reportData = reportData.filter((report) => normalizeText(report.company) !== deletedCompanyKey);
  Object.keys(companySettings).forEach((key) => {
    if (normalizeText(key) === deletedCompanyKey) delete companySettings[key];
  });
  Object.keys(contractTargets).forEach((key) => {
    if (normalizeText(key) === deletedCompanyKey) delete contractTargets[key];
  });
  scheduleData = filterActiveScheduleData(scheduleData);

  const fallbackCompany = getFallbackCompanyAfterDelete(normalizedCompany);
  const currentMonth = elements.monthSelect.value || currentMonthKey();

  populateControls();
  if ([...elements.companySelect.options].some((option) => option.value === fallbackCompany)) {
    elements.companySelect.value = fallbackCompany;
  }
  refreshMonthOptions();
  ensureReport(elements.companySelect.value, elements.monthSelect.value || currentMonth, { save: false });

  if (isDeletedCompanyName(selectedScheduleCompany)) {
    selectedScheduleCompany = getScheduleCompanyNames()[0] || "Luck Produtora";
    localStorage.setItem(SCHEDULE_COMPANY_STORAGE_KEY, selectedScheduleCompany);
  }

  saveCompanySettings();
  populateControls();
  syncCompanySettingsInputs();
  render();
  showSaveDialog("Cliente excluído", `${normalizedCompany} foi removido do sistema.`);
}

function handleCompanyListClick(event) {
  const selectButton = event.target.closest("[data-company-select]");
  if (selectButton) {
    selectCompanyFromList(selectButton.dataset.companySelect);
    return;
  }

  const configButton = event.target.closest("[data-company-config]");
  if (configButton) {
    openCompanySettingsDialog(configButton.dataset.companyConfig);
    return;
  }

  const deleteButton = event.target.closest("[data-company-delete]");
  if (deleteButton) {
    deleteCompany(deleteButton.dataset.companyDelete);
  }
}

function handleCompanyContractFileChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    companyContractDraft = {
      contractFileName: file.name,
      contractFileType: file.type || "application/octet-stream",
      contractFileDataUrl: String(reader.result || "")
    };
    updateCompanyContractPreview();
  });
  reader.readAsDataURL(file);
}

function removeCompanyContract() {
  companyContractDraft = {
    contractFileName: "",
    contractFileType: "",
    contractFileDataUrl: ""
  };
  if (elements.companyContractFileInput) elements.companyContractFileInput.value = "";
  updateCompanyContractPreview();
}

function createNewCompany(event) {
  event.preventDefault();

  const companyName = normalizeCompanyName(elements.newCompanyNameInput.value);
  if (!companyName) {
    showSaveDialog("Nome obrigatório", "Informe o nome da nova empresa.");
    return;
  }

  const duplicate = findCompanyByName(companyName);
  if (duplicate) {
    showSaveDialog("Empresa já existe", `${duplicate} já está cadastrada no sistema.`);
    return;
  }

  const selectedMonth = elements.monthSelect.value || currentMonthKey();
  const videos = Number(elements.newCompanyVideosInput.value) || 0;
  const creatives = Number(elements.newCompanyCreativesInput.value) || 0;

  restoreDeletedCompanyName(companyName);
  companySettings[companyName] = normalizeCompanySetting(companyName, {
    videos,
    creatives
  });
  contractTargets[companyName] = {
    videos,
    creatives
  };
  ensureReport(companyName, selectedMonth, { save: false });
  saveCompanySettings();

  populateControls();
  elements.companySelect.value = companyName;
  refreshMonthOptions();
  elements.monthSelect.value = selectedMonth;
  elements.newCompanyForm.reset();
  elements.newCompanyVideosInput.value = "0";
  elements.newCompanyCreativesInput.value = "0";
  syncCompanySettingsInputs();
  render();
  setActiveView("empresas", { updateUrl: true });
  showSaveDialog("Empresa criada", `${companyName} foi adicionada com um relatório vazio para ${formatMonth(selectedMonth)}.`);
}

function addFinanceRecord(event) {
  event.preventDefault();

  const description = fixPortuguese(elements.financeDescriptionInput.value.trim());
  const amount = Number(elements.financeAmountInput.value);

  if (!description || !Number.isFinite(amount) || amount <= 0) {
    showSaveDialog("Lançamento incompleto", "Informe descrição e valor para adicionar ao financeiro.");
    return;
  }

  getFinanceRecords(selectedFinanceMonth).push({
    id: `finance-${Math.random().toString(16).slice(2)}-${Date.now()}`,
    description,
    type: FINANCE_TYPES.includes(elements.financeTypeInput.value) ? elements.financeTypeInput.value : FINANCE_TYPES[0],
    amount,
    dueDate: elements.financeDueDateInput.value,
    status: elements.financeStatusInput.value === "paid" ? "paid" : "pending",
    createdAt: new Date().toISOString()
  });

  elements.financeForm.reset();
  elements.financeStatusInput.value = "pending";
  saveFinancialRecords();
  renderFinance();
  renderReminderSystem();
}

function addRecurringFinanceRecords() {
  const { sourceMonth, records } = getFinanceRecurringCandidates(selectedFinanceMonth);

  if (!records.length) {
    showSaveDialog("Nada para adicionar", `Não há mensalidades fixas de ${formatMonth(previousMonthKey(selectedFinanceMonth)).toLowerCase()} para copiar.`);
    return;
  }

  const targetRecords = getFinanceRecords(selectedFinanceMonth);
  const copiedRecords = records.map((record) => buildRecurringFinanceRecord(record, selectedFinanceMonth, sourceMonth));
  targetRecords.push(...copiedRecords);
  targetRecords.sort((a, b) => (a.dueDate || "").localeCompare(b.dueDate || "") || a.description.localeCompare(b.description, "pt-BR"));

  saveFinancialRecords();
  renderFinance();
  renderReminderSystem();
  showSaveDialog(
    "Mensalidades adicionadas",
    `${copiedRecords.length} ${copiedRecords.length === 1 ? "fixo foi adicionado" : "fixos foram adicionados"} em ${formatMonth(selectedFinanceMonth).toLowerCase()}.`
  );
}

function handleFinanceRecurringPromptClick(event) {
  const addButton = event.target.closest("[data-finance-recurring-add]");
  if (!addButton) return;

  addRecurringFinanceRecords();
}

function updateFinanceStatus(recordId, status) {
  const record = getFinanceRecords(selectedFinanceMonth).find((item) => item.id === recordId);
  if (!record) return;

  record.status = status === "paid" ? "paid" : "pending";
  saveFinancialRecords();
  renderFinance();
  renderReminderSystem();
}

function removeFinanceRecord(recordId) {
  const records = getFinanceRecords(selectedFinanceMonth);
  const key = financeRecordKey(selectedFinanceMonth);

  financialRecords[key] = records.filter((record) => record.id !== recordId);
  saveFinancialRecords();
  renderFinance();
  renderReminderSystem();
}

function handleFinanceListChange(event) {
  const statusSelect = event.target.closest("[data-finance-status]");
  if (!statusSelect) return;

  updateFinanceStatus(statusSelect.dataset.financeStatus, statusSelect.value);
}

function handleFinanceListClick(event) {
  const deleteButton = event.target.closest("[data-finance-delete]");
  if (!deleteButton) return;

  removeFinanceRecord(deleteButton.dataset.financeDelete);
}

function handlePendingBoardSubmit(event) {
  const form = event.target.closest("[data-pending-form]");
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  addPendingCard(formData.get("type"), formData.get("title"), formData.get("status"));
  form.reset();
}

function handlePendingBoardChange(event) {
  const typeSelect = event.target.closest("[data-pending-type]");
  const statusSelect = event.target.closest("[data-pending-status]");

  if (typeSelect) {
    updatePendingCard(typeSelect.dataset.pendingType, { type: typeSelect.value });
    return;
  }

  if (statusSelect) {
    updatePendingCard(statusSelect.dataset.pendingStatus, { status: statusSelect.value });
  }
}

function handlePendingBoardClick(event) {
  const deleteButton = event.target.closest("[data-pending-delete]");
  if (!deleteButton) return;

  removePendingCard(deleteButton.dataset.pendingDelete);
}

function openDeleteMonthDialog() {
  const company = elements.companySelect.value;
  const month = elements.monthSelect.value;
  const report = reportData.find((item) => item.company === company && item.month === month);
  const itemCount = getReportRows(report).length;

  elements.deleteMonthMessage.textContent = `Isso vai remover ${formatMonth(month).toLowerCase()} de ${company}, com ${itemCount} ${itemCount === 1 ? "item" : "itens"}.`;
  openDialogSmooth(elements.deleteMonthDialog);
}

function confirmDeleteMonth() {
  const company = elements.companySelect.value;
  const month = elements.monthSelect.value;

  reportData = reportData.filter((report) => !(report.company === company && report.month === month));
  const nextMonth = getFallbackMonthAfterDelete(company, month);
  ensureReport(company, nextMonth, { save: false });
  saveReports();
  exposeBackupData();
  refreshMonthOptions();
  elements.monthSelect.value = nextMonth;
  render();
  closeDialogSmooth(elements.deleteMonthDialog, () => {
    showSaveDialog("Mês excluído", `${formatMonth(month)} foi removido de ${company}.`);
  });
}

function fileSafeName(value) {
  return value.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "");
}

function exportPdf() {
  document.body.classList.add("printing-report");
  render();
  window.requestAnimationFrame(() => window.print());
}

function exportSchedulePdf() {
  setActiveView("cronograma", { updateUrl: false, scroll: false });
  renderSchedule();
  document.body.classList.add("printing-schedule");
  window.requestAnimationFrame(() => window.print());
}

function exposeBackupData() {
  const backup = {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    reports: reportData,
    contractTargets,
    companySettings,
    deletedCompanies,
    profile: profileData,
    theme: selectedTheme,
    reminderSettings,
    readReminderTimestamps,
    pendingBoards,
    financialRecords,
    quoteData,
    quoteHistory,
    scheduleData
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
  syncCompanySettingsInputs();
  render();
});
elements.monthSelect.addEventListener("change", () => {
  ensureReport(elements.companySelect.value, elements.monthSelect.value, { save: true });
  refreshMonthOptions();
  render();
});
elements.dashboardViewButton.addEventListener("click", () => {
  setActiveView("dashboard", { updateUrl: true });
});
elements.settingsViewButton.addEventListener("click", openSettingsDialog);
elements.scheduleViewButton.addEventListener("click", () => {
  setActiveView("cronograma", { updateUrl: true });
});
elements.reportViewButton.addEventListener("click", () => {
  setActiveView("relatorios", { updateUrl: true });
});
elements.pendingViewButton.addEventListener("click", () => {
  setActiveView("pendencias", { updateUrl: true });
});
elements.companyViewButton.addEventListener("click", () => {
  syncCompanySettingsInputs();
  renderCompanyList();
  setActiveView("empresas", { updateUrl: true });
});
elements.financeViewButton.addEventListener("click", () => {
  setActiveView("financeiro", { updateUrl: true });
});
elements.quoteViewButton.addEventListener("click", () => {
  setActiveView("orcamentos", { updateUrl: true });
});
window.addEventListener("popstate", () => {
  setActiveView(getRequestedView(), { scroll: false });
});
elements.companySettingsForm.addEventListener("submit", saveCompanySettingsForm);
elements.companyList?.addEventListener("click", handleCompanyListClick);
elements.closeCompanySettingsDialogButton?.addEventListener("click", closeCompanySettingsDialog);
elements.cancelCompanySettingsButton?.addEventListener("click", closeCompanySettingsDialog);
elements.companySettingsDialog?.addEventListener("click", (event) => {
  if (event.target === elements.companySettingsDialog) closeCompanySettingsDialog();
});
elements.companySettingsDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeCompanySettingsDialog();
});
elements.companyContractFileInput?.addEventListener("change", handleCompanyContractFileChange);
elements.removeCompanyContractButton?.addEventListener("click", removeCompanyContract);
elements.companyContractStartInput?.addEventListener("input", updateCompanyContractPreview);
elements.companyContractEndInput?.addEventListener("input", updateCompanyContractPreview);
elements.newCompanyForm.addEventListener("submit", createNewCompany);
elements.financeForm.addEventListener("submit", addFinanceRecord);
elements.financeRecurringPrompt?.addEventListener("click", handleFinanceRecurringPromptClick);
elements.quoteForm.addEventListener("submit", saveQuoteForm);
elements.quoteForm.addEventListener("input", handleQuoteDraftInput);
elements.quoteCalculator.addEventListener("input", handleQuoteCalculatorInput);
elements.quoteApplyCalculatorButton.addEventListener("click", applyQuoteCalculatorToForm);
elements.quoteClearButton.addEventListener("click", clearQuoteForm);
elements.quotePdfButton.addEventListener("click", exportQuotePdf);
elements.quoteHistoryMonthSelect?.addEventListener("change", () => {
  selectedQuoteMonth = elements.quoteHistoryMonthSelect.value;
  localStorage.setItem(QUOTE_MONTH_STORAGE_KEY, selectedQuoteMonth);
  renderQuoteHistory();
});
elements.quoteHistoryList?.addEventListener("click", handleQuoteHistoryClick);
elements.financeMonthSelect.addEventListener("change", () => {
  selectedFinanceMonth = elements.financeMonthSelect.value;
  localStorage.setItem(FINANCE_MONTH_STORAGE_KEY, selectedFinanceMonth);
  renderFinance();
});
elements.dashboardMonthSelect.addEventListener("change", () => {
  selectedDashboardMonth = elements.dashboardMonthSelect.value;
  localStorage.setItem(DASHBOARD_MONTH_STORAGE_KEY, selectedDashboardMonth);
  renderDashboard();
});
elements.scheduleCompanySelect.addEventListener("change", () => {
  selectedScheduleCompany = normalizeCompanyName(elements.scheduleCompanySelect.value);
  localStorage.setItem(SCHEDULE_COMPANY_STORAGE_KEY, selectedScheduleCompany);
  resetScheduleTaskForm();
  renderSchedule();
});
elements.scheduleMonthSelect.addEventListener("change", () => {
  syncScheduleSelectedMonth();
  resetScheduleTaskForm();
  renderSchedule();
});
elements.scheduleYearSelect.addEventListener("change", () => {
  syncScheduleSelectedMonth();
  resetScheduleTaskForm();
  renderSchedule();
});
elements.scheduleInterpretButton.addEventListener("click", parseScheduleQuickText);
elements.scheduleAddParsedButton.addEventListener("click", addParsedScheduleItems);
elements.scheduleParsePreview.addEventListener("change", (event) => {
  const typeSelect = event.target.closest("[data-schedule-preview-type]");
  const statusSelect = event.target.closest("[data-schedule-preview-status]");

  if (typeSelect) {
    const item = parsedScheduleItems[Number(typeSelect.dataset.schedulePreviewType)];
    if (!item) return;
    item.type = typeSelect.value;
    renderScheduleParsePreview();
    return;
  }

  if (statusSelect) {
    const item = parsedScheduleItems[Number(statusSelect.dataset.schedulePreviewStatus)];
    if (!item) return;
    item.status = statusSelect.value;
  }
});
elements.scheduleTaskForm.addEventListener("submit", saveScheduleTask);
elements.scheduleCancelEditButton.addEventListener("click", () => {
  resetScheduleTaskForm();
  syncScheduleDateBounds();
});
elements.scheduleDateForm.addEventListener("submit", addScheduleDate);
elements.scheduleHolidayForm.addEventListener("submit", addScheduleHoliday);
elements.scheduleGeneralNotesInput.addEventListener("change", saveScheduleNotes);
elements.schedulePdfButton.addEventListener("click", exportSchedulePdf);
elements.scheduleSettingsButton.addEventListener("click", openScheduleSettingsDialog);
elements.scheduleLogoInput.addEventListener("change", handleScheduleLogoChange);
elements.scheduleLogoSizeInput.addEventListener("input", (event) => {
  updateScheduleLogoScale(event.target.value);
});
elements.scheduleLogoSizeInput.addEventListener("change", (event) => {
  updateScheduleLogoScale(event.target.value, { save: true });
});
elements.scheduleLogoRemoveButton.addEventListener("click", removeScheduleClientLogo);
[
  ["titleColor", elements.scheduleTitleColorInput, elements.scheduleTitleHexInput],
  ["solidColor", elements.scheduleSolidColorInput, elements.scheduleSolidHexInput],
  ["gradientStart", elements.scheduleGradientStartInput, elements.scheduleGradientStartHexInput],
  ["gradientEnd", elements.scheduleGradientEndInput, elements.scheduleGradientEndHexInput]
].forEach(([key, colorInput, hexInput]) => {
  colorInput.addEventListener("input", (event) => {
    updateScheduleThemeField(key, event.target.value);
  });
  colorInput.addEventListener("change", (event) => {
    updateScheduleThemeField(key, event.target.value, { save: true });
  });
  hexInput.addEventListener("change", (event) => {
    updateScheduleThemeField(key, event.target.value, { save: true });
  });
});
elements.scheduleThemeResetButton.addEventListener("click", resetScheduleTheme);
elements.scheduleView.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-schedule-edit], [data-schedule-task]");
  const duplicateButton = event.target.closest("[data-schedule-duplicate]");
  const deleteButton = event.target.closest("[data-schedule-delete]");
  const publishButton = event.target.closest("[data-schedule-publish]");
  const dateDeleteButton = event.target.closest("[data-schedule-date-delete]");
  const holidayDeleteButton = event.target.closest("[data-schedule-holiday-delete]");
  const day = event.target.closest("[data-schedule-date]");

  if (editButton) {
    fillScheduleTaskForm(getScheduleTaskById(editButton.dataset.scheduleEdit || editButton.dataset.scheduleTask));
    return;
  }
  if (duplicateButton) {
    duplicateScheduleTask(duplicateButton.dataset.scheduleDuplicate);
    return;
  }
  if (deleteButton) {
    deleteScheduleTask(deleteButton.dataset.scheduleDelete);
    return;
  }
  if (publishButton) {
    publishScheduleTask(publishButton.dataset.schedulePublish);
    return;
  }
  if (dateDeleteButton) {
    const record = getScheduleRecord();
    record.commemorativeDates = record.commemorativeDates.filter((item) => item.id !== dateDeleteButton.dataset.scheduleDateDelete);
    saveScheduleData();
    renderSchedule();
    return;
  }
  if (holidayDeleteButton) {
    const record = getScheduleRecord();
    record.holidays = record.holidays.filter((item) => item.id !== holidayDeleteButton.dataset.scheduleHolidayDelete);
    saveScheduleData();
    renderSchedule();
    return;
  }
  if (day) {
    elements.scheduleTaskDateInput.value = day.dataset.scheduleDate;
  }
});
elements.scheduleCalendarGrid.addEventListener("dragstart", (event) => {
  const taskButton = event.target.closest("[data-schedule-task]");
  if (!taskButton) return;
  event.dataTransfer.setData("text/plain", taskButton.dataset.scheduleTask);
  event.dataTransfer.effectAllowed = "move";
});
elements.scheduleCalendarGrid.addEventListener("dragover", (event) => {
  if (!event.target.closest("[data-schedule-date]")) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
});
elements.scheduleCalendarGrid.addEventListener("drop", (event) => {
  const day = event.target.closest("[data-schedule-date]");
  if (!day) return;
  event.preventDefault();
  moveScheduleTask(event.dataTransfer.getData("text/plain"), day.dataset.scheduleDate);
});
elements.pendingMonthSelect.addEventListener("change", () => {
  selectedPendingMonth = elements.pendingMonthSelect.value;
  localStorage.setItem(PENDING_MONTH_STORAGE_KEY, selectedPendingMonth);
  renderPendingBoard();
});
elements.deleteMonthButton.addEventListener("click", openDeleteMonthDialog);
elements.searchInput?.addEventListener("input", render);
elements.interpretButton.addEventListener("click", parseQuickText);
elements.addParsedButton.addEventListener("click", addParsedItems);
elements.autoCompensateButton.addEventListener("click", autoCompensateContract);
elements.undoCompensationButton.addEventListener("click", undoCompensationContract);
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
elements.pendingBoard.addEventListener("submit", handlePendingBoardSubmit);
elements.pendingBoard.addEventListener("change", handlePendingBoardChange);
elements.pendingBoard.addEventListener("click", handlePendingBoardClick);
elements.financeList.addEventListener("change", handleFinanceListChange);
elements.financeList.addEventListener("click", handleFinanceListClick);
elements.editForm.addEventListener("submit", saveEditedItem);
elements.closeEditButton.addEventListener("click", closeEditDialog);
elements.deleteEditButton.addEventListener("click", deleteEditingItem);
elements.pdfButton.addEventListener("click", exportPdf);
window.addEventListener("beforeprint", render);
window.addEventListener("afterprint", () => {
  const wasReportPrint = document.body.classList.contains("printing-report");
  document.body.classList.remove("printing-report");
  document.body.classList.remove("printing-schedule");
  document.body.classList.remove("printing-quote");
  if (wasReportPrint) render();
});
elements.cloudSaveButton.addEventListener("click", () => saveRemoteState());
elements.welcomeLoginButtons.forEach((button) => {
  button.addEventListener("click", () => setLoginRequested(true));
});
elements.loginBackButton.addEventListener("click", () => setLoginRequested(false));
elements.loginButton.addEventListener("click", signInSupabase);
elements.googleLoginButton.addEventListener("click", signInWithGoogle);
elements.signupButton.addEventListener("click", signUpSupabase);
elements.loginPasswordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") signInSupabase();
});
elements.profileButton.addEventListener("click", toggleProfileMenu);
elements.profileAccountButton.addEventListener("click", openAccountDialog);
elements.profileEditButton.addEventListener("click", openProfileEditDialog);
elements.profileSettingsButton.addEventListener("click", openSettingsDialog);
document.querySelectorAll("[data-theme-option]").forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeOption, { save: true }));
});
elements.reminderSoundButtons?.forEach((button) => {
  button.addEventListener("click", () => setReminderSound(button.dataset.reminderSound === "on"));
});
elements.reminderButton?.addEventListener("click", openReminderDialog);
elements.reminderToastOpenButton?.addEventListener("click", openReminderDialog);
elements.reminderToastDismissButton?.addEventListener("click", dismissReminderToast);
elements.closeReminderDialogButton?.addEventListener("click", () => closeDialogSmooth(elements.reminderDialog));
elements.reminderDialog?.addEventListener("click", (event) => {
  if (event.target === elements.reminderDialog) {
    closeDialogSmooth(elements.reminderDialog);
    return;
  }

  const reminderButton = event.target.closest("[data-reminder-open]");
  if (reminderButton) activateReminder(reminderButton.dataset.reminderOpen);
  const readButton = event.target.closest("[data-reminder-read]");
  if (readButton) markReminderRead(readButton.dataset.reminderRead);
});
elements.reminderDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.reminderDialog);
});
elements.profileEditForm.addEventListener("submit", saveProfile);
elements.profilePhotoInput.addEventListener("change", handleProfilePhotoChange);
elements.removeProfilePhotoButton.addEventListener("click", removeProfilePhoto);
elements.closeAccountDialogButton.addEventListener("click", () => closeDialogSmooth(elements.accountDialog));
elements.closeProfileEditDialogButton.addEventListener("click", () => closeDialogSmooth(elements.profileEditDialog));
elements.cancelProfileEditButton.addEventListener("click", () => closeDialogSmooth(elements.profileEditDialog));
elements.closeSettingsDialogButton.addEventListener("click", () => closeDialogSmooth(elements.settingsDialog));
elements.authLogoutButton.addEventListener("click", signOutSupabase);
document.addEventListener("click", (event) => {
  if (elements.authPanel?.contains(event.target)) return;
  setProfileMenuOpen(false);
});
document.addEventListener("mouseup", (event) => {
  window.setTimeout(() => clearStaticTextCaret(event.target), 0);
});
document.addEventListener("keyup", (event) => {
  clearStaticTextCaret(event.target);
});
document.addEventListener("pointerdown", unlockReminderSound, { once: true });
elements.closeSaveDialogButton.addEventListener("click", () => closeDialogSmooth(elements.saveDialog));
elements.saveDialog.addEventListener("click", (event) => {
  if (event.target === elements.saveDialog) closeDialogSmooth(elements.saveDialog);
});
elements.saveDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.saveDialog);
});
elements.cancelDeleteMonthButton.addEventListener("click", () => closeDialogSmooth(elements.deleteMonthDialog));
elements.confirmDeleteMonthButton.addEventListener("click", confirmDeleteMonth);
elements.deleteMonthDialog.addEventListener("click", (event) => {
  if (event.target === elements.deleteMonthDialog) closeDialogSmooth(elements.deleteMonthDialog);
});
elements.deleteMonthDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.deleteMonthDialog);
});
elements.editDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeEditDialog();
});
elements.accountDialog.addEventListener("click", (event) => {
  if (event.target === elements.accountDialog) closeDialogSmooth(elements.accountDialog);
});
elements.accountDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.accountDialog);
});
elements.profileEditDialog.addEventListener("click", (event) => {
  if (event.target === elements.profileEditDialog) closeDialogSmooth(elements.profileEditDialog);
});
elements.profileEditDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.profileEditDialog);
});
elements.settingsDialog.addEventListener("click", (event) => {
  if (event.target === elements.settingsDialog) closeDialogSmooth(elements.settingsDialog);
});
elements.settingsDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.settingsDialog);
});
elements.closeScheduleSettingsDialogButton.addEventListener("click", () => closeDialogSmooth(elements.scheduleSettingsDialog));
elements.scheduleSettingsDialog.addEventListener("click", (event) => {
  if (event.target === elements.scheduleSettingsDialog) closeDialogSmooth(elements.scheduleSettingsDialog);
});
elements.scheduleSettingsDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialogSmooth(elements.scheduleSettingsDialog);
});

if (window.lucide?.createIcons) {
  window.lucide.createIcons();
}

renderAuthState();
captureSupabaseOAuthSession();
if (!requiresLogin()) {
  startAuthenticatedApp();
}

window.parseProductionText = parseProductionText;
