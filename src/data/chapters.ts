// AUTO-GENERATED — Do not edit by hand. Run /tmp/gen-lua.mjs to regenerate.
export type Difficulty = "iniciante" | "intermediario" | "avancado";
export type AlertType = "info" | "warning" | "danger" | "success" | "tip";
export interface CodeSample { lang: string; code: string }
export interface AlertSpec { type: AlertType; content: string }
export interface Chapter {
  slug: string; section: string; title: string; difficulty: Difficulty;
  subtitle: string; intro: string;
  codes: CodeSample[]; points: string[]; alerts: AlertSpec[];
}
export interface Section { id: string; icon: string; label: string; chapterSlugs: string[] }

export const sections: Section[] = [
  {
    "id": "boas-vindas",
    "icon": "BookOpen",
    "label": "Boas-vindas e Fundamentos",
    "chapterSlugs": [
      "bem-vindo",
      "por-que-lua",
      "historia-lua",
      "lua-vs-luajit",
      "onde-lua-roda"
    ]
  },
  {
    "id": "instalacao",
    "icon": "Terminal",
    "label": "Instalação e Primeiros Passos",
    "chapterSlugs": [
      "instalacao",
      "luarocks",
      "interpretador-repl",
      "primeiro-script",
      "editores-ides",
      "organizando-projeto",
      "argumentos-cli",
      "hello-world-completo"
    ]
  },
  {
    "id": "sintaxe",
    "icon": "Code2",
    "label": "Sintaxe e Tipos Básicos",
    "chapterSlugs": [
      "sintaxe-basica",
      "variaveis-local",
      "tipos-basicos",
      "nil-truthy",
      "numeros",
      "strings-basico",
      "string-format",
      "string-metodos",
      "operadores",
      "entrada-saida"
    ]
  },
  {
    "id": "controle",
    "icon": "GitBranch",
    "label": "Controle de Fluxo",
    "chapterSlugs": [
      "if-else",
      "while-loop",
      "repeat-until",
      "for-numerico",
      "for-generico",
      "break-goto",
      "multiplos-retornos",
      "expressoes-vararg"
    ]
  },
  {
    "id": "tabelas",
    "icon": "Database",
    "label": "Tabelas — A Estrutura Central",
    "chapterSlugs": [
      "tabelas-intro",
      "arrays",
      "dicionarios",
      "table-construtor",
      "table-biblioteca",
      "copiando-tabelas",
      "tabelas-aninhadas",
      "tabela-como-set",
      "tabela-como-fila-pilha",
      "pairs-vs-ipairs",
      "next-iterator",
      "weak-tables"
    ]
  },
  {
    "id": "funcoes",
    "icon": "Sparkles",
    "label": "Funções",
    "chapterSlugs": [
      "funcoes-basico",
      "funcoes-anonimas",
      "closures",
      "self-colon",
      "recursao",
      "argumentos-padrao",
      "argumentos-tabela",
      "funcoes-de-ordem-superior",
      "escopo-local",
      "funcoes-locais-recursivas"
    ]
  },
  {
    "id": "strings-padroes",
    "icon": "Code2",
    "label": "Strings e Padrões (Lua Patterns)",
    "chapterSlugs": [
      "string-find",
      "string-match",
      "string-gsub",
      "lua-patterns",
      "lua-patterns-quantif",
      "lua-patterns-conjuntos",
      "string-rep-format",
      "utf8"
    ]
  },
  {
    "id": "metatables-oop",
    "icon": "Cpu",
    "label": "Metatables e OOP",
    "chapterSlugs": [
      "metatables-intro",
      "metamethods-aritmeticos",
      "index-newindex",
      "oop-classes",
      "oop-heranca",
      "call-metamethod",
      "metamethods-comparacao",
      "tostring-len",
      "raw-funcs",
      "proxies-encapsulamento"
    ]
  },
  {
    "id": "modulos",
    "icon": "Wrench",
    "label": "Módulos e Organização",
    "chapterSlugs": [
      "modulos-require",
      "modulos-pacotes",
      "package-path",
      "padrao-modulo-moderno",
      "modulos-com-estado",
      "dofile-loadfile",
      "sandbox-loader",
      "luarocks-uso",
      "criando-rock",
      "organizacao-grandes"
    ]
  },
  {
    "id": "coroutines-erros",
    "icon": "Cpu",
    "label": "Corrotinas e Erros",
    "chapterSlugs": [
      "coroutines-intro",
      "coroutines-iteradores",
      "coroutines-async",
      "pcall-xpcall",
      "error-assert",
      "debug-traceback",
      "finally",
      "lua54-close"
    ]
  },
  {
    "id": "stdlib",
    "icon": "Wrench",
    "label": "Bibliotecas Padrão",
    "chapterSlugs": [
      "math-lib",
      "math-random",
      "string-lib-completo",
      "table-lib-completo",
      "io-lib",
      "os-lib",
      "io-popen",
      "debug-lib",
      "bit32-bit",
      "json-cjson"
    ]
  },
  {
    "id": "love2d",
    "icon": "BarChart3",
    "label": "LÖVE 2D — Jogos com Lua",
    "chapterSlugs": [
      "love-intro",
      "love-callbacks",
      "love-input",
      "love-graphics",
      "love-imagens-sprites",
      "love-audio",
      "love-textos-fontes",
      "love-colisao",
      "love-fisica-box2d",
      "love-game-state",
      "love-projeto-completo",
      "love-distribuicao"
    ]
  },
  {
    "id": "lua-embarcado",
    "icon": "Brain",
    "label": "Lua Embarcado: Roblox, OpenResty e mais",
    "chapterSlugs": [
      "roblox-luau",
      "roblox-services",
      "roblox-remoteevent",
      "openresty-intro",
      "openresty-api",
      "lapis-framework",
      "redis-lua",
      "nodemcu-esp",
      "wireshark-lua",
      "defold-engine"
    ]
  },
  {
    "id": "performance",
    "icon": "Brain",
    "label": "Performance, FFI e LuaJIT",
    "chapterSlugs": [
      "luajit-intro",
      "luajit-ffi",
      "medindo-performance",
      "dicas-performance",
      "jit-friendly",
      "alocacao-gc",
      "c-bindings",
      "alternativas-rapidas"
    ]
  },
  {
    "id": "casos-apendice",
    "icon": "BookOpen",
    "label": "Casos Práticos e Apêndice",
    "chapterSlugs": [
      "projeto-cli-todo",
      "projeto-config",
      "projeto-scraper",
      "projeto-irc-bot",
      "projeto-templating",
      "debugging-pratico",
      "testes-busted",
      "lua-vs-outras",
      "zen-lua",
      "recursos",
      "proximos-passos"
    ]
  }
];

export const chapters: Chapter[] = [
  {
    "slug": "bem-vindo",
    "section": "boas-vindas",
    "title": "Bem-vindo ao Lua",
    "difficulty": "iniciante",
    "subtitle": "O que você vai aprender neste livro completo de Lua.",
    "intro": "Lua é uma linguagem de programação leve, rápida e desenhada para ser embarcada dentro de outros programas. Foi criada em 1993 na PUC-Rio (sim, no Brasil) e hoje move pedaços importantes da indústria: o servidor NGINX (via OpenResty), o Redis, motores de jogo como Roblox, Defold e LÖVE 2D, plugins do Adobe Lightroom, scripts em Wireshark e firmwares de microcontroladores ESP.\n\nA proposta deste livro é levar você do ZERO até conseguir escrever scripts úteis, módulos reaproveitáveis e até mini-jogos. Não assumimos que você já programou em outra linguagem — quando comparamos com Python, JavaScript ou C, explicamos a comparação.\n\nA estrutura é progressiva: começamos por instalação, sintaxe básica e tipos; passamos por funções, tabelas e metatables (o coração de Lua); e fechamos com tópicos avançados como corotinas, FFI do LuaJIT, OpenResty e LÖVE 2D.\n\nCada capítulo é curto e contém código que roda. A recomendação é digitar (não copiar) os exemplos no seu próprio terminal — a memória muscular faz diferença.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- seu primeiro programa em Lua\nprint('Olá, Lua!')\n-- saída: Olá, Lua!"
      },
      {
        "lang": "bash",
        "code": "# salve como ola.lua e rode no terminal\nlua ola.lua\n# saída: Olá, Lua!"
      }
    ],
    "points": [
      "Mais de 140 capítulos organizados em 15 trilhas progressivas",
      "Cobre Lua 5.1, 5.4, LuaJIT, Luau (Roblox) e LÖVE 2D",
      "Para quem nunca programou e para quem vem de outras linguagens",
      "Cada capítulo traz código executável e pontos-chave",
      "Foco em prática: digite os exemplos, não só leia",
      "Termina com projetos reais: jogos, scripts e servidores"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Leia em ordem se for iniciante. Quem já programa pode pular para Tabelas, Metatables ou direto para LÖVE 2D / Roblox."
      },
      {
        "type": "info",
        "content": "Todos os exemplos foram testados em Lua 5.4. Diferenças importantes para 5.1/LuaJIT são marcadas com alertas."
      }
    ]
  },
  {
    "slug": "por-que-lua",
    "section": "boas-vindas",
    "title": "Por que aprender Lua?",
    "difficulty": "iniciante",
    "subtitle": "Onde Lua brilha: jogos, scripting e sistemas embarcados.",
    "intro": "Toda linguagem tem um nicho onde brilha. Python brilha em ciência de dados, JavaScript no navegador, C em sistemas baixo nível. **Lua brilha quando você precisa embutir uma linguagem dentro de outro programa** — para deixar o usuário escrever scripts, configurar comportamento ou estender funcionalidade sem recompilar nada.\n\nÉ por isso que tanta gente cruza com Lua sem perceber: o servidor NGINX permite escrever lógica em Lua via OpenResty; o Redis aceita scripts Lua para garantir atomicidade; Roblox usa Luau (um dialeto de Lua) para scripts de jogo; Wireshark, Adobe Lightroom, World of Warcraft, Garry's Mod, Factorio e Defold também rodam Lua por dentro.\n\nO interpretador de Lua tem poucas centenas de KB e cabe em qualquer coisa — até em microcontroladores ESP8266. A sintaxe é minúscula (cerca de 20 palavras-chave) então você aprende o essencial em um fim de semana.\n\nE com LuaJIT, Lua chega a ser tão rápida quanto C em muitos benchmarks, sem deixar de ser uma linguagem de alto nível com coleta de lixo. Pouca linguagem entrega esse equilíbrio.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Lua é multiparadigma: estilo funcional\nlocal quadrados = {}\nfor i = 1, 5 do\n  quadrados[i] = i * i\nend\n-- quadrados = {1, 4, 9, 16, 25}\n\n-- e \"orientado a objetos\" via tabelas\nlocal Pessoa = { nome = 'Ana' }\nfunction Pessoa:saudar()\n  return 'Oi, ' .. self.nome\nend\nprint(Pessoa:saudar())  -- saída: Oi, Ana"
      },
      {
        "lang": "lua",
        "code": "-- exemplo real: configuração em Lua\n-- (muitos programas usam Lua como formato de config)\nreturn {\n  janela = { largura = 800, altura = 600 },\n  jogador = { vida = 100, velocidade = 5 },\n  debug   = false,\n}"
      }
    ],
    "points": [
      "Sintaxe minúscula: cerca de 20 palavras-chave",
      "Interpretador pesa centenas de KB, não MB",
      "Embarcável em qualquer programa em C com poucas linhas",
      "LuaJIT entrega performance próxima de C",
      "Padrão de fato em scripting de jogos e plugins",
      "Curva de aprendizado curta — você produz na primeira semana",
      "Multiparadigma: funcional, OO, procedural, tudo cabe"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Se seu objetivo é Roblox, você vai aprender Luau, um superset de Lua 5.1 com tipos opcionais. Tudo que está aqui se aplica."
      },
      {
        "type": "tip",
        "content": "Lua não substitui Python para data science nem JS para web frontend. Use a ferramenta certa: Lua brilha onde precisa de leveza e embarcamento."
      }
    ]
  },
  {
    "slug": "historia-lua",
    "section": "boas-vindas",
    "title": "A história do Lua",
    "difficulty": "iniciante",
    "subtitle": "Da PUC-Rio para o mundo dos jogos e além.",
    "intro": "Lua nasceu em 1993 num laboratório da PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro). Os criadores são **Roberto Ierusalimschy**, **Luiz Henrique de Figueiredo** e **Waldemar Celes**. Curiosidade: o nome \"Lua\" não é acrônimo — é a palavra portuguesa mesmo, escolhida porque a antecessora se chamava Sol (também uma linguagem da PUC, voltada para descrição de dados).\n\nO motivo de existir era prático. A Petrobras tinha programas de engenharia escritos em Fortran que precisavam de uma camada de configuração e extensão. As linguagens da época não eram embarcáveis o suficiente nem rápidas o bastante. Os pesquisadores então construíram a sua.\n\nLua é a única linguagem amplamente usada na indústria criada na América Latina. A explosão internacional veio com os jogos: World of Warcraft (2004) usou Lua para a interface, e dali em diante virou padrão em motores e plugins.\n\nVale conhecer as versões. Lua 5.1 (2006) ficou tanto tempo dominante que ainda é a base do LuaJIT e do Luau (Roblox). Lua 5.3 trouxe inteiros nativos. Lua 5.4 (atual) trouxe coleta de lixo geracional e atributos como `<const>`.",
    "codes": [
      {
        "lang": "text",
        "code": "Linha do tempo das versões principais:\n\n1993 — Lua 1.0 (uso interno PUC-Rio/Petrobras)\n1996 — Lua 3.0 (publicação no Dr. Dobb's, fama internacional)\n2003 — Lua 5.0  (corotinas, escopo léxico moderno)\n2006 — Lua 5.1  (referência por quase uma década; base do LuaJIT)\n2011 — Lua 5.2  (goto, _ENV substitui setfenv)\n2015 — Lua 5.3  (inteiros nativos, operadores bitwise)\n2020 — Lua 5.4  (GC geracional, atributos const e close)"
      },
      {
        "lang": "lua",
        "code": "-- descobrir a versão em runtime\nprint(_VERSION)  -- saída em Lua 5.4: Lua 5.4\nprint(_VERSION)  -- saída em LuaJIT:   Lua 5.1"
      }
    ],
    "points": [
      "Criada em 1993 na PUC-Rio por brasileiros",
      "\"Lua\" é o astro, não acrônimo (sucessora de Sol)",
      "Lua 5.1 ainda é gigante por causa de LuaJIT e Luau",
      "Lua 5.3 introduziu integers nativos (antes era só double)",
      "Lua 5.4 é a versão estável atual (GC geracional)",
      "É a linguagem de origem latino-americana mais usada no mundo",
      "Filosofia: \"mecanismos, não políticas\" — pequena e flexível"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Versões NÃO são totalmente compatíveis entre si. Código de Lua 5.1 pode quebrar em 5.4 (ex.: unpack virou table.unpack). Sempre confira a versão alvo do seu projeto."
      }
    ]
  },
  {
    "slug": "lua-vs-luajit",
    "section": "boas-vindas",
    "title": "Lua oficial vs LuaJIT",
    "difficulty": "iniciante",
    "subtitle": "Duas implementações que você precisa saber distinguir.",
    "intro": "Quando alguém diz \"Lua\", pode estar falando de duas coisas bem diferentes. **Lua PUC** é a implementação de referência mantida pelos criadores na PUC-Rio: é um interpretador escrito em C ANSI, super portátil, e está hoje na versão 5.4. **LuaJIT** é uma reimplementação independente feita por Mike Pall que adiciona um compilador Just-In-Time, ficando muitas vezes mais rápida — em alguns benchmarks chega perto de C.\n\nO detalhe que pega todo iniciante: **LuaJIT está congelado na API de Lua 5.1**. Ou seja, recursos novos (integers nativos do 5.3, atributos do 5.4, goto do 5.2) **não existem** no LuaJIT. Em compensação, LuaJIT tem extensões próprias muito poderosas, em especial a FFI, que permite chamar funções C diretamente sem escrever bindings.\n\nNa prática, qual escolher depende do seu cenário: se está aprendendo do zero ou usando Lua para configurar um app moderno, vá de Lua 5.4. Se está mexendo com OpenResty, Defold, ou qualquer coisa que exija performance bruta, é LuaJIT.\n\nUma terceira variante popular é o **Luau**, do Roblox: superset de Lua 5.1 com tipagem opcional. Não cobriremos LuaJIT/Luau nas primeiras trilhas, mas avisaremos quando algo mudar entre versões.",
    "codes": [
      {
        "lang": "text",
        "code": "Lua 5.4 (PUC-Rio, oficial):\n  + Última versão estável, recursos modernos\n  + Inteiros nativos, atributos <const>/<close>\n  + Sintaxe e biblioteca padrão atualizadas\n  - Mais lento que LuaJIT em loops apertados\n  - Sem FFI — você precisa escrever bindings em C\n\nLuaJIT (Mike Pall):\n  + Performance comparável a C em muitos casos\n  + FFI: chama qualquer função C sem binding\n  + Padrão em OpenResty, Defold, Wireshark\n  - API travada na 5.1: SEM // SEM <const> SEM goto\n  - unpack() global em vez de table.unpack()"
      },
      {
        "lang": "bash",
        "code": "# como descobrir qual você tem instalado\nlua -v\n# Lua 5.4.6  Copyright (C) 1994-2024 Lua.org, PUC-Rio\n\nluajit -v\n# LuaJIT 2.1.0-beta3 -- Copyright (C) 2005-2022 Mike Pall."
      },
      {
        "lang": "lua",
        "code": "-- detectar em runtime se está rodando LuaJIT\nif jit then\n  print('Estou no LuaJIT', jit.version)\nelse\n  print('Estou no Lua PUC', _VERSION)\nend"
      }
    ],
    "points": [
      "LuaJIT == Lua 5.1 + extensões + JIT (não tem features 5.2+)",
      "OpenResty, Defold e Wireshark embarcam LuaJIT",
      "Roblox usa Luau, um dialeto separado com tipos opcionais",
      "FFI do LuaJIT chama C sem precisar escrever binding",
      "// (divisão inteira) e <const> NÃO funcionam em LuaJIT",
      "Use `if jit then` para detectar LuaJIT em runtime",
      "Para aprender, prefira Lua 5.4 — é o futuro"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Código portátil entre Lua 5.4 e LuaJIT exige cuidado: evite //, integer-only e atributos. Use math.floor(a/b) em vez de a // b."
      },
      {
        "type": "info",
        "content": "Existem ainda Ravi (JIT com tipos), elua (microcontroladores), MoonSharp (.NET) e NLua. Cada uma adapta Lua a um nicho."
      }
    ]
  },
  {
    "slug": "onde-lua-roda",
    "section": "boas-vindas",
    "title": "Onde o Lua roda",
    "difficulty": "iniciante",
    "subtitle": "Sistemas, jogos, servidores e dispositivos.",
    "intro": "Uma das forças de Lua é portabilidade quase absoluta. Como o interpretador é escrito em C ANSI puro (sem dependências exóticas), ele compila em praticamente qualquer lugar que tenha um compilador C — do seu desktop a um chip de poucos KB de RAM.\n\nNo desktop, Lua roda em Windows, macOS, Linux, FreeBSD, OpenBSD e por aí vai. No mobile, está dentro de centenas de jogos Android e iOS via motores como Defold, Corona/Solar2D e LÖVE. No backend, quem faz APIs com OpenResty (NGINX + LuaJIT) tem performance brutal em produção. No banco de dados, Redis aceita scripts Lua para operações atômicas.\n\nNo mundo embarcado, Lua brilha em microcontroladores via projetos como NodeMCU (ESP8266/ESP32) e eLua. Roteadores OpenWrt, dispositivos IoT, set-top boxes e até balanças industriais carregam Lua dentro.\n\nE no mundo dos games, a lista é gigante: Roblox, World of Warcraft, Angry Birds, Garry's Mod, Factorio, Don't Starve, Civilization V/VI (UI), Crysis, Far Cry, Defold, LÖVE 2D... Se você joga, é provável que já tenha rodado Lua sem saber.",
    "codes": [
      {
        "lang": "bash",
        "code": "# verificar se Lua está instalado e em qual versão\nlua -v\n# Lua 5.4.6  Copyright (C) 1994-2024 Lua.org, PUC-Rio\n\n# em alguns sistemas, o binário tem versão no nome\nlua5.4 -v\nlua5.1 -v"
      },
      {
        "lang": "text",
        "code": "Onde você encontra Lua na vida real:\n\nGAMES        Roblox, WoW, Angry Birds, Factorio, Garry's Mod\nMOTORES      LÖVE 2D, Defold, Corona/Solar2D, Cocos2d\nWEB/BACKEND  OpenResty (NGINX), Kong API Gateway\nBANCO        Redis (EVAL), Tarantool\nFERRAMENTAS  Wireshark, Adobe Lightroom, Aerospike\nEMBARCADOS   NodeMCU (ESP), OpenWrt, eLua\nDESKTOP      VLC plugins, Awesome WM, Conky"
      }
    ],
    "points": [
      "Roda em Windows, macOS, Linux, BSDs, mobile e embarcados",
      "Interpretador cabe em poucas centenas de KB",
      "Compila em qualquer lugar com C ANSI",
      "OpenResty leva Lua para servidores web de alto tráfego",
      "Redis usa scripts Lua para atomicidade",
      "NodeMCU coloca Lua em microcontroladores ESP",
      "Provavelmente você já rodou Lua jogando algum game"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Antes de começar, abra o terminal e rode `lua -v`. Se aparecer a versão, está pronto. Se não, vá ao próximo capítulo de instalação."
      }
    ]
  },
  {
    "slug": "instalacao",
    "section": "instalacao",
    "title": "Instalando o Lua",
    "difficulty": "iniciante",
    "subtitle": "Como instalar Lua no seu sistema operacional.",
    "intro": "Instalar Lua é a parte mais fácil do livro. O pacote é minúsculo (alguns MB com tudo), não exige configuração e na maioria dos sistemas sai com um único comando. O que pode confundir um iniciante é **escolher a versão certa**: Lua 5.4 é o padrão moderno, mas se você vai mexer com OpenResty ou Defold precisará de LuaJIT, e para Roblox basta o Roblox Studio (Lua já vem dentro).\n\nNo Windows, o caminho mais limpo hoje é via `winget` (gerenciador oficial do sistema) ou `scoop`. No macOS, use o **Homebrew**. No Linux, o Lua já está nos repositórios oficiais — `apt`, `dnf`, `pacman`, todos funcionam.\n\nDepois de instalar, o teste é sempre o mesmo: rodar `lua -v` no terminal. Se aparecer a versão, parabéns. Se aparecer \"comando não encontrado\", o Lua não está no PATH e precisa ser ajustado (no Windows isso é o erro mais comum em instalações manuais).\n\nEm alguns sistemas Linux você pode acabar com vários binários: `lua`, `lua5.1`, `lua5.4`. Use o sufixo da versão quando precisar de algo específico.",
    "codes": [
      {
        "lang": "bash",
        "code": "# Windows — via winget (recomendado)\nwinget install DEVCOM.Lua\n\n# Windows — via scoop\nscoop install lua\n\n# macOS — via Homebrew\nbrew install lua          # versão 5.4 atual\nbrew install luajit       # se precisar do LuaJIT\n\n# Ubuntu/Debian\nsudo apt update\nsudo apt install lua5.4 luarocks\n\n# Fedora\nsudo dnf install lua luarocks\n\n# Arch\nsudo pacman -S lua luarocks"
      },
      {
        "lang": "bash",
        "code": "# verificar instalação (deve imprimir versão)\nlua -v\n# Lua 5.4.6  Copyright (C) 1994-2024 Lua.org, PUC-Rio\n\n# se você instalou várias versões\nlua5.1 -v\nlua5.4 -v\nluajit -v"
      },
      {
        "lang": "bash",
        "code": "# rodar um script de teste\necho 'print(\"Lua funcionando!\")' > teste.lua\nlua teste.lua\n# saída: Lua funcionando!"
      }
    ],
    "points": [
      "Lua 5.4 é a versão oficial atual da PUC-Rio",
      "Windows: prefira `winget install DEVCOM.Lua`",
      "macOS: `brew install lua` resolve em segundos",
      "Linux: já está nos repos oficiais (apt/dnf/pacman)",
      "LuaJIT instala separadamente: `brew install luajit`",
      "Para Roblox, basta baixar o Roblox Studio — Lua já vem dentro",
      "Teste sempre com `lua -v` depois de instalar"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "No Windows, se `lua -v` der \"comando não encontrado\", o instalador não adicionou ao PATH. Reabra o terminal ou ajuste manualmente em Variáveis de Ambiente."
      },
      {
        "type": "tip",
        "content": "No Linux/macOS, instale também o `luarocks` no mesmo passo. Você vai querer pacotes externos em algum momento."
      }
    ]
  },
  {
    "slug": "luarocks",
    "section": "instalacao",
    "title": "LuaRocks: o gerenciador de pacotes",
    "difficulty": "iniciante",
    "subtitle": "Instalando bibliotecas Lua sem dor.",
    "intro": "Toda linguagem moderna tem um gerenciador de pacotes oficial: Python tem `pip`, Node tem `npm`, Rust tem `cargo`. Em Lua, a ferramenta padrão é o **LuaRocks**. Pacotes nele se chamam **rocks** (\"pedras\" — combinando com o nome \"Lua\") e ficam hospedados em luarocks.org.\n\nNa prática, LuaRocks faz três coisas: baixa um pacote, compila partes em C se houver, e copia os arquivos para um diretório onde o `require` vai conseguir achar. Sem ele, você teria que copiar bibliotecas na mão e ajustar `package.path` — chato e frágil.\n\nUma diferença em relação ao npm: LuaRocks **por padrão instala globalmente no sistema** (precisa de `sudo`). Para evitar isso, use a flag `--local`, que coloca tudo no seu home (`~/.luarocks`). Em projetos sérios, considere também `luarocks init` para ter um diretório `lua_modules/` igual ao `node_modules/`.\n\nAlguns rocks famosos: `lua-cjson` (JSON rápido), `luasocket` (rede), `luafilesystem` (lfs, manipular arquivos), `penlight` (utilitários estilo Python), `busted` (testes), `luacheck` (linter).",
    "codes": [
      {
        "lang": "bash",
        "code": "# instalando o LuaRocks\nbrew install luarocks         # macOS\nsudo apt install luarocks     # Ubuntu/Debian\nsudo dnf install luarocks     # Fedora\n\n# verificar\nluarocks --version"
      },
      {
        "lang": "bash",
        "code": "# uso básico\nluarocks search json          # busca pacotes\nluarocks install lua-cjson    # instala (pode pedir sudo)\nluarocks list                 # lista instalados\nluarocks show lua-cjson       # detalhes do pacote\nluarocks remove lua-cjson     # remove\n\n# evitar sudo: instala em ~/.luarocks\nluarocks install --local lua-cjson"
      },
      {
        "lang": "bash",
        "code": "# uso por projeto (recomendado para apps sérios)\nmkdir meu-app && cd meu-app\nluarocks init                 # cria .luarocks/ e lua_modules/\nluarocks install --tree lua_modules lua-cjson\n\n# rodar com as deps locais\nlua -e 'package.path = \"./lua_modules/share/lua/5.4/?.lua;\" .. package.path'"
      }
    ],
    "points": [
      "LuaRocks é o npm/pip do mundo Lua",
      "Pacotes se chamam \"rocks\" e vêm de luarocks.org",
      "Sem `--local` ele instala globalmente (com sudo)",
      "`luarocks init` cria estrutura por projeto (lua_modules/)",
      "Rocks comuns: lua-cjson, luasocket, lfs, busted, penlight",
      "Cada rock pode ter dependências em C que serão compiladas",
      "Use `luarocks --lua-version=5.1` para projetos LuaJIT"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para evitar conflitos entre projetos, use `luarocks init` no diretório do projeto. Funciona como `package.json` + `node_modules` do Node."
      },
      {
        "type": "warning",
        "content": "Rocks que dependem de bibliotecas C (lua-cjson, luasocket) precisam de compilador no sistema. No Linux, instale `build-essential`; no macOS, `xcode-select --install`."
      }
    ]
  },
  {
    "slug": "interpretador-repl",
    "section": "instalacao",
    "title": "O interpretador interativo (REPL)",
    "difficulty": "iniciante",
    "subtitle": "Testando código direto no terminal, sem arquivos.",
    "intro": "REPL significa **Read-Eval-Print Loop**: a ferramenta lê o que você digita, avalia, imprime o resultado e volta a esperar. Toda linguagem moderna tem um — e o do Lua se chama simplesmente `lua` (sem argumentos).\n\nO REPL é o melhor lugar para experimentar. Quer saber como `string.sub` se comporta com índice negativo? Não precisa criar arquivo: abre o REPL, digita, descobre. Quer testar uma fórmula matemática rápida? Idem. É também ótimo para inspecionar valores enquanto você aprende.\n\nA partir de Lua 5.3, o REPL ficou ainda mais conveniente: se você digita uma expressão (não um comando), ele imprime o valor automaticamente, sem precisar escrever `print(...)`. Em versões mais antigas (5.1, LuaJIT) você precisa prefixar com `=`, como em `= 2 + 2`.\n\nPara sair, use `os.exit()`, ou aperte `Ctrl+D` (Linux/macOS) ou `Ctrl+Z` seguido de Enter (Windows). Para quebrar uma expressão grande em várias linhas, basta o REPL identificar que ela ainda não terminou e exibir `>>` em vez de `>`.",
    "codes": [
      {
        "lang": "bash",
        "code": "$ lua\nLua 5.4.6  Copyright (C) 1994-2024 Lua.org, PUC-Rio\n> 2 + 2\n4\n> nome = 'Maria'\n> print('Olá, ' .. nome)\nOlá, Maria\n> string.upper('lua')\nLUA\n> os.exit()"
      },
      {
        "lang": "bash",
        "code": "# expressão de várias linhas — REPL mostra >> esperando você terminar\n> for i = 1, 3 do\n>>   print(i)\n>> end\n1\n2\n3"
      },
      {
        "lang": "bash",
        "code": "# Lua 5.1 / LuaJIT precisa de = para imprimir valor\n$ lua5.1\n> = 2 + 2\n4\n> = math.pi\n3.1415926535898"
      }
    ],
    "points": [
      "Digite `lua` sem argumentos para abrir o REPL",
      "Em Lua 5.3+, expressões soltas imprimem automaticamente",
      "Em Lua 5.1/LuaJIT, prefixe com `=` para ver o valor",
      "Use Ctrl+D (Unix) ou Ctrl+Z+Enter (Windows) para sair",
      "Pode quebrar expressões em várias linhas — vira `>>`",
      "Excelente para testar funções de string, math e tabelas",
      "Variáveis criadas no REPL são globais (sem `local`)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Instale o pacote `lua-readline` ou use `rlwrap lua` para ter histórico (seta pra cima) e autocomplete no REPL. Faz toda a diferença."
      }
    ]
  },
  {
    "slug": "primeiro-script",
    "section": "instalacao",
    "title": "Seu primeiro script",
    "difficulty": "iniciante",
    "subtitle": "Crie e execute um arquivo .lua de verdade.",
    "intro": "O REPL é ótimo para experimentos, mas programas de verdade vivem em arquivos. Em Lua, basta criar um arquivo de texto com extensão `.lua`, escrever código e rodar com `lua nome.lua`. Não há `main()` obrigatória, não há boilerplate — o código é executado de cima para baixo.\n\nVamos construir um programa minúsculo que pergunta o nome do usuário e responde com uma saudação. Esse \"hello world interativo\" exercita três coisas fundamentais: imprimir saída sem quebrar linha (`io.write`), ler do teclado (`io.read`) e concatenar strings (`..`).\n\nUm detalhe que confunde: `print()` adiciona uma quebra de linha automaticamente; `io.write()` não. Para perguntas (\"Qual seu nome? \") você quer que o cursor fique na mesma linha — então use `io.write`. Para imprimir resultados, `print` é mais cômodo.\n\nA execução é direta: `lua ola.lua` no terminal. Se aparecer um erro tipo `attempt to concatenate a nil value`, é provável que `io.read` tenha retornado `nil` (entrada vazia) — a próxima trilha cobre como tratar isso.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- arquivo: ola.lua\nio.write('Qual seu nome? ')   -- sem \\n no fim\nlocal nome = io.read()        -- lê uma linha do teclado\nprint('Olá, ' .. nome .. '! Bem-vindo ao Lua.')"
      },
      {
        "lang": "bash",
        "code": "# executando o script\n$ lua ola.lua\nQual seu nome? Maria\nOlá, Maria! Bem-vindo ao Lua."
      },
      {
        "lang": "lua",
        "code": "-- versão um pouco mais robusta\n-- arquivo: ola2.lua\nio.write('Seu nome: ')\nlocal nome = io.read()\nif nome == nil or nome == '' then\n  nome = 'Anônimo'\nend\nprint(string.format('Olá, %s!', nome))"
      }
    ],
    "points": [
      "Arquivos Lua usam extensão `.lua`",
      "Execute com `lua nome.lua` (sem `main`, sem boilerplate)",
      "`print()` quebra linha automaticamente; `io.write()` não",
      "`io.read()` lê uma linha do teclado e retorna string ou nil",
      "Use `..` para concatenar strings",
      "Código roda de cima para baixo — sem ponto de entrada",
      "Use `#!/usr/bin/env lua` no topo para tornar o script executável no Unix"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "No Unix, adicione `#!/usr/bin/env lua` na primeira linha e `chmod +x ola.lua` para rodar como `./ola.lua`."
      }
    ]
  },
  {
    "slug": "editores-ides",
    "section": "instalacao",
    "title": "Editores e IDEs",
    "difficulty": "iniciante",
    "subtitle": "VS Code, ZeroBrane Studio e outros.",
    "intro": "Você pode escrever Lua em qualquer editor de texto — até no Bloco de Notas. Mas um bom editor com suporte à linguagem economiza horas de depuração: detecta variáveis globais acidentais, completa nomes de funções, mostra documentação ao passar o mouse e às vezes até depura o código passo a passo.\n\nA combinação mais usada hoje é **VS Code** com a extensão **Lua** mantida pela LuaLS (anteriormente sumneko). Ela traz autocomplete inteligente, navegação por símbolos, refatoração e integração com o linter `luacheck`. É gratuita e funciona em Windows, macOS e Linux.\n\nSe você prefere uma IDE feita só para Lua, **ZeroBrane Studio** é a escolha clássica. Vem com debugger gráfico embutido — você clica para colocar breakpoints e inspecionar variáveis, exatamente como em IDEs comerciais. É leve e excelente para quem está começando.\n\nPara casos específicos: **IntelliJ IDEA** com o plugin EmmyLua é forte em projetos grandes; o **Roblox Studio** é obrigatório se você for fazer scripts de Roblox (já vem com editor, debugger e simulador). Sublime Text e Neovim também têm bom suporte via LSP.",
    "codes": [
      {
        "lang": "text",
        "code": "Recomendações por perfil:\n\nINICIANTE\n  → ZeroBrane Studio (debugger embutido, zero config)\n  → VS Code + extensão Lua (sumneko/LuaLS)\n\nINTERMEDIÁRIO/AVANÇADO\n  → VS Code + Lua + luacheck + Even Better TOML\n  → Neovim + nvim-lspconfig + lua-language-server\n  → IntelliJ + EmmyLua (projetos enormes)\n\nESPECÍFICOS\n  → Roblox Studio    (Roblox/Luau, obrigatório)\n  → ZeroBrane        (LÖVE 2D — vem template pronto)\n  → IntelliJ Rider   (jogos Defold)"
      },
      {
        "lang": "json",
        "code": "// .vscode/settings.json — recomendado para projetos Lua\n{\n  \"Lua.runtime.version\": \"Lua 5.4\",\n  \"Lua.diagnostics.globals\": [\"love\", \"vim\"],\n  \"Lua.workspace.library\": [],\n  \"Lua.format.enable\": true,\n  \"editor.tabSize\": 2,\n  \"editor.insertSpaces\": true\n}"
      }
    ],
    "points": [
      "VS Code + extensão Lua (LuaLS) é o padrão moderno",
      "ZeroBrane Studio é IDE dedicada com debugger gráfico",
      "Configure `Lua.runtime.version` para sua versão alvo",
      "Adicione globals (love, vim, game) para evitar warnings falsos",
      "luacheck pega globais acidentais — instale via luarocks",
      "Para Roblox use o Roblox Studio oficial",
      "Indentação convencional: 2 espaços, sem tabs"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Mesmo se for usar VS Code, instale o `luacheck` (`luarocks install luacheck`) e configure-o como linter. Ele pega bugs antes de você rodar."
      }
    ]
  },
  {
    "slug": "organizando-projeto",
    "section": "instalacao",
    "title": "Estrutura recomendada de projetos",
    "difficulty": "iniciante",
    "subtitle": "Como organizar código em pastas conforme o projeto cresce.",
    "intro": "Um script de 50 linhas vive feliz num único arquivo. Mas assim que seu projeto passa de algumas centenas de linhas, dividir em **módulos** (cada arquivo `.lua` é um módulo) deixa tudo mais fácil de manter, testar e reusar.\n\nLua é minimalista e **não impõe estrutura**. Diferente de Java ou Rust, não há \"jeito oficial\" de organizar pastas. Cada framework tem suas convenções: LÖVE 2D espera `main.lua` e `conf.lua` na raiz; Roblox usa serviços como ServerScriptService e ReplicatedStorage; OpenResty espera scripts referenciados no `nginx.conf`.\n\nPara projetos genéricos (CLI, biblioteca, script grande), uma estrutura limpa típica é: `main.lua` na raiz como ponto de entrada, pasta `src/` (ou `lua/`) com os módulos, pasta `spec/` ou `tests/` com testes (geralmente usando o framework `busted`), e `README.md` explicando como rodar.\n\nO `require` resolve módulos via `package.path`. Se você organizar em `src/jogador.lua`, vai chamar com `require('src.jogador')` — o ponto vira separador de pastas. Em projetos com LuaRocks por projeto, adicione também `lua_modules/` (entra no `.gitignore`).",
    "codes": [
      {
        "lang": "text",
        "code": "Projeto genérico (CLI ou biblioteca):\n\nmeu-projeto/\n├── main.lua            # ponto de entrada\n├── README.md\n├── meu-projeto-1.0-1.rockspec   # se for publicar no LuaRocks\n├── src/\n│   ├── jogador.lua\n│   ├── inimigo.lua\n│   └── util/\n│       └── math2.lua\n├── spec/               # testes com busted\n│   └── jogador_spec.lua\n├── lua_modules/        # deps do LuaRocks (gitignore)\n└── .luacheckrc         # config do linter"
      },
      {
        "lang": "text",
        "code": "Projeto LÖVE 2D (jogo):\n\nmeu-jogo/\n├── main.lua            # love.load, love.update, love.draw\n├── conf.lua            # config da janela e módulos\n├── assets/\n│   ├── sprites/\n│   └── sons/\n├── src/\n│   ├── jogador.lua\n│   ├── cenas/\n│   └── util/\n└── README.md"
      },
      {
        "lang": "lua",
        "code": "-- main.lua usando módulos da pasta src/\nlocal Jogador = require('src.jogador')\nlocal Inimigo = require('src.inimigo')\n\nlocal p = Jogador.new('Ana')\nlocal i = Inimigo.new('Goblin')\nprint(p:atacar(i))"
      }
    ],
    "points": [
      "Lua não impõe estrutura — adote a do framework usado",
      "Roblox: estrutura via Workspace/ServerScriptService",
      "LÖVE 2D: main.lua + conf.lua na raiz, assets/ ao lado",
      "OpenResty: scripts citados em nginx.conf via `content_by_lua_file`",
      "Use pastas src/ ou lua/ para separar fonte de configs",
      "`require('src.jogador')` carrega `src/jogador.lua` (ponto = barra)",
      "Ponha `lua_modules/` no `.gitignore` se usar LuaRocks por projeto"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Crie um `.luacheckrc` na raiz com `std = 'lua54'` e a lista de globais permitidos. O linter vai pegar erros bobos antes de você rodar."
      }
    ]
  },
  {
    "slug": "argumentos-cli",
    "section": "instalacao",
    "title": "Argumentos de linha de comando",
    "difficulty": "iniciante",
    "subtitle": "Lendo argumentos passados para o seu script.",
    "intro": "Quando você roda `lua somar.lua 10 20`, o `10` e o `20` precisam chegar de algum jeito ao seu código. Em Lua, isso vem pela **tabela global `arg`**, criada automaticamente pelo interpretador antes do seu script começar.\n\n`arg[1]` é o primeiro argumento, `arg[2]` o segundo, e por aí vai. Em índices negativos ficam coisas como o nome do interpretador e flags (`arg[-1]`, `arg[0]`). Para a maioria dos casos, você só precisa de `arg[1]`, `arg[2]`, etc.\n\nO detalhe importante: **tudo em `arg` é string**. Mesmo se o usuário digitou `10`, você recebe `\"10\"`. Para fazer matemática, converta com `tonumber()`. Se ele não passou nada, o índice é `nil` — então sempre cheque antes de usar.\n\nPara CLIs simples (1-2 argumentos), `arg[N]` direto resolve. Para CLIs mais ricas (com flags como `--verbose`, subcomandos, help automático), use bibliotecas dedicadas como `argparse` ou `lapp`. O básico, porém, dá conta de 90% dos scripts pessoais.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- arquivo: somar.lua\nlocal a = tonumber(arg[1])\nlocal b = tonumber(arg[2])\n\nif not a or not b then\n  print('Uso: lua somar.lua <a> <b>')\n  os.exit(1)\nend\n\nprint(a + b)"
      },
      {
        "lang": "bash",
        "code": "$ lua somar.lua 10 20\n30\n\n$ lua somar.lua\nUso: lua somar.lua <a> <b>\n\n$ lua somar.lua banana 5\nUso: lua somar.lua <a> <b>"
      },
      {
        "lang": "lua",
        "code": "-- inspecionando arg inteiro\nfor i = -1, #arg do\n  print(i, arg[i])\nend\n\n-- exemplo de saída ao rodar `lua exemplo.lua oi tchau`:\n-- -1   lua\n--  0   exemplo.lua\n--  1   oi\n--  2   tchau"
      }
    ],
    "points": [
      "Argumentos chegam na tabela global `arg`",
      "`arg[1]` é o primeiro argumento do usuário",
      "`arg[0]` é o nome do script; `arg[-1]` o interpretador",
      "Tudo em `arg` é string — converta com `tonumber()`",
      "`#arg` dá quantos argumentos foram passados",
      "Sempre valide e mostre uso (\"usage\") em caso de erro",
      "Para flags complexas use `argparse` ou `lapp` do LuaRocks"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Se `arg[1]` for um número e você esquecer de `tonumber`, `arg[1] + 1` vai dar erro. Lua 5.3+ até converte string numérica em alguns casos, mas não confie."
      },
      {
        "type": "tip",
        "content": "Para CLIs profissionais (subcomandos, --help automático), instale `argparse`: `luarocks install argparse`. Vale o investimento."
      }
    ]
  },
  {
    "slug": "hello-world-completo",
    "section": "instalacao",
    "title": "Hello World completo",
    "difficulty": "iniciante",
    "subtitle": "Um primeiro programa que faz algo útil.",
    "intro": "Já passamos por `print`, `io.read` e argumentos. Agora vamos juntar tudo num script pequeno mas que faz algo de fato útil: pergunta o nome do usuário, descobre que horas são pelo relógio do sistema e devolve uma saudação adequada — \"Bom dia\" antes do meio-dia, \"Boa tarde\" até as 18h, \"Boa noite\" depois disso.\n\nO programa exercita conceitos importantes: **`os.date('%H')`** (pega a hora atual como string), **`tonumber`** (converte para número), **`if/elseif/else/end`** (decisão), **`string.format`** (formatação estilo printf) e **`io.read`** (entrada do teclado). Tudo em poucas linhas.\n\nVeja como é compacto comparado a outras linguagens: nada de classes, nada de imports, nada de `public static void main`. Lua é direta ao ponto, e isso fica óbvio quando você compara o mesmo programa em Java ou C#.\n\nSe você está só lendo, copie o código, salve como `saudacao.lua`, rode com `lua saudacao.lua` em horários diferentes do dia. Esse tipo de exercício pequeno é o que constrói intuição — bem mais do que decorar tabelas de operadores.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- arquivo: saudacao.lua\nlocal hora = tonumber(os.date('%H'))   -- '14' -> 14\n\nio.write('Como você se chama? ')\nlocal nome = io.read()\n\nlocal saudacao\nif hora < 12 then\n  saudacao = 'Bom dia'\nelseif hora < 18 then\n  saudacao = 'Boa tarde'\nelse\n  saudacao = 'Boa noite'\nend\n\nprint(string.format('%s, %s! Já são %dh.', saudacao, nome, hora))"
      },
      {
        "lang": "bash",
        "code": "$ lua saudacao.lua\nComo você se chama? Lia\nBoa tarde, Lia! Já são 14h."
      },
      {
        "lang": "lua",
        "code": "-- versão com proteção contra entrada vazia\nlocal hora = tonumber(os.date('%H'))\nio.write('Seu nome: ')\nlocal nome = io.read()\nif not nome or nome == '' then nome = 'Visitante' end\n\nlocal saud = (hora < 12 and 'Bom dia')\n           or (hora < 18 and 'Boa tarde')\n           or 'Boa noite'\n\nprint(string.format('%s, %s!', saud, nome))"
      }
    ],
    "points": [
      "`..` concatena strings",
      "`os.date('%H')` retorna a hora atual como string '00'-'23'",
      "`tonumber()` converte string para número (ou nil se falhar)",
      "`string.format` é o `printf` do Lua",
      "`if/elseif/else/end` — note o `end` no final",
      "Lua não tem operador ternário; use `cond and a or b`",
      "Programa cabe em 10 linhas — minimalismo da linguagem"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Brinque com formatadores de `os.date`: `%Y` ano, `%m` mês, `%d` dia, `%H:%M:%S` hora completa. Igual ao C `strftime`."
      }
    ]
  },
  {
    "slug": "sintaxe-basica",
    "section": "sintaxe",
    "title": "Sintaxe básica de Lua",
    "difficulty": "iniciante",
    "subtitle": "Comentários, ponto e vírgula, blocos.",
    "intro": "Antes de mergulhar em variáveis, tipos e tabelas, vale entender as regras gerais que organizam um arquivo Lua. A primeira surpresa para quem vem de C, Java ou JavaScript: **Lua não usa chaves `{}` para delimitar blocos**. Em vez disso, usa palavras-chave em pares como `do/end`, `then/end`, `function/end`, `repeat/until`.\n\nIndentação não tem valor sintático — você poderia escrever tudo em uma linha só. Mas a convenção da comunidade é **2 espaços por nível**, sem tabs. Isso não é regra do interpretador, é higiene.\n\nComentários começam com `--` (até o fim da linha). Para comentar várias linhas, use `--[[ ... ]]`. Truque útil: `--[[ ... --]]` permite \"ligar\" e \"desligar\" o bloco trocando uma linha — comum quando você quer alternar entre versões de código durante depuração.\n\nPonto e vírgula `;` é **opcional** no fim de instruções. A maioria do código Lua não usa. Você só vai precisar dele para separar duas instruções na mesma linha (raro) ou para resolver ambiguidades sintáticas específicas (mais raro ainda).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- comentário de uma linha (até o \\n)\n\n--[[\n  comentário de\n  várias linhas\n]]\n\n-- truque: comente/descomente um bloco trocando 1 linha\n---[[\nprint('este bloco está ATIVO')\n--]]\n\n--[[\nprint('este bloco está DESATIVADO')\n--]]"
      },
      {
        "lang": "lua",
        "code": "-- blocos delimitados por palavras-chave, NÃO chaves\nif true then\n  print('dentro do if')\n  print('continua')\nend\n\nfor i = 1, 3 do\n  print(i)\nend\n\nfunction soma(a, b)\n  return a + b\nend"
      },
      {
        "lang": "lua",
        "code": "-- ponto e vírgula é opcional\nlocal a = 1\nlocal b = 2\n\n-- equivalente, em uma linha\nlocal c = 3; local d = 4\n\n-- caso clássico onde ; ajuda (separa atribuição de chamada)\nlocal f = function() return 1 end\n;(f)()  -- ; aqui evita o parser entender como f()(...)"
      }
    ],
    "points": [
      "`--` inicia comentário de linha",
      "`--[[ ... ]]` para comentário de várias linhas",
      "Blocos terminam com `end` (sem chaves)",
      "Indentação é estética — convenção é 2 espaços, sem tabs",
      "Ponto e vírgula é opcional em quase todos os casos",
      "`do ... end` cria um bloco/scope manual",
      "Lua é case-sensitive: `Foo` e `foo` são variáveis diferentes"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use `do ... end` para criar escopo isolado quando precisar liberar `local`s rapidamente — útil em scripts longos."
      },
      {
        "type": "info",
        "content": "Apesar de `;` ser opcional, o estilo da comunidade é OMITIR. Use só quando realmente precisar."
      }
    ]
  },
  {
    "slug": "variaveis-local",
    "section": "sintaxe",
    "title": "Variáveis: local vs global",
    "difficulty": "iniciante",
    "subtitle": "Por que SEMPRE usar local.",
    "intro": "Toda linguagem precisa de um jeito de dar nomes a valores. Em Lua, isso é tão simples que vira armadilha: **variáveis sem a palavra-chave `local` são automaticamente globais**. Sem aviso, sem warning, sem nada — `x = 10` funciona, mas `x` agora vive no escopo global do programa inteiro.\n\nIsso é o oposto de Python (onde escopo é função) e oposto do que você esperaria. Em projetos pequenos passa batido; em projetos grandes ou em frameworks como LÖVE 2D, esquecer um `local` pode causar bugs surreais — uma função A muda uma global que outra função B usa, e horas depois você descobre que era só um `local` esquecido.\n\nA regra prática: **sempre escreva `local`**. Variáveis globais existem para casos muito específicos (configuração de framework, hot-reload, scripts CLI minúsculos). Para tudo mais, `local`.\n\nLua também suporta **atribuição múltipla**: `local a, b = 1, 2`. Se houver menos valores que variáveis, as restantes recebem `nil`. Se houver mais, os extras são descartados. E o truque idiomático mais bonito da linguagem — trocar dois valores em uma linha — vem grátis: `a, b = b, a`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- atenção: uma variável sem `local` vira GLOBAL\nx = 10           -- GLOBAL (evite!)\nlocal y = 20     -- local (sempre prefira)\n\nprint(_G.x)      -- 10  (vê a global pelo namespace _G)\nprint(_G.y)      -- nil (locais NÃO ficam em _G)"
      },
      {
        "lang": "lua",
        "code": "-- atribuição múltipla\nlocal nome, idade = 'Ana', 30\n\n-- valores extras são descartados\nlocal a, b = 1, 2, 3   -- 3 é jogado fora\n\n-- valores faltantes viram nil\nlocal x, y, z = 1, 2   -- z é nil\n\n-- truque idiomático: swap em uma linha\nlocal m, n = 'maçã', 'banana'\nm, n = n, m\nprint(m, n)            -- saída: banana   maçã"
      },
      {
        "lang": "lua",
        "code": "-- escopo: locais respeitam blocos\nlocal x = 1\ndo\n  local x = 2        -- nova variável, sombreia a de fora\n  print(x)           -- 2\nend\nprint(x)             -- 1 (a de fora não foi tocada)\n\n-- atributos do Lua 5.4 (não funcionam em LuaJIT/5.1)\nlocal MAX <const> = 100\n-- MAX = 200          -- ERRO: tentou reatribuir constante"
      }
    ],
    "points": [
      "SEMPRE use `local` — sem ele, a variável vira global",
      "Globais ficam todas em `_G`; locais não",
      "Atribuição múltipla: `local a, b = 1, 2`",
      "Faltam valores? Viram `nil`. Sobram? São descartados",
      "Swap idiomático: `a, b = b, a`",
      "`local x <const> = ...` cria constante (Lua 5.4)",
      "Sombreamento (shadowing) com `local x` em bloco interno é OK e comum"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Esquecer `local` é a fonte número 1 de bugs em Lua. Configure `luacheck` no editor para alertar — economiza horas de debug."
      },
      {
        "type": "tip",
        "content": "Em projetos grandes, declare ALL globais que você realmente quer no topo do arquivo, e use luacheck com `std = 'lua54+globals'` para detectar acidentais."
      }
    ]
  },
  {
    "slug": "tipos-basicos",
    "section": "sintaxe",
    "title": "Os 8 tipos de Lua",
    "difficulty": "iniciante",
    "subtitle": "nil, boolean, number, string, table, function, userdata, thread.",
    "intro": "Lua é radicalmente minimalista quanto a tipos: existem **apenas 8** no total. Compare com Python (dezenas), Java (primitivos + classes infinitas), JS (uma confusão histórica). Em Lua, os tipos são: `nil`, `boolean`, `number`, `string`, `table`, `function`, `userdata` e `thread`.\n\nNo dia a dia, você usa **seis**: nil (\"nada\"), boolean (true/false), number (números), string (texto), table (tudo que é coleção) e function (código reusável). Os outros dois são especializados: `userdata` é como C entrega objetos próprios (ponteiros) ao Lua, e `thread` representa **corotinas** — não são threads de SO, são fluxos cooperativos.\n\nO grande detalhe filosófico: **tabela é a única estrutura de dados nativa**. Não existe lista, set, dicionário, struct, classe — tudo é table. E mesmo assim Lua resolve praticamente qualquer problema. Você verá nas trilhas de tabelas e metatables como isso acontece.\n\nA função embutida `type(valor)` devolve uma string com o nome do tipo. É o que você usa para checar dinamicamente o que recebeu. Note que `type()` retorna a string `'nil'`, não o valor `nil` em si — diferença sutil mas que confunde.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- os 6 tipos do dia a dia\nprint(type(nil))      -- 'nil'\nprint(type(true))     -- 'boolean'\nprint(type(42))       -- 'number'\nprint(type('oi'))     -- 'string'\nprint(type({}))       -- 'table'\nprint(type(print))    -- 'function'\n\n-- e os 2 especializados\nprint(type(coroutine.create(function() end))) -- 'thread'\n-- userdata aparece quando uma lib C entrega valores"
      },
      {
        "lang": "lua",
        "code": "-- type() retorna STRING — cuidado na comparação\nlocal x = nil\nif type(x) == 'nil' then print('x está vazio') end\n-- não escreva `if type(x) == nil` — vai falhar sempre\n\n-- guard típico de função\nlocal function dobro(n)\n  if type(n) ~= 'number' then\n    error('esperava number, recebi ' .. type(n))\n  end\n  return n * 2\nend\n\nprint(dobro(21))       -- 42\nprint(dobro('oi'))     -- erro: esperava number, recebi string"
      },
      {
        "lang": "lua",
        "code": "-- o que NÃO existe em Lua (de propósito)\n-- - sem int separado de float (até Lua 5.3)\n-- - sem array separado de hashmap — só `table`\n-- - sem char separado de string — só `string`\n-- - sem class — você \"emula\" com table + metatable"
      }
    ],
    "points": [
      "São apenas 8 tipos: minimalismo radical",
      "No dia a dia: nil, boolean, number, string, table, function",
      "`thread` é corotina (não thread de SO)",
      "`userdata` é como C entrega objetos próprios ao Lua",
      "`table` é a ÚNICA estrutura de dados nativa",
      "`type(valor)` devolve string com o nome do tipo",
      "Compare sempre com string: `type(x) == 'number'`"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "`type(x) == nil` está ERRADO (compara com o valor nil, não com a string 'nil') e SEMPRE retorna false. O certo é `type(x) == 'nil'`."
      },
      {
        "type": "info",
        "content": "Em Lua 5.3+, `number` tem dois subtipos: `integer` e `float`. Use `math.type(x)` para distinguir."
      }
    ]
  },
  {
    "slug": "nil-truthy",
    "section": "sintaxe",
    "title": "nil e o que é 'falsy'",
    "difficulty": "iniciante",
    "subtitle": "Em Lua, só nil e false são falsos.",
    "intro": "Quase toda linguagem tem regras esquisitas sobre o que conta como \"falso\" em condições. Em Python, `0`, `''`, `[]`, `{}` e `None` são todos falsos. Em JavaScript, é uma novela. Em C, qualquer coisa diferente de zero é verdade. **Em Lua, a regra é cristalina e simples: só `nil` e `false` são falsos. PONTO.**\n\nIsso significa que `0` é verdadeiro. `''` (string vazia) é verdadeiro. `{}` (tabela vazia) é verdadeiro. Qualquer função, qualquer userdata, qualquer thread — tudo verdadeiro. Quem vem de outras linguagens precisa fixar isso para sempre, porque é causa frequente de bugs sutis.\n\n`nil` representa a ausência de valor. Variável não inicializada é `nil`. Chave inexistente em tabela retorna `nil`. Função sem `return` devolve `nil`. É o \"vazio universal\" de Lua.\n\nUm padrão idiomático lindo aproveita isso: **`x or padrão`**. Como `or` faz curto-circuito e devolve o primeiro valor verdadeiro, escrever `local nome = entrada or 'Anônimo'` significa \"use entrada se ela for útil; senão, use 'Anônimo'\". Útil demais para configs e parâmetros opcionais.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- coisas que MUITA gente acha que são falsas, mas não são\nif 0  then print('zero é true!')         end\nif '' then print('string vazia é true!') end\nif {} then print('tabela vazia é true!') end\n\n-- só estes dois são falsos\nif nil   then print('nunca imprime') end\nif false then print('nunca imprime') end"
      },
      {
        "lang": "lua",
        "code": "-- padrão idiomático: valor padrão com `or`\nlocal function saudar(nome)\n  nome = nome or 'Anônimo'\n  print('Olá, ' .. nome)\nend\n\nsaudar('Lia')      -- Olá, Lia\nsaudar(nil)        -- Olá, Anônimo\nsaudar()           -- Olá, Anônimo\n\n-- CUIDADO: se 0 ou '' fossem valores válidos, esse padrão falha\nlocal function set_volume(v)\n  v = v or 50      -- BUG: set_volume(0) vira 50!\nend"
      },
      {
        "lang": "lua",
        "code": "-- diferença sutil: `nil` vs ausência de chave em tabela\nlocal t = { a = 1, b = nil }\nprint(t.a)        -- 1\nprint(t.b)        -- nil\nprint(t.c)        -- nil  (também! sem distinção)\n\n-- atribuir nil a uma chave EFETIVAMENTE remove a chave\nt.a = nil\nfor k, v in pairs(t) do print(k, v) end\n-- (nada imprime — todas removidas)"
      }
    ],
    "points": [
      "Apenas `nil` e `false` são falsos em Lua",
      "`0`, `''`, `{}` são TODOS verdadeiros",
      "`nil` é o \"vazio universal\" — falta de valor",
      "Variável não inicializada vale `nil`",
      "Padrão de default: `x = x or padrao`",
      "Atribuir `nil` a uma chave de tabela REMOVE a chave",
      "`and`/`or` retornam um operando (não true/false)"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Quem vem de C/JS sempre se confunde: `0` é VERDADEIRO em Lua. Se a sua função aceita 0 como valor válido, NÃO use `x = x or padrão`."
      },
      {
        "type": "tip",
        "content": "Para diferenciar \"não passou parâmetro\" de \"passou nil\", use `select('#', ...)` para contar argumentos recebidos."
      }
    ]
  },
  {
    "slug": "numeros",
    "section": "sintaxe",
    "title": "Números: integer e float",
    "difficulty": "iniciante",
    "subtitle": "Lua 5.3+ tem inteiros nativos.",
    "intro": "Até Lua 5.2 (e ainda hoje em LuaJIT), todo número era um **double** de 64 bits — ou seja, sempre float. Isso é simples mas tem custos: contadores que deveriam ser inteiros sofriam erros de arredondamento, operações de bit ficavam estranhas, e indexar arrays com 0.999999... dava confusão.\n\nA partir de **Lua 5.3**, o tipo `number` ganhou dois **subtipos**: `integer` (64 bits) e `float` (double). O interpretador escolhe automaticamente: literais sem ponto decimal viram integer (`10`), com ponto viram float (`10.0`). Operações entre dois integers preservam integer; misturar com float promove o resultado a float.\n\nOs operadores também ficaram mais ricos: `/` é divisão real (sempre devolve float, mesmo `10 / 5`), `//` é divisão inteira (truncada, estilo Python), `%` resto, `^` exponenciação (sempre float). Os bit a bit `&`, `|`, `~`, `<<`, `>>` chegaram nessa versão também.\n\nPara descobrir qual subtipo um valor tem, use `math.type(x)` — retorna `'integer'`, `'float'` ou `nil` (se nem for número). E lembre: **LuaJIT está congelado em Lua 5.1**, então lá `//`, `&` etc. NÃO existem. Se vai escrever código portável, use `math.floor(a/b)` no lugar de `a // b`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- subtipos integer e float (Lua 5.3+)\nlocal i = 10        -- integer\nlocal f = 10.5      -- float\nlocal g = 10.0      -- float (tem ponto)\n\nprint(math.type(i)) -- 'integer'\nprint(math.type(f)) -- 'float'\nprint(math.type(g)) -- 'float'"
      },
      {
        "lang": "lua",
        "code": "-- operadores aritméticos\nprint(10 / 3)    -- 3.3333333333333  (sempre float)\nprint(10 // 3)   -- 3                (divisão inteira)\nprint(10 % 3)    -- 1                (resto)\nprint(2 ^ 10)    -- 1024.0           (sempre float)\nprint(7 // 2)    -- 3\nprint(-7 // 2)   -- -4               (truncamento para baixo!)\n\n-- operadores bit a bit (Lua 5.3+, NÃO em LuaJIT)\nprint(0xFF & 0x0F)  -- 15\nprint(1 << 8)       -- 256\nprint(~0)           -- -1"
      },
      {
        "lang": "lua",
        "code": "-- precisão e armadilha clássica\nprint(0.1 + 0.2)         -- 0.3 (na verdade 0.30000000000000004)\nprint(0.1 + 0.2 == 0.3)  -- false (mesmo bug de todo IEEE 754)\n\n-- integer overflow envolve (Lua 5.4)\nprint(math.maxinteger + 1)  -- -9223372036854775808\n\n-- conversão explícita\nprint(math.floor(3.9))   -- 3\nprint(math.ceil(3.1))    -- 4\nprint(math.tointeger(2.0)) -- 2 (vira integer; 2.5 vira nil)"
      }
    ],
    "points": [
      "Lua 5.3+ tem subtipos `integer` e `float`",
      "`/` SEMPRE devolve float, mesmo 10/5",
      "`//` é divisão inteira (truncamento para baixo)",
      "`%` é resto; `^` é potência (sempre float)",
      "`&`, `|`, `~`, `<<`, `>>` são bit a bit (5.3+)",
      "Use `math.type(x)` para distinguir integer de float",
      "LuaJIT está em 5.1: SEM `//`, `&`, `|`, integer nativo"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Comparações de float sofrem do clássico `0.1 + 0.2 ~= 0.3`. Para testes, use uma tolerância: `math.abs(a - b) < 1e-9`."
      },
      {
        "type": "info",
        "content": "Para código portável entre Lua 5.4 e LuaJIT, evite `//` e `<<`. Use `math.floor(a/b)` e `bit.lshift(a, n)` (lib bit do LuaJIT)."
      }
    ]
  },
  {
    "slug": "strings-basico",
    "section": "sintaxe",
    "title": "Strings: básico",
    "difficulty": "iniciante",
    "subtitle": "Texto em Lua: aspas, concatenação e tamanho.",
    "intro": "Strings em Lua são sequências de bytes **imutáveis**. Imutáveis significa que toda \"alteração\" na verdade cria uma nova string — `s:upper()` não muda `s`, retorna outra string maiúscula. Internamente o interpretador faz **interning**: strings idênticas são compartilhadas em memória, o que torna a comparação `==` extremamente rápida.\n\nVocê pode delimitar strings com **aspas simples** (`'oi'`), **aspas duplas** (`\"oi\"`) ou **colchetes longos** (`[[oi]]`). Aspas simples e duplas são equivalentes — escolha por estilo. Os colchetes longos são especiais: preservam quebras de linha literais, ignoram escapes (`\\n` é literalmente `\\n`), e são ótimos para textos grandes ou JSON cru.\n\nA concatenação usa **`..`** (dois pontos finais), não `+` como em Python/JS. Isso evita ambiguidade com números: `'1' + 2` em Lua converte e dá 3, mas `'a' + 2` dá erro. Para texto, use sempre `..`.\n\nO operador **`#`** devolve o comprimento. Aqui há uma pegadinha: `#` conta **bytes**, não caracteres Unicode. Para strings ASCII puras, dá no mesmo. Para acentos ou emojis, use `utf8.len(s)` (Lua 5.3+).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- três jeitos de delimitar strings\nlocal s1 = 'aspas simples'\nlocal s2 = \"aspas duplas — também ok\"\nlocal s3 = [[\nstring de\nvárias linhas\n(preserva quebras literais)\n]]\n\n-- escapes funcionam em '' e \"\"\nprint('linha1\\nlinha2')    -- duas linhas\n-- mas NÃO em [[ ]]\nprint([[linha1\\nlinha2]])  -- imprime literal: linha1\\nlinha2"
      },
      {
        "lang": "lua",
        "code": "-- concatenação com .. (não +!)\nlocal nome = 'Lua'\nlocal saud = 'Olá, ' .. nome .. '!'\nprint(saud)    -- Olá, Lua!\n\n-- # devolve o tamanho EM BYTES\nprint(#'lua')      -- 3\nprint(#'café')     -- 5  (é UTF-8: c+a+f+é = 1+1+1+2 bytes)\nprint(utf8.len('café'))  -- 4 (caracteres reais)\n\n-- imutabilidade\nlocal s = 'abc'\nlocal t = s:upper()\nprint(s, t)    -- abc   ABC  (s NÃO mudou)"
      },
      {
        "lang": "lua",
        "code": "-- colchetes longos com nível (para evitar conflito com ]])\nlocal html = [==[\n<a href=\"x\">link</a>\n[[ pode ter colchetes duplos dentro ]]\n]==]\n\n-- conversão entre número e string\nprint(tostring(42))   -- '42'\nprint(tonumber('42')) -- 42\nprint(tonumber('xx')) -- nil"
      }
    ],
    "points": [
      "Strings são IMUTÁVEIS — operações criam novas",
      "Aspas simples e duplas são equivalentes",
      "`[[ ... ]]` para múltiplas linhas (sem escapes)",
      "`..` é o operador de concatenação (não `+`)",
      "`#` devolve tamanho em BYTES, não caracteres",
      "Para Unicode use `utf8.len()` (Lua 5.3+)",
      "`tostring()` e `tonumber()` convertem entre tipos"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "`#` conta bytes, não caracteres. Em strings com acento ou emoji, `#'café' == 5`, não 4. Use `utf8.len` quando importar."
      },
      {
        "type": "tip",
        "content": "Para concatenar muitas strings em loop, use `table.concat`. É bem mais rápido que `..` repetido (que cria string nova a cada iteração)."
      }
    ]
  },
  {
    "slug": "string-format",
    "section": "sintaxe",
    "title": "Formatação com string.format",
    "difficulty": "iniciante",
    "subtitle": "O 'printf' do Lua.",
    "intro": "Concatenar com `..` resolve casos simples, mas vira um inferno quando você quer alinhar colunas, controlar casas decimais, imprimir em hexadecimal ou montar strings complexas. Para isso existe **`string.format`** — basicamente o `printf` da família C, traduzido para Lua.\n\nO funcionamento é o mesmo: você passa uma string com **especificadores** começando com `%`, seguidos dos valores a serem inseridos. `%d` para inteiro, `%f` para float, `%s` para string, `%x` para hexadecimal minúsculo, `%X` para maiúsculo, `%q` para string escapada com aspas, `%%` para um `%` literal.\n\nO poder de verdade vem com os **modificadores**: `%.2f` limita a 2 casas decimais; `%10.2f` reserva 10 colunas alinhadas à direita; `%-10s` alinha à esquerda; `%05d` preenche com zeros à esquerda. Igual a C — se você sabe printf, sabe `string.format`.\n\nE como toda função de string, dá pra chamar como método: `('valor: %d'):format(42)`. É o jeito mais limpo de escrever quando você usa muito. Em código que você revisita, prefira `string.format` em vez de várias concatenações `..` — fica muito mais legível.",
    "codes": [
      {
        "lang": "lua",
        "code": "local nome, idade = 'Ana', 30\nprint(string.format('%s tem %d anos', nome, idade))\n-- saída: Ana tem 30 anos\n\n-- os principais especificadores\nprint(string.format('%d', 42))     -- 42        (integer)\nprint(string.format('%f', 3.14))   -- 3.140000  (float)\nprint(string.format('%s', true))   -- true      (qualquer coisa via tostring)\nprint(string.format('%x', 255))    -- ff        (hex minúsculo)\nprint(string.format('%X', 255))    -- FF        (hex maiúsculo)\nprint(string.format('%q', 'a\\nb')) -- \"a\\nb\"    (escapa para parser Lua)"
      },
      {
        "lang": "lua",
        "code": "-- modificadores de largura e precisão\nlocal pi = math.pi\nprint(string.format('%.2f',  pi))    -- 3.14\nprint(string.format('%.5f',  pi))    -- 3.14159\nprint(string.format('%10.2f', pi))   -- '      3.14' (largura 10)\nprint(string.format('%-10s|', 'a'))  -- 'a         |' (alinha esquerda)\nprint(string.format('%05d', 42))     -- '00042' (zero-pad)\nprint(string.format('%+d', 5))       -- '+5' (sempre com sinal)"
      },
      {
        "lang": "lua",
        "code": "-- chamada como método (mais idiomático em código moderno)\nlocal msg = ('Score: %d / %d'):format(8, 10)\nprint(msg)  -- Score: 8 / 10\n\n-- atalho comum em projetos\nlocal fmt = string.format\nprint(fmt('%s = %.3f', 'pi', math.pi))\n\n-- montando linhas alinhadas (relatório)\nfor _, p in ipairs({ {'Ana',30}, {'Bia',8}, {'Caio',150} }) do\n  print(fmt('%-10s %5d', p[1], p[2]))\nend"
      }
    ],
    "points": [
      "Sintaxe igual a `printf` da linguagem C",
      "`%d` integer, `%f` float, `%s` string, `%x` hex",
      "`%.2f` controla casas decimais",
      "`%10s` alinha à direita; `%-10s` à esquerda",
      "`%05d` preenche com zeros",
      "`('%d'):format(42)` é equivalente a `string.format(...)`",
      "Apelido comum: `local fmt = string.format`"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para logs e mensagens com vários valores, prefira `string.format` em vez de várias concatenações `..`. Mais legível e mais rápido."
      }
    ]
  },
  {
    "slug": "string-metodos",
    "section": "sintaxe",
    "title": "Métodos de string",
    "difficulty": "iniciante",
    "subtitle": "upper, lower, sub, rep, reverse e mais.",
    "intro": "A biblioteca padrão `string` traz dezenas de funções para manipular texto. O grande detalhe é que toda função aí pode ser chamada de **dois jeitos equivalentes**: como função (`string.upper(s)`) ou como método (`s:upper()`). A versão com `:` é açúcar sintático para `string.upper(s, ...)` — mais curto e mais legível.\n\nIsso funciona porque toda string em Lua tem como metatable a tabela `string`. Quando você escreve `s:upper()`, o interpretador procura `upper` em `string` e chama com `s` como primeiro argumento. Esse mesmo padrão você verá em tabelas próprias com OO via metatables.\n\nAs funções mais usadas no dia a dia: `upper`/`lower` (caixa), `sub(i, j)` (substring estilo slicing, com índices que podem ser negativos), `rep(n, sep)` (repete N vezes, opcionalmente com separador), `reverse` (inverte), `len` (tamanho — equivalente a `#`), `byte`/`char` (converte entre código numérico e caractere).\n\nFunções mais avançadas — `find`, `match`, `gmatch`, `gsub` — usam **patterns** (uma sintaxe parecida com regex, mas mais simples). Elas merecem capítulos próprios e estão nas trilhas seguintes. Por enquanto, foque nas básicas.",
    "codes": [
      {
        "lang": "lua",
        "code": "local s = '  Olá Lua  '\n\n-- caixa\nprint(s:upper())   -- '  OLÁ LUA  '\nprint(s:lower())   -- '  olá lua  '\n\n-- substring (indices podem ser negativos = contam do fim)\nprint(s:sub(3, 5))   -- 'Olá'\nprint(s:sub(-3, -1)) -- '  ' (últimos 3 chars são espaço espaço espaço, depende)\nprint(s:sub(3))      -- 'Olá Lua  '  (do índice 3 ao fim)\n\n-- inverter\nprint(s:reverse())   -- '  auL álO  '"
      },
      {
        "lang": "lua",
        "code": "-- repetir\nprint(string.rep('-', 10))         -- '----------'\nprint(string.rep('ha', 3))         -- 'hahaha'\nprint(string.rep('abc', 3, '-'))   -- 'abc-abc-abc'\n\n-- tamanho (equivalentes)\nprint(#'lua')        -- 3\nprint(('lua'):len()) -- 3\n\n-- byte e char\nprint(string.byte('A'))   -- 65\nprint(string.char(65))    -- 'A'\nprint(string.char(72, 105)) -- 'Hi'"
      },
      {
        "lang": "lua",
        "code": "-- as duas formas de chamar são equivalentes\nlocal s = 'lua'\nprint(string.upper(s))  -- 'LUA'\nprint(s:upper())        -- 'LUA' — açúcar sintático\n\n-- por que :upper() funciona em string literal?\n-- porque toda string tem 'string' como metatable\nprint(('texto'):upper())  -- 'TEXTO'\n\n-- e literais numéricas? NÃO — vira erro\n-- print((42):upper())  -- ERRO: tente (tostring(42)):upper()"
      }
    ],
    "points": [
      "`s:metodo()` é açúcar para `string.metodo(s, ...)`",
      "`string.sub(s, i, j)` é o slicing (índices podem ser negativos)",
      "`string.rep(s, n, sep)` repete com separador opcional",
      "`upper`/`lower` para caixa; `reverse` para inverter",
      "`#s` e `s:len()` dão o mesmo resultado (em bytes!)",
      "`string.byte`/`string.char` convertem char ↔ código numérico",
      "Toda string tem `string` como metatable — por isso `s:metodo()` funciona"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "`upper`/`lower` da biblioteca padrão NÃO conhecem Unicode além de ASCII (em Lua 5.4 padrão). Para texto com acento, use `utf8` ou bibliotecas como `luautf8`."
      },
      {
        "type": "info",
        "content": "Funções como `find`, `match`, `gsub` são as mais poderosas mas usam patterns próprios (não regex). Cobrimos em capítulo dedicado."
      }
    ]
  },
  {
    "slug": "operadores",
    "section": "sintaxe",
    "title": "Operadores: aritméticos, lógicos, comparação",
    "difficulty": "iniciante",
    "subtitle": "Visão geral com as pegadinhas de Lua.",
    "intro": "Operadores em Lua são quase todos familiares para quem vem de qualquer linguagem — mas há **três peculiaridades** que pegam todo iniciante: lógicos são palavras (`and`, `or`, `not`), \"diferente\" é `~=` (não `!=`), e a concatenação usa `..` (não `+`).\n\nOs **aritméticos** são os esperados: `+`, `-`, `*`, `/`, `%`, `^`. Em Lua 5.3+ entrou também `//` (divisão inteira) e os bitwise `&`, `|`, `~`, `<<`, `>>`. Cuidado: `~` faz dois papéis — unário é \"NOT bitwise\", binário em `~=` é \"diferente\".\n\nOs de **comparação** são `==`, `~=`, `<`, `>`, `<=`, `>=`. Sempre devolvem boolean. Comparação entre tipos diferentes (number vs string) lança erro — Lua não converte automaticamente para te \"ajudar\".\n\nOs **lógicos** têm um comportamento muito útil: `and` e `or` fazem **curto-circuito** e devolvem o **operando**, não um boolean. Ou seja, `nil or 'padrão'` devolve `'padrão'`. `5 and 10` devolve `10`. Isso permite o famoso truque do ternário ausente: **`condicao and a or b`** funciona como `condicao ? a : b`, com a ressalva: se `a` for `false` ou `nil`, dá errado.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- aritméticos\nprint(7 + 2)   -- 9\nprint(7 - 2)   -- 5\nprint(7 * 2)   -- 14\nprint(7 / 2)   -- 3.5    (sempre float)\nprint(7 // 2)  -- 3      (divisão inteira, 5.3+)\nprint(7 % 2)   -- 1\nprint(2 ^ 10)  -- 1024.0 (sempre float)\n\n-- comparação\nprint(5 == 5)   -- true\nprint(5 ~= 4)   -- true  (~= é \"diferente\", não !=)\nprint(5 <= 5)   -- true"
      },
      {
        "lang": "lua",
        "code": "-- lógicos: and/or/not (palavras!) com curto-circuito\nprint(true and 'a' or 'b')   -- 'a'\nprint(false and 'a' or 'b')  -- 'b'\nprint(nil or 42)             -- 42\nprint(0 and 'x')             -- 'x'  (0 é truthy!)\n\n-- ternário emulado: cuidado!\nlocal x = (cond) and valor_se_true or valor_se_false\n-- ARMADILHA: se valor_se_true for false ou nil, sempre cai no else\n\n-- bitwise (Lua 5.3+, NÃO em LuaJIT)\nprint(0xFF & 0x0F)   -- 15\nprint(1 | 4)         -- 5\nprint(~0)            -- -1\nprint(1 << 4)        -- 16"
      },
      {
        "lang": "lua",
        "code": "-- precedência (do maior para o menor)\n-- ^                                  (potência, associa à direita)\n-- unário (not, -, ~, #)\n-- *, /, //, %\n-- +, -\n-- ..                                 (associa à direita)\n-- <<, >>\n-- &\n-- ~ binário\n-- |\n-- <, >, <=, >=, ==, ~=\n-- and\n-- or\n\n-- na dúvida, USE PARÊNTESES\nlocal x = (a + b) * c"
      }
    ],
    "points": [
      "Aritméticos: `+ - * / // % ^` (`//` só Lua 5.3+)",
      "Comparação: `== ~= < > <= >=` (note `~=`, não `!=`)",
      "Lógicos: `and`, `or`, `not` (palavras, não `&& || !`)",
      "`and`/`or` fazem curto-circuito e devolvem o OPERANDO",
      "Concatenação é `..`, NÃO `+`",
      "Bitwise: `& | ~ << >>` (Lua 5.3+, não em LuaJIT)",
      "Ternário emulado: `cond and a or b` (cuidado se `a` for falsy)"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "`~=` significa \"diferente\". Escrever `!=` dá erro de sintaxe. Outra pegadinha: `==` entre tipos diferentes (5 == '5') é sempre false."
      },
      {
        "type": "tip",
        "content": "Não há ternário em Lua. Use `cond and a or b`, mas cuidado: se `a` for `false` ou `nil`, sempre cai no `b`. Em casos críticos, use `if/else`."
      }
    ]
  },
  {
    "slug": "entrada-saida",
    "section": "sintaxe",
    "title": "Entrada e saída no terminal",
    "difficulty": "iniciante",
    "subtitle": "io.read e io.write em detalhe.",
    "intro": "Para programas de console, você precisa de duas coisas: **escrever na tela** e **ler do teclado**. Em Lua, isso é a biblioteca `io`. O par básico é `io.write` (escrever sem quebrar linha) e `io.read` (ler do teclado, geralmente uma linha por vez).\n\nA diferença mais importante entre `print` e `io.write`: **`print` adiciona `\\n` automaticamente e converte cada argumento com `tostring`**; `io.write` é cru — você decide se quebra linha ou não, e os valores precisam ser strings ou números. Para perguntas (\"Nome: \") use `io.write`; para resultados rápidos use `print`.\n\n`io.read` aceita um **formato** indicando o que ler. Os principais (Lua 5.3+): `'l'` ou `'*l'` lê uma linha sem o `\\n` (padrão), `'n'` ou `'*n'` lê e converte um número, `'a'` ou `'*a'` lê tudo até EOF. Em Lua 5.1, era obrigatório o `*` na frente.\n\nA mesma biblioteca `io` também lê e escreve **arquivos**. `io.open(caminho, modo)` devolve um handle com métodos `:read()`, `:write()`, `:close()`. Para script rápido, dá pra encadear: `io.open('a.txt'):read('*a')`. Tudo isso vira segunda natureza após uns 10 minutos de prática.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- input/output básico do terminal\nio.write('Nome: ')         -- imprime SEM quebrar linha\nlocal nome = io.read('*l') -- lê uma linha (sem o \\n)\n\nio.write('Idade: ')\nlocal idade = io.read('*n') -- lê e converte para número\n\nio.write('Olá ', nome, ', ', idade, ' anos\\n')\n-- io.write aceita vários args, mas SEM converter automaticamente"
      },
      {
        "lang": "lua",
        "code": "-- print vs io.write\nprint('a', 'b', 'c')      -- 'a\\tb\\tc\\n' (separador \\t, fim \\n)\nio.write('a', 'b', 'c')   -- 'abc'         (sem nada)\nprint(42, true, nil)      -- '42\\ttrue\\tnil\\n' (converte com tostring)\nio.write(42)              -- '42'\n-- io.write(true)         -- ERRO: io.write só aceita string ou number"
      },
      {
        "lang": "lua",
        "code": "-- lendo arquivos\nlocal f = io.open('dados.txt', 'r')\nif f then\n  local conteudo = f:read('*a')   -- lê tudo de uma vez\n  print(conteudo)\n  f:close()\nend\n\n-- linha por linha (idiomático)\nfor linha in io.lines('dados.txt') do\n  print(linha)\nend\n\n-- escrita\nlocal w = io.open('saida.txt', 'w')\nw:write('linha 1\\n')\nw:write('linha 2\\n')\nw:close()"
      }
    ],
    "points": [
      "`print` quebra linha; `io.write` NÃO",
      "`print` converte tudo com `tostring`; `io.write` exige string/number",
      "`io.read('*l')` lê uma linha (sem o `\\n`)",
      "`io.read('*n')` lê e converte para número",
      "`io.read('*a')` lê tudo até EOF",
      "`io.lines(caminho)` itera linha a linha — idiomático para arquivos",
      "Em Lua 5.1, o `*` é obrigatório; em 5.3+ pode omitir"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "`io.write(true)` dá erro porque boolean não vira string automaticamente. Use `io.write(tostring(true))` ou simplesmente `print(true)`."
      },
      {
        "type": "tip",
        "content": "Sempre feche arquivos com `:close()`. Em Lua 5.4, use `local f <close> = io.open(...)` para fechar automaticamente ao sair do escopo."
      }
    ]
  },
  {
    "slug": "if-else",
    "section": "controle",
    "title": "if / elseif / else",
    "difficulty": "iniciante",
    "subtitle": "Tomando decisões no código.",
    "intro": "Todo programa precisa decidir: se o usuário existe, mostre o painel; se a senha bate, faça login; se o saldo é negativo, recuse a compra. Esse \"se isso, então aquilo\" é o coração da lógica de qualquer linguagem, e em Lua ele tem uma sintaxe enxuta que cabe na cabeça em cinco minutos.\n\nPense no `if` como uma bifurcação na estrada. A condição é uma pergunta de sim ou não. Se a resposta for sim (verdadeira), Lua entra no bloco. Senão, pode tentar outras perguntas com `elseif`, ou cair no caminho padrão do `else`.\n\nDuas coisas pegam quem está começando: `elseif` é UMA palavra só (sem espaço), e todo bloco precisa terminar com `end` — não há chaves `{}` nem indentação significativa como em Python. A indentação é só para humanos lerem.\n\nOutra peculiaridade importante: em Lua, **só `false` e `nil` são falsos**. Zero é verdadeiro. String vazia é verdadeira. Tabela vazia é verdadeira. Isso evita várias armadilhas que existem em C ou JavaScript.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Decisão simples\nlocal idade = 20\nif idade >= 18 then\n  print('Pode votar')\nend  -- saída: Pode votar"
      },
      {
        "lang": "lua",
        "code": "-- Cadeia completa\nlocal nota = 7.5\nif nota >= 9 then\n  print('A')\nelseif nota >= 7 then\n  print('B')   -- saída: B\nelseif nota >= 5 then\n  print('C')\nelse\n  print('Reprovado')\nend"
      },
      {
        "lang": "lua",
        "code": "-- Pegadinha: 0 é VERDADEIRO em Lua\nlocal n = 0\nif n then\n  print('entra aqui!')  -- saída: entra aqui!\nend\n\n-- Para checar 'tem valor', use ~= nil\nlocal x = nil\nif x ~= nil then print('tem') else print('vazio') end"
      }
    ],
    "points": [
      "elseif é UMA palavra só (não 'else if')",
      "Todo if termina com end — não usa chaves",
      "Só false e nil são falsos; 0 e '' são verdadeiros",
      "Lua não tem switch/case — use cadeia de elseif",
      "Não existe operador ternário; use if/else ou o truque a and b or c",
      "Comparação de igualdade é == ; diferente é ~= (não !=)",
      "and / or curto-circuitam: a and b devolve a se falsy, senão b"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Escrever 'else if' (com espaço) cria um if aninhado que exige um end extra. O correto é 'elseif'."
      },
      {
        "type": "tip",
        "content": "Para um ternário rápido use: local rotulo = aprovado and 'OK' or 'FAIL'. Funciona desde que o valor do meio nunca seja false/nil."
      }
    ]
  },
  {
    "slug": "while-loop",
    "section": "controle",
    "title": "Laço while",
    "difficulty": "iniciante",
    "subtitle": "Repita enquanto a condição for verdadeira.",
    "intro": "O `while` é o laço mais simples de explicar: \"enquanto isso for verdade, continue fazendo aquilo\". É o que você usa quando NÃO sabe de antemão quantas vezes vai repetir — ler entradas até o usuário digitar `sair`, processar uma fila até esvaziar, tentar conectar até dar certo.\n\nA sintaxe é `while condição do ... end`. Lua testa a condição ANTES de cada iteração; se já começa falsa, o bloco nunca executa. Isso difere de `repeat/until`, que sempre roda pelo menos uma vez.\n\nUma diferença marcante para quem vem de C, Java ou JavaScript: Lua **não tem `++` nem `+=`**. Para incrementar um contador, escreva `i = i + 1` por extenso. Pode parecer verboso, mas mantém a linguagem minúscula e sem ambiguidades.\n\nO padrão `while true do ... break end` é bem comum em Lua e nada feio: serve quando a condição de saída fica natural no meio do corpo, não no topo.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Contador clássico\nlocal i = 1\nwhile i <= 3 do\n  print('iteracao', i)\n  i = i + 1   -- não há i++ em Lua\nend\n-- saida:\n-- iteracao 1\n-- iteracao 2\n-- iteracao 3"
      },
      {
        "lang": "lua",
        "code": "-- Loop infinito com saída no meio\nwhile true do\n  io.write('digite \"sair\": ')\n  local linha = io.read()\n  if linha == 'sair' then\n    break  -- abandona o while imediatamente\n  end\n  print('voce digitou:', linha)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Consumir uma fila até esvaziar\nlocal fila = {'a', 'b', 'c'}\nwhile #fila > 0 do\n  local item = table.remove(fila, 1)\n  print('processando', item)\nend\n-- saida: processando a / b / c"
      }
    ],
    "points": [
      "Sintaxe: while cond do ... end",
      "Testa ANTES de cada iteração — pode rodar zero vezes",
      "Não há ++ nem += ; escreva i = i + 1",
      "break sai do while imediatamente",
      "while true do ... break end é idiomático",
      "Garanta que algo dentro do laço altere a condição",
      "Use #tabela > 0 para drenar coleções"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Esquecer de atualizar a variável de controle congela o programa em loop infinito. No terminal, Ctrl+C interrompe; em LÖVE, trava o jogo todo."
      }
    ]
  },
  {
    "slug": "repeat-until",
    "section": "controle",
    "title": "repeat / until",
    "difficulty": "iniciante",
    "subtitle": "Loop que sempre executa pelo menos uma vez.",
    "intro": "Às vezes você precisa rodar o bloco PELO MENOS UMA VEZ antes de poder decidir se continua. O caso clássico é pedir uma entrada do usuário: você precisa ler primeiro para depois validar. Para isso existe o `repeat ... until`.\n\nA pegadinha está na palavra `until`, que significa \"até que\". A condição é a de **saída**, não de continuação. Em `while x < 10 do` o laço continua enquanto `x < 10`; em `repeat ... until x >= 10` ele para quando `x >= 10`. É o oposto lógico, e é o que confunde quem vem de `do/while` do C (lá a condição é de continuação).\n\nUm detalhe sutil e poderoso: em Lua, variáveis `local` declaradas dentro de `repeat` ainda são visíveis na expressão do `until`. Isso não funciona em outros tipos de bloco, e existe justamente para você poder testar resultados que acabou de calcular.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Pede até receber um número > 10\nlocal n\nrepeat\n  io.write('digite um numero > 10: ')\n  n = tonumber(io.read())\nuntil n and n > 10\n\nprint('valido:', n)"
      },
      {
        "lang": "lua",
        "code": "-- A local 'tentativa' vive ate o until\nlocal tentativas = 0\nrepeat\n  tentativas = tentativas + 1\n  local sucesso = math.random() > 0.7\n  print('tentativa', tentativas, sucesso)\nuntil sucesso or tentativas >= 5"
      },
      {
        "lang": "lua",
        "code": "-- Compare com while equivalente\n-- repeat ... until cond\n-- equivale a:\n-- while true do\n--   ...\n--   if cond then break end\n-- end"
      }
    ],
    "points": [
      "Executa o corpo PELO MENOS UMA VEZ",
      "until é condição de SAÍDA (oposta ao while)",
      "Variáveis local dentro de repeat valem no until",
      "Útil para entrada-e-valida do usuário",
      "Não confunda com do/while do C — a condição inverte",
      "break funciona normalmente dentro de repeat"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Trocar 'until' por 'while' mentalmente é o erro mais comum: lembre que until é 'pare quando'."
      },
      {
        "type": "tip",
        "content": "Use repeat/until sempre que a validação só faz sentido APÓS ler/calcular algo. Para checar antes, prefira while."
      }
    ]
  },
  {
    "slug": "for-numerico",
    "section": "controle",
    "title": "Laço for numérico",
    "difficulty": "iniciante",
    "subtitle": "Iterar de N até M com passo opcional.",
    "intro": "Quando você sabe exatamente quantas vezes precisa repetir — ou seja, tem um intervalo numérico bem definido — o `for` numérico é a escolha mais clara. É curto, seguro contra loops infinitos e otimizado pelo interpretador.\n\nA sintaxe é `for var = inicio, fim, passo do ... end`, sendo o passo opcional (padrão `1`). O detalhe mais importante: **o `fim` é INCLUSIVO**. Em Lua, `for i = 1, 5` percorre 1, 2, 3, 4, 5 — diferente de Python (`range(1,5)` para em 4) ou JavaScript (`for i < 5`). Essa pequena diferença gera muito off-by-one para quem está mudando de linguagem.\n\nO passo pode ser negativo (para decrescer) ou fracionário (`0.5`, `0.1`...). A variável de controle é **local ao for** — você não pode usá-la depois do `end`, e tentar reatribuir dentro do loop é ignorado pelo iterador. Os três valores (`inicio`, `fim`, `passo`) são avaliados UMA única vez antes do loop começar.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- 1 ate 5, inclusivo\nfor i = 1, 5 do\n  io.write(i, ' ')\nend\nprint()\n-- saida: 1 2 3 4 5"
      },
      {
        "lang": "lua",
        "code": "-- Com passo (de 0 a 10 de 2 em 2)\nfor i = 0, 10, 2 do\n  io.write(i, ' ')\nend\nprint()  -- saida: 0 2 4 6 8 10\n\n-- Decrescente: passo negativo OBRIGATORIO\nfor i = 5, 1, -1 do\n  io.write(i, ' ')\nend\nprint()  -- saida: 5 4 3 2 1"
      },
      {
        "lang": "lua",
        "code": "-- A variavel i NAO existe fora do laco\nfor i = 1, 3 do\n  -- ok aqui\nend\n-- print(i)  -- erro: i e nil aqui\n\n-- Reatribuir i nao afeta a iteracao\nfor i = 1, 3 do\n  i = 999\n  print(i)  -- imprime 999, mas o for continua 1,2,3\nend"
      }
    ],
    "points": [
      "Sintaxe: for i = inicio, fim, passo do ... end",
      "O fim é INCLUSIVO — diferente de Python e JS",
      "Passo padrão é 1; pode ser negativo ou fracionário",
      "Para decrescer use passo negativo: for i=10,1,-1",
      "A variável é LOCAL ao for; não vive depois do end",
      "Os 3 valores são avaliados uma única vez no início",
      "Reatribuir a variável dentro do loop não altera o contador"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Quem vem de Python/JS sempre erra: 'for i = 1, #lista' percorre TODOS os índices, inclusive #lista. Não subtraia 1."
      },
      {
        "type": "tip",
        "content": "Para decrescer, NÃO esqueça do passo negativo. 'for i = 10, 1' simplesmente não executa, porque 10 já é maior que 1 com passo +1."
      }
    ]
  },
  {
    "slug": "for-generico",
    "section": "controle",
    "title": "Laço for genérico (ipairs/pairs)",
    "difficulty": "iniciante",
    "subtitle": "Percorrendo tabelas com iteradores.",
    "intro": "O `for` numérico serve para contar números, mas a maior parte do trabalho real envolve percorrer **coleções**: listas de produtos, configurações, jogadores na sala. Para isso Lua tem o **for genérico**, que usa funções iteradoras.\n\nAs duas iteradoras prontas do dia a dia são `ipairs` e `pairs`. A `ipairs(t)` percorre a tabela como **array**: começa em `t[1]` e vai 1, 2, 3... até encontrar `nil`. Garante a ordem. Já `pairs(t)` percorre **todas as chaves**, sejam strings, números ou o que for — mas a ordem **não é garantida** (pode mudar entre execuções, especialmente com strings).\n\nA forma é `for var1, var2, ... in iterador, estado, controle do ... end`. Na prática você quase nunca escreve isso completo: `for k, v in pairs(t) do` é o suficiente.\n\nA regra simples para escolher: se sua tabela é uma **lista** com índices contíguos `1..n`, use `ipairs`. Se é um **dicionário** (chaves nomeadas, esparsas, mistas), use `pairs`. Misturar os dois numa mesma tabela costuma significar que o desenho dos dados está confuso.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- ipairs em array\nlocal frutas = {'maca', 'banana', 'uva'}\nfor i, fruta in ipairs(frutas) do\n  print(i, fruta)\nend\n-- saida: 1 maca / 2 banana / 3 uva"
      },
      {
        "lang": "lua",
        "code": "-- pairs em dicionario\nlocal pessoa = {nome = 'Ana', idade = 30, cidade = 'Recife'}\nfor chave, valor in pairs(pessoa) do\n  print(chave, '=', valor)\nend\n-- ordem NAO garantida"
      },
      {
        "lang": "lua",
        "code": "-- ipairs PARA no primeiro nil\nlocal t = {'a', 'b', nil, 'd'}\nfor i, v in ipairs(t) do\n  print(i, v)  -- so imprime 1 a, 2 b\nend\n\n-- pairs ve tudo (em ordem qualquer)\nfor k, v in pairs(t) do print(k, v) end"
      }
    ],
    "points": [
      "ipairs: índices numéricos contíguos a partir de 1",
      "pairs: TODAS as chaves, em ordem indefinida",
      "ipairs PARA no primeiro nil — não pula buracos",
      "Use _ para descartar a chave: for _, v in ipairs(t)",
      "ipairs é mais rápido que pairs em arrays",
      "Não modifique a tabela enquanto itera com pairs",
      "Em Lua 5.4 dá para criar suas próprias iteradoras"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Misturar índices numéricos e chaves nomeadas na mesma tabela e iterar com ipairs vai te trair: as chaves nomeadas são silenciosamente ignoradas."
      },
      {
        "type": "tip",
        "content": "Se você só precisa dos valores, use 'for _, v in ipairs(t)'. O underscore deixa claro que a chave foi descartada de propósito."
      }
    ]
  },
  {
    "slug": "break-goto",
    "section": "controle",
    "title": "break e goto",
    "difficulty": "intermediario",
    "subtitle": "Saindo de laços e simulando continue.",
    "intro": "`break` interrompe o laço mais interno onde está e devolve o controle para a linha logo após o `end`. É útil para sair cedo quando achou o que procurava, deu erro, ou o usuário pediu para parar.\n\nA grande surpresa para quem vem de outras linguagens: **Lua não tem `continue`**. Não dá para \"pular para a próxima iteração\". A solução oficial, desde Lua 5.2, é usar `goto` com um rótulo `::continue::` no fim do corpo do laço. Sim, `goto` — aquele velho conhecido que tem fama ruim. Aqui ele tem uso restrito e bem definido, então é seguro.\n\nO rótulo é declarado com `::nome::` e o salto com `goto nome`. As regras são estritas: você não pode pular para dentro do escopo de uma variável local que ainda não existe. Por isso o `::continue::` fica sempre **antes do `end`**, no nível do corpo do loop.\n\nQuando precisar sair de **vários loops aninhados** ao mesmo tempo, `break` sozinho não basta — ele só sai de um. Aí você usa uma flag, ou um `goto fim` apontando para um rótulo fora dos laços, ou refatora para uma função e usa `return`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- break: para no primeiro multiplo de 7\nfor i = 1, 100 do\n  if i % 7 == 0 then\n    print('achei:', i)  -- saida: achei: 7\n    break\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Simulando 'continue' com goto\nfor i = 1, 6 do\n  if i % 2 == 0 then\n    goto proximo   -- pula o resto do corpo\n  end\n  print('impar:', i)\n  ::proximo::\nend\n-- saida: impar: 1 / 3 / 5"
      },
      {
        "lang": "lua",
        "code": "-- Sair de loops aninhados com goto\nfor i = 1, 5 do\n  for j = 1, 5 do\n    if i * j > 6 then\n      goto fim\n    end\n  end\nend\n::fim::\nprint('saiu de tudo')"
      }
    ],
    "points": [
      "break só sai do laço MAIS INTERNO",
      "Lua não tem 'continue' — use goto ::label::",
      "Rótulos: ::nome:: ; salto: goto nome",
      "::continue:: vai antes do end do laço",
      "Não pode pular para dentro de escopo de local nova",
      "Para sair de vários loops, goto label fora deles",
      "Em funções, return também serve para sair de tudo"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "goto só existe a partir de Lua 5.2. Em LuaJIT também funciona. Em Lua 5.1 puro, simule com if/else aninhado ou flags."
      },
      {
        "type": "tip",
        "content": "Se você está usando vários goto numa função, é sinal de que ela quer ser quebrada em funções menores. Refatore."
      }
    ]
  },
  {
    "slug": "multiplos-retornos",
    "section": "controle",
    "title": "Múltiplos retornos e atribuições",
    "difficulty": "intermediario",
    "subtitle": "Funções que devolvem mais de um valor.",
    "intro": "Em quase toda linguagem, uma função devolve UM valor. Se você quer dois, embrulha numa tupla, num objeto ou num array. Em Lua, isso é nativo: `return a, b, c` devolve três valores que podem ser recebidos diretamente em `local x, y, z = f()`. Sem alocar tabela, sem ginástica.\n\nIsso é tão fundamental que metade da biblioteca padrão depende disso: `string.find` devolve `inicio, fim`; `pcall` devolve `ok, resultado_ou_erro`; `next` devolve `chave, valor`. Saber lidar com múltiplos retornos é saber ler Lua idiomaticamente.\n\nA pegadinha está em **onde** você usa a chamada. Quando uma função multivalor aparece no **último** lugar de uma lista (atribuição, chamada, construtor), todos os retornos são aproveitados. Em qualquer outra posição, **só o primeiro** é mantido. Por isso `print(f(), 'x')` imprime apenas o primeiro retorno de `f`, mas `print('x', f())` imprime todos.\n\nPara forçar a captura de só um retorno, envolva em parênteses: `(f())` colapsa para o primeiro valor. Para descartar valores no meio, use `_` por convenção (é só uma variável normal, sem mágica, mas todo mundo entende).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Funcao com 2 retornos\nlocal function divmod(a, b)\n  return a // b, a % b   -- // = divisao inteira\nend\n\nlocal q, r = divmod(17, 5)\nprint(q, r)  -- saida: 3 2\n\n-- Descartar com _\nlocal _, resto = divmod(17, 5)\nprint(resto) -- saida: 2"
      },
      {
        "lang": "lua",
        "code": "-- Posicao importa!\nlocal function ab() return 'a', 'b' end\n\nprint(ab(), 'x')   -- saida: a x  (so o 1o)\nprint('x', ab())   -- saida: x a b (todos)\n\n-- Parenteses colapsam para 1\nprint((ab()), 'x') -- saida: a x"
      },
      {
        "lang": "lua",
        "code": "-- Padrao classico: pcall + erro\nlocal ok, valor = pcall(function()\n  return 10 / 0\nend)\nprint(ok, valor)  -- true inf (em Lua 5.3+)\n\n-- string.find devolve 2 valores\nlocal i, j = string.find('Lua e demais', 'e')\nprint(i, j)  -- 5 5"
      }
    ],
    "points": [
      "return a, b, c devolve 3 valores nativos",
      "local x, y = f() captura na ordem",
      "Só o último item de uma lista preserva múltiplos retornos",
      "(f()) força colapso para apenas o primeiro retorno",
      "_ é convenção para 'descartar este valor'",
      "Se faltar retorno, a variável vira nil (sem erro)",
      "select(n, ...) pega o n-ésimo retorno"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "{f(), g()} só guarda o primeiro retorno de f, porque f não está na última posição. Para capturar tudo, deixe a função multivalor por último."
      },
      {
        "type": "tip",
        "content": "Use o padrão 'ok, val = pcall(...)' para capturar erros sem travar o programa. É o try/catch idiomático de Lua."
      }
    ]
  },
  {
    "slug": "expressoes-vararg",
    "section": "controle",
    "title": "Vararg (...) e select",
    "difficulty": "intermediario",
    "subtitle": "Funções que aceitam qualquer número de argumentos.",
    "intro": "Algumas funções precisam aceitar uma quantidade variável de argumentos. `print` é o exemplo óbvio: você passa quantos valores quiser. Em Lua, isso é feito com `...` (três pontos), o **vararg**, declarado na assinatura da função.\n\nDentro do corpo, `...` representa todos os argumentos extras. Você pode passá-los adiante, empacotá-los numa tabela com `{...}`, ou inspecioná-los com `select`. O detalhe sutil: `{...}` perde os `nil` finais (a tabela usa `#` para contar e `#` para com `nil`). Para contar com precisão, use `select('#', ...)`, que devolve o número exato de argumentos passados, **incluindo nils intermediários**.\n\nO `select(n, ...)` também serve para pegar a partir do n-ésimo argumento adiante, descartando os anteriores. É útil quando os primeiros argumentos têm papel especial e o resto é repassado.\n\nA partir de Lua 5.2, `...` só pode ser usado em funções que o declararam (ou no chunk principal de um arquivo, onde representa os argumentos da linha de comando). Em Lua 5.1 essa restrição era mais frouxa.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Funcao variadica simples\nlocal function somar(...)\n  local total = 0\n  for _, v in ipairs({...}) do\n    total = total + v\n  end\n  return total\nend\n\nprint(somar(1, 2, 3, 4))  -- saida: 10"
      },
      {
        "lang": "lua",
        "code": "-- Contando com precisao (incluindo nils)\nlocal function quantos(...)\n  return select('#', ...)\nend\n\nprint(quantos(1, 2, 3))      -- saida: 3\nprint(quantos(1, nil, 3))    -- saida: 3\nprint(#{1, nil, 3})          -- saida: indefinido"
      },
      {
        "lang": "lua",
        "code": "-- Repassando varargs\nlocal function log(prefixo, ...)\n  io.write(prefixo, ' ')\n  print(...)   -- repassa tudo para print\nend\n\nlog('[INFO]', 'usuario', 42, 'logado')\n-- saida: [INFO] usuario 42 logado"
      }
    ],
    "points": [
      "... é o vararg, declarado na assinatura da função",
      "{...} empacota em tabela mas perde nils finais",
      "select('#', ...) conta com precisão, inclusive nils",
      "select(n, ...) devolve do n-ésimo em diante",
      "Pode repassar com print(...) ou outra(prefixo, ...)",
      "Em 5.2+ só vale dentro de função que declarou ...",
      "No chunk principal, ... são os args de linha de comando"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Não confie em #{...} para contar argumentos: se algum vier nil no meio, o resultado é instável. Use select('#', ...)."
      },
      {
        "type": "tip",
        "content": "Em Lua 5.2+ existe table.pack(...) que devolve uma tabela com campo .n contendo a contagem real, e table.unpack(t) faz o caminho inverso."
      }
    ]
  },
  {
    "slug": "tabelas-intro",
    "section": "tabelas",
    "title": "Tabelas: tudo gira em torno delas",
    "difficulty": "iniciante",
    "subtitle": "A única estrutura de dados de Lua.",
    "intro": "Se você só puder lembrar UMA coisa sobre Lua, lembre desta: existe **uma única estrutura de dados composta** na linguagem, e ela se chama **tabela**. Array, dicionário, objeto, classe, módulo, namespace, conjunto, fila, árvore — tudo é tabela.\n\nUma tabela é um **mapa associativo**: ela guarda pares chave-valor, onde a chave pode ser quase qualquer coisa (número, string, booleano, função, outra tabela...) menos `nil` e `NaN`. Quando as chaves são `1, 2, 3, ...`, a tabela se comporta como array. Quando são strings, parece um dicionário/objeto. As duas formas convivem na mesma tabela.\n\nIsso traz uma elegância enorme: a sintaxe `t.nome` é **exatamente equivalente** a `t[\"nome\"]`. Não há tipos separados a aprender, nem diferença entre \"propriedade\" e \"chave\". O ponto é só açúcar para chaves que parecem identificadores.\n\nA outra escolha inegociável de Lua: **arrays começam em 1**, não em 0. Isso choca quem vem de C/Java/Python/JS, mas combina melhor com matemática e com pensar em \"primeiro, segundo, terceiro\". Toda a biblioteca padrão (string, table, ipairs) assume índice 1.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Tabela vazia\nlocal t = {}\n\n-- Como dicionario\nlocal pessoa = {nome = 'Ana', idade = 30}\nprint(pessoa.nome)       -- saida: Ana\nprint(pessoa['nome'])    -- saida: Ana (equivalente)"
      },
      {
        "lang": "lua",
        "code": "-- Como array (chaves 1, 2, 3...)\nlocal cores = {'vermelho', 'verde', 'azul'}\nprint(cores[1])  -- saida: vermelho (NAO cores[0]!)\nprint(#cores)    -- saida: 3"
      },
      {
        "lang": "lua",
        "code": "-- Mistura: array + dicionario na mesma tabela\nlocal config = {\n  'web', 'api',                -- [1]='web', [2]='api'\n  host = 'localhost',\n  porta = 8080,\n  ativo = true,\n}\nprint(config[1], config.host)  -- saida: web localhost"
      }
    ],
    "points": [
      "É a ÚNICA estrutura composta de Lua",
      "Mapa associativo: chave -> valor",
      "Chave pode ser qualquer valor exceto nil e NaN",
      "t.x e t['x'] são equivalentes (sintaxes do mesmo)",
      "Arrays começam em 1, NÃO em 0",
      "Ler chave inexistente devolve nil (não dá erro)",
      "Tabelas são passadas por referência",
      "Atribuir nil remove a chave"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Acesso a chave inexistente NÃO é erro em Lua: devolve nil silenciosamente. Isso facilita configs opcionais, mas mascara typos. Use luacheck para pegar."
      },
      {
        "type": "tip",
        "content": "Quando estiver em dúvida sobre como modelar dados em Lua, comece com tabela. Praticamente sempre é a resposta certa."
      }
    ]
  },
  {
    "slug": "arrays",
    "section": "tabelas",
    "title": "Arrays em Lua",
    "difficulty": "iniciante",
    "subtitle": "Listas indexadas a partir de 1.",
    "intro": "Em Lua, **array é só uma tabela com chaves numéricas contíguas começando em 1**. Não há tipo separado, não há classe `Array` — é uma convenção sobre como você usa uma tabela comum. Quando você escreve `{10, 20, 30}`, Lua atribui automaticamente `t[1]=10, t[2]=20, t[3]=30`.\n\nO operador `#` devolve o **comprimento** do array. Funciona perfeitamente para arrays \"bem-formados\" (sem `nil` no meio). Se você cria buracos — `t[1]=1; t[3]=3` — `#t` pode devolver `1` ou `3`, dependendo de como Lua organiza internamente. Não é bug, é o comportamento documentado: `#` devolve uma \"fronteira\", e com buracos há várias fronteiras válidas.\n\nA biblioteca `table` traz as operações básicas: `table.insert(t, v)` empilha no fim; `table.insert(t, pos, v)` insere em posição (deslocando o resto); `table.remove(t)` tira o último; `table.remove(t, pos)` tira de posição (e devolve o valor removido, encolhendo o array).\n\nUma diferença marcante para quem vem de Python ou JS: **não existe \"array negativo\"** (`t[-1]` é só uma chave numérica qualquer, não \"o último\"). Para acessar o último, use `t[#t]`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Criacao e acesso\nlocal frutas = {'maca', 'banana', 'uva'}\nprint(#frutas)        -- saida: 3\nprint(frutas[1])      -- saida: maca\nprint(frutas[#frutas])-- saida: uva (ultimo)"
      },
      {
        "lang": "lua",
        "code": "-- Insercoes e remocoes\nlocal lista = {'a', 'b', 'c'}\ntable.insert(lista, 'd')        -- {'a','b','c','d'}\ntable.insert(lista, 1, 'zero')  -- {'zero','a','b','c','d'}\nlocal removido = table.remove(lista, 1)  -- 'zero'\nprint(removido, #lista)         -- saida: zero 4"
      },
      {
        "lang": "lua",
        "code": "-- Pegadinha: atribuicao direta vs insert\nlocal t = {1, 2, 3}\nt[#t + 1] = 4   -- empilha (idiomatico)\nt[10] = 99      -- cria BURACO entre 5 e 9!\nprint(#t)       -- pode ser 4 ou 10 — instavel"
      }
    ],
    "points": [
      "Array = tabela com chaves 1, 2, 3, ... contíguas",
      "ÍNDICES COMEÇAM EM 1 (não 0)",
      "# devolve comprimento — só confiável sem buracos",
      "Último elemento: t[#t]",
      "table.insert/remove para empilhar e desempilhar",
      "table.insert(t, pos, v) insere em posição",
      "Não existe índice negativo nativo",
      "t[#t + 1] = v é o jeito mais rápido de empilhar"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Tabelas com 'buracos' (nil entre índices) fazem # devolver fronteiras instáveis. Mantenha arrays sempre contíguos ou use um campo .n explícito."
      },
      {
        "type": "tip",
        "content": "Para empilhar muitos itens, t[#t+1] = v costuma ser mais rápido que table.insert(t, v). Para inserir no meio, table.insert é o caminho."
      }
    ]
  },
  {
    "slug": "dicionarios",
    "section": "tabelas",
    "title": "Tabelas como dicionário",
    "difficulty": "iniciante",
    "subtitle": "Pares chave-valor com qualquer tipo de chave.",
    "intro": "Quando você usa nomes (strings) como chave, a tabela vira um **dicionário** — também chamado de mapa, objeto, hash, registro... O conceito é universal: cada chave aponta para um valor, e a busca é praticamente instantânea (`O(1)`).\n\nEm Lua, qualquer valor pode ser chave: strings (mais comum), números, booleanos, funções e até outras tabelas. As únicas exceções são `nil` (que serviria para \"remover\") e `NaN` (que não é igual a si mesmo). Atribuir `t.x = nil` é como dizer \"esqueça a chave x\" — não fica `nil` ali, a chave deixa de existir.\n\nIsso cria uma armadilha clássica: para checar se uma chave **existe**, escrever `if t.x then` falha quando o valor é `false` ou `0` (espera aí, `0` é truthy em Lua, então só `false`). Para realmente checar existência, use `if t.x ~= nil then`.\n\nA notação `t.chave` é açúcar para `t[\"chave\"]`. Use `t.chave` quando o nome é um identificador válido (letras, dígitos, `_`, sem começar com dígito); use `t[\"...\"]` quando o nome tem caracteres especiais (`t[\"e-mail\"]`) ou vem de uma variável (`t[campo]`).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Criar, ler, alterar\nlocal d = {nome = 'Ana', idade = 30}\nd.email = 'ana@ex.com'        -- adiciona\nd['cidade'] = 'Recife'        -- equivalente\nd.idade = 31                  -- altera\nprint(d.nome, d.email)        -- saida: Ana ana@ex.com"
      },
      {
        "lang": "lua",
        "code": "-- Remover: atribuir nil\nlocal d = {a = 1, b = 2, c = 3}\nd.b = nil\nfor k in pairs(d) do io.write(k, ' ') end\nprint()  -- saida: a c (em ordem qualquer)"
      },
      {
        "lang": "lua",
        "code": "-- Checar existencia: SEMPRE com ~= nil\nlocal cfg = {debug = false}\nif cfg.debug then\n  print('nunca entra')          -- false e falsy\nend\nif cfg.debug ~= nil then\n  print('campo existe!')        -- saida\nend"
      }
    ],
    "points": [
      "Qualquer valor (exceto nil e NaN) pode ser chave",
      "t.x e t['x'] são a mesma coisa",
      "Use t['...'] para chaves com caracteres especiais",
      "Atribuir nil REMOVE a chave (não guarda nil)",
      "Para checar existência use t.x ~= nil",
      "Acesso a chave inexistente devolve nil sem erro",
      "Busca é praticamente O(1) (hash interno)"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "if t.x then ... falha quando o valor armazenado é false. Para 'a chave existe?' sempre escreva if t.x ~= nil then."
      },
      {
        "type": "tip",
        "content": "Quer um valor padrão? Use o idiomatic 'local v = t.x or padrao'. Funciona quando padrão é compatível e o valor real nunca é false/nil."
      }
    ]
  },
  {
    "slug": "table-construtor",
    "section": "tabelas",
    "title": "Construtor de tabela detalhado",
    "difficulty": "iniciante",
    "subtitle": "Todas as formas de escrever { ... }.",
    "intro": "O construtor `{ ... }` é a forma mais usada de criar tabelas, e ele aceita **três notações misturáveis** na mesma expressão. Conhecer todas economiza linhas e deixa configs muito mais legíveis.\n\nA primeira é a **lista**: valores separados por vírgula viram índices `1, 2, 3...`. `{10, 20, 30}` é `t[1]=10, t[2]=20, t[3]=30`. A segunda é o **par nomeado**: `chave = valor`, válido quando a chave é um identificador. `{nome = 'Ana'}` é `t.nome = 'Ana'`. A terceira é a **chave entre colchetes**: `[expr] = valor`, que aceita qualquer expressão como chave — útil para chaves com caracteres especiais, números não sequenciais ou variáveis.\n\nVocê pode misturar as três no mesmo construtor, e a numeração da lista continua de onde parou, ignorando os pares nomeados. Como separador, vírgula ou ponto-e-vírgula funcionam igualmente — muita gente usa `;` para separar visualmente o trecho de array do trecho de dicionário.\n\nUm detalhe bonito: tabelas literais aceitam expressões dinâmicas como valores, então você pode chamar funções, fazer contas, referenciar outras variáveis ali dentro. É a maneira preferida de descrever dados estáticos em Lua (o equivalente a JSON).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Tres formas misturadas\nlocal t = {\n  10, 20, 30,                  -- t[1]=10, t[2]=20, t[3]=30\n  nome = 'Ana',                -- t.nome = 'Ana'\n  ['e-mail'] = 'a@x.com',      -- chave nao-identificador\n  [42] = 'resposta',           -- chave numerica especifica\n}\nprint(t[1], t.nome, t['e-mail'], t[42])"
      },
      {
        "lang": "lua",
        "code": "-- Lista continua ignorando nomeadas\nlocal t = {\n  'a',           -- t[1]\n  nome = 'X',\n  'b',           -- t[2] (continua!)\n  'c',           -- t[3]\n}\nprint(t[1], t[2], t[3], t.nome)  -- saida: a b c X"
      },
      {
        "lang": "lua",
        "code": "-- Chaves dinamicas e separador ;\nlocal campo = 'idade'\nlocal pessoa = {\n  nome = 'Ana';\n  [campo] = 30;             -- pessoa.idade = 30\n  ['data-nascimento'] = '1995-01-01';\n}"
      }
    ],
    "points": [
      "Três formas: lista, chave=valor, [expr]=valor",
      "Lista numera 1, 2, 3... ignorando pares nomeados",
      "Use [expr] = valor para chaves dinâmicas ou especiais",
      "Vírgula e ponto-e-vírgula funcionam como separador",
      "Pode misturar todas no mesmo construtor",
      "Aceita expressões/funções como valores",
      "Vírgula no fim (trailing comma) é permitida",
      "É a forma idiomática para configs estáticas"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use ; para separar visualmente o bloco de array do bloco de dicionário no mesmo construtor. Ajuda muito a leitura em configs grandes."
      }
    ]
  },
  {
    "slug": "table-biblioteca",
    "section": "tabelas",
    "title": "Biblioteca table: insert, remove, concat, sort",
    "difficulty": "iniciante",
    "subtitle": "As operações prontas mais usadas no dia a dia.",
    "intro": "A biblioteca padrão `table` reúne as operações de array que você usa o tempo todo. São quatro nomes que vão aparecer em praticamente todo programa: `insert`, `remove`, `concat`, `sort`. A partir de Lua 5.2 entrou também `table.pack/unpack`, e em 5.3+ chegou `table.move`.\n\n`table.insert(t, v)` empilha `v` no fim (mais rápido que escrever `t[#t+1] = v`? Geralmente não — para empilhar, o jeito direto costuma ser mais veloz). `table.insert(t, pos, v)` insere em posição **deslocando** todos os elementos seguintes — operação `O(n)`.\n\n`table.remove(t)` tira o último elemento e devolve. `table.remove(t, pos)` tira de uma posição específica e desloca o resto para preencher (também `O(n)`). Sempre devolve o valor removido, então dá para usar como pop.\n\n`table.concat(t, sep)` junta os elementos do array num string único, separados por `sep`. É **muito** mais rápido que concatenar com `..` num loop. `table.sort(t)` ordena o array **in-place** (modifica `t`!) usando `<` por padrão; passe uma função `function(a,b) return a > b end` para ordem customizada.",
    "codes": [
      {
        "lang": "lua",
        "code": "local t = {3, 1, 4, 1, 5, 9, 2, 6}\n\ntable.insert(t, 5)             -- empilha\nprint(table.remove(t))         -- saida: 5 (desempilhou)\n\ntable.sort(t)                  -- ordena crescente in-place\nprint(table.concat(t, ', '))   -- saida: 1, 1, 2, 3, 4, 6, 9"
      },
      {
        "lang": "lua",
        "code": "-- Sort com comparador customizado\nlocal nomes = {'Carla', 'ana', 'Bia'}\ntable.sort(nomes, function(a, b)\n  return a:lower() < b:lower()  -- ignora maiusc.\nend)\nprint(table.concat(nomes, ' '))  -- saida: ana Bia Carla"
      },
      {
        "lang": "lua",
        "code": "-- Concat e MUITO mais rapido que .. em loop\nlocal partes = {}\nfor i = 1, 1000 do\n  partes[i] = tostring(i)\nend\nlocal s = table.concat(partes, ',')   -- otimo\n-- vs s = s .. ',' .. i no loop -> O(n^2)"
      }
    ],
    "points": [
      "table.insert(t, v) empilha; (t, pos, v) insere",
      "table.remove(t) tira último; (t, pos) tira de posição",
      "remove SEMPRE devolve o valor removido",
      "table.concat(t, sep) une array em string (rápido)",
      "table.sort modifica in-place, devolve nil",
      "Comparador para sort: function(a,b) return a < b end",
      "table.unpack(t) (5.2+) espalha array em valores",
      "table.move(t, i, j, k, dest) (5.3+) copia faixas"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para construir strings grandes, sempre acumule numa tabela e finalize com table.concat. Concatenar com .. dentro de um loop é O(n²) e mata a performance."
      },
      {
        "type": "warning",
        "content": "table.sort modifica a tabela original. Se precisar manter o original, copie antes: local copia = {table.unpack(t)}."
      }
    ]
  },
  {
    "slug": "copiando-tabelas",
    "section": "tabelas",
    "title": "Copiando tabelas (referência vs cópia)",
    "difficulty": "intermediario",
    "subtitle": "Atribuição NÃO copia tabela — copia referência.",
    "intro": "Em Lua, tipos simples (`number`, `string`, `boolean`) são copiados por valor. Mas **tabelas, funções e userdata são passadas por referência**. Quando você faz `b = a`, e `a` é uma tabela, `b` aponta para a mesma tabela. Modificar `b` modifica `a`. Esse é o erro #1 de quem está começando.\n\nPara realmente duplicar, você precisa criar uma nova tabela e copiar os pares chave-valor. Isso se chama **shallow copy** (cópia rasa): copia a estrutura externa, mas valores que são tabelas continuam compartilhados. Se quiser que tudo seja independente, faça **deep copy** — recurse nos valores que também são tabelas.\n\nLua não traz uma função pronta de cópia na biblioteca padrão. Você escreve a sua, ou usa uma de bibliotecas como `pl.tablex.deepcopy` (Penlight). É um exercício clássico para entender como Lua funciona.\n\nUm cuidado extra com deep copy: se a tabela tem **referências cíclicas** (`a.x = a`), uma cópia ingênua entra em recursão infinita. Soluções robustas guardam um mapa `original -> cópia` para reusar a tradução.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- A pegadinha\nlocal a = {1, 2, 3}\nlocal b = a       -- mesma tabela!\nb[4] = 99\nprint(a[4])       -- saida: 99 (surpresa)\nprint(a == b)     -- saida: true (sao a mesma)"
      },
      {
        "lang": "lua",
        "code": "-- Copia rasa (shallow)\nlocal function shallow(t)\n  local r = {}\n  for k, v in pairs(t) do r[k] = v end\n  return r\nend\n\nlocal a = {1, 2, sub = {10, 20}}\nlocal b = shallow(a)\nb[1] = 99\nprint(a[1], b[1])   -- saida: 1 99 (independentes)\nb.sub[1] = 77\nprint(a.sub[1])     -- saida: 77 (sub ainda compartilhada!)"
      },
      {
        "lang": "lua",
        "code": "-- Copia profunda (deep) com cache para ciclos\nlocal function deep(t, visto)\n  visto = visto or {}\n  if visto[t] then return visto[t] end\n  local r = {}\n  visto[t] = r\n  for k, v in pairs(t) do\n    r[k] = type(v) == 'table' and deep(v, visto) or v\n  end\n  return r\nend"
      }
    ],
    "points": [
      "Tabelas, funções e userdata são REFERÊNCIA",
      "a = b para tabela = ambos apontam para a mesma",
      "== compara identidade, não conteúdo",
      "Shallow copy duplica nível externo, sub-tabelas compartilhadas",
      "Deep copy duplica recursivamente",
      "Lua padrão NÃO tem cópia pronta — escreva a sua",
      "Para ciclos (a.x = a), use cache de visitados"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Passar uma tabela para uma função permite que ela modifique tudo. Se a função não deve mexer, copie antes ou documente claramente o comportamento."
      },
      {
        "type": "tip",
        "content": "Se você precisa de cópia profunda em projeto sério, use a biblioteca Penlight (pl.tablex.deepcopy). Já lida com ciclos e metatables."
      }
    ]
  },
  {
    "slug": "tabelas-aninhadas",
    "section": "tabelas",
    "title": "Tabelas aninhadas (estruturas)",
    "difficulty": "intermediario",
    "subtitle": "Modelando dados estruturados em Lua puro.",
    "intro": "Tabelas dentro de tabelas são o jeito de Lua representar **dados estruturados**: o equivalente a JSON, a structs, a objetos com sub-objetos. Uma lista de usuários, cada um com endereço, tags e histórico, é só uma tabela cujos elementos são tabelas.\n\nO acesso encadeado é direto: `usuarios[1].endereco.cidade`. Cada `.` ou `[]` é um passo. A pegadinha é que se **qualquer nível intermediário for `nil`**, você toma um erro `attempt to index a nil value`. Por isso, ao ler dados de fonte externa (JSON, config opcional), é prudente checar antes ou usar o padrão `t and t.x and t.x.y`.\n\nPara escrever profundamente, o caminho **precisa existir**: `t.a.b = 1` falha se `t.a` é `nil`. Crie o nível antes (`t.a = t.a or {}`) ou monte o construtor literal de uma vez (`t = {a = {b = 1}}`).\n\nNa hora de iterar, escolha o iterador certo para cada nível: `ipairs` em listas, `pairs` em dicionários. Em tabelas profundas, isso pode aninhar dois ou três `for` — e tudo bem, é o jeito Lua.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Lista de usuarios com sub-tabelas\nlocal usuarios = {\n  {nome='Ana', tags={'admin','beta'}},\n  {nome='Bia', tags={'user'}},\n  {nome='Cao', tags={'admin'}},\n}\n\n-- Listar admins\nfor _, u in ipairs(usuarios) do\n  for _, tag in ipairs(u.tags) do\n    if tag == 'admin' then print(u.nome) end\n  end\nend\n-- saida: Ana / Cao"
      },
      {
        "lang": "lua",
        "code": "-- Acesso seguro com 'and'\nlocal cfg = {db = {host = 'localhost'}}\nlocal porta = cfg and cfg.db and cfg.db.porta or 5432\nprint(porta)  -- saida: 5432 (usou padrao)"
      },
      {
        "lang": "lua",
        "code": "-- Construir profundo passo a passo\nlocal cache = {}\ncache.usuarios = cache.usuarios or {}\ncache.usuarios[42] = cache.usuarios[42] or {}\ncache.usuarios[42].nome = 'Ana'\n-- Equivalente em uma linha:\n-- local cache = {usuarios = {[42] = {nome = 'Ana'}}}"
      }
    ],
    "points": [
      "Tabelas aninhadas modelam estruturas tipo JSON",
      "Acesso encadeado: a.b.c.d",
      "Indexar nil dá erro: 'attempt to index a nil value'",
      "Use a and a.b and a.b.c para acesso seguro",
      "Para escrever profundo, crie níveis antes: t.x = t.x or {}",
      "Combine ipairs e pairs conforme cada nível",
      "Construtores literais aninhados são limpos para dados estáticos"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Lua não tem o operador ?. (optional chaining). O substituto é a cadeia 'a and a.b and a.b.c', que devolve nil se algo no meio falhar."
      }
    ]
  },
  {
    "slug": "tabela-como-set",
    "section": "tabelas",
    "title": "Tabela como conjunto (set)",
    "difficulty": "intermediario",
    "subtitle": "Pertencimento O(1) e remoção de duplicatas.",
    "intro": "Lua não tem um tipo `Set` na biblioteca padrão, mas não precisa: o jeito idiomático é usar uma tabela com **chaves sendo os elementos** e **valor `true`** (ou qualquer truthy). É elegante, rápido e funciona perfeitamente.\n\nA grande vantagem: checar se um elemento pertence ao conjunto é `O(1)` — basta `if set[elemento] then`. Comparado a percorrer um array procurando (`O(n)`), é uma diferença gigante quando você tem milhares de itens.\n\nRemoção de duplicatas vira trivial: percorra a lista e marque cada item no set. Os duplicados sobrescrevem `true` em cima de `true`, nada acontece. Para iterar os elementos, use `for k in pairs(set)` — você ignora o valor (que é só `true`).\n\nUma sutileza: para remover um elemento, atribua `nil` (`set[x] = nil`), o que apaga a chave. E lembre que a **ordem** dos elementos não é preservada, já que `pairs` não garante ordem. Se ordem importa, mantenha um array em paralelo ou ordene na hora.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Criar set a partir de lista (remove duplicatas)\nlocal lista = {1, 2, 2, 3, 3, 3, 4}\nlocal set = {}\nfor _, v in ipairs(lista) do\n  set[v] = true\nend\n\n-- Pertencimento O(1)\nprint(set[2])    -- saida: true\nprint(set[99])   -- saida: nil"
      },
      {
        "lang": "lua",
        "code": "-- Iterar e remover\nlocal vistos = {ana = true, bia = true, cao = true}\nvistos.bia = nil   -- remove\n\nfor nome in pairs(vistos) do\n  print(nome)\nend\n-- saida (ordem qualquer): ana / cao"
      },
      {
        "lang": "lua",
        "code": "-- Operacoes de conjunto\nlocal function uniao(a, b)\n  local r = {}\n  for k in pairs(a) do r[k] = true end\n  for k in pairs(b) do r[k] = true end\n  return r\nend\nlocal function intersecao(a, b)\n  local r = {}\n  for k in pairs(a) do\n    if b[k] then r[k] = true end\n  end\n  return r\nend"
      }
    ],
    "points": [
      "Set = tabela com chave = elemento, valor = true",
      "Pertencimento é O(1): if set[x] then",
      "Para remover: set[x] = nil",
      "Iterar com for k in pairs(set) (ignora valor)",
      "Remove duplicatas naturalmente (sobrescreve)",
      "Ordem NÃO é preservada",
      "União e interseção em poucas linhas com pairs",
      "Idiomático: nada de classe Set externa"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Quando seu loop precisa perguntar 'esse item já apareceu?', monte um set ao lado e consulte em O(1). Substituir um array linear por um set costuma transformar um programa lento em um rápido."
      }
    ]
  },
  {
    "slug": "tabela-como-fila-pilha",
    "section": "tabelas",
    "title": "Tabela como pilha e fila",
    "difficulty": "intermediario",
    "subtitle": "Estruturas clássicas em cima de table.",
    "intro": "Pilha (LIFO — último a entrar, primeiro a sair) e fila (FIFO — primeiro a entrar, primeiro a sair) são duas das estruturas mais usadas em programação. Em Lua, ambas se constroem em cima de tabelas, sem precisar de classe nem biblioteca.\n\nA **pilha** é trivial: empilhar é `table.insert(p, v)` e desempilhar é `table.remove(p)`. Ambos operam no fim do array, em `O(1)` amortizado. É a base de algoritmos como avaliação de expressões, navegação de histórico, undo/redo.\n\nA **fila ingênua** seria empilhar com `table.insert(q, v)` e desenfileirar com `table.remove(q, 1)`. Funciona, mas `remove(q, 1)` é `O(n)` porque precisa deslocar todos os elementos uma posição para a esquerda. Numa fila com milhares de itens, isso degrada feio.\n\nA **fila eficiente** mantém dois índices, `primeiro` e `ultimo`, dentro da própria tabela. Empilhar incrementa `ultimo`; desenfileirar lê em `primeiro`, atribui `nil` ali e incrementa. Os índices crescem indefinidamente (em Lua isso é ok, são apenas números), mas as operações são `O(1)`. É a forma idiomática de implementar uma deque em Lua.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Pilha (LIFO) com table padrao\nlocal pilha = {}\ntable.insert(pilha, 'a')   -- push\ntable.insert(pilha, 'b')\ntable.insert(pilha, 'c')\nprint(table.remove(pilha)) -- saida: c (pop)\nprint(table.remove(pilha)) -- saida: b"
      },
      {
        "lang": "lua",
        "code": "-- Fila eficiente (deque) com indices manuais\nlocal q = {primeiro = 1, ultimo = 0}\n\nlocal function enq(v)\n  q.ultimo = q.ultimo + 1\n  q[q.ultimo] = v\nend\n\nlocal function deq()\n  if q.primeiro > q.ultimo then return nil end\n  local v = q[q.primeiro]\n  q[q.primeiro] = nil\n  q.primeiro = q.primeiro + 1\n  return v\nend\n\nenq('a'); enq('b'); enq('c')\nprint(deq(), deq(), deq())  -- saida: a b c"
      },
      {
        "lang": "lua",
        "code": "-- Ingenuo (lento para fila grande)\nlocal q = {}\ntable.insert(q, 'a')\ntable.insert(q, 'b')\nprint(table.remove(q, 1))  -- O(n) — desloca tudo"
      }
    ],
    "points": [
      "Pilha: table.insert/remove (LIFO, O(1))",
      "Fila ingênua com remove(q, 1) é O(n)",
      "Fila O(1): índices primeiro/ultimo na própria tabela",
      "Atribuir nil libera a posição lida",
      "Índices crescem indefinidamente; em Lua tudo bem",
      "Pilha vazia ao chamar remove devolve nil (não erro)",
      "Para deque (fim e início), use os dois índices",
      "Não confunda pilha com 'stack trace' — é o conceito de dados"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "table.remove(q, 1) parece inocente mas é O(n). Para filas com mais de algumas centenas de elementos, sempre use o padrão com índices primeiro/ultimo."
      },
      {
        "type": "tip",
        "content": "Para encapsular, embrulhe os índices e funções num módulo: M.new() devolve uma fila, M.enq(q,v), M.deq(q). Mantém o uso limpo."
      }
    ]
  },
  {
    "slug": "pairs-vs-ipairs",
    "section": "tabelas",
    "title": "pairs vs ipairs: a diferença crucial",
    "difficulty": "intermediario",
    "subtitle": "Dois iteradores, dois propósitos diferentes.",
    "intro": "Os dois iteradores prontos de Lua são `ipairs` e `pairs`, e a confusão entre eles é uma das principais causas de bugs sutis. A regra de ouro: **use o que combina com a forma da sua tabela**.\n\n`ipairs(t)` percorre como **array**: começa em `t[1]`, vai 2, 3, 4... e **para no primeiro `nil`**. Garante a ordem natural (1, 2, 3...). Ignora completamente chaves não-numéricas e chaves numéricas \"fora da sequência\". É o que você quer quando a tabela é uma lista contígua.\n\n`pairs(t)` percorre **TODAS as chaves** da tabela — strings, números, booleanos, qualquer coisa. Mas a **ordem não é garantida**: pode mudar entre execuções, entre versões de Lua, entre máquinas. Se você precisa imprimir as chaves sempre na mesma ordem, colete-as numa tabela e ordene com `table.sort`.\n\nA pegadinha mortal de `ipairs`: se houver `nil` no meio (`{1, nil, 3}`), ele para no `nil` e não vê o `3`. Já `pairs` veria, porque a chave `[3]` ainda existe na tabela. Por isso, NUNCA mantenha `nil` no meio de um array que vai ser iterado com `ipairs`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Tabela mista\nlocal t = {'a', 'b', 'c', nome = 'X', [10] = 'pulado'}\n\nfor i, v in ipairs(t) do print(i, v) end\n-- saida: 1 a / 2 b / 3 c\n-- (ignora 'nome' e [10])\n\nfor k, v in pairs(t) do print(k, v) end\n-- saida (ordem qualquer): 1 a / 2 b / 3 c / nome X / 10 pulado"
      },
      {
        "lang": "lua",
        "code": "-- Pegadinha do nil intermediario\nlocal t = {'a', nil, 'c'}\nfor i, v in ipairs(t) do io.write(v, ' ') end\nprint()  -- saida: a (parou no nil!)\n\nfor k, v in pairs(t) do io.write(k, '=', v, ' ') end\nprint()  -- saida: 1=a 3=c"
      },
      {
        "lang": "lua",
        "code": "-- Imprimir em ordem garantida\nlocal d = {bia=2, ana=1, cao=3}\nlocal chaves = {}\nfor k in pairs(d) do chaves[#chaves+1] = k end\ntable.sort(chaves)\nfor _, k in ipairs(chaves) do\n  print(k, d[k])  -- saida: ana 1 / bia 2 / cao 3\nend"
      }
    ],
    "points": [
      "ipairs: arrays contíguos (1, 2, 3, ... até nil)",
      "pairs: TODAS as chaves, ordem indefinida",
      "ipairs PARA no primeiro nil — pode 'esconder' itens",
      "pairs vê chaves não-numéricas; ipairs ignora",
      "Para ordem garantida: colete chaves e sort",
      "ipairs é mais rápido que pairs em arrays",
      "Não modifique a tabela (adicionar chaves) durante pairs",
      "Atribuir nil DURANTE pairs no item atual é seguro"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Adicionar chaves novas a uma tabela enquanto itera com pairs gera comportamento indefinido. Se precisa adicionar, colete em outra tabela e mescle depois."
      },
      {
        "type": "tip",
        "content": "Pergunta-chave para escolher: 'minha tabela é uma LISTA ou um DICIONÁRIO?'. Lista → ipairs. Dicionário → pairs. Mista → repensar o desenho."
      }
    ]
  },
  {
    "slug": "next-iterator",
    "section": "tabelas",
    "title": "next() e iteradores customizados",
    "difficulty": "avancado",
    "subtitle": "Como pairs/ipairs funcionam por baixo.",
    "intro": "Por baixo de `pairs` mora a função primitiva `next(t, chave)`. Ela devolve a **próxima** chave da tabela e seu valor. Chamando `next(t, nil)` ela devolve a primeira; passando a chave atual, devolve a seguinte; quando acabou, devolve `nil`. É o motor que `pairs` apenas embrulha — `pairs(t)` essencialmente devolve `next, t, nil`.\n\nO `for` genérico em Lua segue um protocolo simples: ele chama `iterador(estado, controle)` repetidamente, passando o último valor de controle de volta. Quando o iterador devolve `nil` no primeiro retorno, o laço acaba. Sabendo isso, **você pode escrever seus próprios iteradores** — funções que produzem sequências sob demanda.\n\nUma forma muito conveniente é usar **closures**: a função iteradora guarda o estado em variáveis locais capturadas. Não há `estado` nem `controle` explícitos — basta retornar uma função sem argumentos que, a cada chamada, devolve o próximo valor (ou `nil` para encerrar).\n\nIteradores customizados deixam código MUITO expressivo: dá para iterar de trás para frente, sobre linhas de um arquivo, sobre a árvore de uma tabela aninhada, sobre números primos infinitos... a forma do `for` é a mesma, muda só o iterador.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- next() na mao\nlocal t = {a=1, b=2, c=3}\nlocal k, v = next(t)        -- primeira (qualquer)\nprint(k, v)\nk, v = next(t, k)           -- proxima\nprint(k, v)"
      },
      {
        "lang": "lua",
        "code": "-- Iterador reverso usando closure\nlocal function reverso(t)\n  local i = #t + 1\n  return function()\n    i = i - 1\n    if i > 0 then return i, t[i] end\n  end\nend\n\nfor i, v in reverso({'a','b','c'}) do\n  print(i, v)\nend\n-- saida: 3 c / 2 b / 1 a"
      },
      {
        "lang": "lua",
        "code": "-- Iterador infinito (com break)\nlocal function naturais()\n  local n = 0\n  return function() n = n + 1; return n end\nend\n\nfor n in naturais() do\n  if n > 5 then break end\n  io.write(n, ' ')\nend\nprint()  -- saida: 1 2 3 4 5"
      }
    ],
    "points": [
      "next(t, chave) devolve a próxima chave/valor",
      "pairs(t) é açúcar para next, t, nil",
      "for ... in chama o iterador até retornar nil",
      "Iterador pode ser closure que guarda estado",
      "Forma minimal: function() ... return v end",
      "Permite iterar tudo: reverso, intervalo, infinito, árvore",
      "Mesmo for genérico, qualquer iterador funciona",
      "É o jeito Lua de fazer 'generators' (como em Python)"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Mudar a estrutura da tabela durante next() (adicionar/remover chaves) tem comportamento indefinido. Atribuir nil na chave atual é a única modificação segura permitida."
      },
      {
        "type": "tip",
        "content": "Iteradores via closure são limpos e fáceis. A forma 'iterador, estado, controle' (stateless) é mais rápida e usada internamente por pairs/ipairs em casos críticos."
      }
    ]
  },
  {
    "slug": "weak-tables",
    "section": "tabelas",
    "title": "Tabelas fracas (weak tables)",
    "difficulty": "avancado",
    "subtitle": "Quando o coletor de lixo pode descartar entradas.",
    "intro": "Normalmente, enquanto uma tabela referencia um valor, o coletor de lixo (GC) **não pode liberá-lo** — afinal, ele ainda está \"em uso\". Isso é o que você quer quase sempre. Mas em alguns casos — especialmente **caches** — esse comportamento é justamente o problema: o cache cresce indefinidamente porque mantém vivas coisas que ninguém mais usa.\n\nPara isso existem as **tabelas fracas**. Você marca a tabela com uma metatable cujo campo `__mode` indica qual lado (chave, valor ou ambos) deve ser tratado como referência fraca. O GC ignora referências fracas ao decidir o que coletar — ou seja, se ninguém mais segura aquele valor com referência forte, ele é liberado, e a entrada some sozinha da tabela.\n\nOs três modos: `'k'` = chaves fracas (usado quando a chave é uma tabela/objeto e você quer que entradas sumam quando a chave morre); `'v'` = valores fracos (caches clássicos: você guarda objetos grandes mas deixa o GC decidir quando largar); `'kv'` = ambos.\n\nÉ uma ferramenta sutil: **valores primitivos** (números, strings, booleanos) não são afetados pelo GC do mesmo jeito. Tabelas fracas só fazem sentido com tabelas, funções, userdata ou threads.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Cache com valores fracos\nlocal cache = setmetatable({}, {__mode = 'v'})\n\nlocal function carregar(id)\n  if cache[id] then return cache[id] end\n  local obj = {dados = 'pesado para id ' .. id}\n  cache[id] = obj\n  return obj\nend\n\n-- Enquanto alguem segurar 'obj', cache mantem.\n-- Quando todas as referencias externas sumirem,\n-- o GC pode liberar e cache[id] vira nil sozinho."
      },
      {
        "lang": "lua",
        "code": "-- Os tres modos\nlocal t1 = setmetatable({}, {__mode = 'k'})  -- chaves fracas\nlocal t2 = setmetatable({}, {__mode = 'v'})  -- valores fracos\nlocal t3 = setmetatable({}, {__mode = 'kv'}) -- ambos\n\n-- Forcar GC para observar o efeito\ncollectgarbage('collect')"
      },
      {
        "lang": "lua",
        "code": "-- Pegadinha: primitivos nao sao coletados\nlocal t = setmetatable({}, {__mode = 'v'})\nt.x = 'string literal'   -- nunca some (string nao morre)\nt.y = {dados = 1}        -- pode sumir quando ninguem segura\n\n-- Para 'cache de strings', tabela fraca NAO ajuda."
      }
    ],
    "points": [
      "__mode na metatable: 'k', 'v' ou 'kv'",
      "Permite que o GC libere entradas em uso fraco",
      "Útil principalmente para caches",
      "Não impede o GC; entrada some sozinha",
      "Strings, números, booleanos NÃO são afetados",
      "Funciona com tabelas, funções, userdata, threads",
      "collectgarbage('collect') força um ciclo do GC",
      "Combine com __index para cache de objetos"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Tabela fraca não substitui política de cache (LRU, tamanho máximo). Ela só evita memory leak por referência presa — o tempo de vida real depende de quando o GC roda."
      },
      {
        "type": "info",
        "content": "Se você está começando, provavelmente NÃO precisa de tabelas fracas. É uma ferramenta de tuning para casos específicos de cache e mapeamentos objeto→metadata."
      }
    ]
  },
  {
    "slug": "funcoes-basico",
    "section": "funcoes",
    "title": "Definindo funções",
    "difficulty": "iniciante",
    "subtitle": "O bloco de construção que você vai usar o tempo todo.",
    "intro": "Função é o jeito de dar nome a um pedaço de código que você quer reaproveitar. Toda vez que você se pegar copiando e colando 5 linhas para o mesmo lugar, é hora de transformar essas linhas em uma função.\n\nEm Lua, a sintaxe é minimalista: `function nome(parametros) ... end`. Não existe tipo de retorno declarado, não existe `void`, não existe `public`/`private`. Você nomeia, lista os parâmetros, escreve o corpo e fecha com `end`.\n\nO ponto que diferencia Lua de linguagens como Java ou C é que **funções são valores de primeira classe**. Isso significa que uma função pode ser guardada em uma variável, passada como argumento, devolvida por outra função e armazenada dentro de uma tabela. É exatamente o mesmo tipo de cidadania que números e strings têm.\n\nA pegadinha do iniciante: se você escrever só `function f()`, sem `local`, a função vira **global**. Em projetos pequenos passa despercebido; em projetos grandes vira fonte de bugs estranhos. Pegue o hábito de escrever `local function` desde o primeiro dia.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Forma básica: define e chama\nlocal function saudar(nome)\n  return 'Olá, ' .. nome .. '!'\nend\n\nprint(saudar('Ana'))   -- saída: Olá, Ana!"
      },
      {
        "lang": "lua",
        "code": "-- Vários parâmetros, retorno condicional\nlocal function saudar(nome, formal)\n  if formal then\n    return 'Prezado(a) ' .. nome\n  end\n  return 'Olá, ' .. nome .. '!'\nend\n\nprint(saudar('Dr. Silva', true))  -- Prezado(a) Dr. Silva\nprint(saudar('Ana'))              -- Olá, Ana!"
      },
      {
        "lang": "lua",
        "code": "-- Função sem 'local' polui o escopo global\nfunction global_ruim() return 1 end  -- evite\nlocal function ok() return 1 end     -- prefira\n\n-- Funções dentro de tabela (módulos)\nlocal M = {}\nfunction M.dobrar(x) return x * 2 end\nprint(M.dobrar(21))  -- saída: 42"
      }
    ],
    "points": [
      "function nome(params) ... end define uma função",
      "Sempre prefira 'local function' a 'function' solto",
      "Função sem 'local' vira global e vai parar em _G",
      "Funções são valores: podem ir em variáveis e tabelas",
      "Não existe declaração de tipo de retorno",
      "return pode devolver vários valores separados por vírgula",
      "function M.foo() ... end é açúcar para M.foo = function() ... end"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Esquecer 'local' antes de 'function' é a fonte número 1 de bugs sutis em Lua. Configure luacheck no editor para ser avisado."
      },
      {
        "type": "tip",
        "content": "Funções pequenas (5–15 linhas) com nome bom valem mais que comentários longos. Se precisa de comentário grande, talvez precise quebrar em duas funções."
      }
    ]
  },
  {
    "slug": "funcoes-anonimas",
    "section": "funcoes",
    "title": "Funções anônimas e como valores",
    "difficulty": "intermediario",
    "subtitle": "Em Lua, função é dado — e dado não precisa de nome.",
    "intro": "Em Lua, **a função em si nunca tem nome**. O que tem nome é a variável (ou o campo de tabela) que aponta para ela. `local function f() end` é só um açúcar sintático para `local f = function() end`. Isso pode parecer detalhe, mas muda completamente como você pensa o código.\n\nUma função anônima é simplesmente uma função escrita direto no lugar onde você precisa dela, sem batizar antes. Pense numa expressão como `2 + 3`: você não dá nome a `2 + 3` para depois usar — você escreve direto. Funções anônimas seguem a mesma lógica.\n\nIsso destrava três coisas: passar funções como **callback** (ex: ordenar uma tabela com critério customizado), **devolver** funções de outras funções (a base de closures e currying), e **construir** dispatchers e máquinas de estado guardando funções dentro de tabelas.\n\nA pegadinha aqui é estética: gente vinda de Java tende a criar nome para tudo. Em Lua idiomática, se a função é usada uma vez só e cabe em duas linhas, deixe ela anônima no ponto de uso.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Estas duas linhas fazem EXATAMENTE a mesma coisa\nlocal f = function(x) return x * 2 end\nlocal function g(x) return x * 2 end\n\nprint(f(5), g(5))  -- saída: 10  10"
      },
      {
        "lang": "lua",
        "code": "-- Anônima como argumento (callback)\nlocal numeros = {3, 1, 4, 1, 5, 9, 2, 6}\ntable.sort(numeros, function(a, b) return a > b end)\nprint(numeros[1], numeros[#numeros])  -- 9  1\n\n-- Anônima como item de tabela (despacho)\nlocal acoes = {\n  somar    = function(a, b) return a + b end,\n  subtrair = function(a, b) return a - b end,\n}\nprint(acoes.somar(2, 3))  -- saída: 5"
      },
      {
        "lang": "lua",
        "code": "-- Anônima como retorno (fábrica de funções)\nlocal function multiplicador(n)\n  return function(x) return x * n end\nend\n\nlocal triplicar = multiplicador(3)\nprint(triplicar(10))  -- saída: 30\nprint(multiplicador(5)(4))  -- saída: 20"
      }
    ],
    "points": [
      "function(...) ... end é uma expressão como qualquer outra",
      "local function f() é açúcar para local f = function()",
      "Aceita em qualquer lugar onde uma expressão é válida",
      "Útil em callbacks de table.sort, pcall, gsub, etc.",
      "Pode estar dentro de tabela como ação/comando",
      "Base prática para closures, currying e callbacks",
      "Ajuda a evitar nomes pobres tipo helper1, fn2, callback3"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Se a anônima passou de 5 linhas ou está aninhada em outra anônima, extraia para uma função local com nome. Legibilidade vence concisão."
      }
    ]
  },
  {
    "slug": "closures",
    "section": "funcoes",
    "title": "Closures",
    "difficulty": "intermediario",
    "subtitle": "Funções que carregam estado escondido junto com elas.",
    "intro": "Closure é o nome técnico para uma função que **lembra** das variáveis locais do lugar onde ela foi criada, mesmo depois que esse lugar terminou de executar. É o conceito que parece mágico no começo e depois se torna óbvio.\n\nA analogia: imagine que toda função é um bilhete com instruções. Quando você escreve a função dentro de outra, o bilhete vem grudado num envelope com cópias das variáveis locais que ele consultou. Você pode levar esse envelope para qualquer lugar — as variáveis estão lá, vivas, só para essa função.\n\nEm Lua, essas variáveis capturadas têm um nome: **upvalues**. Cada chamada da função externa cria upvalues novos, então cada closure produzida tem o próprio estado privado. É assim que se faz contadores, geradores, memoizadores e até um sistema de orientação a objetos sem usar tabelas.\n\nPegadinha clássica: se duas closures forem criadas na mesma chamada da função externa, elas **compartilham** os upvalues. Modificar em uma é visível na outra. Útil quando você quer; um bug feio quando não percebe.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Contador: cada closure tem seu próprio 'n'\nlocal function novo_contador(inicio)\n  local n = inicio or 0\n  return function()\n    n = n + 1\n    return n\n  end\nend\n\nlocal c = novo_contador()\nprint(c(), c(), c())     -- saída: 1  2  3\n\nlocal d = novo_contador(100)\nprint(d())               -- saída: 101\nprint(c())               -- saída: 4 (independente de d)"
      },
      {
        "lang": "lua",
        "code": "-- Duas closures compartilhando o MESMO upvalue\nlocal function par_get_set(valor)\n  local function get() return valor end\n  local function set(v) valor = v end\n  return get, set\nend\n\nlocal get, set = par_get_set(10)\nprint(get())   -- 10\nset(99)\nprint(get())   -- 99 (set mudou o upvalue que get lê)"
      },
      {
        "lang": "lua",
        "code": "-- Memoização simples com closure\nlocal function memoize(f)\n  local cache = {}\n  return function(x)\n    if cache[x] == nil then cache[x] = f(x) end\n    return cache[x]\n  end\nend\n\nlocal lento = memoize(function(n) return n * n end)\nprint(lento(7), lento(7))  -- 49  49 (segunda do cache)"
      }
    ],
    "points": [
      "Closure = função + variáveis locais que ela vê",
      "Variáveis capturadas são chamadas de upvalues",
      "Cada chamada da função externa cria upvalues novos",
      "Closures distintas da mesma chamada compartilham upvalues",
      "Permitem encapsular estado sem usar OOP",
      "Base de iteradores customizados, memoize e currying",
      "Não há custo de performance proibitivo — use à vontade"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Closures dentro de loops compartilham o estado da iteração corrente. Se quiser fixar o valor, copie para uma variável local nova dentro do loop."
      },
      {
        "type": "tip",
        "content": "Quando começar a passar muitos parâmetros entre funções relacionadas, considere closures: o estado fica capturado e a assinatura limpa."
      }
    ]
  },
  {
    "slug": "self-colon",
    "section": "funcoes",
    "title": "Açúcar ':' para self",
    "difficulty": "intermediario",
    "subtitle": "Como Lua faz métodos sem ter sintaxe de classe.",
    "intro": "Lua não tem `class` nativa. O que ela tem é um truque pequeno e elegante: o operador **dois-pontos** (`:`). Esse truque é a base de toda orientação a objetos em Lua.\n\nA regra é simples: `obj:metodo(arg)` é exatamente o mesmo que `obj.metodo(obj, arg)`. O `:` injeta o próprio objeto como primeiro argumento da função, automaticamente. Na hora de definir, vale o mesmo: `function obj:metodo() end` é açúcar para `function obj.metodo(self) end`. O nome `self` aparece de graça dentro do corpo.\n\nPor que isso importa? Porque permite escrever código orientado a objetos com uma sintaxe quase igual à de Python ou Java, mas sem precisar de palavras-chave novas. Tudo continua sendo só **tabela** e **função**.\n\nA pegadinha que confunde quem está começando: quem decide se é método é o **call site**, não a definição. Se você definir com `:` mas chamar com `.`, nada de `self` vai chegar — vai chegar o argumento errado, ou nil, e o erro acontece longe da causa real.",
    "codes": [
      {
        "lang": "lua",
        "code": "local pessoa = { nome = 'Ana' }\n\n-- Estas duas definições são equivalentes:\nfunction pessoa.saudar1(self)\n  return 'Olá, ' .. self.nome\nend\nfunction pessoa:saudar2()           -- self é implícito\n  return 'Olá, ' .. self.nome\nend\n\nprint(pessoa:saudar1())             -- Olá, Ana\nprint(pessoa:saudar2())             -- Olá, Ana\nprint(pessoa.saudar2(pessoa))       -- mesma coisa, na unha"
      },
      {
        "lang": "lua",
        "code": "-- Construtor + método (estilo OOP)\nlocal Conta = {}\nConta.__index = Conta\n\nfunction Conta.nova(saldo)\n  local self = setmetatable({}, Conta)\n  self.saldo = saldo or 0\n  return self\nend\n\nfunction Conta:depositar(v)\n  self.saldo = self.saldo + v\nend\n\nfunction Conta:ver()\n  return 'R$ ' .. self.saldo\nend\n\nlocal c = Conta.nova(100)\nc:depositar(50)\nprint(c:ver())   -- saída: R$ 150"
      },
      {
        "lang": "lua",
        "code": "-- Pegadinha: definir com : e chamar com .\nlocal obj = { x = 10 }\nfunction obj:get() return self.x end\n\nprint(obj:get())   -- 10 (ok)\nprint(obj.get())   -- erro: self é nil dentro de get"
      }
    ],
    "points": [
      "obj:m(a) é açúcar para obj.m(obj, a)",
      "function t:m() end é açúcar para function t.m(self) end",
      "O nome 'self' não é palavra-chave, é só convenção",
      "Quem decide o açúcar é o call site, não a definição",
      "Misturar . e : sem cuidado gera erros de 'attempt to index nil'",
      "É a base de toda OOP em Lua, com metatables",
      "Funciona com qualquer tabela, não só com 'classes'"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Se um método dá erro estranho de 'attempt to index a nil value (local self)', o primeiro suspeito é uma chamada com . onde devia ser :."
      }
    ]
  },
  {
    "slug": "recursao",
    "section": "funcoes",
    "title": "Recursão",
    "difficulty": "intermediario",
    "subtitle": "Função chamando a si mesma — sem estourar a pilha.",
    "intro": "Recursão é quando uma função se chama. Soa estranho na primeira vez: \"como pode chamar a si mesma se ainda nem terminou?\". Mas o computador não vê problema — cada chamada cria um novo quadro na **pilha**, com seus parâmetros e locais. As chamadas se empilham até alguma atingir um caso base e começar a devolver.\n\nAlguns problemas são naturalmente recursivos: percorrer árvores (HTML, JSON, sistema de arquivos), parsers, fatorial, Fibonacci, busca em profundidade. Resolvê-los com loops costuma ficar mais feio.\n\nO custo é a pilha. Cada chamada ocupa memória, e profundidade demais causa **stack overflow**. Felizmente, Lua tem **TCO** (tail call optimization): quando a última coisa que a função faz é `return f(...)`, ela **reutiliza** o quadro atual em vez de empilhar novo. Permite recursão infinita sem estourar a pilha.\n\nA pegadinha: `return n * fatorial(n-1)` **não é** chamada de cauda (tem multiplicação depois). Para virar TCO, a chamada precisa ser a expressão pura do return.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Recursão clássica: fatorial\nlocal function fatorial(n)\n  if n <= 1 then return 1 end       -- caso base\n  return n * fatorial(n - 1)        -- caso recursivo\nend\n\nprint(fatorial(5))   -- saída: 120\nprint(fatorial(10))  -- saída: 3628800"
      },
      {
        "lang": "lua",
        "code": "-- TCO: 'return f(...)' direto, sem operação extra\nlocal function loop(n)\n  if n == 0 then return 'pronto' end\n  return loop(n - 1)         -- chamada de cauda: reutiliza pilha\nend\n\nprint(loop(1000000))   -- saída: pronto (sem stack overflow)\n\n-- Truque para 'fazer com acumulador'\nlocal function fat_tco(n, acc)\n  acc = acc or 1\n  if n <= 1 then return acc end\n  return fat_tco(n - 1, acc * n)   -- TCO ok\nend\nprint(fat_tco(10))  -- saída: 3628800"
      },
      {
        "lang": "lua",
        "code": "-- Caso natural: somar uma árvore aninhada\nlocal function somar(t)\n  local total = 0\n  for _, v in ipairs(t) do\n    if type(v) == 'table' then\n      total = total + somar(v)   -- recurso para subárvore\n    else\n      total = total + v\n    end\n  end\n  return total\nend\n\nprint(somar({1, {2, 3, {4}}, 5}))  -- saída: 15"
      }
    ],
    "points": [
      "Recursão precisa SEMPRE de um caso base que pare",
      "Cada chamada empilha um quadro com locais e parâmetros",
      "Profundidade demais causa stack overflow",
      "Lua faz TCO quando a chamada é 'return f(args)' pura",
      "n * f(n-1) NÃO é chamada de cauda (tem multiplicação)",
      "Use acumulador para converter recursão comum em TCO",
      "Ideal para árvores, parsers, percursos e backtracking"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Se uma recursão grande estoura a pilha, reescreva com acumulador no parâmetro para virar chamada de cauda. Lua reutilizará o quadro e nunca estoura."
      },
      {
        "type": "info",
        "content": "TCO em Lua é determinístico: a documentação diz exatamente qual sintaxe é tail call. Não é otimização opcional do compilador, faz parte da semântica da linguagem."
      }
    ]
  },
  {
    "slug": "argumentos-padrao",
    "section": "funcoes",
    "title": "Argumentos padrão",
    "difficulty": "iniciante",
    "subtitle": "Lua não tem default nativo — mas há um padrão consagrado.",
    "intro": "Em Python você escreve `def f(x=10):`. Em JavaScript moderno, `function f(x = 10) {}`. Em Lua, **não existe** sintaxe equivalente. Quando o caller não passa um argumento, ele chega como `nil` dentro da função, e ponto.\n\nA solução idiomática é uma linha curta no começo da função: `x = x or padrao`. Como `or` em Lua devolve o primeiro operando que não seja `nil` ou `false`, isso funciona como \"se não veio, use o default\". É tão comum que se torna visualmente automático para quem lê código Lua.\n\nO pulo do gato é entender que `or` considera `false` igual a `nil`. Se o seu default for booleano (especialmente `true`) e o usuário passar `false` de propósito, o `or` vai sobrescrever para o default — bug clássico. Para esses casos, troque por uma checagem explícita com `if x == nil`.\n\nPara funções com cinco, dez parâmetros, em vez de listar todos, o idioma Lua é receber **uma única tabela** de opções. Aí cada campo opcional ganha o seu `or` default e fica tudo organizado. Esse padrão você verá no próximo capítulo.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Defaults com 'or'\nlocal function saudar(nome, lingua)\n  nome   = nome   or 'amigo'\n  lingua = lingua or 'pt'\n  if lingua == 'pt' then return 'Olá, '   .. nome end\n  if lingua == 'en' then return 'Hello, ' .. nome end\nend\n\nprint(saudar())                -- Olá, amigo\nprint(saudar('Ana'))           -- Olá, Ana\nprint(saudar('Ana', 'en'))     -- Hello, Ana"
      },
      {
        "lang": "lua",
        "code": "-- Pegadinha: 'or' atropela 'false'\nlocal function show(verboso)\n  verboso = verboso or true   -- BUG: false vira true!\n  print(verboso)\nend\n\nshow(false)   -- imprime true (errado)\n\n-- Forma correta para defaults booleanos:\nlocal function show2(verboso)\n  if verboso == nil then verboso = true end\n  print(verboso)\nend\n\nshow2(false)  -- imprime false (ok)"
      },
      {
        "lang": "lua",
        "code": "-- Defaults numéricos com guarda extra\nlocal function dividir(a, b)\n  a = a or 0\n  b = b or 1                  -- nunca dividir por nil\n  if b == 0 then return nil, 'divisao por zero' end\n  return a / b\nend\n\nprint(dividir(10, 2))  -- 5.0\nprint(dividir(10))     -- 10.0  (b virou 1)"
      }
    ],
    "points": [
      "Lua não tem sintaxe nativa para default de parâmetro",
      "x = x or padrao é o jeito idiomático e curto",
      "Cuidado: 'or' trata false como ausente",
      "Para booleanos use 'if x == nil then x = padrao end'",
      "Argumentos não passados chegam como nil",
      "Para muitos opcionais, prefira uma tabela de opts",
      "Documente os defaults no comentário da função"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Nunca use 'x = x or true' para default booleano. Se o usuário passar 'false' de propósito, o or sobrescreve e você vai caçar esse bug por horas."
      }
    ]
  },
  {
    "slug": "argumentos-tabela",
    "section": "funcoes",
    "title": "Argumentos via tabela",
    "difficulty": "intermediario",
    "subtitle": "O jeito Lua de simular argumentos nomeados.",
    "intro": "Quando uma função tem três, quatro ou cinco parâmetros, lembrar a ordem na hora de chamar vira uma tortura: `criar_botao('OK', 'verde', 100, 30, true, false, nil, 'roboto')`. Boa sorte para entender o que cada um significa.\n\nA solução clássica em Lua é receber **uma tabela** com campos nomeados. Cada chamador escreve o nome da opção que está passando, na ordem que quiser, omite as que não interessam, e o código fica autoexplicativo.\n\nE aí entra o pulo de gato sintático que faz isso virar idioma: Lua permite chamar `f{ ... }` em vez de `f({ ... })`. Os parênteses são opcionais quando o único argumento é uma tabela literal (ou uma string literal). Esse é exatamente o truque que faz DSLs Lua parecerem configuração natural — bibliotecas como o LÖVE, OpenResty, Lapis e Telescope usam isso o tempo todo.\n\nAs duas pegadinhas: (1) você perde a checagem de aridade — passar campo errado não dá erro, vira `nil`; (2) é tentador devolver a própria tabela `opts` em vez de copiar, mas isso vaza o objeto interno; melhor montar uma nova.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Função que aceita tabela de opções\nlocal function criar_botao(opts)\n  return {\n    texto    = opts.texto    or '',\n    cor      = opts.cor      or 'azul',\n    largura  = opts.largura  or 100,\n    altura   = opts.altura   or 30,\n    on_click = opts.on_click,\n  }\nend\n\n-- Açúcar: f{...} == f({...})\nlocal b = criar_botao{ texto = 'OK', cor = 'verde' }\nprint(b.texto, b.cor, b.largura)  -- OK  verde  100"
      },
      {
        "lang": "lua",
        "code": "-- DSL bonita: configuração legível como dado\nlocal function rota(spec)\n  print(spec.metodo, spec.path, '->', spec.handler)\nend\n\nrota{\n  metodo  = 'GET',\n  path    = '/usuarios/:id',\n  handler = function(req) return req.params.id end,\n}"
      },
      {
        "lang": "lua",
        "code": "-- Validação simples para evitar typos silenciosos\nlocal CAMPOS = { texto=true, cor=true, largura=true, altura=true }\nlocal function validar(opts)\n  for k in pairs(opts) do\n    assert(CAMPOS[k], 'opção desconhecida: ' .. k)\n  end\nend\n\nvalidar{ texto = 'A', cor = 'azul' }       -- ok\n-- validar{ corr = 'azul' }                -- erro: corr"
      }
    ],
    "points": [
      "f{...} é açúcar sintático para f({...})",
      "Tabela de opções vira documentação no call site",
      "Permite ordem livre e omitir campos opcionais",
      "Cada campo costuma ter default com 'or'",
      "Cuidado: typos viram nil silencioso, sem erro",
      "Validar chaves conhecidas evita esse problema",
      "Padrão dominante em DSLs Lua (LÖVE, Lapis, Telescope)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use a regra dos três: a partir de três parâmetros opcionais, troque a assinatura por uma tabela de opções. O ganho de legibilidade compensa de longe."
      }
    ]
  },
  {
    "slug": "funcoes-de-ordem-superior",
    "section": "funcoes",
    "title": "Funções de ordem superior",
    "difficulty": "intermediario",
    "subtitle": "map, filter e reduce — você implementa, Lua não traz.",
    "intro": "Função de ordem superior é toda função que **recebe** outra função como argumento ou que **devolve** uma função. O conceito vem do mundo funcional (Lisp, Haskell, Erlang) e também é familiar em JavaScript moderno (`array.map`, `array.filter`).\n\nLua é minimalista por filosofia: a biblioteca padrão **não traz** map, filter, reduce. Os mantenedores defendem que a linguagem deve ser pequena e que essas funções são triviais de escrever. E são mesmo: cada uma cabe em três ou quatro linhas usando `for` e `ipairs`.\n\nNa prática, a maioria dos projetos Lua acaba colando essas funções num módulo de utilitários (`utils.lua`) ou usando uma biblioteca externa como **Penlight**, que oferece `pl.tablex` cheio de helpers. O importante é entender o padrão para reconhecer e escrever quando precisar.\n\nDois detalhes idiomáticos que aparecem o tempo todo nessas implementações: `r[#r+1] = v` é o jeito tradicional Lua de empilhar (equivale a um `push`), e `ipairs` deve ser preferido a `pairs` quando você está iterando sequência indexada — é mais rápido e garante a ordem.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Implementações idiomáticas\nlocal function map(t, f)\n  local r = {}\n  for i, v in ipairs(t) do r[i] = f(v) end\n  return r\nend\n\nlocal function filter(t, p)\n  local r = {}\n  for _, v in ipairs(t) do\n    if p(v) then r[#r+1] = v end       -- empilha\n  end\n  return r\nend\n\nlocal function reduce(t, f, init)\n  local acc = init\n  for _, v in ipairs(t) do acc = f(acc, v) end\n  return acc\nend"
      },
      {
        "lang": "lua",
        "code": "-- Usando os três\nlocal nums = {1, 2, 3, 4, 5}\n\nlocal quadrados = map(nums, function(x) return x * x end)\nprint(table.concat(quadrados, ','))   -- 1,4,9,16,25\n\nlocal pares = filter(nums, function(x) return x % 2 == 0 end)\nprint(table.concat(pares, ','))       -- 2,4\n\nlocal soma = reduce(nums, function(a, b) return a + b end, 0)\nprint(soma)                           -- 15"
      },
      {
        "lang": "lua",
        "code": "-- Compor funções: funções que devolvem funções\nlocal function compose(f, g)\n  return function(x) return f(g(x)) end\nend\n\nlocal dobrar      = function(x) return x * 2 end\nlocal incrementar = function(x) return x + 1 end\n\nlocal dobrar_e_inc = compose(incrementar, dobrar)\nprint(dobrar_e_inc(10))   -- saída: 21  (10*2 -> 21)"
      }
    ],
    "points": [
      "Ordem superior = recebe ou devolve função",
      "Lua não inclui map/filter/reduce na stdlib",
      "Implementação cabe em 3–4 linhas com ipairs",
      "r[#r+1] = v é o push idiomático",
      "Penlight (pl.tablex) oferece versões prontas e mais",
      "ipairs respeita ordem; pairs não",
      "Padrão poderoso para pipelines de transformação de dados"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Antes de instalar Penlight só por map/filter, considere colar essas três funções num utils.lua. Manter a dependência baixa em projetos pequenos costuma valer a pena."
      },
      {
        "type": "info",
        "content": "Em código quentíssimo (loop fechado de jogo, hot path de servidor), um for explícito ainda é mais rápido que map/filter encadeados, porque cada chamada de função tem overhead."
      }
    ]
  },
  {
    "slug": "escopo-local",
    "section": "funcoes",
    "title": "Escopo de variáveis (do/end)",
    "difficulty": "intermediario",
    "subtitle": "Onde uma 'local' nasce, vive e morre.",
    "intro": "Lua tem **escopo léxico**: o pedaço do código onde uma variável existe é decidido olhando o texto-fonte, não o tempo de execução. Toda construção que abre um bloco — `do/end`, `function/end`, `if/then/else/end`, `for ... do/end`, `while ... do/end`, `repeat/until` — define um novo escopo.\n\nUma `local` declarada dentro de um bloco vive da linha da declaração até o `end` correspondente. Fora dali, **deixa de existir** — referências externas acabam vendo um valor de escopo mais externo, ou `nil` se não houver. É exatamente o mesmo modelo de Pascal, JavaScript com `let`, ou Rust.\n\nO bloco mais simples e mais subutilizado é o `do ... end` solto. Ele serve só para criar um escopo manual: variáveis declaradas lá dentro **somem** depois do `end`. Útil quando você quer uma constante temporária sem poluir o resto da função, ou quando quer reaproveitar nomes (`local x` em dois `do` independentes).\n\nE há o **shadowing**: declarar `local x` dentro de um bloco onde já existia `x` cria uma variável **nova**, que esconde a externa enquanto o bloco está ativo. Não é erro, é comportamento esperado — mas confunde quem está aprendendo, especialmente em loops.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Shadowing: o local interno esconde o externo\nlocal x = 1\ndo\n  local x = 2          -- nova variável, mesmo nome\n  print('dentro:', x)  -- 2\nend\nprint('fora:', x)      -- 1 (intacta)"
      },
      {
        "lang": "lua",
        "code": "-- do/end anônimo para escopo manual\ndo\n  local pi = 3.14159\n  local raio = 10\n  print('area =', pi * raio * raio)\nend\n-- pi e raio NÃO existem mais aqui\nprint(pi)   -- nil"
      },
      {
        "lang": "lua",
        "code": "-- Escopo dentro de for/if/while\nfor i = 1, 3 do\n  local quadrado = i * i\n  print(i, quadrado)\nend\n-- quadrado e i não existem aqui\n\nif true then\n  local segredo = 42\nend\n-- segredo não existe aqui\n\nprint(segredo)   -- nil"
      }
    ],
    "points": [
      "Lua usa escopo léxico decidido pelo texto, não execução",
      "Cada bloco (do, function, if, for, while) cria escopo novo",
      "local vive da declaração até o end do bloco",
      "do/end anônimo serve para escopo manual",
      "Shadowing: local interno esconde local externo, sem erro",
      "Variável de for (i, k, v) só existe dentro do for",
      "Acessar variável fora do escopo retorna nil ou a externa"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use do/end para isolar trechos com nomes curtos e tentadores (i, x, t) sem medo de colidir com locals de fora. É o equivalente leve e nativo de uma IIFE."
      }
    ]
  },
  {
    "slug": "funcoes-locais-recursivas",
    "section": "funcoes",
    "title": "O truque das funções locais recursivas",
    "difficulty": "intermediario",
    "subtitle": "Por que 'local f = function...' precisa de duas linhas.",
    "intro": "Aqui mora um dos detalhes mais sutis da linguagem. Quando você escreve `local function f(...)`, o compilador faz internamente o equivalente a `local f; f = function(...)`. Note a ordem: a variável `f` é declarada **antes** de a função ser construída. Por isso, dentro do corpo, `f` já está visível — a recursão funciona.\n\nMas se escrever `local f = function(...) ... f(...) end` numa linha só, a ordem muda. Durante a construção do `function`, o nome `f` ainda **não existe** como local (a declaração só toma efeito **depois** que o lado direito é avaliado). A referência a `f` cai no escopo externo, e o bug aparece longe da causa.\n\nA solução é o truque das duas linhas: primeiro declare `local f`, depois atribua. É convenção comum em closures recursivas e funções mutuamente recursivas.\n\nNa prática: 99% das vezes você usa `local function`, que cuida disso. O truque entra quando você precisa de uma **anônima atribuída** ou de recursão mútua.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- 'local function' faz a coisa certa automaticamente\nlocal function fat(n)\n  if n <= 1 then return 1 end\n  return n * fat(n - 1)   -- 'fat' aqui é a local. ok!\nend\n\nprint(fat(5))   -- 120"
      },
      {
        "lang": "lua",
        "code": "-- Forma 'local f = function ...' tem o problema sutil\nlocal fib = function(n)\n  if n < 2 then return n end\n  return fib(n-1) + fib(n-2)   -- 'fib' aqui NÃO é a local!\nend\n-- (Pode até funcionar se houver 'fib' global,\n-- mas é frágil e errado conceitualmente.)\n\n-- Forma correta: declara antes, atribui depois\nlocal fib2\nfib2 = function(n)\n  if n < 2 then return n end\n  return fib2(n-1) + fib2(n-2)   -- agora vê a local\nend\n\nprint(fib2(10))   -- 55"
      },
      {
        "lang": "lua",
        "code": "-- Recursão mútua precisa do mesmo truque\nlocal eh_par, eh_impar\n\neh_par = function(n)\n  if n == 0 then return true end\n  return eh_impar(n - 1)\nend\n\neh_impar = function(n)\n  if n == 0 then return false end\n  return eh_par(n - 1)\nend\n\nprint(eh_par(10), eh_impar(10))  -- true   false"
      }
    ],
    "points": [
      "local function f cuida da recursão automaticamente",
      "local f = function ... NÃO vê 'f' como local no corpo",
      "Essa ref fura para escopo externo (geralmente global)",
      "Truque: declare 'local f' antes, atribua depois",
      "Recursão mútua exige declaração das duas antes",
      "Diferença sutil que vira bug em códigos longos",
      "Em dúvida, use 'local function' — sintaxe mais segura"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Se você refatorar 'local function f' para 'local f = function...' sem perceber, a recursão pode silenciosamente cair em uma global homônima e funcionar 'por acaso' até quebrar."
      }
    ]
  },
  {
    "slug": "string-find",
    "section": "strings-padroes",
    "title": "string.find: busca básica",
    "difficulty": "intermediario",
    "subtitle": "Achar onde uma substring começa e termina.",
    "intro": "`string.find` é a função fundamental para procurar dentro de uma string em Lua. Ela devolve **dois números**: a posição inicial e a posição final do que foi encontrado. Se não encontrou, devolve `nil`. Esse contrato simples é a base de quase todo processamento de texto na linguagem.\n\nPor padrão, o segundo argumento é tratado como um **padrão Lua** (lua pattern), não como texto literal. Se você procurar por algo como `\".\"`, `\"%\"`, `\"(\"` ou `\"[\"`, vai entrar em conflito com a sintaxe de patterns e os resultados serão estranhos. Para tratar como texto puro, passe `true` como quarto argumento (o terceiro é a posição inicial da busca).\n\nO uso mais comum em prática é só checar **se contém**: como `find` devolve `nil` quando não acha, basta usar o resultado em um `if`. Para posicionar várias buscas em sequência, use o terceiro parâmetro (`init`) para começar depois do último match.\n\nQuando o objetivo é **extrair** o conteúdo encontrado em vez de saber onde está, prefira `string.match` (próximo capítulo). `find` brilha quando você precisa das **posições** para depois fatiar com `string.sub`, ou para implementar um parser que avança por etapas.",
    "codes": [
      {
        "lang": "lua",
        "code": "local s = 'Lua é incrível'\n\n-- Busca como pattern (padrão)\nlocal i, j = s:find('é')\nprint(i, j)         -- 5  6  (é ocupa 2 bytes em UTF-8)\n\n-- Busca literal: 4º arg true\nlocal i2 = s:find('.', 1, true)\nprint(i2)           -- nil (não tem ponto)\n\n-- Sem 'plain', '.' casaria qualquer caractere\nlocal i3 = s:find('.')\nprint(i3)           -- 1   (qualquer char é o L)"
      },
      {
        "lang": "lua",
        "code": "-- 'Contém' como uso mais comum\nlocal log = 'ERROR: disco cheio'\n\nif log:find('ERROR', 1, true) then\n  print('alerta!')\nend\n\n-- Posição inicial: pular cabeçalho\nlocal corpo = 'POST /users HTTP/1.1\\n\\nbody'\nlocal start = corpo:find('\\n\\n', 1, true)\nif start then\n  print(corpo:sub(start + 2))   -- 'body'\nend"
      },
      {
        "lang": "lua",
        "code": "-- Achar todas as ocorrências avançando o init\nlocal s = 'abc.def.ghi.jkl'\nlocal i, j = 1, 0\nwhile true do\n  i, j = s:find('%.', j + 1)\n  if not i then break end\n  print(i, j)\nend\n-- saída: 4 4 / 8 8 / 12 12"
      }
    ],
    "points": [
      "Devolve start, end ou nil",
      "Por padrão interpreta o argumento como pattern",
      "4º argumento true desativa patterns (busca literal)",
      "3º argumento init permite começar depois de uma posição",
      "Para checar 'contém', use o resultado em if",
      "Para extrair o casamento, prefira string.match",
      "Posições são em BYTES, não em caracteres Unicode"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Se o que você vai buscar pode conter . % ( ) [ ] * + - ? ^ $, sempre passe true como 4º argumento. Esquecer disso causa matches fantasmas e bugs difíceis."
      }
    ]
  },
  {
    "slug": "string-match",
    "section": "strings-padroes",
    "title": "string.match: extrai pedaços",
    "difficulty": "intermediario",
    "subtitle": "Quando você quer o conteúdo, não a posição.",
    "intro": "Onde `string.find` devolve **onde** está o casamento, `string.match` devolve **o que** casou. Para a maioria das tarefas do dia a dia — extrair número de um log, separar nome e extensão de arquivo, pegar o domínio de um e-mail — `match` é a ferramenta mais natural.\n\nA regra é: se o pattern **não tem capturas**, `match` devolve a string inteira que casou. Se tem **uma ou mais capturas** (delimitadas por parênteses `()`), devolve uma string para cada captura, na ordem. É comum usar atribuição múltipla: `local nome, idade = s:match('...')`.\n\nUm detalhe que pega: tudo que `match` devolve é **string**, mesmo que você tenha capturado dígitos. Para usar como número, converta com `tonumber`. Se o pattern não casar nada, devolve `nil` — então proteja com checagem antes de usar (ou use atribuição com guarda).\n\nPara iterar **todas** as ocorrências em vez de pegar só a primeira, use `string.gmatch` (sua versão geradora). Ele retorna um iterador que, em cada `for`, devolve a próxima captura. É ideal para varrer logs, tokenizar strings simples e extrair listas de valores.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Sem captura: o casamento inteiro\nprint(('numero: 42'):match('%d+'))   -- '42' (string!)\n\n-- Convertendo para número\nlocal n = tonumber(('numero: 42'):match('%d+'))\nprint(n + 1)                          -- 43\n\n-- Sem casar: nil\nprint(('texto'):match('%d+'))         -- nil"
      },
      {
        "lang": "lua",
        "code": "-- Capturas: várias strings de uma vez\nlocal nome, idade = ('Ana,30'):match('(%w+),(%d+)')\nprint(nome, idade)        -- Ana   30\n\n-- Separar arquivo de extensão\nlocal base, ext = ('foto.png'):match('(.+)%.(%w+)$')\nprint(base, ext)          -- foto   png\n\n-- Domínio de email\nprint(('ana@exemplo.com'):match('@([%w.]+)'))  -- exemplo.com"
      },
      {
        "lang": "lua",
        "code": "-- gmatch: iterar todas as ocorrências\nfor email in ('a@x.com b@y.com c@z.com'):gmatch('%S+') do\n  print(email)\nend\n-- a@x.com / b@y.com / c@z.com\n\n-- gmatch com captura: extrair pares chave=valor\nfor k, v in ('a=1; b=2; c=3'):gmatch('(%w+)=(%w+)') do\n  print(k, v)\nend"
      }
    ],
    "points": [
      "Sem captura: devolve a string inteira casada",
      "Com () devolve uma string por captura, em ordem",
      "Tudo retornado é string — converta com tonumber",
      "Sem match algum, devolve nil",
      "gmatch é a versão iteradora para todos os matches",
      "gmatch + for é o jeito Lua de tokenizar texto simples",
      "Mais ergonômico que find quando você quer o conteúdo"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use match com atribuição múltipla para extrair vários campos em uma linha: 'local d, m, a = data:match(\"(%d+)/(%d+)/(%d+)\")'."
      }
    ]
  },
  {
    "slug": "string-gsub",
    "section": "strings-padroes",
    "title": "string.gsub: substituição",
    "difficulty": "intermediario",
    "subtitle": "Substituir é mais poderoso do que parece.",
    "intro": "`string.gsub` é o canivete suíço da manipulação de texto em Lua. À primeira vista parece só um \"replace\": troca uma substring por outra. Mas a função aceita três tipos diferentes de substituto — **string**, **tabela** ou **função** — e isso multiplica o que você pode fazer numa única linha.\n\nAssinatura: `s:gsub(pattern, repl, n)`. O quarto valor opcional `n` limita quantas substituições fazer; sem ele, substitui **todas**. O retorno tem dois valores: a nova string e o **número** de substituições efetuadas.\n\nO modo \"string\" é o trivial: troca o casamento por texto fixo, com referências `%1`, `%2`... para reaproveitar capturas. O modo \"tabela\" usa o casamento como chave de lookup. O modo \"função\" é o mais flexível: para cada match, sua função recebe as capturas e devolve a substituição (ou `nil`/`false` para manter o original).\n\nA pegadinha clássica: `gsub` retorna **dois** valores. `print(s:gsub('a','b'))` mostra a string E a contagem juntas. Para usar só a string, embrulhe em parênteses: `print((s:gsub('a','b')))`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Substituição literal simples\nlocal s, n = ('olá mundo'):gsub('mundo', 'Lua')\nprint(s, n)                    -- olá Lua   1\n\n-- Pegadinha: retorna 2 valores\nprint(('a'):gsub('a', 'b'))    -- b   1  (não 'b'!)\nprint((('a'):gsub('a','b')))   -- b      (com () extras)"
      },
      {
        "lang": "lua",
        "code": "-- Limitando: só as 2 primeiras\nprint(('aaaa'):gsub('a', 'X', 2))   -- XXaa   2\n\n-- Reusando capturas com %1, %2\nlocal r = ('Ana,30'):gsub('(%w+),(%d+)', '%2 anos: %1')\nprint(r)   -- '30 anos: Ana'"
      },
      {
        "lang": "lua",
        "code": "-- Substituição por TABELA (lookup)\nlocal mapa = { lua = 'Lua', js = 'JavaScript' }\nlocal r = ('lua e js'):gsub('%w+', mapa)\nprint(r)   -- 'Lua e JavaScript'  (palavras desconhecidas ficam)\n\n-- Substituição por FUNÇÃO (transformação dinâmica)\nlocal r2 = ('preço 10 reais'):gsub('%d+', function(n)\n  return tostring(tonumber(n) * 2)\nend)\nprint(r2)   -- 'preço 20 reais'"
      }
    ],
    "points": [
      "Substitui por string, tabela ou função",
      "Devolve nova string E número de substituições",
      "%1, %2... reaproveitam capturas no replace",
      "Tabela: o match vira chave para lookup",
      "Função: recebe as capturas, retorna a substituição",
      "Função pode devolver nil/false para manter o original",
      "Quarto argumento limita o número de substituições"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Cuidado com 'print(s:gsub(...))': aparecem dois valores. Use parênteses extras ou guarde só o primeiro retorno em variável."
      },
      {
        "type": "tip",
        "content": "gsub com função é o substituto natural para regex callback de outras linguagens. Use para limpar HTML, transformar números, escapar caracteres."
      }
    ]
  },
  {
    "slug": "lua-patterns",
    "section": "strings-padroes",
    "title": "Lua Patterns: classes básicas",
    "difficulty": "intermediario",
    "subtitle": "É como regex, mas mais simples — e diferente o bastante para confundir.",
    "intro": "Quase toda linguagem moderna usa **regex** (PCRE ou ECMAScript) para padrões de texto. Lua **não usa**. Em vez disso, oferece **patterns Lua**: uma mini linguagem própria, mais simples, mais leve e implementada em poucas centenas de linhas de C dentro do interpretador. Para 90% dos usos cotidianos é suficiente; para o resto, há bibliotecas externas como **lpeg**.\n\nO ponto de partida são as **classes de caracteres**: atalhos para grupos pré-definidos. Em vez de escrever `[a-zA-Z]`, você escreve `%a`. Em vez de `[0-9]`, escreve `%d`. A versão **maiúscula** de cada classe é o complemento: `%A` é \"qualquer coisa que não é letra\", `%D` é \"qualquer coisa que não é dígito\".\n\nA grande diferença visual em relação a regex: **escape com `%`, não com `\\`**. Para casar literalmente um ponto, use `%.`, não `\\.`. Para casar um percent, use `%%`. Isso é constantemente fonte de confusão para quem vem de PCRE.\n\nA segunda grande diferença: **não há alternância** com `|`. Não dá para escrever `cat|dog`. Se precisar disso, ou você combina com classes (`[cd]at`), ou faz duas chamadas separadas, ou recorre a lpeg.",
    "codes": [
      {
        "lang": "text",
        "code": "Classes de caracteres em Lua patterns:\n\n  %a  letras (a-z, A-Z)        %A  não-letras\n  %d  dígitos (0-9)            %D  não-dígitos\n  %s  espaço/tab/newline       %S  não-espaços\n  %w  alfanuméricos            %W  não-alfanuméricos\n  %p  pontuação                %P  não-pontuação\n  %l  minúsculas               %L  não-minúsculas\n  %u  maiúsculas               %U  não-maiúsculas\n  %c  controle (ascii 0-31)    %C  não-controle\n  %x  hexadecimais (0-9 a-f)   %X  não-hex\n  .   QUALQUER caractere\n\nEscapes literais: %.  %%  %(  %)  %[  %]  %+  %*  %-"
      },
      {
        "lang": "lua",
        "code": "-- Classes em ação\nprint(('abc123'):match('%a+'))    -- 'abc' (letras)\nprint(('abc123'):match('%d+'))    -- '123' (dígitos)\nprint(('  hello'):match('%S+'))   -- 'hello' (não-espaços)\n\n-- Escape com %\nprint(('preço: R$10'):match('R%$%d+'))  -- 'R$10'\nprint(('a.b.c'):match('%a%.%a'))        -- 'a.b'\n\n-- 'qualquer caractere' com .\nprint(('xyz'):match('.'))               -- 'x'"
      },
      {
        "lang": "lua",
        "code": "-- Não tem alternância — combine com classes\n-- Querendo casar 'cat' ou 'bat':\nprint(('um bat aqui'):match('[cb]at'))   -- 'bat'\n\n-- Para alternativas mais complexas, use duas chamadas\nlocal s = 'foo123'\nlocal m = s:match('foo') or s:match('bar')\nprint(m)   -- 'foo'"
      }
    ],
    "points": [
      "%a letras, %d dígitos, %s espaços, %w alfanuméricos",
      "Maiúscula da classe é o complemento (%D, %W, %S)",
      ". é qualquer caractere (igual a regex)",
      "Escape com % e não com \\ (%. %% %( %))",
      "NÃO existe alternância | nos patterns Lua",
      "Para padrões muito complexos, use a biblioteca lpeg",
      "Patterns operam em BYTES, não em caracteres Unicode"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Lua patterns foram criados por questão de tamanho: a implementação inteira cabe em ~500 linhas de C. PCRE adicionaria mais código que toda a linguagem Lua."
      },
      {
        "type": "warning",
        "content": "Se você está vindo de Python, JS ou Perl: NÃO escreva \\d, \\s, \\w. Eles ficam silenciosamente como letra normal e o pattern não casa o que parece."
      }
    ]
  },
  {
    "slug": "lua-patterns-quantif",
    "section": "strings-padroes",
    "title": "Patterns: quantificadores e âncoras",
    "difficulty": "intermediario",
    "subtitle": "Repetir, prender ao começo ou ao fim.",
    "intro": "Saber as classes (`%a`, `%d`, ...) é metade da história. A outra metade são os **quantificadores** que dizem quantas vezes uma classe pode repetir, e as **âncoras** que prendem o casamento ao começo ou ao fim da string.\n\nLua tem quatro quantificadores: `*` (zero ou mais, guloso), `+` (um ou mais, guloso), `-` (zero ou mais, **preguiçoso**) e `?` (zero ou um). Atenção ao `-`: em outras linguagens, preguiçoso é `*?` ou `+?`. Em Lua, o operador preguiçoso é simplesmente o `-`. Quem vem de regex erra isso na primeira vez.\n\nGuloso quer dizer: pega o **maior** trecho possível. Preguiçoso pega o **menor**. Para extrair conteúdo entre dois pontos, `(.-)%.` é quase sempre o que você quer; `(.*)%.` engoliria até o último ponto.\n\nAs âncoras `^` (início) e `$` (fim) limitam onde o pattern casa. `^foo` casa só se a string começa com \"foo\". Importante: `^` dentro de `[^abc]` é o operador de **negação**, papel diferente.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Quantificadores básicos\nprint(('palavra123'):match('%a+'))    -- 'palavra' (1+ letras)\nprint(('123'):match('%a*'))           -- ''        (0 letras = casa vazio)\nprint(('cor'):match('cores?'))        -- 'cor'     (0 ou 1 's')\nprint(('cores'):match('cores?'))      -- 'cores'"
      },
      {
        "lang": "lua",
        "code": "-- Guloso vs preguiçoso\nlocal s = 'aaa.bbb.ccc'\n\nprint(s:match('^(.-)%.'))   -- 'aaa'      (preguiçoso: menor)\nprint(s:match('^(.*)%.'))   -- 'aaa.bbb'  (guloso: maior)\n\n-- Caso clássico: extrair tag HTML\nlocal html = '<b>negrito</b><i>itálico</i>'\nfor txt in html:gmatch('<%a+>(.-)<') do\n  print(txt)              -- 'negrito' / 'itálico'\nend"
      },
      {
        "lang": "lua",
        "code": "-- Âncoras ^ e $\nprint(('abc'):match('^abc$'))     -- 'abc' (string inteira)\nprint(('abc def'):match('^abc$')) -- nil   (não é só 'abc')\n\n-- ^ FORA de [] = início\n-- ^ DENTRO de [] = negação\nprint(('xyz'):match('^[^abc]+$')) -- 'xyz' (só chars que NÃO são a/b/c)\n\nprint(('foo.lua'):match('%.lua$')) -- '.lua' (termina assim)"
      }
    ],
    "points": [
      "* zero ou mais (guloso); + um ou mais (guloso)",
      "- zero ou mais (PREGUIÇOSO) — não confunda com -? de regex",
      "? zero ou um (opcional)",
      "^ no início do pattern: âncora de começo",
      "$ no fim do pattern: âncora de fim",
      "^ dentro de [] significa NEGAÇÃO de conjunto",
      "(.-) entre delimitadores é o truque para extração mínima"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Decorou um único idioma vai resolver 80% dos casos: '(.-)' entre dois delimitadores literais. Ex: extrair valor de \"chave=VALOR;\" usa '=(.-);'."
      }
    ]
  },
  {
    "slug": "lua-patterns-conjuntos",
    "section": "strings-padroes",
    "title": "Patterns: conjuntos [ ] e capturas",
    "difficulty": "intermediario",
    "subtitle": "Refinar quais caracteres aceitar e extrair partes.",
    "intro": "Os **conjuntos** entre colchetes (`[...]`) deixam você definir um grupo customizado de caracteres aceitos. `[aeiou]` casa qualquer vogal. `[a-z]` usa intervalo. Você pode misturar literais e classes: `[%w_]` casa alfanumérico ou underscore. A negação se faz com `^` no início: `[^0-9]` é qualquer não-dígito.\n\nAs **capturas** são o jeito de extrair pedaços do casamento. Cada par de parênteses `(...)` abre uma captura. Quando o pattern casa, `match` e `gmatch` devolvem cada captura como um valor separado, na ordem da abertura dos `(`.\n\nLua tem ainda a **captura posicional**: o par vazio `()`. Em vez de devolver texto, devolve a **posição** onde aquele ponto do pattern bateu. Excelente quando você quer marcar limites sem capturar conteúdo.\n\nUma pegadinha comum: hífen dentro de conjunto significa **intervalo** (`a-z`). Para casar um hífen literal, ponha-o no começo ou no fim: `[-+*]`. E `^` no começo de `[]` é negação — em qualquer outro lugar, é literal.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Conjunto simples\nprint(('Lua'):gsub('[aeiou]', '*'))    -- 'L**'   2\nprint(('abc123'):match('[%a]+'))       -- 'abc'   (só letras)\n\n-- Negação com ^ (no início do conjunto)\nprint(('abc123'):match('[^%d]+'))      -- 'abc'   (não-dígitos)\nprint(('hello, world!'):gsub('[^%a]', ''))  -- 'helloworld'\n\n-- Intervalos\nprint(('codigo: A7'):match('[A-Z]%d')) -- 'A7'"
      },
      {
        "lang": "lua",
        "code": "-- Capturas múltiplas\nlocal d, m, a = ('15/01/2026'):match('(%d+)/(%d+)/(%d+)')\nprint(d, m, a)            -- 15  01  2026\n\n-- Capturas com classes diferentes\nlocal chave, valor = ('nome=Ana'):match('(%w+)=(%w+)')\nprint(chave, valor)        -- nome  Ana\n\n-- Em gmatch: itera com cada captura\nfor h, m in ('10:30 11:45 12:00'):gmatch('(%d+):(%d+)') do\n  print(h, m)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Captura posicional com () vazio\nprint(('abc'):match('()(%w)()'))\n-- saída: 1   a   2   (posição-letra-posição)\n\n-- Útil para localizar palavras com posição\nlocal s = 'Lua é incrível'\nfor pos, palavra in s:gmatch('()(%w+)') do\n  print(pos, palavra)\nend"
      }
    ],
    "points": [
      "[abc] casa qualquer um dos caracteres listados",
      "[a-z] usa intervalo",
      "[%w_] mistura classes e literais (úteis em identificadores)",
      "[^...] inverte: casa o que NÃO está no conjunto",
      "() captura o trecho casado para retorno separado",
      "Capturas vêm na ordem de abertura dos (",
      "() vazio captura a POSIÇÃO atual, não o texto"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Para incluir hífen literal num conjunto, ponha no começo ou no fim: [-+*] ou [+*-]. No meio, vira separador de intervalo e o pattern faz coisa diferente."
      }
    ]
  },
  {
    "slug": "string-rep-format",
    "section": "strings-padroes",
    "title": "string.rep, string.format e mais",
    "difficulty": "iniciante",
    "subtitle": "As outras funções de string que você vai usar todo dia.",
    "intro": "Além das funções de busca por padrão (`find`, `match`, `gsub`), a biblioteca `string` traz um punhado de utilidades essenciais para formatar, repetir, converter caso e mexer com bytes. Nenhuma é complicada, mas ignorar essas funções leva a código verboso e cheio de concatenação.\n\n`string.format` é a sua impressora `printf`: usa especificadores estilo C (`%d`, `%s`, `%05d`, `%.2f`, `%-10s`...). É de longe a forma mais limpa de gerar strings com padding, casas decimais ou alinhamento. Decorar três ou quatro especificadores resolve a maioria dos casos.\n\n`string.rep` repete uma string N vezes, com separador opcional (no Lua 5.3+). Útil para criar barras de UI no terminal, gerar indentação, padding manual. `string.lower` e `string.upper` fazem o óbvio — mas atenção, eles trabalham byte a byte e não cuidam de acentuação Unicode (não viram \"á\" em \"Á\").\n\n`string.byte` e `string.char` fazem ponte com a tabela ASCII (e UTF-8 para os primeiros 128). Úteis para protocolos binários, geração de IDs, embaralhamento. Por fim, lembre que toda função `string.foo(s, ...)` pode ser chamada como método: `s:foo(...)`. É só açúcar — o resultado é idêntico — mas costuma ficar mais legível.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- string.rep: repetir\nprint(string.rep('-', 30))           -- 30 traços\nprint(string.rep('ab', 3))           -- 'ababab'\nprint(string.rep('ab', 3, '|'))      -- 'ab|ab|ab' (Lua 5.3+)\n\n-- string.format: estilo printf\nprint(string.format('%05d', 42))     -- '00042'\nprint(string.format('%.2f', math.pi))-- '3.14'\nprint(string.format('%-10s|', 'oi'))-- 'oi        |'\nprint(string.format('%s tem %d', 'Ana', 30))"
      },
      {
        "lang": "lua",
        "code": "-- Conversão de caso (apenas ASCII, não cuida de acentos)\nprint(string.lower('LUA'))          -- 'lua'\nprint(string.upper('lua'))          -- 'LUA'\nprint(string.upper('ação'))         -- 'AÇÃO' depende da locale\n\n-- Reverso e tamanho em bytes\nprint(string.reverse('abc'))        -- 'cba'\nprint(#'olá')                       -- 4 (BYTES, não chars)"
      },
      {
        "lang": "lua",
        "code": "-- byte / char: ponte com ASCII / UTF-8\nprint(string.byte('A'))             -- 65\nprint(string.char(65, 66, 67))      -- 'ABC'\n\n-- Pegar todos os bytes de uma palavra\nfor _, b in ipairs({string.byte('Lua', 1, -1)}) do\n  print(b)                          -- 76, 117, 97\nend\n\n-- string.sub: substring por posição\nprint(('Lua é top'):sub(1, 3))      -- 'Lua'\nprint(('Lua é top'):sub(-3))        -- 'top'"
      }
    ],
    "points": [
      "string.rep(s, n, sep) repete com separador opcional",
      "string.format usa especificadores estilo printf (%d %s %.2f)",
      "lower/upper só funcionam bem em ASCII puro",
      "byte/char convertem caractere <-> número (ASCII/UTF-8)",
      "string.sub(i, j) extrai por posição em bytes",
      "Toda string.foo(s, ...) pode virar s:foo(...)",
      "#s devolve tamanho em BYTES, não em caracteres"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para formatar valores monetários ou logs estruturados, string.format é quase sempre mais legível e mais rápido que '..' encadeado."
      },
      {
        "type": "warning",
        "content": "string.lower/upper não cuidam de acentos: 'Á' pode não virar 'á' dependendo da locale. Para Unicode correto, instale a biblioteca luautf8 ou use ICU."
      }
    ]
  },
  {
    "slug": "utf8",
    "section": "strings-padroes",
    "title": "UTF-8 com a biblioteca utf8",
    "difficulty": "intermediario",
    "subtitle": "Strings são bytes. Caracteres são outra história.",
    "intro": "Em Lua, **strings são sequências de bytes**, não de caracteres. Quando o conteúdo é ASCII puro, byte e caractere coincidem e tudo parece simples. No instante em que entram acentos ou emojis, as duas coisas divergem. `#s` continua respondendo \"tamanho em bytes\", e isso geralmente **não é** o que o usuário quer ver.\n\nO operador `#` e funções como `string.sub`, `string.byte` operam por **byte**. O caractere `á` em UTF-8 ocupa 2 bytes, `🌙` ocupa 4. Então `#'olá'` devolve 4. Cortar com `string.sub` pode partir um caractere no meio.\n\nDesde Lua 5.3, a biblioteca padrão inclui o módulo **`utf8`**: `utf8.len` (conta caracteres), `utf8.codes` (itera codepoints), `utf8.char` (cria string), `utf8.charpattern` (pattern que casa um caractere UTF-8 inteiro). Em Lua 5.1/5.2/LuaJIT, instale **luautf8**.\n\nO que **continua faltando**: normalização (NFC/NFD), comparação case-insensitive de acentuados, ordenação por locale. Para isso, bibliotecas externas. Mas para contar, iterar e validar, a `utf8` resolve.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Bytes vs caracteres\nlocal s = 'Olá, Lua! 🌙'\nprint(#s)                  -- 14 (bytes)\nprint(utf8.len(s))         -- 11 (caracteres reais)\n\n-- Cuidado: sub corta por byte\nprint(s:sub(1, 3))         -- 'Ol\\xC3' bytes inválidos!\n-- Para cortar 3 caracteres reais, usa offset:\nprint(s:sub(1, utf8.offset(s, 4) - 1))   -- 'Olá'"
      },
      {
        "lang": "lua",
        "code": "-- Iterar codepoints (caracteres) na ordem\nfor pos, code in utf8.codes('Olá') do\n  print(pos, code, utf8.char(code))\nend\n-- 1   79  O\n-- 2   108 l\n-- 3   225 á\n\n-- Converter codepoint <-> caractere\nprint(utf8.char(0x1F319))   -- '🌙'\nprint(utf8.codepoint('á'))  -- 225"
      },
      {
        "lang": "lua",
        "code": "-- Patterns que casam um caractere UTF-8 inteiro\nlocal s = 'Olá'\nfor c in s:gmatch(utf8.charpattern) do\n  print(c)              -- O / l / á (cada um inteiro)\nend\n\n-- Validar se a string é UTF-8 bem formado\nlocal len, posErro = utf8.len(s)\nif not len then\n  print('byte inválido na posição', posErro)\nend"
      }
    ],
    "points": [
      "Strings em Lua são sequências de BYTES",
      "#s, sub, byte e patterns operam por byte",
      "utf8.len conta caracteres reais",
      "utf8.codes itera codepoints (caractere por caractere)",
      "utf8.char e utf8.codepoint convertem entre os dois",
      "utf8.charpattern casa um caractere UTF-8 completo em pattern",
      "Lua não normaliza Unicode (NFC/NFD), nem ordena por locale"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "A biblioteca utf8 só aparece a partir de Lua 5.3. Em Lua 5.1, 5.2 ou LuaJIT, instale 'luautf8' (luarocks install luautf8) para ter funcionalidade equivalente."
      },
      {
        "type": "warning",
        "content": "Nunca corte strings com sub a esmo se o conteúdo pode ter UTF-8. Você pode partir um caractere no meio e gerar bytes inválidos que quebram quem for ler depois."
      }
    ]
  },
  {
    "slug": "metatables-intro",
    "section": "metatables-oop",
    "title": "Introdução a metatables",
    "difficulty": "avancado",
    "subtitle": "O recurso mais poderoso de Lua.",
    "intro": "Tabelas em Lua, por padrão, têm comportamento fixo: somar duas tabelas dá erro, comparar com == retorna false a menos que sejam o MESMO objeto, acessar uma chave inexistente devolve nil. Metatables mudam isso. Elas são o ponto de extensão da linguagem.\n\nPense numa metatable como um \"painel de controle\" anexado a uma tabela. Esse painel tem chaves especiais (chamadas metamétodos) com nomes que começam por __ (dois underscores). Cada uma intercepta uma operação: __add intercepta o +, __index intercepta a leitura, __call intercepta a chamada como função, e por aí vai.\n\nO mecanismo é simples: quando você faz t1 + t2, Lua primeiro tenta a soma normal; se t1 ou t2 for tabela, Lua olha a metatable e procura __add. Se achar, chama essa função passando os dois operandos. Se não achar, dá erro. Toda OOP, herança, sobrecarga de operadores e DSLs em Lua nascem daí.\n\nA pegadinha para iniciantes: a metatable NÃO está dentro da tabela. Ela é anexada com setmetatable(t, mt) e consultada com getmetatable(t). Uma tabela pode ser metatable de várias outras, e a mesma metatable é compartilhada entre todas as instâncias de uma \"classe\".",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Sem metatable: erro\nlocal a = {1, 2, 3}\nlocal b = {10, 20, 30}\n-- print(a + b)  -- erro: attempt to perform arithmetic on a table\n\n-- Com metatable: somamos elemento a elemento\nlocal mt = {\n  __add = function(x, y)\n    local r = {}\n    for i = 1, #x do r[i] = x[i] + y[i] end\n    return r\n  end,\n}\nsetmetatable(a, mt)\n\nlocal soma = a + b\nprint(soma[1], soma[2], soma[3])  -- saída: 11  22  33"
      },
      {
        "lang": "lua",
        "code": "-- Inspecionando metatables\nlocal t = setmetatable({}, {__index = function() return 0 end})\n\nprint(getmetatable(t))         -- table: 0x...\nprint(t.qualquer_chave)        -- saída: 0  (veio do __index)\n\n-- Strings JÁ têm metatable embutida (por isso 'oi':upper() funciona)\nprint(getmetatable('').__index == string)  -- saída: true"
      },
      {
        "lang": "lua",
        "code": "-- Metatable compartilhada entre instâncias\nlocal mt = {__tostring = function(p) return 'Ponto('..p.x..','..p.y..')' end}\n\nlocal p1 = setmetatable({x=1, y=2}, mt)\nlocal p2 = setmetatable({x=3, y=4}, mt)\n\nprint(p1)  -- saída: Ponto(1,2)\nprint(p2)  -- saída: Ponto(3,4)\n-- A MESMA mt serve as duas (econômico)"
      }
    ],
    "points": [
      "setmetatable(t, mt) anexa; getmetatable(t) recupera",
      "Metamétodos são chaves com prefixo __ (add, index, call, eq...)",
      "Lua só consulta a metatable se a operação normal falhar",
      "Uma metatable serve a várias instâncias (memória compartilhada)",
      "Strings já vêm com metatable que aponta para a tabela string",
      "Metatable não está DENTRO da tabela; é anexada por fora",
      "Sem __metatable, a metatable é pública (qualquer um troca)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Comece com __index e __tostring; são 80% do uso real. Os outros vêm com prática."
      },
      {
        "type": "warning",
        "content": "Não confunda metatable com a própria tabela. setmetatable(t, t) é raro e pode causar laços infinitos."
      }
    ]
  },
  {
    "slug": "metamethods-aritmeticos",
    "section": "metatables-oop",
    "title": "Metamétodos aritméticos",
    "difficulty": "avancado",
    "subtitle": "Sobrecarga de +, -, *, /, % e ^.",
    "intro": "Lua deixa você dizer o que cada operador faz quando aplicado às SUAS tabelas. Isso transforma código matemático denso (vetores, matrizes, números complexos, quaternions) em algo legível: v1 + v2 ao invés de Vetor.somar(v1, v2). É a mesma ideia de operator overloading em C++ ou __add__ em Python.\n\nPara cada operador binário, existe um metamétodo correspondente: __add (+), __sub (-), __mul (*), __div (/), __mod (%), __pow (^), __unm (- unário). Em Lua 5.3+ entram também __idiv (//) para divisão inteira, __band, __bor, __bxor, __bnot, __shl, __shr para bitwise.\n\nLua olha primeiro o operando da esquerda; se a metatable dele não tiver o metamétodo, tenta o da direita. Isso permite escrever 2 * vetor mesmo que 2 seja um número (a metatable de Vetor cuida).\n\nA pegadinha clássica: o metamétodo recebe os operandos NA ORDEM em que aparecem na expressão, mas pode ser chamado pela esquerda OU pela direita. Trate ambos os casos para operações não-comutativas como subtração e divisão.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Vetor 2D com sobrecarga de operadores\nlocal Vetor = {}\nVetor.__index = Vetor\n\nlocal function v(x, y) return setmetatable({x, y}, Vetor) end\n\nVetor.__add = function(a, b) return v(a[1]+b[1], a[2]+b[2]) end\nVetor.__sub = function(a, b) return v(a[1]-b[1], a[2]-b[2]) end\nVetor.__unm = function(a) return v(-a[1], -a[2]) end\nVetor.__tostring = function(a)\n  return string.format('(%g, %g)', a[1], a[2])\nend\n\nprint(v(1,2) + v(3,4))   -- saída: (4, 6)\nprint(v(5,5) - v(1,2))   -- saída: (4, 3)\nprint(-v(1,2))           -- saída: (-1, -2)"
      },
      {
        "lang": "lua",
        "code": "-- Multiplicação por escalar (chamada pelos DOIS lados)\nVetor.__mul = function(a, b)\n  if type(a) == 'number' then\n    return v(b[1]*a, b[2]*a)         -- 2 * vetor\n  elseif type(b) == 'number' then\n    return v(a[1]*b, a[2]*b)         -- vetor * 2\n  else\n    return a[1]*b[1] + a[2]*b[2]      -- produto escalar\n  end\nend\n\nprint(2 * v(3, 4))      -- saída: (6, 8)\nprint(v(3, 4) * 2)      -- saída: (6, 8)\nprint(v(1, 0) * v(0, 1))  -- saída: 0"
      },
      {
        "lang": "lua",
        "code": "-- Lua 5.3+: divisão inteira e bitwise\nlocal Mod = {}\nMod.__idiv = function(a, b) return math.floor(a.n / b.n) end\nMod.__band = function(a, b) return a.n & b.n end\n\nlocal x = setmetatable({n=10}, Mod)\nlocal y = setmetatable({n=3},  Mod)\nprint(x // y)   -- saída: 3\nprint(x & y)    -- saída: 2"
      }
    ],
    "points": [
      "__add, __sub, __mul, __div, __mod, __pow, __unm cobrem aritmética",
      "Lua 5.3+: __idiv (//), __band, __bor, __bxor, __bnot, __shl, __shr",
      "Operadores não-comutativos: trate número à esquerda E à direita",
      "Lua tenta a metatable do operando esquerdo primeiro",
      "__unm é o menos UNÁRIO: -v, não v - w",
      "Combine com __tostring para debug confortável",
      "Devolva sempre uma nova tabela; não mute os operandos"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Se você precisa de muitos metamétodos, defina-os uma vez na tabela-classe (Vetor.__add = ...) e reutilize Vetor como metatable de todas as instâncias."
      },
      {
        "type": "warning",
        "content": "Coerções automáticas string↔número NÃO acionam seus metamétodos. '2' + v(1,2) ainda tenta converter '2' para número."
      }
    ]
  },
  {
    "slug": "index-newindex",
    "section": "metatables-oop",
    "title": "__index e __newindex",
    "difficulty": "avancado",
    "subtitle": "Os dois metamétodos que sustentam OOP.",
    "intro": "Estes dois metamétodos fazem o trabalho pesado em Lua. __index entra em ação quando você LÊ uma chave que não existe na tabela. __newindex entra em ação quando você ESCREVE numa chave que ainda não existe. Tudo: herança de classes, valores-padrão, propriedades calculadas, leitura preguiçosa, validação de atributos, objetos imutáveis — sai daí.\n\nA peculiaridade é que ambos podem ser uma TABELA ou uma FUNÇÃO. Se for tabela, Lua redireciona o acesso para ela (e isso pode ser recursivo, criando cadeias de herança). Se for função, Lua chama passando (tabela_original, chave) para __index e (tabela_original, chave, valor) para __newindex.\n\nDuas pegadinhas mortais para iniciantes. Primeiro: __index só dispara para chaves AUSENTES. Se a tabela já tem t.x = 5, o __index nem é consultado. Segundo: __newindex também só dispara para chaves AUSENTES; uma vez que você atribuiu pela primeira vez, futuras atribuições à mesma chave NÃO disparam mais o metamétodo. Para sempre interceptar, use uma tabela proxy vazia + rawset.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- __index como TABELA: valores padrão e herança\nlocal padroes = {cor = 'azul', tamanho = 10, ativo = true}\n\nlocal botao = setmetatable({texto = 'OK'}, {__index = padroes})\n\nprint(botao.texto)     -- saída: OK     (próprio)\nprint(botao.cor)       -- saída: azul   (veio do __index)\nprint(botao.tamanho)   -- saída: 10\n\nbotao.cor = 'verde'    -- escreve no PRÓPRIO botao\nprint(botao.cor)       -- saída: verde\nprint(padroes.cor)     -- saída: azul   (intacto)"
      },
      {
        "lang": "lua",
        "code": "-- __index como FUNÇÃO: cálculo dinâmico\nlocal cache = setmetatable({}, {\n  __index = function(t, chave)\n    print('calculando ' .. chave)\n    local valor = #chave * 2          -- finge ser caro\n    rawset(t, chave, valor)           -- memoiza\n    return valor\n  end,\n})\n\nprint(cache.oi)    -- saída: calculando oi  4\nprint(cache.oi)    -- saída: 4   (já cacheado, sem mensagem)"
      },
      {
        "lang": "lua",
        "code": "-- __newindex: validação ao atribuir\nlocal config = setmetatable({}, {\n  __newindex = function(t, k, v)\n    if type(v) ~= 'string' then\n      error('config.' .. k .. ' precisa ser string', 2)\n    end\n    rawset(t, k, v)   -- usa raw para não cair em recursão\n  end,\n})\n\nconfig.host = 'localhost'\n-- config.porta = 80   -- erro: config.porta precisa ser string"
      }
    ],
    "points": [
      "__index dispara só quando a chave NÃO está na própria tabela",
      "__newindex dispara só na PRIMEIRA atribuição (chave inexistente)",
      "Pode ser tabela (redirecionamento) ou função (callback)",
      "rawset/rawget contornam metamétodos (essencial dentro deles)",
      "Cadeias de __index permitem herança em vários níveis",
      "Para interceptar SEMPRE, use proxy: tabela vazia + dados em local separado",
      "__index função recebe (t, k); __newindex função recebe (t, k, v)"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Se você setar t.x via __newindex sem rawset, futuras leituras de t.x retornam direto (não passam por __index). Isso é desejado em valores-padrão, mas confunde quando você espera interceptar tudo."
      },
      {
        "type": "tip",
        "content": "Para uma tabela 100% read-only, combine __index = dados + __newindex = function() error('readonly') end + tabela própria sempre vazia."
      }
    ]
  },
  {
    "slug": "oop-classes",
    "section": "metatables-oop",
    "title": "OOP: criando classes",
    "difficulty": "avancado",
    "subtitle": "Padrão clássico de classes em Lua.",
    "intro": "Lua não tem palavra-chave class. Ela tem algo mais simples e flexível: tabelas + metatables + a sintaxe de método com dois pontos. Combinando isso, você reproduz qualquer estilo de OOP — clássico, prototype-based, mixin, traits — sem herdar as decisões de outras linguagens.\n\nO padrão idiomático é: você cria uma tabela que serve simultaneamente de \"namespace dos métodos\" e de metatable das instâncias. Define Classe.__index = Classe (assim instâncias buscam métodos lá). Cria um construtor (geralmente Classe.new) que devolve uma tabela nova com setmetatable apontando para Classe. Define os métodos com a sintaxe function Classe:metodo(args), que insere automaticamente o parâmetro implícito self.\n\nOs dois pontos (:) são pura cosmética: ana:saudar() é açúcar para Pessoa.saudar(ana). Mesma coisa em function Pessoa:saudar() — equivale a function Pessoa.saudar(self). Confundir : com . é o erro #1 de quem está aprendendo OOP em Lua. Use : sempre que estiver chamando ou definindo um método que opera em self.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Classe Pessoa: padrão clássico\nlocal Pessoa = {}\nPessoa.__index = Pessoa             -- instâncias buscam métodos aqui\n\nfunction Pessoa.new(nome, idade)    -- construtor (com .)\n  local self = setmetatable({}, Pessoa)\n  self.nome = nome\n  self.idade = idade\n  return self\nend\n\nfunction Pessoa:saudar()            -- método (com :)\n  return 'Oi, sou ' .. self.nome\nend\n\nfunction Pessoa:aniversario()\n  self.idade = self.idade + 1\nend\n\nlocal ana = Pessoa.new('Ana', 30)\nprint(ana:saudar())     -- saída: Oi, sou Ana\nana:aniversario()\nprint(ana.idade)         -- saída: 31"
      },
      {
        "lang": "lua",
        "code": "-- : versus . — entendendo a diferença\nlocal Conta = {}\nConta.__index = Conta\nfunction Conta.new(saldo)\n  return setmetatable({saldo = saldo}, Conta)\nend\nfunction Conta:depositar(v) self.saldo = self.saldo + v end\n\nlocal c = Conta.new(100)\n\nc:depositar(50)            -- igual a Conta.depositar(c, 50)\nprint(c.saldo)              -- saída: 150\n\nConta.depositar(c, 25)     -- forma explícita\nprint(c.saldo)              -- saída: 175\n\n-- c.depositar(50)          -- BUG: self vira 50, sem segundo arg"
      },
      {
        "lang": "lua",
        "code": "-- Métodos privados (por convenção: prefixo _)\nlocal Pilha = {}\nPilha.__index = Pilha\n\nfunction Pilha.new()\n  return setmetatable({_dados = {}, _topo = 0}, Pilha)\nend\n\nfunction Pilha:empilhar(v)\n  self._topo = self._topo + 1\n  self._dados[self._topo] = v\nend\n\nfunction Pilha:desempilhar()\n  if self._topo == 0 then return nil end\n  local v = self._dados[self._topo]\n  self._dados[self._topo] = nil\n  self._topo = self._topo - 1\n  return v\nend\n\nlocal p = Pilha.new()\np:empilhar(10); p:empilhar(20)\nprint(p:desempilhar())   -- saída: 20"
      }
    ],
    "points": [
      "Classe = tabela; Classe.__index = Classe",
      "Construtor com . devolve setmetatable({}, Classe)",
      "function C:metodo(...) injeta o parâmetro self automaticamente",
      "obj:metodo(x) é açúcar para C.metodo(obj, x)",
      "Atributos vão na instância (self.x); métodos na classe (Classe:m)",
      "Não há private real — use prefixo _ por convenção",
      "Uma classe é apenas uma tabela; pode adicionar métodos depois"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Esquecer Classe.__index = Classe é a falha mais comum: você cria a instância, mas obj:metodo() retorna nil porque Lua não sabe onde achar o método."
      },
      {
        "type": "tip",
        "content": "Se uma instância precisa lembrar dela mesma, escreva self dentro do método. Nunca use a variável da classe (Pessoa.idade) achando que é a instância."
      }
    ]
  },
  {
    "slug": "oop-heranca",
    "section": "metatables-oop",
    "title": "OOP: herança",
    "difficulty": "avancado",
    "subtitle": "Encadeando metatables para reaproveitar comportamento.",
    "intro": "Herança em Lua é resolvida pela cadeia de __index. Quando você procura um método numa instância e ele não existe lá, Lua segue o __index para a classe; se a classe também não tiver, segue o __index DA CLASSE para a superclasse, e assim por diante. Isso é exatamente o mesmo conceito de prototype chain do JavaScript.\n\nO padrão é: para fazer Cao herdar de Animal, transforme Animal na metatable da tabela Cao via setmetatable(Cao, {__index = Animal}). Daí Cao.__index = Cao continua valendo para as instâncias de Cao. O construtor de Cao normalmente chama Animal.new(...) para reutilizar a inicialização do pai — esse é o equivalente do super() de outras linguagens.\n\nLua não te dá super automático. Se você sobrescreve um método e quer chamar a versão do pai, escreva explicitamente Animal.metodo(self, ...). Use o ponto (não dois pontos), porque você precisa passar self manualmente; caso contrário, o self viraria a própria tabela Animal.\n\nEsse esquema é poderoso, mas frágil: um setmetatable trocado, um __index na ordem errada, e o lookup vai parar no lugar errado. Comece com herança simples (um nível) antes de criar hierarquias longas.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Hierarquia: Animal → Cao\nlocal Animal = {}\nAnimal.__index = Animal\n\nfunction Animal.new(nome)\n  return setmetatable({nome = nome}, Animal)\nend\n\nfunction Animal:mover()\n  print(self.nome .. ' se move')\nend\n\n-- Cao herda de Animal\nlocal Cao = setmetatable({}, {__index = Animal})\nCao.__index = Cao\n\nfunction Cao.new(nome, raca)\n  local self = Animal.new(nome)        -- reusa init do pai\n  self.raca = raca\n  return setmetatable(self, Cao)        -- mas é Cao!\nend\n\nfunction Cao:latir()\n  print(self.nome .. ': au au!')\nend\n\nlocal rex = Cao.new('Rex', 'SRD')\nrex:mover()    -- saída: Rex se move   (herdado)\nrex:latir()    -- saída: Rex: au au!"
      },
      {
        "lang": "lua",
        "code": "-- Sobrescrevendo método e chamando o do pai (super)\nlocal Gato = setmetatable({}, {__index = Animal})\nGato.__index = Gato\n\nfunction Gato.new(nome)\n  return setmetatable(Animal.new(nome), Gato)\nend\n\nfunction Gato:mover()\n  Animal.mover(self)                    -- super: passa self!\n  print(self.nome .. ' caiu de pé')\nend\n\nlocal mia = Gato.new('Mia')\nmia:mover()\n-- saída:\n-- Mia se move\n-- Mia caiu de pé"
      },
      {
        "lang": "lua",
        "code": "-- Helper para reduzir o boilerplate\nlocal function classe(pai)\n  local C = setmetatable({}, {__index = pai})\n  C.__index = C\n  return C\nend\n\nlocal Forma = classe()\nfunction Forma.new() return setmetatable({}, Forma) end\nfunction Forma:area() return 0 end\n\nlocal Quadrado = classe(Forma)\nfunction Quadrado.new(lado)\n  local s = Forma.new()\n  s.lado = lado\n  return setmetatable(s, Quadrado)\nend\nfunction Quadrado:area() return self.lado ^ 2 end\n\nprint(Quadrado.new(4):area())  -- saída: 16"
      }
    ],
    "points": [
      "Herança = setmetatable(Sub, {__index = Pai})",
      "Subclasse continua precisando de Sub.__index = Sub",
      "Construtor da sub chama Pai.new(...) para reaproveitar init",
      "Não existe super() automático: use Pai.metodo(self, ...)",
      "Use . (não :) ao chamar método do pai, para passar self manualmente",
      "Lookup percorre a cadeia: instância → classe → pai → avô...",
      "Hierarquias longas ficam difíceis de depurar; prefira composição"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Esquecer Sub.__index = Sub depois do setmetatable faz instâncias da subclasse pularem direto para o pai, perdendo seus próprios métodos."
      },
      {
        "type": "tip",
        "content": "Antes de montar uma árvore de herança, considere mixins (copiar funções de uma tabela para outra). Em Lua isso geralmente é mais limpo."
      }
    ]
  },
  {
    "slug": "call-metamethod",
    "section": "metatables-oop",
    "title": "__call: tabelas chamáveis",
    "difficulty": "avancado",
    "subtitle": "Quando obj() faz sentido como sintaxe.",
    "intro": "Em Lua, funções são valores de primeira classe e podem ser chamadas com (). Tabelas, normalmente, não. O metamétodo __call muda isso: você anexa uma metatable com __call à tabela e, daí em diante, escrever t(args) dispara essa função, recebendo a própria tabela como primeiro argumento.\n\nIsso parece truque de festa, mas tem usos sólidos. O mais comum é fazer a CLASSE virar seu próprio construtor: ao invés de Pessoa.new('Ana'), você escreve Pessoa('Ana'). Isso esconde a fábrica e deixa o código de chamada parecido com várias linguagens (Python, Ruby, Swift). Outro uso: callables que mantêm estado interno (contadores, rate-limiters, memoizers) com a interface limpa de uma função.\n\nA sutileza é que o __call precisa estar na METATABLE da tabela, não na própria. Isso significa: se você quer que a tabela Pessoa seja chamável, anexe uma metatable a Pessoa cujo __call é o construtor. As INSTÂNCIAS de Pessoa não ficam chamáveis a menos que você queira (o que é raro mas possível). Isso pega quem confunde \"metatable da classe\" com \"metatable da instância\".",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Classe que é seu próprio construtor\nlocal Pessoa = {}\nPessoa.__index = Pessoa\n\nfunction Pessoa:saudar()\n  return 'Oi, sou ' .. self.nome\nend\n\n-- Anexa metatable À TABELA Pessoa (não às instâncias)\nsetmetatable(Pessoa, {\n  __call = function(cls, nome)\n    return setmetatable({nome = nome}, cls)\n  end,\n})\n\nlocal ana = Pessoa('Ana')   -- chama Pessoa como função!\nprint(ana:saudar())          -- saída: Oi, sou Ana"
      },
      {
        "lang": "lua",
        "code": "-- Função com estado: contador callable\nlocal function novoContador(inicio)\n  return setmetatable({n = inicio or 0}, {\n    __call = function(self)\n      self.n = self.n + 1\n      return self.n\n    end,\n  })\nend\n\nlocal c = novoContador()\nprint(c())   -- saída: 1\nprint(c())   -- saída: 2\nprint(c())   -- saída: 3\nprint(c.n)   -- saída: 3   (também acessível como atributo)"
      },
      {
        "lang": "lua",
        "code": "-- Memoização transparente\nlocal function memoizar(fn)\n  local cache = {}\n  return setmetatable({cache = cache}, {\n    __call = function(_, x)\n      if cache[x] == nil then cache[x] = fn(x) end\n      return cache[x]\n    end,\n  })\nend\n\nlocal lento = memoizar(function(n)\n  print('calculando ' .. n)\n  return n * n\nend)\n\nprint(lento(5))   -- saída: calculando 5  25\nprint(lento(5))   -- saída: 25   (cache)"
      }
    ],
    "points": [
      "__call torna uma TABELA chamável como função",
      "Recebe a tabela como primeiro argumento (igual a self)",
      "__call vai na metatable, não na própria tabela",
      "Padrão idiomático: classe que é seu próprio construtor",
      "Permite \"funções com estado\" mantendo sintaxe limpa",
      "Pode receber qualquer número de argumentos extra",
      "Combina com __index para objetos que são função E têm campos"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Quando uma lib parece exportar uma função mas você consegue acessar lib.versao, lib.config, etc, é quase certo que ela usa __call internamente."
      }
    ]
  },
  {
    "slug": "metamethods-comparacao",
    "section": "metatables-oop",
    "title": "__eq, __lt, __le: comparação",
    "difficulty": "avancado",
    "subtitle": "Tornando objetos comparáveis por valor.",
    "intro": "Por padrão, Lua compara tabelas por IDENTIDADE: t1 == t2 só é true se forem exatamente o mesmo objeto na memória. Dois vetores com x e y idênticos retornam false. Para comparar por VALOR — o que quase sempre é o que você quer — defina __eq.\n\nDe igual modo, < e <= não funcionam entre tabelas a menos que você defina __lt e __le. Isso é fundamental para ordenar coleções (table.sort precisa de uma ordem total) e para colocar objetos em estruturas que dependem de ordem.\n\nDuas regras importantes. Primeira: __eq só é consultado se ambos os operandos forem tabelas (ou ambos userdata) E tiverem a mesma metatable em Lua 5.1. Em 5.2+ basta que um dos dois tenha __eq. Segunda: __le pode ser omitido se você definir __lt — Lua deriva a ≤ b como not (b < a). Em 5.4 isso mudou: __le tornou-se preferível e a derivação foi removida em alguns casos para evitar resultados estranhos com NaN.\n\nUm cuidado prático: __eq deve sempre devolver um booleano e ser CONSISTENTE (a == b implica b == a, e a == a sempre true). Quebrar isso causa bugs sutis em estruturas como conjuntos baseados em tabelas.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Sem __eq: identidade, não valor\nlocal a = {x=1, y=2}\nlocal b = {x=1, y=2}\nprint(a == b)   -- saída: false   (objetos diferentes)\nprint(a == a)   -- saída: true\n\n-- Com __eq: comparação por valor\nlocal Vec = {}\nVec.__eq = function(p, q)\n  return p.x == q.x and p.y == q.y\nend\n\nlocal c = setmetatable({x=1, y=2}, Vec)\nlocal d = setmetatable({x=1, y=2}, Vec)\nprint(c == d)   -- saída: true"
      },
      {
        "lang": "lua",
        "code": "-- Ordenação por magnitude (|v|²)\nlocal Vec = {}\nVec.__index = Vec\nVec.__lt = function(a, b)\n  return a.x*a.x + a.y*a.y < b.x*b.x + b.y*b.y\nend\nVec.__le = function(a, b)\n  return a.x*a.x + a.y*a.y <= b.x*b.x + b.y*b.y\nend\n\nlocal function v(x,y) return setmetatable({x=x,y=y}, Vec) end\n\nlocal lista = {v(3,4), v(1,1), v(0,2), v(5,0)}\ntable.sort(lista, function(a, b) return a < b end)\nfor _, p in ipairs(lista) do\n  io.write(string.format('(%d,%d) ', p.x, p.y))\nend\n-- saída: (1,1) (0,2) (3,4) (5,0)"
      },
      {
        "lang": "lua",
        "code": "-- Cuidado: __eq só dispara entre TABELAS (ou userdata)\nlocal Num = {}\nNum.__eq = function(a, b) return a.n == b.n end\n\nlocal x = setmetatable({n=5}, Num)\nprint(x == 5)         -- saída: false (5 não é tabela; __eq nem chamado)\nprint(x == {n=5})      -- saída: false em 5.1 (metatable diferente)\n                       -- saída: true em 5.2+ (tem __eq, basta)"
      }
    ],
    "points": [
      "Por padrão, == em tabelas compara identidade, não conteúdo",
      "__eq habilita igualdade por valor",
      "__lt e __le definem ordem total para sort/min/max",
      "__eq só dispara entre dois valores do MESMO tipo (table ou userdata)",
      "Em 5.1 ambos precisam compartilhar metatable; em 5.2+ basta um ter __eq",
      "Nunca compare tabela com número via ==; use método explícito",
      "Mantenha __eq consistente: reflexiva, simétrica, transitiva"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "table.sort exige ordem ESTRITA: a < a deve ser false, e se a < b então não pode b < a. Se sua __lt mente, sort pode entrar em loop ou crashar."
      },
      {
        "type": "info",
        "content": "Em Lua 5.4, a derivação de __le a partir de __lt foi removida para alinhar com semânticas de comparação totais. Defina os dois explicitamente."
      }
    ]
  },
  {
    "slug": "tostring-len",
    "section": "metatables-oop",
    "title": "__tostring, __len e __index avançado",
    "difficulty": "avancado",
    "subtitle": "Polindo a API de seus objetos.",
    "intro": "Depois que você domina __index e os aritméticos, sobram dois metamétodos pequenos mas que melhoram MUITO a experiência de uso dos seus objetos: __tostring e __len. Eles não mudam comportamento crítico, mas fazem print(obj) e #obj funcionarem do jeito que o leitor do código espera.\n\n__tostring é chamado por print, tostring e por concatenação implícita (em alguns contextos). Sem ele, print(obj) mostra algo como table: 0x55a8f001b3a0, ótimo para debug do garbage collector e péssimo para qualquer outra coisa. Defina __tostring e seus objetos passam a se apresentar de forma humana, o que ajuda em logs, mensagens de erro e testes.\n\n__len responde ao operador #. Em Lua 5.1, # em tabelas SEMPRE chamava o algoritmo padrão (que retorna o tamanho da parte sequencial); o metamétodo só funcionava para userdata. A partir de 5.2, __len também vale para tabelas, permitindo coleções customizadas (filas, listas encadeadas, conjuntos) com comportamento natural de tamanho.\n\nUma combinação poderosa: defina __tostring para depuração, __index para acesso, __len para tamanho lógico, e seu objeto se comporta como uma estrutura nativa em quase qualquer contexto.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Lista \"opaca\" com tamanho e impressão decentes\nlocal Lista = {}\nLista.__index = Lista\n\nfunction Lista.new()\n  return setmetatable({_d = {}}, Lista)\nend\n\nfunction Lista:add(x)\n  self._d[#self._d + 1] = x\nend\n\nLista.__tostring = function(l)\n  return '[' .. table.concat(l._d, ', ') .. ']'\nend\n\nLista.__len = function(l)\n  return #l._d\nend\n\nlocal l = Lista.new()\nl:add(10); l:add(20); l:add(30)\nprint(l)    -- saída: [10, 20, 30]\nprint(#l)   -- saída: 3"
      },
      {
        "lang": "lua",
        "code": "-- __tostring usado em mensagens de erro e logs\nlocal Erro = {}\nErro.__index = Erro\nErro.__tostring = function(e)\n  return string.format('Erro[%s]: %s', e.codigo, e.msg)\nend\n\nfunction Erro.new(codigo, msg)\n  return setmetatable({codigo=codigo, msg=msg}, Erro)\nend\n\nlocal e = Erro.new('E42', 'arquivo não encontrado')\nprint(e)                       -- saída: Erro[E42]: arquivo não encontrado\nprint('Falha: ' .. tostring(e))-- saída: Falha: Erro[E42]: arquivo não encontrado"
      },
      {
        "lang": "lua",
        "code": "-- __index encadeado: cadeia de fallbacks\nlocal padrao = {tema='claro', idioma='pt-BR'}\nlocal global  = setmetatable({timezone='UTC-3'}, {__index = padrao})\nlocal usuario = setmetatable({tema='escuro'},     {__index = global})\n\nprint(usuario.tema)      -- saída: escuro    (próprio)\nprint(usuario.timezone)  -- saída: UTC-3     (global)\nprint(usuario.idioma)    -- saída: pt-BR     (padrao)"
      }
    ],
    "points": [
      "__tostring é chamado por print() e tostring()",
      "Sem __tostring, print(t) mostra endereço (table: 0x...)",
      "__len responde ao operador # (5.2+ para tabelas)",
      "__len de tabela em 5.1 é IGNORADO (só userdata)",
      "Cadeias de __index permitem fallbacks em vários níveis",
      "Operação .. ainda exige string ou número; __concat resolve para objetos",
      "Use __tostring sempre — facilita debug grátis"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Lua 5.1 não respeita __len em tabelas; se você precisa portabilidade, exponha um método :tamanho() junto com o metamétodo."
      },
      {
        "type": "tip",
        "content": "Em testes, comparar tostring(obj) é uma forma rápida de validar a forma do objeto sem expor o layout interno."
      }
    ]
  },
  {
    "slug": "raw-funcs",
    "section": "metatables-oop",
    "title": "rawget, rawset, rawequal: ignorando metatables",
    "difficulty": "avancado",
    "subtitle": "O acesso bruto que evita recursão infinita.",
    "intro": "Quando você define metamétodos como __index, __newindex e __eq, qualquer acesso normal à tabela passa por eles. Isso é exatamente o que você quer 99% das vezes — e exatamente o que você NÃO quer 1% das vezes: dentro do próprio metamétodo. Se um __newindex faz t[k] = v, ele dispara __newindex de novo, e de novo, até estourar a pilha.\n\nA solução são as funções raw: rawset(t, k, v) escreve sem disparar __newindex, rawget(t, k) lê sem disparar __index, rawequal(a, b) compara identidade ignorando __eq, rawlen(t) devolve o tamanho \"cru\" ignorando __len. Use-as sempre que você está IMPLEMENTANDO um metamétodo e precisa mexer na tabela real por baixo dos panos.\n\nA segunda situação onde elas brilham é quando você precisa saber se uma chave realmente existe na tabela ou se vem de um __index. rawget(t, k) == nil te diz com certeza que t não tem k armazenado de fato. Isso é fundamental em código que itera, serializa ou clona objetos: você quer copiar só os campos REAIS, não os herdados.\n\nUma linha-guia: se você está dentro de um metamétodo e mencionou o nome da tabela, pare e pergunte se precisa usar raw. Quase sempre a resposta é sim.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Por que raw existe: evitar recursão\nlocal t = setmetatable({}, {\n  __newindex = function(t, k, v)\n    print('atribuindo ' .. k)\n    rawset(t, k, v)         -- sem rawset, recursão infinita!\n  end,\n})\n\nt.x = 10                   -- saída: atribuindo x\nt.y = 20                   -- saída: atribuindo y\nprint(t.x, t.y)            -- saída: 10  20"
      },
      {
        "lang": "lua",
        "code": "-- rawget: distinguir 'tem o campo' de 'herdou via __index'\nlocal pai = {cor = 'azul', tamanho = 10}\nlocal filho = setmetatable({cor = 'verde'}, {__index = pai})\n\nprint(filho.cor)              -- saída: verde   (próprio)\nprint(filho.tamanho)          -- saída: 10      (herdado)\n\nprint(rawget(filho, 'cor'))     -- saída: verde\nprint(rawget(filho, 'tamanho')) -- saída: nil   (não é dele)\n\n-- Útil para clonar APENAS os campos próprios\nlocal copia = {}\nfor k, v in pairs(filho) do\n  copia[k] = rawget(filho, k)\nend"
      },
      {
        "lang": "lua",
        "code": "-- rawequal e rawlen\nlocal a = setmetatable({n=1}, {\n  __eq = function() return true end,    -- 'igual a tudo'\n  __len = function() return 999 end,\n})\nlocal b = setmetatable({n=2}, getmetatable(a))\n\nprint(a == b)            -- saída: true   (via __eq)\nprint(rawequal(a, b))    -- saída: false  (identidades diferentes)\n\nprint(#a)                -- saída: 999    (via __len)\nprint(rawlen(a))         -- saída: 1      (parte sequencial real)"
      }
    ],
    "points": [
      "rawset(t,k,v) escreve sem chamar __newindex",
      "rawget(t,k) lê sem chamar __index",
      "rawequal(a,b) compara por identidade, ignorando __eq",
      "rawlen(t) ignora __len",
      "Quase obrigatório dentro do próprio metamétodo (evita recursão)",
      "rawget é a forma confiável de testar 'campo realmente existe'",
      "Clones e serializadores devem usar rawget para evitar herança"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Esquecer rawset dentro de __newindex causa stack overflow imediato. Esse erro travaria seu game/servidor; trate como bug crítico."
      },
      {
        "type": "tip",
        "content": "Se sua função de cópia profunda copia 'campos demais' (incluindo herdados), troque t[k] por rawget(t, k) e o problema some."
      }
    ]
  },
  {
    "slug": "proxies-encapsulamento",
    "section": "metatables-oop",
    "title": "Proxies e encapsulamento via metatables",
    "difficulty": "avancado",
    "subtitle": "Tornando atributos privados, validados ou somente-leitura.",
    "intro": "Lua não tem private/public/protected como Java. O que ela tem, e que muita gente subestima, é o suficiente para implementar TODOS esses padrões: tabela proxy + metatable. A ideia é simples — você devolve para o usuário uma tabela vazia que serve só de fachada, e mantém os dados reais escondidos numa variável local capturada pela closure dos metamétodos.\n\nComo a tabela proxy não tem nada dentro, qualquer acesso (__index) ou atribuição (__newindex) cai inevitavelmente nos seus metamétodos. Lá você decide: aceitar, rejeitar, validar, registrar em log, encriptar, sincronizar com banco. O usuário só vê a interface; nunca toca os dados crus.\n\nCom isso você implementa: read-only (rejeita qualquer __newindex), validação de tipo (verifica antes de gravar), observable (chama callback ao mudar), default values, lazy loading, namespaces protegidos. Os principais frameworks Lua (Penlight, classic, middleclass) usam proxies internamente. O metamétodo __metatable é a cereja: definindo-o como string ou outro valor, você impede getmetatable(t) de devolver a metatable real, fechando a porta para alguém substituir seu comportamento.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Tabela read-only com metatable protegida\nlocal function readonly(dados)\n  return setmetatable({}, {\n    __index = dados,\n    __newindex = function(_, k)\n      error('readonly: nao posso atribuir ' .. k, 2)\n    end,\n    __metatable = 'protegida',     -- bloqueia getmetatable real\n    __pairs = function() return pairs(dados) end,  -- 5.2+\n  })\nend\n\nlocal cfg = readonly({host='localhost', porta=8080})\n\nprint(cfg.host)                  -- saída: localhost\nprint(getmetatable(cfg))          -- saída: protegida (string fake)\n\nlocal ok, err = pcall(function() cfg.host = 'x' end)\nprint(err)   -- saída: ...: readonly: nao posso atribuir host"
      },
      {
        "lang": "lua",
        "code": "-- Atributos privados via closure (dados invisíveis)\nlocal function novaConta(saldo_inicial)\n  local saldo = saldo_inicial      -- variável LOCAL, escondida\n\n  return setmetatable({}, {\n    __index = {\n      depositar = function(_, v) saldo = saldo + v end,\n      sacar     = function(_, v)\n        if v > saldo then error('sem fundos') end\n        saldo = saldo - v\n      end,\n      ver       = function() return saldo end,\n    },\n    __newindex = function() error('use os metodos!') end,\n  })\nend\n\nlocal c = novaConta(100)\nc:depositar(50)\nprint(c:ver())                  -- saída: 150\n-- c.saldo = 999999             -- erro: use os metodos!"
      },
      {
        "lang": "lua",
        "code": "-- Observable: dispara callback ao mudar\nlocal function observavel(dados, callback)\n  return setmetatable({}, {\n    __index = dados,\n    __newindex = function(_, k, v)\n      local antigo = dados[k]\n      dados[k] = v\n      callback(k, antigo, v)\n    end,\n  })\nend\n\nlocal estado = observavel({nome='Ana'}, function(k, v_old, v_new)\n  print(string.format('%s: %s -> %s', k, tostring(v_old), tostring(v_new)))\nend)\n\nestado.nome = 'Bia'   -- saída: nome: Ana -> Bia\nestado.idade = 30     -- saída: idade: nil -> 30"
      }
    ],
    "points": [
      "Proxy = tabela vazia + metatable; dados reais ficam em closure",
      "__index lê do dado real; __newindex valida ou bloqueia",
      "__metatable falsifica o que getmetatable retorna",
      "Atributos verdadeiramente privados saem por closures, não por convenção",
      "__pairs (5.2+) e __ipairs (5.2 só) controlam iteração",
      "Padrão usado por bibliotecas de OOP, validação e ORMs",
      "Custo extra: cada acesso passa por metamétodo (cuidado em hot loops)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Privacidade real em Lua se obtém com closures, não com prefixos _. Use proxy quando precisar garantir invariantes ou ocultar implementação."
      },
      {
        "type": "warning",
        "content": "Proxies têm overhead. Em código quente (loops de física, parsers grandes), prefira convenção a proxy."
      }
    ]
  },
  {
    "slug": "modulos-require",
    "section": "modulos",
    "title": "Módulos com require",
    "difficulty": "iniciante",
    "subtitle": "Reusando código entre arquivos.",
    "intro": "Quando seu programa cresce, deixar tudo num único arquivo vira pesadelo. Módulos resolvem isso: você quebra o código em arquivos pequenos, cada um exportando funções e dados ÚTEIS, e usa require para reunir as peças quando precisar.\n\nEm Lua, um módulo é simplesmente um arquivo .lua que devolve um valor (geralmente uma tabela) com a sua API pública. Não tem mágica, palavra-chave especial nem decorator: a última instrução do arquivo é um return, e o que você retorna é o que require devolve. Isso é incrivelmente simples comparado com import/export do Python ou JS.\n\nDuas características importantes do require. Primeira: ele CACHEIA. Se você der require 'mate' duas vezes, o arquivo é executado uma só, e nas próximas chamadas Lua devolve a mesma tabela — útil para módulos com estado e essencial para evitar carregamento repetido. Segunda: ele resolve o NOME do módulo (sem .lua, sem barras) consultando padrões em package.path.\n\nO erro mais comum de iniciantes é esquecer o return no final do módulo. Lua não reclama na hora — require simplesmente devolve true (sucesso da execução) e seu código de chamada explode quando tenta usar a tabela inexistente.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- arquivo: mate.lua\nlocal M = {}\n\nfunction M.somar(a, b)\n  return a + b\nend\n\nfunction M.dobrar(x)\n  return x * 2\nend\n\nM.PI = 3.14159\n\nreturn M           -- !!! sem isso, require devolve true"
      },
      {
        "lang": "lua",
        "code": "-- arquivo: app.lua (mesma pasta de mate.lua)\nlocal mate = require 'mate'      -- sem .lua, sem aspas duplas obrigatórias\n\nprint(mate.somar(2, 3))           -- saída: 5\nprint(mate.dobrar(7))             -- saída: 14\nprint(mate.PI)                    -- saída: 3.14159\n\n-- Cache em ação:\nlocal mate2 = require 'mate'\nprint(mate == mate2)              -- saída: true (mesma tabela)"
      },
      {
        "lang": "lua",
        "code": "-- O que aconteceria sem o return?\n-- arquivo: ruim.lua  (NOTE: SEM return no final)\n-- local R = {}\n-- function R.oi() return 'oi' end\n\n-- arquivo: app.lua\nlocal r = require 'ruim'\nprint(r)            -- saída: true\n-- print(r.oi())     -- erro: attempt to index a boolean value\n\n-- Para limpar o cache (debug/dev hot reload)\npackage.loaded['mate'] = nil\nlocal mate = require 'mate'   -- recarrega do zero"
      }
    ],
    "points": [
      "Módulo é um arquivo .lua que retorna uma tabela",
      "require usa o NOME (sem .lua, sem caminho)",
      "require cacheia em package.loaded — segunda chamada não reexecuta",
      "Esqueceu o return? require devolve true (e tudo quebra depois)",
      "package.loaded['nome'] = nil força recarregar",
      "O nome em require pode usar aspas simples sem parênteses",
      "Local M = {} ... return M é o padrão consagrado"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Não escreva require 'mate.lua' nem require './mate'. Use só o nome lógico: require 'mate'."
      },
      {
        "type": "tip",
        "content": "Sempre comece o módulo com local M = {} e termine com return M. Isso é tão padrão que muita gente nem comenta."
      }
    ]
  },
  {
    "slug": "modulos-pacotes",
    "section": "modulos",
    "title": "Submódulos com pontos",
    "difficulty": "intermediario",
    "subtitle": "Organizando código em pastas.",
    "intro": "Conforme um projeto cresce, jogar todos os módulos no mesmo diretório vira uma sopa. A solução é organizar em PASTAS, e Lua tem uma convenção elegante para isso: o ponto no nome do módulo vira separador de diretório. require 'util.string' vai procurar util/string.lua. require 'app.db.usuarios' vai procurar app/db/usuarios.lua.\n\nIsso não é mágica do require — é literalmente uma substituição feita ao casar o nome contra os padrões de package.path. Cada ? do padrão vira o nome com pontos trocados por barras (ou contrabarras no Windows). É portátil, simples e bom o suficiente.\n\nUma diferença importante para quem vem de Python: Lua NÃO precisa de __init__.py em cada pasta. Pastas são apenas pastas, sem qualquer arquivo especial obrigatório. Mas existe uma convenção interessante: se você tem util/string.lua e quer poder fazer require 'util' (sem submódulo), Lua tenta também util/init.lua. Se existir, é carregado como o \"módulo principal\" da pasta.\n\nIsso permite duas estruturas válidas: cada arquivo é um módulo independente, OU você usa init.lua como ponto de entrada que reúne os submódulos numa API só.",
    "codes": [
      {
        "lang": "text",
        "code": "meu-projeto/\n├── main.lua\n└── util/\n    ├── string.lua    -- require 'util.string'\n    ├── tabela.lua    -- require 'util.tabela'\n    └── math/\n        ├── vec.lua   -- require 'util.math.vec'\n        └── init.lua  -- require 'util.math'  (carrega este!)"
      },
      {
        "lang": "lua",
        "code": "-- arquivo: main.lua\nlocal vec = require 'util.math.vec'\nlocal str = require 'util.string'\n\nprint(vec.criar(3, 4))\nprint(str.maiusculas_primeira('lua'))\n\n-- arquivo: util/string.lua\nlocal M = {}\nfunction M.maiusculas_primeira(s)\n  return s:sub(1,1):upper() .. s:sub(2)\nend\nreturn M\n\n-- arquivo: util/math/vec.lua\nlocal M = {}\nfunction M.criar(x, y) return {x=x, y=y} end\nreturn M"
      },
      {
        "lang": "lua",
        "code": "-- arquivo: util/math/init.lua\n-- Atua como 'API guarda-chuva' da pasta util/math\nlocal M = {}\nM.vec = require 'util.math.vec'\nM.matriz = require 'util.math.matriz'\nfunction M.versao() return '1.0' end\nreturn M\n\n-- agora:\nlocal mate = require 'util.math'\nlocal v = mate.vec.criar(1, 2)\nprint(mate.versao())   -- saída: 1.0"
      }
    ],
    "points": [
      "Ponto no nome vira barra de pasta: foo.bar → foo/bar.lua",
      "Não existe __init__.py obrigatório (pastas são só pastas)",
      "init.lua é convenção: require 'foo' tenta foo.lua e foo/init.lua",
      "Cada arquivo é um módulo INDEPENDENTE com seu próprio retorno",
      "Pastas profundas: foo.bar.baz → foo/bar/baz.lua",
      "init.lua é ótimo para reunir submódulos sob uma API única",
      "Funciona igual em Linux, macOS e Windows"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Em LÖVE (game engine baseado em Lua), require automaticamente respeita a estrutura de pastas do seu jogo, sem configuração extra."
      },
      {
        "type": "tip",
        "content": "Para projetos grandes, agrupe módulos relacionados numa pasta com init.lua. Diminui o número de requires no código que consome."
      }
    ]
  },
  {
    "slug": "package-path",
    "section": "modulos",
    "title": "package.path e package.cpath",
    "difficulty": "intermediario",
    "subtitle": "Onde require procura módulos.",
    "intro": "Quando você escreve require 'foo', como o Lua sabe ONDE procurar foo.lua? A resposta está em package.path, uma string que lista padrões de caminho separados por ponto-e-vírgula. Cada padrão tem um ? que o Lua substitui pelo nome do módulo (com pontos virando barras).\n\nO valor padrão é definido na compilação e tipicamente inclui ./?.lua, ./?/init.lua e diretórios de sistema como /usr/local/share/lua/5.4/?.lua. Vale imprimir package.path quando require falha com module not found — quase sempre é falta de caminho.\n\nExiste o irmão package.cpath para módulos NATIVOS escritos em C, com extensão .so (Linux), .dll (Windows) ou .dylib (macOS). require tenta package.path primeiro, depois cpath. LuaRocks atualiza cpath por trás dos panos.\n\nVocê pode modificar package.path em runtime para adicionar pastas do projeto. Faça isso no INÍCIO do script, antes dos requires. As variáveis de ambiente LUA_PATH e LUA_CPATH também valem (use ;; para inserir o padrão original).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Inspecionar onde Lua procura\nprint(package.path)\n-- exemplo de saída:\n-- ./?.lua;./?/init.lua;/usr/local/share/lua/5.4/?.lua;...\n\nprint(package.cpath)\n-- exemplo:\n-- ./?.so;/usr/local/lib/lua/5.4/?.so;..."
      },
      {
        "lang": "lua",
        "code": "-- Adicionar pastas do projeto ao caminho\n-- Faça isso ANTES dos require dos seus módulos\n\nlocal raiz = './src'\npackage.path = raiz..'/?.lua;'\n             ..raiz..'/?/init.lua;'\n             ..package.path\n\n-- Agora 'require app.banco' procura em src/app/banco.lua também\nlocal banco = require 'app.banco'"
      },
      {
        "lang": "bash",
        "code": "# Configurando via variáveis de ambiente (Linux/macOS)\nexport LUA_PATH=\"./lib/?.lua;./lib/?/init.lua;;\"   # ;; insere o padrão\nexport LUA_CPATH=\"./bin/?.so;;\"\n\n# Inspecionar do shell\nlua -e 'print(package.path)'\n\n# Útil para projetos sem instalar nada globalmente"
      }
    ],
    "points": [
      "package.path = padrões para módulos Lua puros",
      "package.cpath = padrões para módulos nativos (.so/.dll/.dylib)",
      "? é substituído pelo nome do módulo (pontos viram barras)",
      "Padrões são separados por ; (ponto-e-vírgula)",
      "LUA_PATH e LUA_CPATH em env aplicam globalmente",
      ";; nas variáveis de ambiente insere o padrão padrão",
      "Modifique package.path antes do primeiro require dependente"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Erros 'module not found' vêm quase sempre de package.path errado. Imprima-o como primeiro passo de depuração."
      },
      {
        "type": "tip",
        "content": "Em projetos profissionais, prefira LuaRocks (que cuida do path) ou um wrapper de inicialização (boot.lua) que ajusta o path uma vez."
      }
    ]
  },
  {
    "slug": "padrao-modulo-moderno",
    "section": "modulos",
    "title": "Padrão moderno de módulo",
    "difficulty": "intermediario",
    "subtitle": "Como escrever módulos limpos hoje em dia.",
    "intro": "Em Lua 5.0/5.1 existia a função module() que criava um ambiente novo automático. Era cômoda mas poluía _G, mexia com fenv e atrapalhava análise estática. Foi depreciada em 5.2 e saiu de circulação em 5.4.\n\nO padrão moderno é explícito e não depende de nada além de tabelas e returns. Você cria local M = {}, anexa funções a ela, e termina com return M. Funções privadas ficam como local function — visíveis dentro do arquivo via closure, invisíveis lá fora.\n\nEsse padrão é claro (você vê quem é público), trabalha bem com luacheck, sobrevive a recargas (package.loaded[nome] = nil) e funciona idêntico em 5.1, 5.2, 5.3, 5.4 e LuaJIT. Sem sintaxe especial, sem ambiente mágico, sem acoplamento com nome de arquivo.\n\nDuas regras de ouro: nada de globais (todo nome começa com local) e nada de side effects pesados na carga (não abrir arquivo, não conectar ao banco). O módulo deve ser barato de carregar; o trabalho fica nas funções.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- meu_modulo.lua — padrão moderno e correto\nlocal M = {}\n\n-- Função privada: visível só dentro deste arquivo\nlocal function validar(s)\n  if type(s) ~= 'string' then\n    error('precisa ser string', 2)\n  end\nend\n\nfunction M.gritar(s)\n  validar(s)\n  return s:upper() .. '!!!'\nend\n\nfunction M.sussurrar(s)\n  validar(s)\n  return s:lower() .. '...'\nend\n\nM.VERSAO = '1.0.0'\n\nreturn M"
      },
      {
        "lang": "lua",
        "code": "-- Estilo alternativo: declarar API no topo (autodocumentado)\nlocal M = {\n  VERSAO = '1.0.0',\n  gritar = nil,\n  sussurrar = nil,\n}\n\nfunction M.gritar(s)    return s:upper() .. '!!!' end\nfunction M.sussurrar(s) return s:lower() .. '...'  end\n\nreturn M\n\n-- Vantagem: lendo as 5 primeiras linhas você sabe o que o módulo expõe."
      },
      {
        "lang": "lua",
        "code": "-- ANTIPADRÃO antigo (não use!)\n-- Em Lua 5.1, era comum:\n-- module('meu_modulo', package.seeall)\n-- function gritar(s) return s:upper() end   -- vira global!\n\n-- Problemas: polui _G com 'meu_modulo', mexe com env,\n-- não funciona em 5.2+ sem polyfill, complica debug.\n\n-- MIGRAÇÃO: troque por\nlocal M = {}\nfunction M.gritar(s) return s:upper() end\nreturn M"
      }
    ],
    "points": [
      "Sempre faça local M = {} no topo e return M no fim",
      "Use local function para helpers que NÃO devem vazar",
      "Nada de globais: tudo começa com local",
      "Não use module() — depreciada desde 5.2",
      "Side effects na carga (I/O, conexões) são má ideia",
      "O padrão funciona idêntico em 5.1, 5.2, 5.3, 5.4 e LuaJIT",
      "luacheck pega globais acidentais como warning"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Configure luacheck no editor. Ele pega 90% dos vazamentos de globais (esquecer um local, typo num nome) sem você precisar pensar."
      },
      {
        "type": "info",
        "content": "Bibliotecas legadas (Lua 5.1 antigas) podem usar module(). Para usá-las em 5.2+, instale o pacote 'compat-5.3' ou patche-as."
      }
    ]
  },
  {
    "slug": "modulos-com-estado",
    "section": "modulos",
    "title": "Módulos com estado",
    "difficulty": "intermediario",
    "subtitle": "Como o cache do require habilita singletons.",
    "intro": "Como require cacheia o resultado em package.loaded, todos que pedirem o mesmo módulo recebem o MESMO objeto. Isso transforma qualquer módulo num SINGLETON natural: configurações, contadores, conexões, listas de eventos — tudo compartilhado pelo programa inteiro, sem esforço.\n\nÉ ótimo para coisas que devem existir uma vez só: logger central, pool de conexões, event bus, configurações. Você pede require em qualquer ponto do código e age sobre o mesmo objeto, sem precisar passar referências entre funções e classes.\n\nO lado ruim é que isso vira ARMADILHA quando você esquece. Se um módulo mantém uma lista interna que cresce com o uso, todos os trechos do programa contribuem para ela. Bugs de \"meu teste passa sozinho mas falha na suíte inteira\" quase sempre vêm de estado de módulo vazado entre testes.\n\nA defesa: deixe o estado explícito (campo nomeado), exponha funções para ler e zerar, e em testes use package.loaded[nome] = nil + require de novo. Para múltiplas instâncias independentes, exporte uma FÁBRICA .new() ao invés do estado direto.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- logger.lua — singleton via cache do require\nlocal M = {\n  nivel = 'info',\n  historico = {},\n}\n\nfunction M.set_nivel(n) M.nivel = n end\n\nfunction M.log(nivel, msg)\n  M.historico[#M.historico + 1] = {nivel=nivel, msg=msg, t=os.time()}\n  if nivel == 'erro' or M.nivel == 'debug' then\n    print(string.format('[%s] %s', nivel, msg))\n  end\nend\n\nfunction M.limpar() M.historico = {} end\n\nreturn M"
      },
      {
        "lang": "lua",
        "code": "-- Mesma instância em qualquer lugar do código\n-- arquivo: a.lua\nlocal log = require 'logger'\nlog.log('info', 'iniciei a')\n\n-- arquivo: b.lua\nlocal log = require 'logger'\nprint(#log.historico)         -- saída: 1  (a tabela é a MESMA)\nlog.log('info', 'iniciei b')\n\n-- arquivo: main.lua\nlocal log = require 'logger'\nrequire 'a'\nrequire 'b'\nprint(#log.historico)         -- saída: 2"
      },
      {
        "lang": "lua",
        "code": "-- Quando você NÃO quer singleton: exporte fábrica\n-- contador.lua\nlocal Contador = {}\nContador.__index = Contador\n\nfunction Contador:tick() self.n = self.n + 1; return self.n end\n\nlocal M = {}\nfunction M.new(inicio)\n  return setmetatable({n = inicio or 0}, Contador)\nend\nreturn M\n\n-- uso:\nlocal C = require 'contador'\nlocal a = C.new()\nlocal b = C.new(100)\nprint(a:tick(), b:tick())   -- saída: 1  101  (independentes)"
      }
    ],
    "points": [
      "require devolve sempre a MESMA tabela (cache em package.loaded)",
      "Estado de módulo persiste entre todos os requires",
      "Padrão singleton automático: bom para logger, config, pools",
      "Em testes, use package.loaded[m] = nil para reiniciar",
      "Para múltiplas instâncias, exporte fábrica .new()",
      "Side effects ao carregar = bugs imprevisíveis",
      "Documente claramente que o módulo tem estado compartilhado"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Estado de módulo é GLOBAL na prática. Se duas partes do programa modificam o mesmo campo, você tem corrida lógica (até em código single-thread)."
      },
      {
        "type": "tip",
        "content": "Em suítes de teste com busted, faça package.loaded['meu_modulo'] = nil em before_each para garantir isolamento."
      }
    ]
  },
  {
    "slug": "dofile-loadfile",
    "section": "modulos",
    "title": "dofile, loadfile e load",
    "difficulty": "intermediario",
    "subtitle": "Outras formas de executar código Lua.",
    "intro": "require é o jeito idiomático de carregar módulos, mas Lua tem três funções de mais baixo nível: dofile, loadfile e load. Cada uma desbloqueia padrões úteis — configs em Lua puro, sistemas de plugin, REPL customizada, geração dinâmica de código.\n\ndofile(caminho) compila E executa um arquivo, retornando o valor final. NÃO cacheia: chame duas vezes, executa duas vezes. Bom para configs lidas a cada deploy, ou hot-reload em jogos.\n\nloadfile(caminho) compila MAS NÃO executa. Devolve uma função que roda o conteúdo quando chamada. Útil para: (a) capturar erros de sintaxe sem executar; (b) executar várias vezes; (c) injetar ambiente customizado (sandbox).\n\nload(string) é igual a loadfile, mas a partir de STRING. Permite gerar código em runtime. Em 5.2+, o quarto argumento é o _ENV — base do sandboxing seguro.\n\nA pegadinha crítica: load executa qualquer Lua que receber. Se a string vem de input do usuário SEM sandbox, você acabou de abrir shell remota. Trate load como o eval do JS — só com extremo cuidado.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- dofile: executa e devolve o resultado\n-- arquivo: config.lua\n-- return {host='localhost', porta=8080, debug=true}\n\nlocal cfg = dofile('config.lua')\nprint(cfg.host)        -- saída: localhost\nprint(cfg.porta)        -- saída: 8080\n\n-- Padrão muito comum: configs em Lua puro (mais flexível que JSON)\n-- Se config.lua mudar e você dofile de novo, recarrega"
      },
      {
        "lang": "lua",
        "code": "-- loadfile: compila SEM executar (controle fino de erros)\nlocal chunk, err = loadfile('script.lua')\nif not chunk then\n  print('erro de sintaxe: ' .. err)\nelse\n  local ok, resultado = pcall(chunk)\n  if not ok then\n    print('erro em runtime: ' .. resultado)\n  end\nend\n\n-- Útil para servidores que carregam scripts de usuário"
      },
      {
        "lang": "lua",
        "code": "-- load: a partir de string\nlocal f = load('return 1 + 2')\nprint(f())          -- saída: 3\n\n-- Geração dinâmica\nlocal expr = '3 * x + 2'\nlocal calc = load('local x = ... return ' .. expr)\nprint(calc(5))      -- saída: 17\nprint(calc(10))     -- saída: 32\n\n-- Sintaxe inválida vira erro de retorno (não exceção)\nlocal bad, err = load('return 1 +')\nprint(bad, err)     -- saída: nil  ...:1: unexpected symbol near <eof>"
      }
    ],
    "points": [
      "dofile = compila + executa + retorna; SEM cache",
      "loadfile = só compila; devolve função executável",
      "load = igual a loadfile mas a partir de string",
      "load aceita _ENV custom (4º arg) — base do sandbox",
      "Erros de sintaxe NÃO são exceções: devolvem nil + mensagem",
      "Use pcall ao executar o chunk para capturar erros de runtime",
      "Configs em Lua puro são lidas com dofile (formato + flexível que JSON)"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "load com string vinda de usuário é arbitrary code execution. SEMPRE valide a origem ou use sandbox restrito (próximo capítulo)."
      },
      {
        "type": "tip",
        "content": "Para configs, prefira dofile a JSON: você ganha comentários, expressões e funções de graça. Só não rode config de fonte não confiável."
      }
    ]
  },
  {
    "slug": "sandbox-loader",
    "section": "modulos",
    "title": "Sandbox: limitando código carregado",
    "difficulty": "avancado",
    "subtitle": "Executando código não confiável com segurança.",
    "intro": "Quando você carrega código de fontes que NÃO controla — plugins, mods, configs abertas, regras pela rede — executar com acesso total à máquina é desastre garantido. Lua tem uma arma elegante: o ambiente _ENV, que controla a quais globais o código vê.\n\nToda variável \"global\" em Lua é um campo de uma tabela chamada _ENV. Quando o código executa print('oi'), ele faz _ENV.print('oi'). Se _ENV estiver vazio, print não existe — o código fica numa caixa de areia. Populando _ENV só com o seguro (math, string, ipairs), o código pode calcular, mas nada de io, os, debug, package.\n\nload aceita o ambiente como 4º argumento (o 3º é o modo, 't' para texto). Em load(codigo, nome, 't', sandbox), o chunk roda com sandbox como _ENV. Qualquer chave fora dele é nil; nem _G está acessível.\n\nMontar sandbox seguro EXIGE whitelist (nunca blacklist). debug, os.execute, io.open, package.loadlib precisam ficar de fora. Para multi-tenant sério, complemente com limites de CPU/memória via hook de debug ou Lua incorporado em sandbox C.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Sandbox mínimo: só print e math\nlocal sandbox = {\n  print = print,\n  math  = math,\n}\n\nlocal codigo = [[\n  local r = math.sqrt(x)\n  print('raiz:', r)\n  return r\n]]\n\nsandbox.x = 16\nlocal f, err = load(codigo, 'usuario', 't', sandbox)\nprint(f())     -- saída: raiz:  4.0   4.0"
      },
      {
        "lang": "lua",
        "code": "-- Tentativa maliciosa é bloqueada naturalmente\nlocal sandbox = {math = math, print = print}\n\nlocal mau = [[\n  os.execute('rm -rf /')          -- os é nil!\n  io.open('/etc/passwd'):read()    -- io é nil!\n]]\n\nlocal f, err = load(mau, 'mau', 't', sandbox)\nlocal ok, e = pcall(f)\nprint(ok, e)\n-- saída: false  ...:2: attempt to index a nil value (global 'os')"
      },
      {
        "lang": "lua",
        "code": "-- Sandbox típico para configs de usuário\nlocal function safe_env()\n  return {\n    -- só funções puras, sem I/O\n    ipairs=ipairs, pairs=pairs, next=next,\n    select=select, tostring=tostring, tonumber=tonumber,\n    type=type, error=error, assert=assert,\n    string={\n      upper=string.upper, lower=string.lower,\n      format=string.format, len=string.len,\n      -- intencionalmente: sem string.dump (que vaza bytecode)\n    },\n    math = math,\n    table = {insert=table.insert, remove=table.remove,\n             concat=table.concat, sort=table.sort},\n  }\nend\n\nlocal cfg_str = 'return { porta = 8080, hosts = {\"a\",\"b\"} }'\nlocal f = load(cfg_str, 'cfg', 't', safe_env())\nlocal cfg = f()\nprint(cfg.porta, cfg.hosts[1])  -- saída: 8080  a"
      }
    ],
    "points": [
      "load(codigo, nome, modo, env) executa com env customizado",
      "Modo 't' = só texto; 'b' = bytecode; 'bt' = ambos",
      "Sandbox = whitelist do que pode; nunca blacklist",
      "Sem io, os, debug, package, load, loadfile, dofile",
      "Mesmo string.dump deve ser excluído (vaza bytecode/internals)",
      "Fora do _ENV, globais retornam nil (não dão exceção)",
      "Para limites de CPU/memória, precisa de hook de debug ou binding C"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "NUNCA execute código não confiável sem sandbox. Lua tem APIs (os.execute, io.open, package.loadlib) que dão acesso a shell, arquivos e bibliotecas nativas."
      },
      {
        "type": "warning",
        "content": "Sandbox em Lua puro NÃO limita CPU nem memória. Um while true do end trava o processo. Para multi-tenant, complemente com hooks de debug ou Lua incorporado em sandbox C."
      }
    ]
  },
  {
    "slug": "luarocks-uso",
    "section": "modulos",
    "title": "Usando LuaRocks: instalar e usar",
    "difficulty": "intermediario",
    "subtitle": "O gerenciador de pacotes do ecossistema Lua.",
    "intro": "LuaRocks está para Lua como pip para Python ou npm para Node. É o gerenciador de pacotes oficial: você procura no luarocks.org, instala um \"rock\" (pacote), e ele fica disponível para require sem você se preocupar com paths. A maior parte das bibliotecas comunitárias (cjson, lpeg, luasocket, lfs, busted, penlight) vive lá.\n\nA instalação pode ser GLOBAL (afeta todo o sistema, exige sudo, vai para /usr/local) ou LOCAL com a flag --local (vai para ~/.luarocks na sua HOME, sem precisar de root). Local é a opção sensata para desenvolvimento: cada usuário com seus pacotes, sem conflito, sem permissão administrativa.\n\nUma sutileza importante: instalar local NÃO ajusta automaticamente o package.path/cpath para o seu Lua enxergar os pacotes. Você precisa rodar luarocks path (ou eval $(luarocks path) no bash) para gerar os comandos export que adicionam os caminhos certos às variáveis de ambiente LUA_PATH e LUA_CPATH.\n\nPara projetos sérios, use luarocks --tree pasta install para instalar dentro do projeto (estilo node_modules), e adicione um wrapper script que carrega esse tree antes de rodar. Assim seu projeto fica reproduzível e independente da máquina.",
    "codes": [
      {
        "lang": "bash",
        "code": "# Instalar local (recomendado para dev)\nluarocks --local install lua-cjson\n\n# Configurar PATH/LUA_PATH/LUA_CPATH para enxergar os pacotes locais\neval $(luarocks path)\n\n# Verificar onde foi instalado\nluarocks --local list\n\n# Remover\nluarocks --local remove lua-cjson"
      },
      {
        "lang": "bash",
        "code": "# Instalar versão específica\nluarocks --local install penlight 1.13.1\n\n# Buscar pacote\nluarocks search json\n\n# Mostrar info de um pacote\nluarocks show lua-cjson\n\n# Atualizar\nluarocks --local install lua-cjson  # mesmo comando atualiza"
      },
      {
        "lang": "lua",
        "code": "-- Depois de instalar e ajustar paths, é require normal:\nlocal cjson = require 'cjson'\n\nlocal s = cjson.encode({nome='Ana', idades={30, 31, 32}})\nprint(s)                 -- saída: {\"nome\":\"Ana\",\"idades\":[30,31,32]}\n\nlocal t = cjson.decode('{\"x\":1,\"y\":2}')\nprint(t.x, t.y)          -- saída: 1  2"
      }
    ],
    "points": [
      "luarocks install [pacote] — instalação básica",
      "--local instala em ~/.luarocks (sem sudo)",
      "eval $(luarocks path) ajusta LUA_PATH e LUA_CPATH",
      "luarocks list mostra o que está instalado",
      "luarocks search nome busca no repositório",
      "Pacotes com componentes em C exigem compilador (gcc, clang, MSVC)",
      "--tree pasta para instalar dentro do projeto"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Coloque eval $(luarocks path) no seu .bashrc/.zshrc para não esquecer toda hora. Ou crie um wrapper script para o projeto que faça isso."
      },
      {
        "type": "info",
        "content": "Pacotes que usam C (como lua-cjson, lpeg) precisam casar a versão do header do Lua usado para compilar com a versão em runtime. Erros aqui costumam ser obscuros."
      }
    ]
  },
  {
    "slug": "criando-rock",
    "section": "modulos",
    "title": "Criando seu próprio rockspec",
    "difficulty": "avancado",
    "subtitle": "Distribuindo sua biblioteca via LuaRocks.",
    "intro": "Quando seu código vira algo aproveitável por outros, o jeito profissional de distribuir é via LuaRocks. Para isso você cria um rockspec: arquivo .rockspec que descreve nome, versão, fonte (git ou tarball), dependências e lista de módulos a instalar.\n\nO arquivo é Lua puro: só atribuições no nível superior. Campos obrigatórios: package, version, source, build. Opcionais: description, dependencies, supported_platforms. A versão segue X.Y.Z-N, onde N é a revisão do rockspec — incremente quando corrigir só o rockspec sem mexer no código.\n\nProjetos puros Lua usam build = { type = 'builtin', modules = {...} } — você só mapeia arquivo→nome do módulo. Para C, há 'make', 'cmake' e 'command'. 'builtin' também compila C simples se você listar arquivos .c.\n\nPublicar é fácil: luarocks upload nome.rockspec após criar conta. Antes, valide com luarocks make caminho.rockspec, que instala como se viesse do servidor. Bug comum: esquecer de incrementar a versão depois de publicar — o servidor não aceita sobrescrever.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- meu-pacote-1.0-1.rockspec\npackage = 'meu-pacote'\nversion = '1.0-1'\n\nsource = {\n  url = 'git+https://github.com/voce/meu-pacote.git',\n  tag = 'v1.0',\n}\n\ndescription = {\n  summary = 'Faz coisas legais com strings',\n  detailed = [[\n    Biblioteca de utilitários para manipulação de texto,\n    incluindo normalização e fuzzy matching.\n  ]],\n  homepage = 'https://github.com/voce/meu-pacote',\n  license = 'MIT',\n  maintainer = 'Voce <voce@email.com>',\n}\n\ndependencies = {\n  'lua >= 5.1, < 5.5',\n  'luautf8 >= 0.1',\n}\n\nbuild = {\n  type = 'builtin',\n  modules = {\n    ['meu_pacote']      = 'src/meu_pacote/init.lua',\n    ['meu_pacote.util'] = 'src/meu_pacote/util.lua',\n  },\n}"
      },
      {
        "lang": "bash",
        "code": "# Validar e instalar localmente para testar\nluarocks make meu-pacote-1.0-1.rockspec\n\n# Empacotar para distribuição\nluarocks pack meu-pacote-1.0-1.rockspec\n\n# Publicar (precisa conta + upload-key configurada)\nluarocks upload meu-pacote-1.0-1.rockspec --api-key=SUA_CHAVE\n\n# Versão de desenvolvimento (rastreia HEAD do git)\n# Use sufixo 'scm' em vez de número fixo\n# meu-pacote-scm-1.rockspec com source.tag removido"
      },
      {
        "lang": "lua",
        "code": "-- Rockspec com módulo em C\npackage = 'meu-c'\nversion = '1.0-1'\n\nsource = { url = 'git+https://github.com/voce/meu-c.git', tag = 'v1.0' }\n\ndependencies = { 'lua >= 5.3' }\n\nbuild = {\n  type = 'builtin',\n  modules = {\n    ['meu_c'] = {\n      sources  = { 'src/meu_c.c', 'src/helper.c' },\n      incdirs  = { 'src/' },\n      libraries = { 'm' },     -- linka libm\n    },\n  },\n}"
      }
    ],
    "points": [
      "Rockspec é Lua puro: só atribuições no nível superior",
      "Versão = X.Y.Z-N (N é revisão do rockspec)",
      "build.type = 'builtin' cobre 90% dos casos",
      "Dependências aceitam ranges: 'lua >= 5.1, < 5.5'",
      "luarocks make instala localmente para testar",
      "luarocks upload publica no luarocks.org",
      "Sufixo 'scm' (ex: pacote-scm-1) rastreia HEAD do git"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Não dá para sobrescrever uma versão já publicada. Se errou, suba como X.Y.Z-2 (incrementa a revisão)."
      },
      {
        "type": "tip",
        "content": "Comece com um rockspec 'scm' enquanto desenvolve, e só publique versão fixa quando tiver release estável (tag no git)."
      }
    ]
  },
  {
    "slug": "organizacao-grandes",
    "section": "modulos",
    "title": "Organizando projetos maiores",
    "difficulty": "intermediario",
    "subtitle": "Estrutura de pastas para crescer sem dor.",
    "intro": "Projetos pequenos cabem num arquivo. A partir de algumas centenas de linhas, organização vira a diferença entre código que evolui e código que vira pesadelo. A comunidade Lua convergiu numa estrutura simples, derivada do que LuaRocks espera.\n\nPadrão básico: src/ para código de produção (cada módulo num arquivo, ou pasta com init.lua para sub-APIs); spec/ para testes (geralmente com busted, a suíte mais usada); docs/ para documentação; examples/ para demos; README.md, LICENSE e rockspec na raiz.\n\nUsar src/ em vez de jogar tudo na raiz previne imports acidentais. Sem src/, alguém pode require um arquivo da raiz por engano (até o README). Com src/, só o que está lá vira módulo.\n\nO init.lua dentro de src/meu_projeto/ é o ponto de entrada: carregado quando alguém faz require 'meu_projeto'. Costuma apenas reunir submódulos e expor uma API coesa.\n\nPara automação, use Makefile/justfile com targets test, lint, install. Em times, adicione CI (GitHub Actions) rodando luacheck + busted em cada PR. Nada mágico — só convenções claras e ferramentas pequenas.",
    "codes": [
      {
        "lang": "text",
        "code": "meu-projeto/\n├── meu_projeto-scm-1.rockspec\n├── README.md\n├── LICENSE\n├── .luacheckrc                 -- config do linter\n├── src/\n│   └── meu_projeto/\n│       ├── init.lua            -- require 'meu_projeto'\n│       ├── core.lua            -- require 'meu_projeto.core'\n│       ├── parser.lua\n│       └── util/\n│           ├── string.lua\n│           └── tabela.lua\n├── spec/\n│   ├── core_spec.lua           -- testes com busted\n│   └── parser_spec.lua\n├── docs/\n│   └── api.md\n└── examples/\n    └── basico.lua"
      },
      {
        "lang": "lua",
        "code": "-- src/meu_projeto/init.lua — ponto de entrada\nlocal M = {}\n\nM.core   = require 'meu_projeto.core'\nM.parser = require 'meu_projeto.parser'\nM.util   = require 'meu_projeto.util'\n\nM.VERSAO = '0.1.0'\n\n-- API conveniente que combina submódulos\nfunction M.executar(arquivo)\n  local txt = M.util.tabela.ler_arquivo(arquivo)\n  local ast = M.parser.parsear(txt)\n  return M.core.avaliar(ast)\nend\n\nreturn M"
      },
      {
        "lang": "lua",
        "code": "-- spec/core_spec.lua — teste com busted\nlocal core = require 'meu_projeto.core'\n\ndescribe('core.somar', function()\n  it('soma dois números', function()\n    assert.equal(5, core.somar(2, 3))\n  end)\n\n  it('aceita zero', function()\n    assert.equal(7, core.somar(7, 0))\n  end)\n\n  it('rejeita não-números', function()\n    assert.has_error(function() core.somar('a', 1) end)\n  end)\nend)\n\n-- rodar:  busted spec/"
      }
    ],
    "points": [
      "src/ guarda código de produção (evita import acidental)",
      "spec/ guarda testes (convenção do busted)",
      "init.lua é o 'index.js' do Lua: carregado por require 'pasta'",
      "Convenção de nome: arquivo_spec.lua para testes",
      "Adicione .luacheckrc na raiz para configurar o linter",
      "Use Makefile/justfile com targets test, lint, install",
      "CI (GitHub Actions) rodando luacheck + busted é padrão profissional"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use busted como framework de teste: assertions claras, hooks (before_each), tags, output bonito. É o de facto no ecossistema Lua."
      },
      {
        "type": "info",
        "content": "Para projetos LÖVE (jogos), a estrutura é mais flexível porque main.lua é obrigatório na raiz. Mas você ainda pode ter src/ e spec/ ao lado."
      }
    ]
  },
  {
    "slug": "coroutines-intro",
    "section": "coroutines-erros",
    "title": "Corrotinas: introdução",
    "difficulty": "avancado",
    "subtitle": "Multitarefa cooperativa em uma única thread.",
    "intro": "Corrotinas são uma das características mais elegantes de Lua. Elas permitem suspender e retomar a execução de uma função em pontos específicos, criando algo parecido com threads — mas sem nenhuma das complicações de concorrência real.\n\nA analogia que ajuda: imagine duas pessoas se revezando para ler em voz alta um livro. Quando uma pausa, marca a página e passa para a outra. A outra lê um pouco e devolve. Ninguém é interrompido à força — cada uma escolhe quando ceder a vez. Isso é **cooperativo**, oposto de **pré-emptivo** (onde o sistema operacional decide).\n\nEm Lua você cria uma corrotina com `coroutine.create`, dispara/continua com `coroutine.resume`, e pausa de dentro com `coroutine.yield`. Os valores passados para `yield` saem em `resume`, e os valores passados para o próximo `resume` chegam como retorno do `yield`. É uma conversa de mão dupla.\n\nA pegadinha: corrotinas **não rodam em paralelo**. Você não ganha CPUs extras, ganha apenas uma forma de organizar o código. Mas é justamente isso que torna iteradores, máquinas de estado e I/O assíncrono triviais de escrever.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Ciclo de vida de uma corrotina\nlocal co = coroutine.create(function(a, b)\n  print('1:', a, b)              -- 10  20\n  local c = coroutine.yield(a+b) -- pausa devolvendo 30\n  print('2:', c)                 -- 100 (veio do 2o resume)\n  return 'fim'\nend)\n\nprint(coroutine.resume(co, 10, 20))  -- true   30\nprint(coroutine.resume(co, 100))     -- true   fim\nprint(coroutine.status(co))          -- dead"
      },
      {
        "lang": "lua",
        "code": "-- Status possíveis e proteção contra erro\nlocal co = coroutine.create(function()\n  error('boom')\nend)\n\nlocal ok, err = coroutine.resume(co)\nprint(ok, err)               -- false  ...: boom\nprint(coroutine.status(co))  -- dead (morta pelo erro)"
      },
      {
        "lang": "lua",
        "code": "-- Producer/consumer simples\nlocal function produtor()\n  for i = 1, 3 do coroutine.yield('item '..i) end\nend\n\nlocal co = coroutine.create(produtor)\nwhile true do\n  local ok, v = coroutine.resume(co)\n  if not v then break end\n  print(v)\nend"
      }
    ],
    "points": [
      "create cria; resume executa; yield pausa; status consulta",
      "Valores fluem: yield(x) sai em resume; resume(v) chega no yield",
      "Status: suspended, running, normal, dead",
      "Erro dentro da corrotina mata ela e volta como (false, msg) no resume",
      "Não é multithreading — uma CPU, sem race conditions",
      "Você não pode ceder de dentro de uma função C (em Lua 5.1)",
      "Base para iteradores, máquinas de estado e async I/O"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Corrotinas em Lua são 'stackful': podem ceder de dentro de qualquer função aninhada, não só do topo. Isso é mais poderoso que async/await de muitas linguagens."
      },
      {
        "type": "tip",
        "content": "Use coroutine.wrap quando não precisa lidar com erros manualmente — ela devolve uma função que retoma sozinha."
      }
    ]
  },
  {
    "slug": "coroutines-iteradores",
    "section": "coroutines-erros",
    "title": "Corrotinas como iteradores",
    "difficulty": "avancado",
    "subtitle": "Geradores estilo Python, sem dor.",
    "intro": "Escrever um iterador 'na mão' (com closure mantendo estado em variáveis upvalue) funciona, mas fica ilegível quando a lógica é complexa. Corrotinas resolvem isso: você escreve a sequência de valores como se fosse código linear normal, e cada `yield` se transforma em uma iteração do `for`.\n\n`coroutine.wrap(f)` é o atalho perfeito. Em vez de devolver uma corrotina (que precisa de `resume` manual), devolve uma **função**. Cada chamada dessa função executa até o próximo `yield` e retorna o valor cedido. Quando a função interna termina, a próxima chamada gera erro — exatamente o sinal que `for in` precisa para parar (ele não para; mas o nil cedido sim).\n\nNa prática isso é o equivalente direto de `yield` em Python ou `function*` em JavaScript. Você descreve **o que produzir**, não **como manter o estado**. O preço é uma corrotina por iterador (overhead pequeno, mas existe), então em loops de altíssima performance ainda vale o iterador clássico.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Fibonacci como gerador\nlocal function fibs(max)\n  return coroutine.wrap(function()\n    local a, b = 0, 1\n    while a < max do\n      coroutine.yield(a)\n      a, b = b, a + b\n    end\n  end)\nend\n\nfor n in fibs(50) do io.write(n, ' ') end\n-- saída: 0 1 1 2 3 5 8 13 21 34"
      },
      {
        "lang": "lua",
        "code": "-- Caminhar recursivamente em uma árvore\nlocal function walk(node)\n  return coroutine.wrap(function()\n    local function visit(n)\n      coroutine.yield(n.valor)\n      for _, filho in ipairs(n.filhos or {}) do visit(filho) end\n    end\n    visit(node)\n  end)\nend\n\nlocal t = {valor=1, filhos={{valor=2},{valor=3,filhos={{valor=4}}}}}\nfor v in walk(t) do io.write(v, ' ') end  -- 1 2 3 4"
      },
      {
        "lang": "lua",
        "code": "-- Iterador com estado externo (clássico) p/ comparar\nlocal function range(a, b)\n  local i = a - 1\n  return function()\n    i = i + 1\n    if i <= b then return i end\n  end\nend\nfor x in range(1, 3) do print(x) end  -- 1, 2, 3"
      }
    ],
    "points": [
      "coroutine.wrap devolve uma função pronta para for-in",
      "Cada yield(v) vira o próximo valor do loop",
      "Quando a função interna acaba, o loop para",
      "Permite recursão dentro do gerador (difícil sem corrotinas)",
      "Erro dentro do wrap é re-lançado (diferente de resume, que captura)",
      "Útil para árvores, parsers, geração tardia, paginação",
      "Para hot loops, iterador clássico (closure) é mais rápido"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Use coroutine.wrap quase sempre que quiser um iterador. Use coroutine.create só quando precisa inspecionar status ou capturar o erro com resume."
      },
      {
        "type": "warning",
        "content": "Não tente reusar o mesmo iterador em dois loops simultâneos: a corrotina é única e tem estado. Crie um novo a cada uso."
      }
    ]
  },
  {
    "slug": "coroutines-async",
    "section": "coroutines-erros",
    "title": "Corrotinas para I/O assíncrono",
    "difficulty": "avancado",
    "subtitle": "O segredo do código linear sem callback hell.",
    "intro": "Em Node.js, JavaScript de browser e muitas outras stacks, código assíncrono cresceu callbacks aninhados, depois Promises, depois async/await. Lua, com corrotinas, conseguiu o mesmo efeito **20 anos antes** — só que sem sintaxe nova.\n\nA ideia: você escreve seu código de forma totalmente linear (`local html = baixar(url)`), como se fosse síncrono. Por dentro, a função `baixar` registra um callback no event loop e chama `coroutine.yield`. A corrotina pausa. Quando o I/O termina, o loop chama `resume` passando o resultado, e o `yield` 'devolve' o valor. Você nunca vê isso — vê só código limpo.\n\nÉ exatamente assim que **OpenResty** (nginx + Lua) processa milhares de requisições por worker, **copas** faz networking, e **cqueues** orquestra TCP/timers. Se você vai escrever servidores ou clientes de rede em Lua, vai cruzar com esse padrão.\n\nA pegadinha clássica: dentro desse mundo assíncrono, você **não pode** usar I/O bloqueante normal (como `io.read`) — ele bloqueia a thread inteira e mata a vantagem. Tem que usar as funções da própria biblioteca async.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Pseudocódigo (estilo copas/OpenResty)\nlocal function baixar(url)\n  -- por dentro: registra callback e chama coroutine.yield\n  -- quando a resposta chega, o loop dá resume com o corpo\n  return http_get(url)\nend\n\n-- O código fica linear, sem .then/.catch, sem callbacks\nlocal a = baixar('https://api.exemplo.com/a')\nlocal b = baixar('https://api.exemplo.com/b')\nprint(#a, #b)"
      },
      {
        "lang": "lua",
        "code": "-- Mini event loop didático\nlocal fila = {}\nlocal function sleep(ms)\n  table.insert(fila, {co=coroutine.running(), wake=os.time()+ms/1000})\n  coroutine.yield()\nend\n\nlocal function spawn(f) coroutine.resume(coroutine.create(f)) end\n\nspawn(function() sleep(1000); print('1s') end)\nspawn(function() sleep(2000); print('2s') end)\n\nwhile #fila > 0 do  -- loop simplificado\n  for i = #fila, 1, -1 do\n    if os.time() >= fila[i].wake then\n      local co = fila[i].co\n      table.remove(fila, i)\n      coroutine.resume(co)\n    end\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Exemplo real com cqueues (instalado via luarocks)\nlocal cqueues = require 'cqueues'\nlocal cq = cqueues.new()\n\ncq:wrap(function()\n  cqueues.sleep(1)\n  print('disparou após 1s')\nend)\n\nassert(cq:loop())"
      }
    ],
    "points": [
      "Código async parece síncrono — sem callbacks, sem .then",
      "A função 'bloqueante' por dentro chama coroutine.yield",
      "O event loop chama resume quando o I/O completa",
      "Roda na mesma thread: sem locks, sem race conditions",
      "Exemplos: OpenResty, copas, cqueues, lapis, lua-http",
      "Não misture I/O bloqueante (io.read) com async — trava tudo",
      "Throughput excelente para muitas conexões simultâneas"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "OpenResty processa centenas de milhares de requisições por segundo por worker usando exatamente esse modelo. É a base de CDNs como Cloudflare e Kong."
      },
      {
        "type": "warning",
        "content": "Operações CPU-bound (cálculo pesado) em uma corrotina ainda bloqueiam o loop. Para isso use processos ou ffi com threads de verdade."
      }
    ]
  },
  {
    "slug": "pcall-xpcall",
    "section": "coroutines-erros",
    "title": "pcall e xpcall: capturando erros",
    "difficulty": "intermediario",
    "subtitle": "O try/catch que Lua não tem (mas resolve melhor).",
    "intro": "Em Lua, quando algo dá erro o programa **morre** com a mensagem no stderr — a menos que você faça uma 'chamada protegida'. Não existe `try { } catch { }`; existe `pcall(f, ...)`, que executa `f` e devolve `(true, retornos...)` se tudo correr bem, ou `(false, erro)` se algo explodir.\n\nÉ um modelo de **valores de retorno**, não de palavras-chave. Você sempre olha o primeiro retorno (boolean) antes de confiar no resto. Isso força o leitor do código a ver exatamente onde o erro pode acontecer — não fica espalhado por blocos invisíveis.\n\n`xpcall` é a versão com **handler**: você passa uma função que será chamada com o erro **antes** da pilha ser desenrolada. Isso é importantíssimo porque permite capturar o `debug.traceback` no momento exato do erro, com a stack ainda intacta. Em produção, é praticamente obrigatório usar `xpcall(f, debug.traceback)` no entrypoint.\n\nUma armadilha comum: `pcall` capta apenas erros 'lançados'. Erros lógicos silenciosos (resultado errado mas sem `error()`) ele não vê. Isso é por design — quem decide o que é 'erro' é você, com `error()` ou `assert()`.",
    "codes": [
      {
        "lang": "lua",
        "code": "local function arriscado(x)\n  if x == 0 then error('divisão por zero') end\n  return 100 / x\nend\n\nlocal ok, valor = pcall(arriscado, 0)\nif not ok then\n  print('erro:', valor)            -- erro: ...: divisão por zero\nelse\n  print('resultado:', valor)\nend\n\nlocal ok, valor = pcall(arriscado, 4)\nprint(ok, valor)                    -- true   25.0"
      },
      {
        "lang": "lua",
        "code": "-- xpcall com handler para capturar stack trace\nlocal function arriscado() error('boom') end\n\nlocal ok, err = xpcall(arriscado, debug.traceback)\nprint(err)\n-- ...: boom\n-- stack traceback:\n--   [C]: in function 'error'\n--   teste.lua:1: in function 'arriscado'\n--   ..."
      },
      {
        "lang": "lua",
        "code": "-- Padrão de wrapper para entrypoint de servidor\nlocal function tratar(req)\n  -- ... lógica que pode falhar ...\nend\n\nlocal function handler(err)\n  -- log estruturado, métricas, etc.\n  return debug.traceback(tostring(err), 2)\nend\n\nlocal ok, err = xpcall(tratar, handler, req)\nif not ok then enviar_500(err) end"
      }
    ],
    "points": [
      "pcall(f, ...) devolve true,result ou false,erro",
      "Sempre cheque o primeiro retorno antes de usar o segundo",
      "xpcall(f, handler, ...) chama handler com a stack viva",
      "Use xpcall(f, debug.traceback) para logs com pilha completa",
      "pcall só pega erros 'lançados' (error/assert), não bugs lógicos",
      "Em Lua 5.1, xpcall não aceita argumentos extras (use closure)",
      "Em Lua 5.2+, xpcall(f, handler, ...args) funciona direto"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Coloque um xpcall no entrypoint do seu programa (main, request handler, comando CLI). Tudo abaixo pode usar error() à vontade sabendo que vai ser capturado e logado."
      },
      {
        "type": "warning",
        "content": "Não use pcall para controle de fluxo normal (tipo 'tenta ler o arquivo, se não existir tudo bem'). É lento e confunde leitor — use uma checagem explícita."
      }
    ]
  },
  {
    "slug": "error-assert",
    "section": "coroutines-erros",
    "title": "error() e assert()",
    "difficulty": "intermediario",
    "subtitle": "Lançando e validando erros corretamente.",
    "intro": "Erros em Lua são apenas valores que sobem pela pilha até alguém capturar com `pcall`/`xpcall`. Quem dispara é `error(valor, nivel)`. Quem valida e dispara automaticamente é `assert(cond, msg)` — uma macro idiomática para 'se isso for falsy, mata aqui'.\n\nO valor passado para `error` geralmente é uma string, mas pode ser **qualquer coisa** — incluindo tabelas. Isso é poderoso: você pode lançar `error({code=404, msg='not found'})` e quem capturar inspeciona o campo. É o jeito de fazer 'tipos de erro' em Lua, já que não tem classes de exceção.\n\nO segundo argumento de `error`, o **nível**, é a parte que confunde. `error(msg, 1)` (default) aponta a mensagem para a linha de quem chamou `error`. `error(msg, 2)` aponta para quem chamou a sua função — útil em validação de argumento, porque o usuário quer ver onde **ele** errou, não onde a checagem mora. `error(msg, 0)` não adiciona localização nenhuma (mensagem 'crua').\n\n`assert` é mais que um atalho: ele é o jeito idiomático de validar I/O. `local f = assert(io.open('x'))` aborta com a mensagem certa se o open falhar (porque `io.open` retorna `nil, mensagem` em erro).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Validação de argumentos\nlocal function dividir(a, b)\n  assert(type(a) == 'number', 'a deve ser número')\n  assert(type(b) == 'number', 'b deve ser número')\n  assert(b ~= 0, 'divisão por zero')\n  return a / b\nend\n\nprint(dividir(10, 2))  -- 5.0\n-- dividir(10, 0)      -- erro com mensagem clara"
      },
      {
        "lang": "lua",
        "code": "-- Nível de erro: apontar para quem chamou\nlocal function exigir_string(x)\n  if type(x) ~= 'string' then\n    error('esperava string, veio ' .. type(x), 2)\n    -- nível 2: a linha culpada é a do CHAMADOR\n  end\nend\n\nlocal function api(nome) exigir_string(nome) end\napi(42)  -- erro aponta para api(42), não para dentro da checagem"
      },
      {
        "lang": "lua",
        "code": "-- Erro estruturado (tabela)\nlocal function buscar(id)\n  if not id then\n    error({code='ARG', msg='id obrigatório'})\n  end\n  -- ...\nend\n\nlocal ok, err = pcall(buscar)\nif not ok and type(err) == 'table' then\n  print(err.code, err.msg)  -- ARG  id obrigatório\nend"
      },
      {
        "lang": "lua",
        "code": "-- Idioma para I/O: assert direto no retorno\nlocal f = assert(io.open('config.json', 'r'))\n-- se abrir, f é o arquivo. Se não, aborta com a msg do io.\nlocal conteudo = f:read('*a')\nf:close()"
      }
    ],
    "points": [
      "error(v) lança qualquer valor (string, tabela, número...)",
      "assert(x, msg) só passa se x for truthy; senão chama error(msg)",
      "assert devolve TODOS os argumentos quando passa (útil em I/O)",
      "Nível 1 (default) aponta para o error(); 2 aponta para o chamador",
      "Nível 0 não anexa 'arquivo:linha:' — mensagem crua",
      "Erro como tabela permite tipos de erro estruturados",
      "Use assert para invariantes, error para condições esperadas"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "O padrão `local x = assert(funcao_que_pode_falhar(...))` é onipresente em Lua bem escrito. Funções que falham devolvem (nil, msg) justamente para casar com isso."
      },
      {
        "type": "warning",
        "content": "Não use assert para validação que pode ser desligada (ele NÃO some em release como em C). Em Lua, assert sempre executa."
      }
    ]
  },
  {
    "slug": "debug-traceback",
    "section": "coroutines-erros",
    "title": "Debug.traceback e localizando erros",
    "difficulty": "avancado",
    "subtitle": "Pilhas de chamada legíveis para investigação.",
    "intro": "Quando um erro pipoca em produção, a única coisa que separa você da loucura é uma boa **stack trace**. `debug.traceback` é a função que monta essa string: ela percorre a pilha de chamadas atual e devolve algo legível com cada frame, arquivo e linha.\n\nO uso clássico é casar com `xpcall`. Quando o erro acontece, a stack ainda está intacta — porque o handler do `xpcall` roda **antes** do desenrolamento. Se você tentar chamar `debug.traceback` depois do `pcall` retornar, já é tarde: a pilha foi destruída.\n\nVocê também pode chamar `debug.traceback` sem erro nenhum, só para inspecionar 'como cheguei aqui'. Útil em logs caros: 'essa função lenta foi chamada por quem?'. O segundo argumento controla quantos frames pular do topo (geralmente 1 ou 2 para esconder o próprio chamador).\n\nA pegadinha em produção: a biblioteca `debug` pode estar **desabilitada** em sandboxes (segurança) ou ter overhead em hot paths. Use no entrypoint, não dentro de loops.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Capturando trace ao morrer\nlocal function um() error('boom!') end\nlocal function dois() um() end\n\nlocal ok, err = xpcall(dois, debug.traceback)\nprint(err)\n--[[\n...: boom!\nstack traceback:\n  [C]: in function 'error'\n  teste.lua:1: in function 'um'\n  teste.lua:2: in function 'dois'\n  [C]: in function 'xpcall'\n  teste.lua:4: in main chunk\n--]]"
      },
      {
        "lang": "lua",
        "code": "-- Trace 'só pra olhar', sem erro nenhum\nlocal function quem_me_chama()\n  print(debug.traceback('--- snapshot ---', 2))\nend\n\nlocal function a() quem_me_chama() end\nlocal function b() a() end\nb()  -- imprime a pilha: a -> b -> main"
      },
      {
        "lang": "lua",
        "code": "-- Wrapper de log enriquecido\nlocal function log_erro(err)\n  local trace = debug.traceback(tostring(err), 2)\n  io.stderr:write(os.date('%H:%M:%S '), trace, '\\n')\n  return err  -- propaga o erro para quem capturou\nend\n\nxpcall(function() error('falha') end, log_erro)"
      }
    ],
    "points": [
      "debug.traceback([msg], [nivel]) devolve string com a pilha",
      "Use SEMPRE com xpcall para pegar a stack ainda viva",
      "Depois do pcall retornar, a pilha já foi desfeita",
      "Nível pula frames do topo (esconde o próprio chamador)",
      "Pode ser chamado sem erro, para diagnosticar fluxo",
      "A lib 'debug' pode estar desabilitada em sandboxes",
      "Caro para hot paths — use só em entrypoints e logs"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Padrão de ouro: `xpcall(main, debug.traceback)`. Logue o resultado bruto. Você vai economizar horas no primeiro bug raro."
      },
      {
        "type": "info",
        "content": "Em Lua 5.2+, debug.traceback aceita uma corrotina como primeiro arg, permitindo inspecionar o trace de outra coroutine."
      }
    ]
  },
  {
    "slug": "finally",
    "section": "coroutines-erros",
    "title": "Padrão 'finally' com pcall",
    "difficulty": "intermediario",
    "subtitle": "Garantindo limpeza mesmo quando algo explode.",
    "intro": "Em Java/Python/JS você tem `try/finally` para garantir que arquivos sejam fechados, locks liberados, conexões devolvidas — aconteça o que acontecer. Lua (até a 5.3) não tem essa palavra; o jeito idiomático é montar o padrão à mão usando `pcall`.\n\nA receita é simples: adquira o recurso, rode o trabalho dentro de `pcall`, libere o recurso, e se o pcall falhou, **re-lance** o erro com `error(err, 0)` (o `0` evita anexar nova localização e perder a original).\n\nA mágica está em encapsular esse padrão num **helper** (tipo `with_arquivo`, `with_lock`, `with_transacao`) que recebe uma função do usuário. Quem chama escreve só o trabalho; o helper cuida da limpeza. Esse é o equivalente Lua dos `with` do Python ou `using` do C#.\n\nEm Lua 5.4 isso ficou mais bonito com variáveis `<close>` (próximo capítulo). Mas em qualquer versão de Lua, dominar esse padrão evita aquele bug clássico: 'meu programa esgotou os file descriptors em produção'.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Helper de 'usar arquivo e fechar'\nlocal function com_arquivo(nome, modo, fn)\n  local f = assert(io.open(nome, modo))\n  local ok, err = pcall(fn, f)\n  f:close()                     -- sempre fecha\n  if not ok then error(err, 0) end  -- re-lança com msg original\nend\n\ncom_arquivo('dados.txt', 'r', function(f)\n  print(f:read('*a'))\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Lock que sempre é liberado\nlocal function com_lock(lock, fn, ...)\n  lock:adquirir()\n  local ok, err = pcall(fn, ...)\n  lock:liberar()\n  if not ok then error(err, 0) end\nend\n\ncom_lock(meu_lock, function()\n  -- seção crítica\n  contador = contador + 1\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Transação: rollback no erro, commit no sucesso\nlocal function transacao(db, fn)\n  db:exec('BEGIN')\n  local ok, err = pcall(fn, db)\n  if ok then\n    db:exec('COMMIT')\n  else\n    db:exec('ROLLBACK')\n    error(err, 0)\n  end\nend"
      }
    ],
    "points": [
      "Lua não tem 'finally' nativo (até 5.3)",
      "Padrão: adquire → pcall(trabalho) → libera → re-lança se falhou",
      "error(err, 0) re-lança SEM adicionar nova localização",
      "Encapsule em helpers 'com_X' (tipo 'with' do Python)",
      "Use para arquivos, locks, conexões DB, transações, sockets",
      "Em Lua 5.4 prefira variáveis <close> quando possível",
      "Esquecer essa proteção causa vazamento de recursos em produção"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Sem esse padrão, um erro em meio a uma operação com arquivo/lock/conexão deixa o recurso preso. Em servidores de longa duração isso vira esgotamento de file descriptors ou deadlock."
      },
      {
        "type": "tip",
        "content": "Crie helpers reutilizáveis (com_arquivo, com_transacao) e use-os em todo o código. Vira hábito e some uma classe inteira de bugs."
      }
    ]
  },
  {
    "slug": "lua54-close",
    "section": "coroutines-erros",
    "title": "Lua 5.4: variáveis <close>",
    "difficulty": "avancado",
    "subtitle": "RAII finalmente em Lua moderno.",
    "intro": "Lua 5.4 trouxe **atributos de variáveis locais**: `<const>` (não pode ser reatribuída) e `<close>` (chama `__close` do metatable ao sair de escopo). É o equivalente direto do RAII do C++, do `using` do C# ou do `with` do Python — só que como recurso da linguagem, não como helper.\n\nO funcionamento: quando o bloco onde a variável `<close>` foi declarada termina (normal ou por erro), Lua chama o método `__close(self, err)` do metatable do valor. Se houver várias `<close>` no mesmo escopo, elas fecham em **ordem inversa** de declaração — exatamente como destrutores do C++. Se um `__close` lançar erro, ele se torna o erro corrente; se já havia erro, o novo o substitui (com aviso).\n\nÉ a forma mais limpa de garantir limpeza. Você não precisa lembrar de chamar `f:close()`, e a limpeza acontece mesmo que o código no meio dispare. Funciona com qualquer objeto que implemente `__close` — arquivos, sockets, transações, locks, qualquer coisa.\n\nO custo: só funciona em Lua 5.4+. Se seu código precisa rodar em LuaJIT (que está em 5.1) ou em Lua 5.3, fique no padrão `pcall + close`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Exige Lua 5.4\nlocal function abrir(nome)\n  return setmetatable({nome=nome}, {\n    __close = function(self, err)\n      print('fechando', self.nome, err and 'com erro' or 'ok')\n    end\n  })\nend\n\ndo\n  local a <close> = abrir('A')\n  local b <close> = abrir('B')\n  print('trabalhando...')\nend\n-- saída:\n-- trabalhando...\n-- fechando B ok\n-- fechando A ok"
      },
      {
        "lang": "lua",
        "code": "-- Limpeza acontece MESMO com erro\nlocal recurso = setmetatable({}, {\n  __close = function() print('fechado') end\n})\n\nlocal ok, err = pcall(function()\n  local r <close> = recurso\n  error('boom')\nend)\nprint(ok, err)\n-- fechado\n-- false  ...: boom"
      },
      {
        "lang": "lua",
        "code": "-- <const>: variável imutável\nlocal MAX <const> = 100\n-- MAX = 200  -- erro de COMPILAÇÃO\n\n-- <close> exige metatable com __close (ou nil/false)\nlocal x <close> = nil   -- ok, ignorado\n-- local x <close> = 42 -- erro: número não tem __close"
      }
    ],
    "points": [
      "Apenas Lua 5.4 ou superior",
      "Sintaxe: local nome <close> = valor",
      "Chama valor.__close(valor, err) ao sair do escopo",
      "Múltiplos <close>: fecham em ordem INVERSA da declaração",
      "<const> trava reatribuição (verificado em compilação)",
      "Substitui o padrão pcall+close+re-error",
      "Não funciona em LuaJIT (que está em 5.1)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Se seu projeto é só Lua 5.4, abrace <close> para todo recurso — arquivos, conexões, locks. Código fica mais curto e mais seguro."
      },
      {
        "type": "warning",
        "content": "Cuidado portabilidade: <close> é erro de SINTAXE em Lua 5.3 e LuaJIT. Não dá nem para detectar em runtime — o arquivo nem carrega."
      }
    ]
  },
  {
    "slug": "math-lib",
    "section": "stdlib",
    "title": "Biblioteca math",
    "difficulty": "iniciante",
    "subtitle": "O canivete suíço numérico.",
    "intro": "A biblioteca `math` reúne tudo que você precisa para matemática do dia a dia: constantes (`pi`, `huge`), funções básicas (`sqrt`, `abs`, `floor`, `ceil`), trigonométricas (`sin`, `cos`, `atan`), exponenciais (`exp`, `log`) e o gerador aleatório (próximo capítulo).\n\nÉ nela que você resolve problemas como 'qual a distância entre dois pontos?', 'arredonde para baixo', 'pegue o maior de N valores'. Tudo já está pronto — não precisa importar nada além de usar `math.X`.\n\nEm **Lua 5.3** a biblioteca ganhou suporte explícito a inteiros, com `math.maxinteger`, `math.mininteger` e `math.tointeger` (converte float exato para inteiro, ou devolve nil). Em versões anteriores, números são todos floats (Lua 5.1/5.2) ou tudo se mistura sem distinção.\n\nUma pegadinha: trigonométricas trabalham em **radianos**, não em graus. Use `math.rad(graus)` para converter, ou `math.deg(rad)` no caminho oposto. Outro detalhe: `math.huge` representa **infinito** (1/0), útil como valor inicial em buscas de mínimo/máximo.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Constantes e básicas\nprint(math.pi)            -- 3.1415926535898\nprint(math.huge)          -- inf  (infinito)\nprint(math.sqrt(16))      -- 4.0\nprint(math.abs(-5))       -- 5\nprint(math.floor(3.7))    -- 3\nprint(math.ceil(3.2))     -- 4\nprint(math.min(7,2,9,4))  -- 2\nprint(math.max(7,2,9,4))  -- 9"
      },
      {
        "lang": "lua",
        "code": "-- Trigonometria (em RADIANOS)\nprint(math.sin(math.rad(30)))  -- 0.5\nprint(math.cos(0))             -- 1.0\nprint(math.deg(math.pi))       -- 180.0\n\n-- Distância entre dois pontos\nlocal function dist(x1,y1,x2,y2)\n  return math.sqrt((x2-x1)^2 + (y2-y1)^2)\nend\nprint(dist(0,0,3,4))  -- 5.0"
      },
      {
        "lang": "lua",
        "code": "-- Logaritmo, exponencial, potência\nprint(math.log(100, 10))  -- 2.0  (log base 10)\nprint(math.log(math.exp(1)))  -- 1.0\nprint(math.exp(1))        -- 2.718...  (e)\nprint(2^10)               -- 1024.0  (potência: operador ^)\n\n-- Lua 5.3+: integer-aware\nprint(math.maxinteger)    -- 9223372036854775807\nprint(math.tointeger(3.0))-- 3\nprint(math.tointeger(3.5))-- nil  (não é exato)"
      }
    ],
    "points": [
      "math.pi e math.huge são constantes (huge = infinito)",
      "Trigonometria usa RADIANOS — converta com math.rad/math.deg",
      "math.floor arredonda para baixo; math.ceil para cima",
      "math.min/math.max aceitam quantos argumentos quiser",
      "Lua 5.3+: math.maxinteger, math.mininteger, math.tointeger",
      "math.log(x, base) — segundo argumento define a base",
      "math.huge é ótimo como valor inicial em busca de mínimo"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para arredondar 'comercialmente' (0.5 sobe), use math.floor(x + 0.5). Lua não tem math.round nativo."
      },
      {
        "type": "info",
        "content": "Em Lua 5.3+, divisão / sempre devolve float; use // para divisão inteira. math.floor pode ser usado no lugar de // se quiser compatibilidade com 5.1."
      }
    ]
  },
  {
    "slug": "math-random",
    "section": "stdlib",
    "title": "math.random e seeding",
    "difficulty": "iniciante",
    "subtitle": "Aleatoriedade para jogos, sorteios e simulações.",
    "intro": "Quase todo programa precisa de números aleatórios em algum momento — embaralhar uma lista, sortear um inimigo, gerar um ID. Em Lua isso é `math.random`, que tem três formas: sem argumento (float entre 0 e 1), com um argumento N (inteiro entre 1 e N inclusive) e com dois argumentos (inteiro entre A e B inclusive).\n\nMas tem um detalhe **crítico** para iniciantes: sem `math.randomseed`, todo programa começa com a mesma sequência. Você roda 100 vezes e sai sempre 'aleatório igual'. A correção idiomática é `math.randomseed(os.time())` no começo do script — usa a hora atual como semente.\n\nEm **Lua 5.4**, o gerador foi reescrito (xoshiro256**) e ficou bem melhor: o seed antigo continua funcionando, mas você pode chamar `math.randomseed()` sem argumento para semear automaticamente com fonte do SO.\n\nDuas armadilhas: (1) `math.random(n)` **inclui** o n (não é como Python `range`); (2) esse gerador é **previsível** — não use para tokens, senhas, criptografia. Para isso, busque uma lib (`luaossl`, `/dev/urandom`, etc.).",
    "codes": [
      {
        "lang": "lua",
        "code": "math.randomseed(os.time())\n\nprint(math.random())        -- float em [0, 1)\nprint(math.random(10))      -- inteiro em [1, 10]\nprint(math.random(5, 15))   -- inteiro em [5, 15]\n\n-- Sortear um item de uma lista\nlocal frutas = {'maçã', 'banana', 'uva', 'pera'}\nprint(frutas[math.random(#frutas)])"
      },
      {
        "lang": "lua",
        "code": "-- Embaralhar (Fisher-Yates) — algoritmo correto\nlocal function shuffle(t)\n  for i = #t, 2, -1 do\n    local j = math.random(i)\n    t[i], t[j] = t[j], t[i]\n  end\nend\n\nlocal cartas = {1,2,3,4,5,6,7,8,9,10}\nshuffle(cartas)\nfor _, c in ipairs(cartas) do io.write(c, ' ') end"
      },
      {
        "lang": "lua",
        "code": "-- Probabilidade de evento (X%)\nlocal function chance(percentual)\n  return math.random() * 100 < percentual\nend\n\nif chance(25) then print('crítico!') end\n\n-- Em Lua 5.4: seed automático do SO\n-- math.randomseed()  -- sem argumento, usa boa entropia"
      }
    ],
    "points": [
      "Sempre semeie no início: math.randomseed(os.time())",
      "math.random() — float em [0, 1)",
      "math.random(n) — inteiro em [1, n] (INCLUI n)",
      "math.random(a, b) — inteiro em [a, b]",
      "Sem seed, todo programa repete a mesma sequência",
      "Lua 5.4 reescreveu o gerador (xoshiro256**) e aceita seed automático",
      "NÃO é seguro para criptografia — use lib específica para tokens"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "math.random NÃO serve para gerar senhas, tokens de sessão ou IDs únicos resistentes a ataque. É um PRNG comum, previsível por quem observar a saída por tempo suficiente."
      },
      {
        "type": "tip",
        "content": "Para embaralhar listas, use sempre o algoritmo Fisher-Yates do exemplo. Ordenar com função aleatória (table.sort com comparador random) gera distribuição enviesada — bug clássico."
      }
    ]
  },
  {
    "slug": "string-lib-completo",
    "section": "stdlib",
    "title": "Biblioteca string completa",
    "difficulty": "intermediario",
    "subtitle": "Funções menos óbvias que vão te resgatar.",
    "intro": "Você já viu `string.len`, `sub`, `upper`, `format`, `find`, `match`, `gmatch`, `gsub`. A biblioteca tem mais um punhado de funções que aparecem menos mas vão salvar seu dia em algum momento: `byte`, `char`, `rep`, `reverse`, `dump`, e a lacuna mais comentada: **não existe `string.split`**.\n\nA ausência de `split` choca todo iniciante vindo de Python/JS. A justificativa do core de Lua é minimalismo: `gmatch` resolve o problema com uma linha. O custo é que você acaba reescrevendo o helper em todo projeto (ou usando Penlight). Vale memorizar a versão idiomática.\n\n`string.byte(s, i)` devolve o código numérico do i-ésimo caractere (em ASCII puro, perfeito; em UTF-8, devolve o byte, não o codepoint). `string.char(n1, n2, ...)` faz o caminho inverso. `string.rep(s, n)` repete a string n vezes (com separador opcional em Lua 5.3+). `string.reverse(s)` inverte byte a byte (cuidado com UTF-8).\n\n`string.dump(f)` é uma curiosidade poderosa: serializa uma função Lua em bytecode, que pode ser carregado de volta com `load`. Usado em sandboxes, hot-reload, distribuição precompilada.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- O famoso split que falta\nlocal function split(s, sep)\n  local r = {}\n  for parte in s:gmatch('[^' .. sep .. ']+') do\n    r[#r+1] = parte\n  end\n  return r\nend\n\nfor _, p in ipairs(split('a,b,c,d', ',')) do\n  print(p)  -- a, b, c, d (cada um em uma linha)\nend"
      },
      {
        "lang": "lua",
        "code": "-- byte / char: passar entre texto e número\nprint(string.byte('A'))         -- 65\nprint(string.byte('ABC', 2))    -- 66\nprint(string.char(72, 105))     -- Hi\n\n-- Aplicação: shift de César (ASCII)\nlocal function cifrar(s, n)\n  return (s:gsub('%a', function(c)\n    local base = c:lower() == c and 97 or 65\n    return string.char((c:byte() - base + n) % 26 + base)\n  end))\nend\nprint(cifrar('hello', 3))  -- khoor"
      },
      {
        "lang": "lua",
        "code": "-- rep: repetir, com separador (5.3+)\nprint(string.rep('-', 20))           -- --------------------\nprint(string.rep('ab', 3))           -- ababab\nprint(string.rep('x', 4, ', '))      -- x, x, x, x  (5.3+)\n\nprint(string.reverse('Lua'))         -- auL\n\n-- dump: serializa função em bytecode\nlocal f = function(x) return x*2 end\nlocal bin = string.dump(f)\nlocal g = load(bin)\nprint(g(21))  -- 42"
      }
    ],
    "points": [
      "NÃO há string.split nativo — use gmatch ou Penlight",
      "string.byte(s, i) → código do i-ésimo caractere (1-indexado)",
      "string.char(n1, n2, ...) → string a partir de códigos",
      "string.rep(s, n, sep?) — repete (sep opcional em 5.3+)",
      "string.reverse opera em bytes — quebra texto UTF-8",
      "string.dump serializa função Lua em bytecode portável",
      "byte/char trabalham em BYTES — para UTF-8 use lib utf8 (5.3+)"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Para manipulação séria de UTF-8 em Lua 5.3+, use a biblioteca utf8 (utf8.char, utf8.codepoint, utf8.len). string.* opera em bytes, não em caracteres."
      },
      {
        "type": "tip",
        "content": "Memorize a função split de quatro linhas. Ela aparece em quase todo projeto e é o jeito idiomático Lua de quebrar string."
      }
    ]
  },
  {
    "slug": "table-lib-completo",
    "section": "stdlib",
    "title": "Biblioteca table completa",
    "difficulty": "intermediario",
    "subtitle": "Operações eficientes em arrays e listas.",
    "intro": "Além das suspeitas usuais (`insert`, `remove`, `concat`, `sort`), a biblioteca `table` tem três funções que merecem atenção especial: `table.pack`, `table.unpack` e `table.move`. Elas resolvem problemas reais com performance que você não consegue replicar em Lua puro.\n\n`table.pack(...)` empacota varargs em uma tabela e ainda salva o **número de itens** em `t.n`. Isso é crucial quando você precisa preservar nils no meio (ex: `pack(1, nil, 3).n` é 3, mas `#{1, nil, 3}` é 1 ou 3 — comportamento indefinido). É o jeito seguro de capturar varargs.\n\n`table.unpack(t, i?, j?)` faz o caminho inverso: vira uma tabela em lista de retornos. Em Lua 5.1, era `unpack` global; a partir do 5.2 mudou para `table.unpack` (escreva código que detecta as duas formas se quiser portabilidade).\n\n`table.move(a1, f, e, t, a2?)` é uma cópia/mover de trecho **em C**, ordens de magnitude mais rápida que loops manuais. Copia `a1[f..e]` para `a2[t...]` (ou `a1` se `a2` omitido). Excelente para slicing, append em massa, deslocamento.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- pack: capturar varargs preservando nils\nlocal function inspecionar(...)\n  local args = table.pack(...)\n  print('recebi', args.n, 'argumentos')\n  for i = 1, args.n do print(i, args[i]) end\nend\ninspecionar(10, nil, 'oi', nil)\n-- recebi 4 argumentos\n-- 1  10\n-- 2  nil\n-- 3  oi\n-- 4  nil"
      },
      {
        "lang": "lua",
        "code": "-- unpack: tabela vira lista de retornos\nlocal args = {1, 2, 3}\nprint(table.unpack(args))      -- 1  2  3\nprint(string.format('%d-%d-%d', table.unpack(args)))\n\n-- Slice via unpack com índices\nprint(table.unpack({'a','b','c','d'}, 2, 3))  -- b  c\n\n-- Compatibilidade 5.1 / 5.2+\nlocal unpack = table.unpack or unpack"
      },
      {
        "lang": "lua",
        "code": "-- move: cópia rápida em C\nlocal a = {10, 20, 30, 40, 50}\n\n-- Copiar a[2..4] para nova tabela em [1..]\nlocal copia = table.move(a, 2, 4, 1, {})\nprint(table.unpack(copia))  -- 20  30  40\n\n-- Deslocar elementos: move a[1..3] para a[3..5]\nlocal b = {1,2,3,4,5}\ntable.move(b, 1, 3, 3)\nprint(table.unpack(b))  -- 1  2  1  2  3\n\n-- Append rápido (concatenar duas listas)\nlocal x = {1,2,3}\nlocal y = {4,5,6}\ntable.move(y, 1, #y, #x+1, x)\n-- x agora é {1,2,3,4,5,6}"
      }
    ],
    "points": [
      "table.pack(...) preserva nils via t.n (length seguro)",
      "table.unpack(t, i?, j?) explode tabela em retornos múltiplos",
      "Em Lua 5.1, era 'unpack' global; em 5.2+ está em table.unpack",
      "table.move(a1, f, e, t, a2?) copia trecho em C — muito rápido",
      "table.move pode usar a mesma tabela como origem e destino",
      "Use pack/unpack para forwarding de varargs entre funções",
      "Para append em massa, table.move bate loop manual disparado"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Sempre use table.pack(...) (não {...}) quando varargs podem conter nil. O operador # tem comportamento indefinido em listas com buracos."
      },
      {
        "type": "info",
        "content": "table.move chegou no Lua 5.3. Em versões anteriores, faça loop manual ou use uma lib (Penlight tem tablex.copy)."
      }
    ]
  },
  {
    "slug": "io-lib",
    "section": "stdlib",
    "title": "Biblioteca io: arquivos",
    "difficulty": "intermediario",
    "subtitle": "Ler, escrever e iterar sobre arquivos.",
    "intro": "I/O com arquivos em Lua é direto: `io.open(caminho, modo)` devolve um handle (objeto arquivo) ou `nil, mensagem` em caso de falha. Os modos são os clássicos do C: `'r'` leitura, `'w'` escrita (zera!), `'a'` append, `'r+'`/`'w+'` leitura+escrita, com `'b'` adicional para binário (`'rb'`, `'wb'`).\n\nO handle tem métodos: `f:read(formato)` lê (`'*a'` tudo, `'*l'` uma linha, `'*n'` um número, ou um inteiro N para N bytes), `f:write(...)` escreve qualquer string ou número, `f:lines()` itera linhas, `f:close()` fecha. **Sempre feche** — ou pelo menos confie no GC, mas em programas longos isso vaza.\n\n`io.lines(arquivo)` é o açúcar perfeito para 'leia linha por linha e feche': abre, itera, fecha sozinho ao fim. Use sempre que possível.\n\nA pegadinha de novato: `io.open` falha silenciosamente. Se o arquivo não existe, ele retorna `nil`. Você precisa checar — ou usar o idioma `local f = assert(io.open(...))` para morrer com mensagem clara. Outra: em Lua 5.3+ os formatos podem ser sem o `*` (`'a'`, `'l'`, `'n'`); em 5.1/5.2 o `*` é obrigatório.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Ler arquivo inteiro\nlocal f = assert(io.open('texto.txt', 'r'))\nlocal todo = f:read('*a')\nf:close()\nprint(#todo, 'bytes')\n\n-- Linha por linha (idiomático: io.lines)\nfor linha in io.lines('arquivo.txt') do\n  print(linha)  -- io.lines fecha sozinho ao fim\nend"
      },
      {
        "lang": "lua",
        "code": "-- Escrever texto\nlocal f = assert(io.open('saida.txt', 'w'))\nf:write('linha 1\\n')\nf:write('linha 2 com número: ', 42, '\\n')\nf:close()\n\n-- Append (não apaga conteúdo existente)\nlocal log = assert(io.open('log.txt', 'a'))\nlog:write(os.date(), ' evento\\n')\nlog:close()"
      },
      {
        "lang": "lua",
        "code": "-- Binário: copiar arquivo byte a byte\nlocal function copiar(origem, destino)\n  local i = assert(io.open(origem, 'rb'))\n  local o = assert(io.open(destino, 'wb'))\n  while true do\n    local pedaco = i:read(8192)\n    if not pedaco then break end\n    o:write(pedaco)\n  end\n  i:close(); o:close()\nend"
      },
      {
        "lang": "lua",
        "code": "-- io.input/io.output: arquivo padrão (stdin/stdout)\nio.write('digite seu nome: ')\nlocal nome = io.read('*l')\nio.write('olá, ', nome, '!\\n')"
      }
    ],
    "points": [
      "io.open(caminho, modo) → handle ou (nil, msg)",
      "Modos: r, w, a, r+, w+; adicione 'b' para binário",
      "f:read('*a') tudo, '*l' linha, '*n' número, N bytes",
      "io.lines(arquivo) itera linhas e fecha automaticamente",
      "Sempre use assert(io.open(...)) para falha clara",
      "f:close() libera o handle imediatamente (não dependa do GC)",
      "Em Lua 5.3+ os formatos podem ser 'a', 'l', 'n' sem o '*'"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Modo 'w' SOBRESCREVE o arquivo do zero (truncate). Para adicionar ao final use 'a'. Bug comum: abrir log com 'w' apaga histórico inteiro."
      },
      {
        "type": "tip",
        "content": "Para grandes arquivos, leia em pedaços com f:read(N). Carregar tudo com '*a' usa memória proporcional ao arquivo."
      }
    ]
  },
  {
    "slug": "os-lib",
    "section": "stdlib",
    "title": "Biblioteca os",
    "difficulty": "intermediario",
    "subtitle": "Tempo, datas, ambiente e comandos.",
    "intro": "A biblioteca `os` é a interface portável de Lua para o sistema operacional: tempo (`time`, `clock`, `difftime`), datas (`date`), variáveis de ambiente (`getenv`), arquivos (`remove`, `rename`, `tmpname`) e até execução de comandos (`execute`, `exit`).\n\nPara tempo, `os.time()` devolve um timestamp UNIX (segundos desde 1970), `os.clock()` o tempo de CPU usado pelo programa (útil para benchmarks), e `os.difftime(t2, t1)` a diferença em segundos (em alguns sistemas o cálculo simples não é portável).\n\n`os.date(formato, time?)` formata datas com a sintaxe do `strftime` do C: `%Y` ano, `%m` mês, `%d` dia, `%H:%M:%S` hora, `%c` formato local. Sem argumento, usa hora atual. Se o formato começa com `'!'`, devolve em UTC em vez de local. Sem argumento nenhum, devolve uma string legível padrão; com `'*t'` ou `'!*t'` devolve uma **tabela** com os campos `year`, `month`, `day`, `hour`, `min`, `sec`, `wday`, `yday`, `isdst`.\n\n`os.getenv('VAR')` lê variável de ambiente. `os.execute(cmd)` roda comando do shell (devolve status). E **cuidado** com `os.execute`/`os.remove`/`os.rename`: em sandboxes e contextos web, são vetores de ataque enormes — tipicamente desabilitados.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Tempo: timestamp e datas formatadas\nprint(os.time())                  -- 1730000000 (varia)\nprint(os.date())                  -- 'Tue May 13 14:30:00 2026'\nprint(os.date('%Y-%m-%d %H:%M:%S'))  -- '2026-05-13 14:30:00'\nprint(os.date('!%Y-%m-%dT%H:%M:%SZ'))-- ISO 8601 em UTC\n\n-- Tabela de campos\nlocal t = os.date('*t')\nprint(t.year, t.month, t.day, t.hour, t.min, t.sec)"
      },
      {
        "lang": "lua",
        "code": "-- Medir duração de operação\nlocal inicio = os.time()\nfor i = 1, 1e7 do end       -- trabalho falso\nlocal fim = os.time()\nprint('demorou', os.difftime(fim, inicio), 'segundos')\n\n-- Tempo de CPU (mais preciso para benchmark)\nlocal c1 = os.clock()\nfor i = 1, 1e7 do end\nprint('cpu:', os.clock() - c1, 's')"
      },
      {
        "lang": "lua",
        "code": "-- Variáveis de ambiente\nprint(os.getenv('HOME'))      -- /home/usuario  (ou nil)\nprint(os.getenv('USER') or 'desconhecido')\n\n-- Sair do programa com código\n-- os.exit(0)   -- sucesso\n-- os.exit(1)   -- erro\n\n-- Arquivo temporário (cuidado em sistemas multi-usuário)\nlocal tmp = os.tmpname()\nprint(tmp)"
      }
    ],
    "points": [
      "os.time() — timestamp UNIX (segundos)",
      "os.date(fmt) usa sintaxe strftime; '!' no começo = UTC",
      "os.date('*t') devolve tabela {year, month, day, hour, ...}",
      "os.clock() — tempo de CPU do processo (bom para bench)",
      "os.getenv('VAR') — lê env, devolve nil se não existir",
      "os.execute(cmd) roda no shell; devolve status",
      "os.exit(codigo) encerra o programa imediatamente"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "os.execute, os.remove, os.rename: pense duas vezes antes de usar com input de usuário. São vetores clássicos de injeção e tipicamente são desabilitados em sandboxes."
      },
      {
        "type": "tip",
        "content": "Para precisão sub-segundo, os.time() não basta (resolução de 1s). Use os.clock() para benchmarks ou socket.gettime() (LuaSocket) para wall-clock preciso."
      }
    ]
  },
  {
    "slug": "io-popen",
    "section": "stdlib",
    "title": "Executando comandos do sistema",
    "difficulty": "avancado",
    "subtitle": "io.popen para capturar saída, os.execute para status.",
    "intro": "Quando você precisa rodar um programa externo a partir de Lua, há duas ferramentas. `os.execute(cmd)` simplesmente roda e devolve se foi bem-sucedido (e o código de saída em Lua 5.2+). É como bater Enter no terminal — qualquer saída do programa vai direto para o terminal do usuário.\n\n`io.popen(cmd, modo)` é mais poderosa: abre o comando como um **processo filho** e te dá um pipe. Com `'r'` (default), você lê o **stdout** do programa como se fosse um arquivo (`handle:read('*a')` para capturar tudo). Com `'w'`, você escreve no **stdin** do programa. É como `subprocess.run` do Python ou backticks de shell.\n\nA armadilha que arruína projetos: **injeção de comando**. Se você concatena input de usuário direto na string do comando, está abrindo a porta para que alguém execute coisas arbitrárias. Sanitize com escape de shell (ou use libs como `luaposix` que aceita argumentos como lista, sem shell).\n\nE sempre **feche o handle** com `:close()` — em Lua 5.2+ o close devolve o status do processo (mesma tupla que `os.execute`), permitindo saber se o programa terminou bem.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Capturar saída de um comando\nlocal handle = assert(io.popen('ls -la'))\nlocal saida = handle:read('*a')\nhandle:close()\nprint(saida)\n\n-- Versão linha por linha (mais escalável)\nfor linha in io.popen('ps aux'):lines() do\n  if linha:match('lua') then print(linha) end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Status de saída de comando\nlocal ok, motivo, codigo = os.execute('ls /nao-existe')\nprint(ok, motivo, codigo)\n-- nil  exit  2   (em Lua 5.2+)\n\n-- Em Lua 5.1, devolve só o código numérico\n-- local code = os.execute('ls /etc')\n-- print(code)  -- 0 se ok"
      },
      {
        "lang": "lua",
        "code": "-- Escrever no stdin de outro programa\nlocal sort = assert(io.popen('sort', 'w'))\nsort:write('banana\\n')\nsort:write('abacaxi\\n')\nsort:write('caqui\\n')\nsort:close()\n-- saída do sort vai direto para o stdout deste programa"
      },
      {
        "lang": "lua",
        "code": "-- Helper SEGURO: escape de shell\nlocal function esc(s)\n  return \"'\" .. s:gsub(\"'\", \"'\\\\''\") .. \"'\"\nend\n\nlocal nome = \"arq;rm -rf /\"  -- input malicioso\n-- ERRADO: io.popen('cat ' .. nome)\n-- CERTO:\nlocal cmd = 'cat ' .. esc(nome)\n-- Mesmo assim: prefira luaposix com lista de args"
      }
    ],
    "points": [
      "os.execute(cmd) — roda e devolve status (sem capturar saída)",
      "io.popen(cmd, 'r') — lê stdout do comando como arquivo",
      "io.popen(cmd, 'w') — escreve no stdin do comando",
      "Sempre feche o handle com :close() para evitar zumbis",
      "Em Lua 5.2+, close devolve (true|nil, 'exit'|'signal', codigo)",
      "PERIGO: concatenar input de usuário no comando = injeção",
      "Escape com aspas simples ou use lib que aceita argv como lista"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Nunca, jamais, faça io.popen('cmd ' .. input_usuario). Use escape rigoroso ou prefira libs (luaposix, lpeg/lua-shell) que executam sem passar pelo shell."
      },
      {
        "type": "tip",
        "content": "Para capturar stderr também, redirecione no comando: io.popen(cmd .. ' 2>&1'). Stderr separado exige libs externas (luaposix.posix.popen2/popen3)."
      }
    ]
  },
  {
    "slug": "debug-lib",
    "section": "stdlib",
    "title": "Biblioteca debug",
    "difficulty": "avancado",
    "subtitle": "Introspecção poderosa — use com responsabilidade.",
    "intro": "A biblioteca `debug` é a janela de Lua para si mesma. Com ela, você inspeciona a pilha de chamadas (`getinfo`), lê e escreve variáveis locais (`getlocal`/`setlocal`), upvalues (`getupvalue`/`setupvalue`), instala hooks que disparam a cada chamada/linha/retorno (`sethook`), e claro, gera traces (`traceback`).\n\nÉ a base para construir **debuggers**, **profilers**, **hot-reload** e ferramentas de erro ricas. Frameworks como `MobDebug`, `LuaDist`, `busted` (testes) usam pesado.\n\nPorém, a doc oficial é explícita: a `debug` viola encapsulamento, pode ser custosa, e em sandboxes (cargas de plugins não confiáveis, web) tipicamente é **removida**. A regra é: use em ferramentas de desenvolvimento, **não** em código de aplicação. Não construa lógica de negócio em cima dela.\n\n`debug.getinfo(nivel_ou_func, what)` é a peça central — devolve uma tabela com `source`, `currentline`, `name`, `nups`, `what` (Lua/C/main), conforme as letras pedidas em `what` (`'n'` nome, `'S'` source, `'l'` linha, `'u'` upvalues, etc.). Você pode pedir do nível 1 (chamador), 2 (avô), e assim por diante.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Trace básico (sem erro)\nprint(debug.traceback('--- aqui ---', 1))\n\n-- Info da função atual\nlocal info = debug.getinfo(1, 'nSl')\nprint(info.source)       -- @arquivo.lua\nprint(info.currentline)  -- linha atual\nprint(info.what)         -- Lua / C / main"
      },
      {
        "lang": "lua",
        "code": "-- Listar variáveis locais do CHAMADOR\nlocal function dump_locais()\n  print('--- locais do chamador ---')\n  local i = 1\n  while true do\n    local nome, valor = debug.getlocal(2, i)\n    if not nome then break end\n    print(i, nome, '=', tostring(valor))\n    i = i + 1\n  end\nend\n\nlocal function exemplo()\n  local a = 10\n  local b = 'oi'\n  dump_locais()\nend\nexemplo()"
      },
      {
        "lang": "lua",
        "code": "-- Hook por linha (mini tracer)\nlocal function tracer(evento, linha)\n  local info = debug.getinfo(2, 'S')\n  print(evento, info.short_src, linha)\nend\n\ndebug.sethook(tracer, 'l')   -- 'l' = linha; 'c'=call, 'r'=return\n-- ... código a ser monitorado ...\ndebug.sethook()              -- desliga"
      }
    ],
    "points": [
      "debug.traceback(msg?, nivel?) → string com a pilha",
      "debug.getinfo(nivel, what) → metadados de uma função",
      "debug.getlocal/setlocal acessa variáveis locais por índice",
      "debug.getupvalue/setupvalue mexe nos upvalues de closures",
      "debug.sethook instala callback em call/return/line/count",
      "Pode estar desabilitada em sandboxes (LÖVE web, OpenResty etc.)",
      "Use em ferramentas (debugger, profiler, logger), não em produção"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Hooks de linha (sethook com 'l') são CAROS — disparam a cada linha executada. Útil para debug e profiling, devastador para performance se esquecer ligado."
      },
      {
        "type": "info",
        "content": "Em ambientes de segurança restrita (Roblox, OpenResty com unsafe code), debug.* costuma ser parcial ou totalmente removido por padrão."
      }
    ]
  },
  {
    "slug": "bit32-bit",
    "section": "stdlib",
    "title": "Operações de bits",
    "difficulty": "intermediario",
    "subtitle": "Bitwise: nativo em 5.3+, lib em LuaJIT.",
    "intro": "Operações bit-a-bit (AND, OR, XOR, shift) são essenciais para flags, máscaras de protocolo, parsing binário, hash, criptografia. Em Lua a história é fragmentada por versão — algo que confunde quem migra entre runtimes.\n\nNa **Lua 5.3+** existem operadores nativos: `&` (AND), `|` (OR), `~` (XOR binário ou NOT unário), `<<` (shift esquerda), `>>` (shift direita). Eles trabalham em **inteiros de 64 bits** com `math.maxinteger` como limite. É o jeito moderno e direto.\n\nNa **Lua 5.2**, havia uma biblioteca chamada `bit32` (32 bits sem sinal). Foi marcada como deprecated em 5.3 e removida em 5.4.\n\nNa **Lua 5.1 / LuaJIT**, não há operadores nem `bit32` — a convenção é a biblioteca `bit` (BitOp), distribuída com LuaJIT e disponível como rock para Lua 5.1. Funções: `bit.band`, `bit.bor`, `bit.bxor`, `bit.bnot`, `bit.lshift`, `bit.rshift`, `bit.arshift`. Trabalha em 32 bits.\n\nSe você escreve código portátil, faça um shim no topo do arquivo que expõe uma única API.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Lua 5.3+: operadores nativos (64 bits inteiros)\nprint(0xFF & 0x0F)    -- 15\nprint(0x0F | 0xF0)    -- 255\nprint(0xFF ~ 0x0F)    -- 240   (XOR)\nprint(~0)             -- -1    (NOT, complemento)\nprint(1 << 4)         -- 16\nprint(256 >> 2)       -- 64"
      },
      {
        "lang": "lua",
        "code": "-- Lua 5.1 / LuaJIT: lib 'bit'\nlocal bit = require 'bit'\nprint(bit.band(0xFF, 0x0F))   -- 15\nprint(bit.bor(0x0F, 0xF0))    -- 255\nprint(bit.bxor(0xFF, 0x0F))   -- 240\nprint(bit.bnot(0))            -- -1\nprint(bit.lshift(1, 4))       -- 16\nprint(bit.rshift(256, 2))     -- 64"
      },
      {
        "lang": "lua",
        "code": "-- Caso prático: flags com máscaras\nlocal LER    = 0x01  -- bit 0\nlocal ESCREVER = 0x02  -- bit 1\nlocal EXEC   = 0x04  -- bit 2\n\nlocal permissoes = LER | ESCREVER  -- 3\n\n-- Tem permissão de escrita?\nif (permissoes & ESCREVER) ~= 0 then print('pode escrever') end\n\n-- Adicionar permissão de exec\npermissoes = permissoes | EXEC\n\n-- Remover permissão de leitura\npermissoes = permissoes & ~LER"
      },
      {
        "lang": "lua",
        "code": "-- Shim portátil (5.1, JIT, 5.3+)\nlocal bit = bit32 or require 'bit'  -- nil em 5.3+\nlocal band = bit and bit.band or function(a, b) return a & b end\nlocal bor  = bit and bit.bor  or function(a, b) return a | b end\n-- ... use band(x, y), bor(x, y) ..."
      }
    ],
    "points": [
      "Lua 5.3+: operadores nativos & | ~ << >> em inteiros 64-bit",
      "~ é XOR binário (a ~ b) e NOT unário (~a)",
      "Lua 5.2: biblioteca bit32 (deprecated em 5.3, removida em 5.4)",
      "Lua 5.1 / LuaJIT: usa lib 'bit' (BitOp): band, bor, bxor, ...",
      "Lib 'bit' opera em 32 bits; nativos em 5.3+ operam em 64",
      "Para flags: OR adiciona, AND testa/limpa-com-NOT, XOR alterna",
      "Código portátil precisa de shim verificando versão"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "LuaJIT está em Lua 5.1 (com algumas extensões 5.2). Se seu projeto usa LuaJIT, esqueça operadores nativos e use a lib 'bit'."
      },
      {
        "type": "warning",
        "content": "Em Lua 5.3+, aplicar operadores bitwise em float gera erro se o número não tiver representação inteira exata. Garanta math.tointeger ou floor antes."
      }
    ]
  },
  {
    "slug": "json-cjson",
    "section": "stdlib",
    "title": "JSON com lua-cjson",
    "difficulty": "intermediario",
    "subtitle": "Trocando dados com o resto do mundo.",
    "intro": "Lua não traz JSON na biblioteca padrão — uma decisão polêmica, mas coerente com a filosofia minimalista. Para qualquer coisa séria você instala uma lib via LuaRocks. As duas mais comuns são `lua-cjson` (rapidíssima, escrita em C) e `dkjson` (Lua puro, mais lenta mas portável e com pretty-print).\n\nA API é direta: `encode` transforma valor Lua em string JSON, `decode` faz o inverso. Tipos mapeiam de forma intuitiva: nil↔null, boolean↔boolean, number↔number, string↔string, array-table↔array, hash-table↔object.\n\nA grande pegadinha é a **ambiguidade de tabelas vazias**. Em Lua, `{}` pode ser array vazio ou objeto vazio — o JSON precisa decidir. `lua-cjson` por padrão emite `{}` (objeto). Se você quer array, configure `cjson.encode_empty_table_as_object(false)` ou use o sentinel `cjson.empty_array`. Bug clássico ao integrar com APIs JS que esperam `[]`.\n\nOutra: arrays JSON são 0-indexados, Lua é 1-indexado. As libs traduzem isso automaticamente. E **buracos** em arrays Lua (índice numérico faltando) podem ser tratados de formas diferentes — alguns interpretam como objeto, outros preenchem com null. Cheque a doc da lib.",
    "codes": [
      {
        "lang": "lua",
        "code": "local json = require 'cjson'\n\n-- Lua → JSON\nlocal s = json.encode({\n  nome = 'Ana',\n  idade = 30,\n  tags = {'lua', 'web'},\n  ativo = true,\n  endereco = nil\n})\nprint(s)\n-- {\"nome\":\"Ana\",\"idade\":30,\"tags\":[\"lua\",\"web\"],\"ativo\":true}"
      },
      {
        "lang": "lua",
        "code": "-- JSON → Lua\nlocal json = require 'cjson'\nlocal t = json.decode('{\"x\":10,\"y\":[1,2,3],\"ok\":true}')\nprint(t.x)         -- 10\nprint(t.y[2])      -- 2\nprint(t.ok)        -- true\n\n-- Erro: input inválido lança\nlocal ok, err = pcall(json.decode, 'isso não é json')\nprint(ok, err)     -- false  ...: Expected ..."
      },
      {
        "lang": "lua",
        "code": "-- Pretty-print com dkjson\nlocal dk = require 'dkjson'\nprint(dk.encode({a=1, b={2,3}}, {indent=true}))\n-- {\n--   \"a\": 1,\n--   \"b\": [2, 3]\n-- }"
      },
      {
        "lang": "lua",
        "code": "-- A pegadinha das tabelas vazias\nlocal cjson = require 'cjson'\n\nprint(cjson.encode({}))   -- '{}' (objeto, default)\n\n-- Forçar como array\nlocal arr = cjson.empty_array_mt and\n  setmetatable({}, cjson.empty_array_mt) or {}\nprint(cjson.encode({lista = arr}))  -- {\"lista\":[]}\n\n-- ou (lua-cjson 2.x):\n-- cjson.encode_empty_table_as_object(false)"
      }
    ],
    "points": [
      "Lua não tem JSON nativo — instale via luarocks",
      "lua-cjson: mais rápida (em C); dkjson: portável, com pretty-print",
      "encode(valor) → string; decode(string) → valor",
      "Tabela vazia {} é AMBÍGUA — vira objeto por default",
      "Use cjson.empty_array_mt ou flag para forçar []",
      "decode lança erro em JSON inválido — proteja com pcall",
      "Buracos em arrays podem virar null ou abortar — depende da lib"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "A ambiguidade de tabela vazia é a fonte #1 de bugs ao integrar com APIs JavaScript. Sempre teste se sua API está enviando [] e não {} para listas vazias."
      },
      {
        "type": "tip",
        "content": "Para código portátil sem dependência nativa, use dkjson (Lua puro). Para servidor de alta performance (OpenResty), use lua-cjson — é a stack padrão."
      }
    ]
  },
  {
    "slug": "love-intro",
    "section": "love2d",
    "title": "Introdução ao LÖVE 2D",
    "difficulty": "intermediario",
    "subtitle": "O framework de jogos 2D mais querido do ecossistema Lua.",
    "intro": "Quando alguém aprende Lua e pergunta \"e agora, o que faço com isso?\", a resposta mais comum é: faça um jogo com LÖVE. O framework existe desde 2008, é gratuito, open source (zlib), e tem uma curva de aprendizado tão suave que dá para colocar um quadrado se mexendo na tela em menos de dez linhas.\n\nLÖVE não é uma engine completa como Unity ou Godot — não tem editor visual, cena, hierarquia de nós. Ele é um **framework**: te entrega janela, loop principal, gráficos 2D acelerados (OpenGL), áudio, entrada e física Box2D. O resto do jogo, você escreve em Lua puro. Isso assusta no começo, mas é exatamente o que dá liberdade.\n\nA forma de trabalhar é simples: você cria uma pasta com um arquivo `main.lua`, define algumas funções que o LÖVE vai chamar (load, update, draw) e roda `love .` no terminal. Sem build, sem compilar, sem configurar projeto.\n\nLÖVE roda no Windows, macOS, Linux, Android e iOS com o mesmo código. A comunidade está concentrada no fórum oficial, no subreddit /r/love2d e no Discord — todos extremamente acolhedores com iniciantes.",
    "codes": [
      {
        "lang": "bash",
        "code": "# Instalar o LÖVE\n# macOS (Homebrew)\nbrew install --cask love\n\n# Ubuntu / Debian\nsudo apt install love\n\n# Windows: baixe o instalador em https://love2d.org\n\n# Verificar versão\nlove --version  -- saída esperada: LOVE 11.5 (Mysterious Mysteries)"
      },
      {
        "lang": "lua",
        "code": "-- main.lua (o menor jogo LÖVE possível)\nfunction love.draw()\n  -- desenha texto na posição (300, 280)\n  love.graphics.print('Olá, LÖVE!', 300, 280)\nend"
      },
      {
        "lang": "bash",
        "code": "# Rodar o projeto\ncd minha-pasta-do-jogo\nlove .                 # roda a pasta atual\nlove jogo.love         # roda um arquivo .love (ZIP)\nlove --console main.lua  # Windows: abre console p/ ver print()"
      }
    ],
    "points": [
      "LÖVE é framework, não engine: sem editor visual",
      "Multiplataforma: Win, Mac, Linux, Android, iOS",
      "Basta um main.lua e rodar 'love .' — zero config",
      "Versão atual estável é a 11.x (cores 0..1)",
      "Distribuição final é um arquivo .love (ZIP)",
      "Gráficos via OpenGL, áudio via OpenAL, física via Box2D",
      "Ideal para protótipos, game jams e jogos indie 2D"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Comece pelo wiki oficial (love2d.org/wiki) e pelos exemplos do Sheepolution (\"How to LÖVE\"). São os melhores recursos gratuitos para iniciantes."
      },
      {
        "type": "info",
        "content": "Cores mudaram de 0..255 (LÖVE 0.10) para 0..1 (LÖVE 11+). Tutoriais antigos podem usar a escala antiga."
      }
    ]
  },
  {
    "slug": "love-callbacks",
    "section": "love2d",
    "title": "Callbacks do LÖVE: load, update, draw",
    "difficulty": "intermediario",
    "subtitle": "O ciclo de vida que move qualquer jogo LÖVE.",
    "intro": "Todo jogo, no fundo, é um loop infinito: ler entrada, atualizar o mundo, desenhar, repetir 60 vezes por segundo. O LÖVE já implementa esse loop para você. O que você faz é **preencher os ganchos** que ele chama em cada etapa.\n\nOs três principais são `love.load()`, chamado uma única vez quando o jogo inicia (use para carregar imagens, sons, criar variáveis); `love.update(dt)`, chamado a cada frame com o tempo decorrido em segundos desde o último frame; e `love.draw()`, chamado logo depois para desenhar tudo na tela.\n\nO grande detalhe pedagógico é o `dt` (delta time). Se o jogador tem PC potente rodando a 240 FPS e outro está em 30 FPS, mover \"5 pixels por frame\" faz o primeiro voar e o segundo se arrastar. A solução é multiplicar a **velocidade desejada por segundo** pelo `dt`: `x = x + 200 * dt` significa \"200 pixels por segundo\", independente do FPS.\n\nUma pegadinha: `love.draw` **não recebe** `dt`. Toda lógica de movimento mora em `update`; `draw` só desenha o estado atual. Misturar isso é a fonte número 1 de bugs estranhos para iniciantes.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- main.lua: o esqueleto canônico\nfunction love.load()\n  print('chamada uma única vez no início')\n  jogador = { x = 100, y = 300, vel = 200 }  -- 200 px/s\nend\n\nfunction love.update(dt)\n  -- dt vem em segundos: ~0.0166 a 60 FPS\n  jogador.x = jogador.x + jogador.vel * dt\nend\n\nfunction love.draw()\n  love.graphics.rectangle('fill', jogador.x, jogador.y, 50, 50)\nend"
      },
      {
        "lang": "lua",
        "code": "-- ERRADO: depende do FPS\nfunction love.update(dt)\n  jogador.x = jogador.x + 5  -- 5 px por FRAME (varia!)\nend\n\n-- CERTO: independente do FPS\nfunction love.update(dt)\n  jogador.x = jogador.x + 300 * dt  -- 300 px por SEGUNDO\nend"
      },
      {
        "lang": "lua",
        "code": "-- Outros callbacks úteis\nfunction love.quit()\n  print('o jogo está sendo fechado')\n  -- retornar true cancela o quit\nend\n\nfunction love.resize(w, h)\n  print('janela redimensionada para', w, 'x', h)\nend\n\nfunction love.focus(temFoco)\n  if not temFoco then print('jogo perdeu foco — pause aqui') end\nend"
      }
    ],
    "points": [
      "love.load roda 1 vez; update e draw rodam por frame",
      "dt = segundos desde o último frame (sempre float)",
      "Velocidade * dt deixa o jogo FPS-independente",
      "love.draw NÃO recebe dt — não faça lógica nele",
      "love.quit pode cancelar o fechamento se retornar true",
      "love.run é o loop em si — só sobrescreva se souber o que faz",
      "Variáveis criadas em load com 'local' não enxergam fora — use globais ou módulos"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Esquecer de multiplicar por dt é o bug clássico de quem está começando. O jogo \"funciona\" no seu PC e fica injogável no de outra pessoa."
      },
      {
        "type": "tip",
        "content": "Para limitar o FPS use love.window.setMode com vsync ativado, ou love.timer.sleep no fim do love.update."
      }
    ]
  },
  {
    "slug": "love-input",
    "section": "love2d",
    "title": "Entrada: teclado, mouse, gamepad",
    "difficulty": "intermediario",
    "subtitle": "Reagindo ao jogador de forma correta.",
    "intro": "Existem duas perguntas distintas que todo jogo precisa responder: \"o jogador está **segurando** essa tecla agora?\" e \"o jogador **acabou de tocar** nessa tecla?\". Confundir as duas é a causa de coisas como pular dez vezes ao apertar espaço uma vez.\n\nNo LÖVE, segurar é consultado dentro do `love.update` com `love.keyboard.isDown('right')`. Já o evento de \"acabou de tocar\" chega via callback `love.keypressed(tecla)`, disparado uma única vez no instante do clique. A regra prática: movimento contínuo (andar, mirar) usa `isDown`; ações pontuais (pular, atirar, abrir menu) usam `keypressed`.\n\nO mesmo vale para mouse: `love.mouse.isDown(1)` para botão segurado, `love.mousepressed(x, y, botao)` para clique único. Para gamepad existe `love.gamepad.isDown` e `love.gamepadpressed`, com nomes padronizados estilo Xbox (\"a\", \"b\", \"x\", \"y\", \"leftshoulder\"...).\n\nNomes de teclas seguem o padrão SDL: `'space'`, `'return'` (Enter), `'lshift'`, `'rctrl'`, `'left'`, `'up'`, `'a'`, `'1'`, `'kp1'` (numpad). Lista completa está no wiki em KeyConstant.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Movimento contínuo: use isDown dentro de update\nfunction love.update(dt)\n  local v = 200 * dt\n  if love.keyboard.isDown('right') then jogador.x = jogador.x + v end\n  if love.keyboard.isDown('left')  then jogador.x = jogador.x - v end\n  if love.keyboard.isDown('up')    then jogador.y = jogador.y - v end\n  if love.keyboard.isDown('down')  then jogador.y = jogador.y + v end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Ações pontuais: use keypressed\nfunction love.keypressed(tecla, scancode, repetiu)\n  if tecla == 'space' then\n    pular()                   -- dispara 1 vez\n  elseif tecla == 'escape' then\n    love.event.quit()          -- fecha o jogo\n  end\nend\n\nfunction love.keyreleased(tecla)\n  if tecla == 'space' then print('soltou o espaço') end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Mouse: posição, clique e gamepad\nfunction love.update(dt)\n  local mx, my = love.mouse.getPosition()\n  mira.x, mira.y = mx, my\nend\n\nfunction love.mousepressed(x, y, botao)\n  -- botao: 1=esquerdo, 2=direito, 3=meio\n  if botao == 1 then atirar(x, y) end\nend\n\nfunction love.gamepadpressed(joystick, botao)\n  if botao == 'a' then pular() end\nend"
      }
    ],
    "points": [
      "isDown = está SEGURANDO agora (use em update)",
      "keypressed = ACABOU DE APERTAR (callback, 1 vez)",
      "love.event.quit() fecha o jogo de qualquer lugar",
      "Nomes de teclas seguem SDL: 'space', 'lshift', 'kp0'",
      "Mouse: botões 1=esq, 2=dir, 3=meio",
      "Gamepad usa nomes padronizados ('a', 'b', 'leftshoulder')",
      "love.keypressed recebe um 3º arg 'repetiu' (auto-repeat)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Em vez de checar 'right' direto, mapeie ações: input.move_right pode ser 'right' OU 'd' OU gamepad. Facilita rebind."
      },
      {
        "type": "warning",
        "content": "love.textinput é diferente de love.keypressed: o primeiro respeita layout do teclado e composição (acentos), use-o para campos de texto."
      }
    ]
  },
  {
    "slug": "love-graphics",
    "section": "love2d",
    "title": "Desenho com love.graphics",
    "difficulty": "intermediario",
    "subtitle": "Primitivas, cores e o estado do canvas.",
    "intro": "Tudo que aparece na tela do LÖVE passa por `love.graphics`. As primitivas básicas são `rectangle`, `circle`, `line`, `polygon`, `arc`, `print` (texto) e `draw` (imagem). Cada uma aceita o modo `'fill'` (preenchido) ou `'line'` (só contorno).\n\nO conceito mais importante de entender é que `love.graphics` é **stateful**: chamar `setColor(1, 0, 0)` deixa o vermelho ativo até alguém trocar. O mesmo vale para fonte, espessura de linha, blend mode, transformações. Se um quadrado seu apareceu vermelho \"sem motivo\", quase certo é que outra função desenhou de vermelho antes e ninguém resetou.\n\nCores no LÖVE 11+ vão de 0 a 1 (não 0..255). `setColor(1, 1, 1)` é branco, `(0, 0, 0)` é preto, e o quarto argumento é alpha (transparência). Tutoriais antigos da era 0.10 usam 0..255 — fique atento.\n\nO sistema de coordenadas tem (0,0) no canto superior esquerdo, eixo Y crescendo para baixo (estilo tela, não estilo matemática). A janela padrão é 800x600.",
    "codes": [
      {
        "lang": "lua",
        "code": "function love.draw()\n  -- Cores em escala 0..1 (não 0..255)\n  love.graphics.setColor(1, 0.5, 0)         -- laranja\n  love.graphics.rectangle('fill', 100, 100, 80, 50)\n\n  love.graphics.setColor(0, 1, 0, 0.5)       -- verde 50% transparente\n  love.graphics.circle('line', 250, 125, 40)\n\n  love.graphics.setColor(1, 1, 1)            -- volta pro branco\n  love.graphics.line(50, 200, 400, 200)\n  love.graphics.print('FPS: '..love.timer.getFPS(), 10, 10)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Polígono e largura de linha\nfunction love.draw()\n  love.graphics.setLineWidth(4)\n  love.graphics.setColor(0.2, 0.6, 1)\n  -- triângulo: x1,y1, x2,y2, x3,y3\n  love.graphics.polygon('fill', 200, 50, 150, 150, 250, 150)\n\n  -- arco (pizza): cx, cy, raio, ang_ini, ang_fim\n  love.graphics.arc('fill', 400, 100, 60, 0, math.pi)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Salvar e restaurar estado: push/pop evita 'cor vazada'\nfunction desenharMira(x, y)\n  love.graphics.push('all')               -- salva TUDO\n  love.graphics.setColor(1, 0, 0)\n  love.graphics.setLineWidth(2)\n  love.graphics.circle('line', x, y, 10)\n  love.graphics.line(x-15, y, x+15, y)\n  love.graphics.line(x, y-15, x, y+15)\n  love.graphics.pop()                      -- restaura\nend"
      }
    ],
    "points": [
      "Cores no LÖVE 11+ vão de 0 a 1 (não 0..255)",
      "Modo 'fill' preenche; 'line' só contorna",
      "setColor é stateful: afeta tudo até trocar",
      "Coordenada (0,0) é canto superior esquerdo, Y cresce p/ baixo",
      "love.graphics.push/pop salva e restaura o estado",
      "love.timer.getFPS() mostra o FPS atual",
      "setLineWidth muda a espessura para line/polygon('line')"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Sempre que mudar cor para um efeito específico, use love.graphics.push('all') antes e pop() depois. Evita o clássico bug de \"tudo virou vermelho\"."
      },
      {
        "type": "info",
        "content": "Se você usa imagens com cor original e elas saem tingidas, é porque setColor afeta também love.graphics.draw. Resete para (1,1,1,1) antes."
      }
    ]
  },
  {
    "slug": "love-imagens-sprites",
    "section": "love2d",
    "title": "Imagens e sprites",
    "difficulty": "intermediario",
    "subtitle": "Carregando texturas e desenhando com transformações.",
    "intro": "Imagens no LÖVE são objetos chamados `Image`, criados com `love.graphics.newImage('arquivo.png')`. A regra de ouro é **carregar uma única vez** dentro de `love.load`, e nunca dentro de `update` ou `draw` — carregar disco a 60 FPS trava qualquer máquina.\n\nO desenho é feito com `love.graphics.draw(imagem, x, y, rot, sx, sy, ox, oy)`. Os parâmetros depois de x,y são opcionais: `rot` é rotação em radianos, `sx`/`sy` são fatores de escala (1 = tamanho original, 2 = dobro, -1 = espelhado), e `ox`/`oy` são a **origem** — o ponto da imagem que cai exatamente em (x,y) e em torno do qual ela rotaciona.\n\nO detalhe que pega todo iniciante: por padrão a origem é (0,0), o canto superior esquerdo. Se você quer girar um sprite em torno do centro, precisa passar `ox = imagem:getWidth()/2, oy = imagem:getHeight()/2`. Sem isso, ele orbita esquisito.\n\nFormatos suportados: PNG (recomendado, com transparência), JPG (sem alpha), e poucos outros. Para jogos com dezenas de sprites, junte tudo em um único PNG (atlas / sprite sheet) e use `love.graphics.newQuad` para recortar — economiza muita performance de GPU.",
    "codes": [
      {
        "lang": "lua",
        "code": "function love.load()\n  -- carrega 1 vez, no início\n  player_img = love.graphics.newImage('player.png')\n  player_img:setFilter('nearest', 'nearest')  -- pixel art nítido\nend\n\nfunction love.draw()\n  -- básico: x, y\n  love.graphics.draw(player_img, 100, 100)\n\n  -- escala 2x\n  love.graphics.draw(player_img, 200, 100, 0, 2, 2)\n\n  -- girando em torno do centro\n  local w, h = player_img:getDimensions()\n  love.graphics.draw(player_img, 400, 200, math.pi/4, 1, 1, w/2, h/2)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Sprite sheet: 1 imagem com vários quadros\nfunction love.load()\n  sheet = love.graphics.newImage('chars.png')  -- 256x32, 8 frames de 32x32\n  quads = {}\n  for i = 0, 7 do\n    quads[i+1] = love.graphics.newQuad(\n      i*32, 0,        -- recorte: x, y\n      32, 32,         -- tamanho do quadro\n      sheet:getDimensions()\n    )\n  end\n  frame = 1\nend\n\nfunction love.draw()\n  love.graphics.draw(sheet, quads[frame], 100, 100)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Espelhar horizontalmente (vira pra esquerda)\nfunction desenhar(player, virado)\n  local sx = virado and -1 or 1\n  local ox = virado and player.img:getWidth() or 0\n  love.graphics.draw(player.img, player.x, player.y, 0, sx, 1, ox, 0)\nend"
      }
    ],
    "points": [
      "Carregue imagens em love.load — NUNCA em update/draw",
      "draw(img, x, y, rot, sx, sy, ox, oy) é a assinatura completa",
      "ox/oy = origem: ponto que fica em (x,y) e centro de rotação",
      "Escala negativa espelha (sx=-1 vira horizontalmente)",
      "Para pixel art use img:setFilter('nearest', 'nearest')",
      "Quad recorta uma região da imagem (sprite sheet)",
      "Atlas/spritesheet > muitas imagens (menos draw calls)"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Chamar love.graphics.newImage dentro de love.update vai recarregar do disco a cada frame. O FPS despenca para zero em segundos."
      },
      {
        "type": "tip",
        "content": "Para jogos pixel art, sempre use setFilter('nearest','nearest') na imagem ou love.graphics.setDefaultFilter('nearest','nearest') no load. Senão tudo vira borrão."
      }
    ]
  },
  {
    "slug": "love-audio",
    "section": "love2d",
    "title": "Som: efeitos e música",
    "difficulty": "intermediario",
    "subtitle": "Diferença entre 'static' e 'stream' — e quando usar cada um.",
    "intro": "Áudio no LÖVE gira em torno do objeto `Source`, criado com `love.audio.newSource(arquivo, modo)`. O segundo parâmetro é o que confunde todo iniciante: `'static'` ou `'stream'`.\n\nUm Source `'static'` carrega o arquivo **inteiro descomprimido na RAM** e é instantâneo de tocar. Perfeito para efeitos curtos (pulo, tiro, moeda) que tocam várias vezes por segundo. Um Source `'stream'` lê o arquivo do disco aos poucos, conforme toca — gasta pouquíssima RAM mas tem latência inicial. Use para músicas longas (1-5 minutos).\n\nFormatos: **OGG Vorbis** é o padrão recomendado (compressão boa, sem royalties, perfeito para música). **WAV** é cru, sem compressão — bom para efeitos curtos onde o tamanho não importa. MP3 funciona, mas evite por questões legais e por bug histórico de loop imperfeito.\n\nUma pegadinha clássica: chamar `som:play()` enquanto o som anterior ainda está tocando faz o segundo ser **ignorado**. Para um efeito tocar várias vezes simultaneamente (vários tiros), clone o Source: `som:clone():play()`. Para músicas, sempre `setLooping(true)` e `setVolume()` separado dos efeitos.",
    "codes": [
      {
        "lang": "lua",
        "code": "function love.load()\n  -- efeitos curtos: 'static' (na RAM, latência zero)\n  pulo_snd = love.audio.newSource('pulo.wav', 'static')\n  pulo_snd:setVolume(0.7)\n\n  -- música longa: 'stream' (lê do disco aos poucos)\n  musica = love.audio.newSource('musica.ogg', 'stream')\n  musica:setLooping(true)\n  musica:setVolume(0.4)\n  musica:play()\nend\n\nfunction love.keypressed(tecla)\n  if tecla == 'space' then pulo_snd:play() end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Vários tiros sobrepostos: clone o Source\nfunction atirar()\n  -- :clone() é barato em 'static' (compartilha buffer)\n  tiro_snd:clone():play()\nend\n\n-- Pausar tudo (menu/pause global)\nfunction love.focus(temFoco)\n  if temFoco then love.audio.play(musica)\n  else            love.audio.pause()        -- pausa tudo\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Áudio espacial 3D simples (pan stereo)\ntiro:setRelative(false)\ntiro:setPosition(inimigo.x, 0, 0)   -- fonte\nlove.audio.setPosition(jogador.x, 0, 0)  -- ouvinte\ntiro:play()  -- agora soa mais à esquerda/direita conforme posição"
      }
    ],
    "points": [
      "'static' = RAM, instantâneo (efeitos)",
      "'stream' = disco, baixa latência criar (música)",
      "OGG p/ música, WAV p/ efeitos curtos — evite MP3",
      "som:play() em som já tocando NÃO refaz — clone()",
      "setLooping(true) faz a música repetir",
      "setVolume usa escala 0..1; setPitch muda tom (1 = normal)",
      "love.audio.pause/play (sem arg) pausa/resume tudo"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Carregar uma música de 4 minutos como 'static' descomprime tudo na RAM (pode dar 50+ MB). Use 'stream' para arquivos longos."
      },
      {
        "type": "tip",
        "content": "Mantenha dois canais de volume no menu de opções: música e SFX. Os jogadores adoram poder mutar a música sem perder os efeitos."
      }
    ]
  },
  {
    "slug": "love-textos-fontes",
    "section": "love2d",
    "title": "Texto e fontes",
    "difficulty": "intermediario",
    "subtitle": "Como renderizar texto bonito e legível.",
    "intro": "Por padrão o LÖVE desenha texto com a fonte Vera Sans em ~12pt — funcional, mas feia para qualquer jogo sério. Para personalizar, carregue um arquivo TTF (ou OTF) com `love.graphics.newFont('arquivo.ttf', tamanho)` e ative com `setFont(fonte)`.\n\nDuas funções desenham texto: `love.graphics.print(texto, x, y)` é o jeito direto, sem quebra de linha automática. `love.graphics.printf(texto, x, y, largura, alinhamento)` é mais poderoso: quebra linha sozinho dentro da largura dada e alinha em `'left'`, `'right'`, `'center'` ou `'justify'`.\n\nFontes carregadas custam memória (cada tamanho é um atlas de glifos diferente). Não recrie em `update` — carregue em `load` e guarde. Se precisa de vários tamanhos, crie vários objetos: `fonte_pequena`, `fonte_grande`.\n\nPara pixel art, use **fontes bitmap** com `love.graphics.newImageFont('font.png', ' abc...')` ou ative filtro `'nearest'` na fonte TTF (`fonte:setFilter('nearest','nearest')`). Para suporte a acentos em português, basta usar uma TTF Unicode (qualquer fonte moderna serve) — o LÖVE aceita UTF-8 nativamente.",
    "codes": [
      {
        "lang": "lua",
        "code": "function love.load()\n  fonte_titulo = love.graphics.newFont('Roboto-Bold.ttf', 48)\n  fonte_padrao = love.graphics.newFont('Roboto-Regular.ttf', 18)\nend\n\nfunction love.draw()\n  love.graphics.setFont(fonte_titulo)\n  love.graphics.setColor(1, 1, 0)\n  love.graphics.print('MEU JOGO', 100, 50)\n\n  love.graphics.setFont(fonte_padrao)\n  love.graphics.setColor(1, 1, 1)\n  love.graphics.print('Pontos: 100', 10, 10)\nend"
      },
      {
        "lang": "lua",
        "code": "-- printf: alinhamento e quebra automática\nfunction love.draw()\n  local w = love.graphics.getWidth()\n  love.graphics.printf('Texto centralizado!', 0, 100, w, 'center')\n  love.graphics.printf('À direita...',        0, 130, w, 'right')\n\n  -- texto longo quebra sozinho dentro de 'largura'\n  local lore = 'Em uma terra distante existia um pequeno reino...'\n  love.graphics.printf(lore, 50, 200, 300, 'left')\nend"
      },
      {
        "lang": "lua",
        "code": "-- Medir texto antes de desenhar (centralizar manualmente)\nlocal fonte = love.graphics.getFont()\nlocal txt = 'GAME OVER'\nlocal w = fonte:getWidth(txt)\nlocal h = fonte:getHeight()\nlove.graphics.print(txt,\n  (love.graphics.getWidth()  - w) / 2,\n  (love.graphics.getHeight() - h) / 2)"
      }
    ],
    "points": [
      "newFont('arquivo.ttf', tamanho) — embuta a TTF no jogo",
      "setFont seleciona; afeta print/printf seguintes",
      "printf quebra linha e alinha (left/right/center/justify)",
      "Cada tamanho carrega um atlas — não exagere nas variações",
      "Para pixel art: setFilter('nearest','nearest') na fonte",
      "fonte:getWidth(s) e :getHeight() ajudam a centralizar",
      "Acentos em UTF-8 funcionam nativamente"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Cheque a licença da fonte antes de embutir no jogo. Google Fonts (SIL OFL) e fontes da pasta 1001fonts.com com tag \"free for commercial use\" são seguras."
      },
      {
        "type": "warning",
        "content": "Não chame newFont dentro de love.draw — gera atlas novo a cada frame e mata o FPS. Sempre carregue em love.load."
      }
    ]
  },
  {
    "slug": "love-colisao",
    "section": "love2d",
    "title": "Colisão simples (AABB)",
    "difficulty": "intermediario",
    "subtitle": "A detecção retângulo-retângulo que resolve 90% dos casos 2D.",
    "intro": "Antes de partir para físicas pesadas com Box2D, a maioria dos jogos 2D resolve colisão com **AABB** — Axis-Aligned Bounding Box. \"Axis-Aligned\" significa que os retângulos estão alinhados aos eixos X e Y (não giram). Pong, Mario, top-down de RPG, plataformas — quase tudo cabe nesse modelo.\n\nA matemática é simples: dois retângulos A e B **se sobrepõem** se, e somente se, A está à esquerda do lado direito de B, B está à esquerda do lado direito de A, e a mesma coisa nos eixos verticais. Quatro comparações; sai em uma linha de Lua.\n\nA pegadinha pedagógica é não confundir formato de dados. O retângulo precisa de quatro valores (x, y, largura, altura) — ou (x1,y1,x2,y2). Se um for `{x,y,r}` (círculo) ou `{x1,y1,x2,y2}` e outro for `{x,y,w,h}`, vai dar resultado aleatório. Padronize.\n\nQuando AABB não basta: objetos que rotacionam, formas irregulares, rampas, empurrar caixas. Aí parte para `love.physics` (Box2D, próximo capítulo) ou bibliotecas como `bump.lua` (que ainda usa AABB mas resolve resposta de colisão pra você).",
    "codes": [
      {
        "lang": "lua",
        "code": "-- AABB clássico: retorna true se A e B se sobrepõem\nlocal function aabb(a, b)\n  return a.x < b.x + b.w\n     and b.x < a.x + a.w\n     and a.y < b.y + b.h\n     and b.y < a.y + a.h\nend\n\nlocal jogador = { x=100, y=100, w=32, h=32 }\nlocal moeda   = { x=120, y=110, w=16, h=16 }\n\nif aabb(jogador, moeda) then\n  print('pegou a moeda!')  -- saída: pegou a moeda!\nend"
      },
      {
        "lang": "lua",
        "code": "-- Círculo vs círculo (também muito útil)\nlocal function circulo(a, b)\n  local dx, dy = a.x - b.x, a.y - b.y\n  local raios  = a.r + b.r\n  return dx*dx + dy*dy < raios*raios   -- evita sqrt\nend\n\n-- Ponto vs retângulo (clique do mouse num botão)\nlocal function pontoNoRect(px, py, r)\n  return px >= r.x and px <= r.x + r.w\n     and py >= r.y and py <= r.y + r.h\nend"
      },
      {
        "lang": "lua",
        "code": "-- Resposta simples: empurra o jogador pra fora da parede\nfunction love.update(dt)\n  jogador.x = jogador.x + jogador.vx * dt\n  for _, parede in ipairs(paredes) do\n    if aabb(jogador, parede) then\n      -- desfaz o movimento no eixo X\n      jogador.x = jogador.x - jogador.vx * dt\n      jogador.vx = 0\n    end\n  end\nend"
      }
    ],
    "points": [
      "AABB = retângulos alinhados aos eixos (sem rotação)",
      "Resolve 90% dos casos 2D em uma função de 4 linhas",
      "Compare círculos com distância² < (r1+r2)² — sem sqrt",
      "Padronize formato: sempre {x, y, w, h}",
      "bump.lua resolve resposta de colisão; HC para formas variadas",
      "Para rotações, rampas, formas livres — use Box2D",
      "Cheque depois de mover, não antes"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para resposta correta em plataformas, separe o movimento por eixo: mova X, cheque colisão e corrija; depois mova Y, cheque e corrija. Resolve o bug de \"prendeu na quina\"."
      },
      {
        "type": "info",
        "content": "Se seu jogo tem muitos objetos, varrer N×N fica caro. Use uma grid espacial (chunking) ou bibliotecas como bump.lua que já fazem isso por você."
      }
    ]
  },
  {
    "slug": "love-fisica-box2d",
    "section": "love2d",
    "title": "Física com love.physics (Box2D)",
    "difficulty": "avancado",
    "subtitle": "Simulação física profissional embutida no LÖVE.",
    "intro": "Quando AABB simples não dá conta — caixas que empilham, bolas que quicam, ragdolls, alavancas — entra `love.physics`. Por baixo é o **Box2D**, o mesmo motor por trás de Angry Birds, Limbo e centenas de outros jogos. O LÖVE só te entrega a interface em Lua.\n\nO modelo mental tem quatro peças: o **World** (mundo, com gravidade), os **Body** (corpos, que têm posição e velocidade), as **Shape** (formato geométrico — retângulo, círculo, polígono) e as **Fixture** (que \"colam\" uma shape em um body com massa, atrito, restituição). Você cria os quatro e o Box2D simula tudo.\n\nTipos de body: `'static'` não se move (chão, parede), `'dynamic'` é afetado por gravidade e forças (jogador, caixa), `'kinematic'` se move por velocidade que você impõe mas não é afetado por gravidade nem força (plataforma móvel).\n\nO grande gatcha é a **escala**. Box2D foi feito pensando em metros, com objetos de 0.5m a 50m. Pixels não funcionam direto. `love.physics.setMeter(64)` diz: \"1 metro = 64 pixels\". Faça isso ANTES de criar o mundo. Esquecer dessa configuração faz tudo se mover devagar ou rápido demais.",
    "codes": [
      {
        "lang": "lua",
        "code": "function love.load()\n  love.physics.setMeter(64)              -- 1m = 64 px\n  mundo = love.physics.newWorld(0, 9.81*64, true)  -- gravidade\n\n  -- chão estático\n  chao = {}\n  chao.body  = love.physics.newBody(mundo, 400, 580, 'static')\n  chao.shape = love.physics.newRectangleShape(800, 40)\n  chao.fixt  = love.physics.newFixture(chao.body, chao.shape)\n\n  -- caixa dinâmica (cai pela gravidade)\n  caixa = {}\n  caixa.body  = love.physics.newBody(mundo, 400, 100, 'dynamic')\n  caixa.shape = love.physics.newRectangleShape(50, 50)\n  caixa.fixt  = love.physics.newFixture(caixa.body, caixa.shape, 1)\n  caixa.fixt:setRestitution(0.4)         -- quica 40%\nend\n\nfunction love.update(dt) mundo:update(dt) end"
      },
      {
        "lang": "lua",
        "code": "-- Desenhar respeitando a posição/rotação calculadas pelo Box2D\nfunction love.draw()\n  love.graphics.push()\n  love.graphics.translate(caixa.body:getX(), caixa.body:getY())\n  love.graphics.rotate(caixa.body:getAngle())\n  love.graphics.rectangle('line', -25, -25, 50, 50)\n  love.graphics.pop()\nend\n\n-- Aplicar força/impulso (controlar o jogador)\nfunction love.keypressed(k)\n  if k == 'space' then\n    caixa.body:applyLinearImpulse(0, -200)  -- pula\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Reagir a colisões via callback\nlocal function onContact(a, b, contato)\n  print('bateu:', a:getUserData(), 'em', b:getUserData())\nend\n\nmundo:setCallbacks(onContact, nil, nil, nil)\ncaixa.fixt:setUserData('caixa')\nchao.fixt:setUserData('chao')"
      }
    ],
    "points": [
      "Box2D = padrão da indústria 2D (Angry Birds, Limbo)",
      "Modelo: World > Body > Shape + Fixture",
      "Body types: static, dynamic, kinematic",
      "setMeter define a escala metro→pixel ANTES do World",
      "applyForce continuo, applyLinearImpulse instantâneo",
      "setCallbacks registra colisão (begin, end, pre, post)",
      "Fixtures têm massa, atrito (friction) e quique (restitution)"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Posição do body é o CENTRO do retângulo, não o canto superior esquerdo. Ajuste o desenho com translate(-w/2, -h/2)."
      },
      {
        "type": "tip",
        "content": "Para um jogo simples (plataforma, top-down), prefira bump.lua. Box2D é poderoso mas overkill — e mais difícil de controlar precisamente."
      }
    ]
  },
  {
    "slug": "love-game-state",
    "section": "love2d",
    "title": "Game states (telas)",
    "difficulty": "intermediario",
    "subtitle": "Organizando menu, jogo, pause e game over.",
    "intro": "Todo jogo de verdade tem mais de uma \"tela\": menu inicial, jogo, pause, créditos, game over. Sem organizar isso, o `love.update` vira uma sopa de `if`s e o código apodrece em duas semanas.\n\nO padrão mais simples — perfeito para jogos pequenos — é uma variável global `estado` (ou `tela`) que guarda uma string como `'menu'` ou `'jogo'`. Cada callback (`update`, `draw`, `keypressed`) começa olhando essa variável e chamando a lógica certa. Para mudar de tela, basta atribuir: `estado = 'jogo'`.\n\nPara projetos médios/grandes, ganha-se muito separando cada estado em um **módulo** (tabela com seus próprios update, draw, keypressed) e tendo uma função `mudarPara(novo)` que troca o módulo ativo. A biblioteca **hump.gamestate** já faz isso, com transições e callbacks `enter`/`leave`.\n\nUma armadilha pedagógica: se o estado tem dados (pontos, vidas, posição), eles **não devem viver fora dele** ou vão poluir os outros estados. O menu não precisa saber onde estava o jogador. Inicialize tudo no `enter` do estado e libere no `leave`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Padrão simples: variável + if/elseif\nlocal estado = 'menu'\n\nfunction love.update(dt)\n  if estado == 'jogo' then\n    atualizarJogo(dt)\n  end\nend\n\nfunction love.draw()\n  if estado == 'menu' then\n    love.graphics.printf('PRESSIONE ESPAÇO', 0, 250, 800, 'center')\n  elseif estado == 'jogo' then\n    desenharJogo()\n  elseif estado == 'gameover' then\n    love.graphics.printf('GAME OVER', 0, 250, 800, 'center')\n  end\nend\n\nfunction love.keypressed(k)\n  if estado == 'menu'     and k == 'space' then estado = 'jogo' end\n  if estado == 'gameover' and k == 'r'     then estado = 'menu' end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Padrão modular: cada estado = uma tabela com callbacks\nlocal menu = {}\nfunction menu:enter() self.opcao = 1 end\nfunction menu:update(dt) end\nfunction menu:draw()\n  love.graphics.print('Menu - opção '..self.opcao, 100, 100)\nend\nfunction menu:keypressed(k)\n  if k == 'return' then mudarPara(jogo) end\nend\n\nlocal atual = menu\nfunction mudarPara(novo)\n  if atual.leave then atual:leave() end\n  atual = novo\n  if atual.enter then atual:enter() end\nend\n\nfunction love.update(dt)    atual:update(dt) end\nfunction love.draw()        atual:draw() end\nfunction love.keypressed(k) atual:keypressed(k) end"
      }
    ],
    "points": [
      "Sem estados, o código vira sopa de if/elseif",
      "Padrão simples: 1 string global + if em cada callback",
      "Padrão modular: cada estado é uma tabela {update,draw,...}",
      "hump.gamestate é a biblioteca de referência",
      "Use callbacks enter/leave para inicializar e limpar",
      "Pause = pintar tela atual + sobrepor menu, sem rodar update",
      "Não compartilhe variáveis de jogo com o menu — encapsule"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para implementar pause sem dor: tenha estado 'pausado'. Em update, retorne cedo se pausado. Em draw, desenhe o jogo + um overlay translúcido por cima."
      }
    ]
  },
  {
    "slug": "love-projeto-completo",
    "section": "love2d",
    "title": "Projeto: Pong em LÖVE",
    "difficulty": "intermediario",
    "subtitle": "Um Pong jogável de verdade em ~50 linhas de Lua.",
    "intro": "Hora de juntar tudo: callbacks, entrada, desenho, AABB. O Pong é o \"olá mundo\" dos jogos: duas raquetes, uma bola, dois jogadores. É curto o suficiente para caber numa tela e completo o suficiente para você sentir que fez um jogo de verdade.\n\nVamos modelar três entidades: `p1` e `p2` (raquetes) com `x, y, w, h, vel`; e `bola` com `x, y, r, vx, vy`. Em `update`: lê teclas (W/S e ↑/↓), move raquetes respeitando os limites da tela, move a bola, inverte `vy` ao bater no topo/base, reseta posição se sair pelas laterais.\n\nO código abaixo já tem **colisão raquete-bola** (que faltava na versão original do livro), pontuação e som de batida opcional. É o suficiente para jogar em dupla na mesma máquina. A partir daqui, dá para evoluir: aumentar velocidade conforme a partida avança, IA simples para um jogador, telas de menu/vitória usando o capítulo de game states.\n\nLeia, copie, rode com `love .` e tente quebrar — depois conserte. Esse ciclo de \"ler → modificar → debugar\" é o que mais ensina.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- main.lua — Pong completo em LÖVE 11+\nlocal p1, p2, bola, score\n\nlocal function aabb(a, b)\n  return a.x < b.x + b.w and b.x < a.x + a.w\n     and a.y < b.y + b.h and b.y < a.y + a.h\nend\n\nfunction love.load()\n  love.window.setTitle('Pong')\n  p1 = {x=20,  y=260, w=10, h=80, vel=400}\n  p2 = {x=770, y=260, w=10, h=80, vel=400}\n  bola = {x=400, y=300, w=12, h=12, vx=300, vy=200}\n  score = {0, 0}\nend\n\nlocal function resetarBola(direcao)\n  bola.x, bola.y = 400, 300\n  bola.vx = 300 * direcao\n  bola.vy = (love.math.random() < 0.5 and -1 or 1) * 200\nend\n\nfunction love.update(dt)\n  if love.keyboard.isDown('w') then p1.y = p1.y - p1.vel*dt end\n  if love.keyboard.isDown('s') then p1.y = p1.y + p1.vel*dt end\n  if love.keyboard.isDown('up')   then p2.y = p2.y - p2.vel*dt end\n  if love.keyboard.isDown('down') then p2.y = p2.y + p2.vel*dt end\n\n  bola.x = bola.x + bola.vx*dt\n  bola.y = bola.y + bola.vy*dt\n\n  if bola.y < 0 or bola.y + bola.h > 600 then bola.vy = -bola.vy end\n  if aabb(bola, p1) or aabb(bola, p2) then bola.vx = -bola.vx * 1.05 end\n\n  if bola.x < 0           then score[2] = score[2]+1; resetarBola( 1) end\n  if bola.x + bola.w > 800 then score[1] = score[1]+1; resetarBola(-1) end\nend\n\nfunction love.draw()\n  love.graphics.rectangle('fill', p1.x, p1.y, p1.w, p1.h)\n  love.graphics.rectangle('fill', p2.x, p2.y, p2.w, p2.h)\n  love.graphics.rectangle('fill', bola.x, bola.y, bola.w, bola.h)\n  love.graphics.printf(score[1]..' x '..score[2], 0, 20, 800, 'center')\nend"
      },
      {
        "lang": "lua",
        "code": "-- Variação: prender raquete dentro da tela e som de batida\nlocal som_bate\nfunction love.load()\n  -- ...resto do load...\n  som_bate = love.audio.newSource('bate.wav', 'static')\nend\n\nfunction love.update(dt)\n  -- ...resto do update...\n  p1.y = math.max(0, math.min(p1.y, 600 - p1.h))\n  p2.y = math.max(0, math.min(p2.y, 600 - p2.h))\n  if aabb(bola, p1) or aabb(bola, p2) then\n    bola.vx = -bola.vx * 1.05\n    som_bate:clone():play()\n  end\nend"
      }
    ],
    "points": [
      "Pong funcional em ~40 linhas + colisão",
      "Modelo: 2 raquetes + 1 bola, todos com {x,y,w,h}",
      "Controles: W/S e ↑/↓ — clássico 2 jogadores",
      "Bola acelera 5% a cada rebatida — partidas curtas",
      "math.max/min prende a raquete dentro da tela",
      "love.math.random é melhor que math.random (semente automática)",
      "Próximo passo: menu, IA, sons, partículas"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Quando a bola fica grudada na raquete (vibrando), é porque a colisão dispara várias vezes seguidas. Empurre a bola para fora da raquete antes de inverter vx."
      }
    ]
  },
  {
    "slug": "love-distribuicao",
    "section": "love2d",
    "title": "Distribuindo um jogo LÖVE",
    "difficulty": "intermediario",
    "subtitle": "Do .love ao .exe, .app e APK.",
    "intro": "Você terminou seu jogo. Agora precisa entregar para outras pessoas que **não têm** o LÖVE instalado. A boa notícia: distribuir é simples. A menos boa: cada plataforma tem um detalhe.\n\nO formato base é o `.love`. Não tem mistério: é um **arquivo ZIP** comum, contendo o `main.lua` e tudo mais (assets, módulos, conf.lua) na raiz. Se renomear `.zip` para `.love`, qualquer pessoa que tenha LÖVE instalado pode dar duplo clique e jogar. Bom para distribuir entre devs, ruim para o usuário final.\n\nPara o usuário final você quer um executável standalone. No Windows, você concatena o binário `love.exe` com seu `.love` — literalmente cola um no outro com `copy /b`. No macOS, copia seu `.love` para dentro de `love.app/Contents/Resources/`. No Linux, geralmente distribui o `.love` mesmo (a maioria das distros tem `love` no repositório).\n\nNa prática, ferramentas como **makelove** (Python), **love-release** ou **boon** automatizam tudo: empacotam, embutem ícone, geram `.exe` (Win), `.app` (Mac), `.AppImage` (Linux) e até APK (Android) em um comando. Aprenda o manual primeiro pra entender o que está acontecendo, depois adote uma ferramenta.",
    "codes": [
      {
        "lang": "bash",
        "code": "# Passo 1: empacotar como .love (ZIP da pasta)\ncd meu-jogo            # entra na pasta com main.lua\nzip -9 -r ../jogo.love .\n\n# Testar\nlove ../jogo.love"
      },
      {
        "lang": "bash",
        "code": "# Windows: gerar um .exe standalone\n#  baixe love-11.5-win64.zip do site oficial e extraia\ncopy /b love.exe + jogo.love jogo.exe\n\n# distribua jogo.exe junto com as DLLs:\n#  SDL2.dll, OpenAL32.dll, love.dll, lua51.dll, etc.\n#  (estão na mesma pasta do love.exe original)"
      },
      {
        "lang": "bash",
        "code": "# Automatizar com makelove (recomendado)\npip install makelove\ncd meu-jogo\nmakelove --init           # cria makelove.toml\n# edite o .toml: nome, ícone, plataformas alvo\nmakelove                  # gera builds em build/\n\n# Alternativa: love-release (Lua puro)\nlove-release -W64 -M -L   # Windows64, Mac, Linux"
      }
    ],
    "points": [
      ".love = arquivo ZIP renomeado, contendo main.lua na raiz",
      "love jogo.love roda direto se LÖVE estiver instalado",
      "Windows: copy /b love.exe+jogo.love jogo.exe + DLLs",
      "macOS: copia .love p/ love.app/Contents/Resources/",
      "Linux: distribua o .love (usuário instala love do repo)",
      "makelove e love-release automatizam tudo em 1 comando",
      "Itch.io aceita upload de pasta com .exe + DLLs zipados"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Não esqueça das DLLs no pacote Windows. SDL2.dll, OpenAL32.dll, lua51.dll e outras são obrigatórias — o .exe sozinho não roda."
      },
      {
        "type": "info",
        "content": "Para Android existe o love-android (precisa Android Studio + SDK). Para iOS, processo é mais complicado e exige Mac com Xcode."
      }
    ]
  },
  {
    "slug": "roblox-luau",
    "section": "lua-embarcado",
    "title": "Roblox e Luau",
    "difficulty": "intermediario",
    "subtitle": "A versão de Lua que move a maior plataforma de jogos do mundo.",
    "intro": "Roblox tem mais de 70 milhões de jogadores diários. Toda a programação dos jogos da plataforma é feita em **Luau** — um fork do Lua 5.1 desenvolvido pela própria Roblox, otimizado para rodar com segurança e velocidade em larga escala.\n\nLuau mantém quase 100% da sintaxe de Lua 5.1, mas adiciona: **tipagem opcional** (`x: number`), análise estática, `continue` em loops, operador composto (`+=`, `-=`), generalized iteration e otimizações brutais. Se você sabe Lua, sabe Luau — só ganha super-poderes.\n\nPara programar você usa o **Roblox Studio**, IDE gratuita para Windows e macOS. Existem três tipos de script: **Server Script** (roda no servidor, autoritativo), **LocalScript** (no cliente do jogador) e **ModuleScript** (biblioteca, importada com `require`).\n\nA diferença filosófica em relação a LÖVE: aqui você não escreve um loop — você **conecta funções a eventos** (`PlayerAdded:Connect(fn)`). É um modelo orientado a eventos, com objetos em hierarquia. Aprender a navegar pela árvore (`game.Workspace.Parte`) é metade do trabalho.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Server Script: detecta jogadores entrando\nlocal Players = game:GetService('Players')\n\nPlayers.PlayerAdded:Connect(function(player)\n  print('Entrou: ' .. player.Name)\n\n  player.CharacterAdded:Connect(function(char)\n    local humanoid = char:WaitForChild('Humanoid')\n    humanoid.WalkSpeed = 32         -- mais rápido que o padrão (16)\n    humanoid.JumpPower = 60\n  end)\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Tipagem opcional do Luau\nlocal function somar(a: number, b: number): number\n  return a + b\nend\n\ntype Jogador = { nome: string, pontos: number }\nlocal p: Jogador = { nome = 'Lia', pontos = 0 }\n\n-- Operador composto (não existe em Lua 5.1 puro)\np.pontos += 10        -- Luau permite\n\n-- continue em loops\nfor i = 1, 10 do\n  if i % 2 == 0 then continue end\n  print(i)            -- 1, 3, 5, 7, 9\nend"
      },
      {
        "lang": "lua",
        "code": "-- ModuleScript: biblioteca reutilizável\n-- (em ReplicatedStorage.Util)\nlocal Util = {}\n\nfunction Util.distancia(a, b)\n  return (a.Position - b.Position).Magnitude\nend\n\nreturn Util\n\n-- Em outro script:\nlocal Util = require(game.ReplicatedStorage.Util)\nprint(Util.distancia(parte1, parte2))"
      }
    ],
    "points": [
      "Luau = fork de Lua 5.1 da Roblox, com tipagem opcional",
      "Roblox Studio é a IDE obrigatória (gratuita)",
      "3 tipos de script: Server, Local, Module",
      "Server = autoridade; Local = cliente; Module = biblioteca",
      "Acesso a recursos via game:GetService('Nome')",
      "Modelo é orientado a eventos: Evento:Connect(func)",
      "Luau adiciona +=, -=, continue e generalized iteration"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Luau é open source desde 2021. O código está em github.com/luau-lang/luau e roda fora do Roblox também — mas o ecossistema gigante está dentro da plataforma."
      },
      {
        "type": "tip",
        "content": "A documentação oficial create.roblox.com/docs é excelente. Comece pelo \"Coding Fundamentals\" e siga para \"Build Your First Game\"."
      }
    ]
  },
  {
    "slug": "roblox-services",
    "section": "lua-embarcado",
    "title": "Roblox: Services e DataStore",
    "difficulty": "intermediario",
    "subtitle": "Acessando recursos da plataforma e salvando dados.",
    "intro": "No Roblox tudo que é \"sistema\" — jogadores, física, sons, persistência, chat — está exposto via **Services**. Você pega um service com `game:GetService('Nome')`. Os mais usados: `Players`, `Workspace`, `ReplicatedStorage`, `RunService`, `DataStoreService`, `HttpService`. Guarde em variável local no topo do script.\n\nO **DataStoreService** salva dados que persistem entre sessões — pontos, inventário, customizações. Funciona como banco chave-valor: cria um datastore (`GetDataStore('Pontos')`), grava com `SetAsync(chave, valor)`, lê com `GetAsync(chave)`. A chave é o `UserId` do jogador (número estável, único globalmente).\n\nDuas regras inegociáveis: **(1) sempre envolva em `pcall`** porque a operação bate em rede e pode falhar. **(2) respeite os limites** — Roblox tem cota por minuto e por servidor. Salvar a cada movimento vai quebrar. Salve em momentos importantes (saída do jogador, checkpoints).\n\nUse `BindToClose` para garantir que dados sejam salvos antes do servidor desligar, especialmente em testes onde só você está jogando.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Pegar services no topo do script (boa prática)\nlocal Players = game:GetService('Players')\nlocal DSS     = game:GetService('DataStoreService')\nlocal pontos  = DSS:GetDataStore('Pontos_v1')\n\nPlayers.PlayerAdded:Connect(function(p)\n  -- Tenta carregar dados anteriores\n  local ok, valor = pcall(function()\n    return pontos:GetAsync(p.UserId)\n  end)\n\n  local stats = Instance.new('Folder', p)\n  stats.Name = 'leaderstats'\n  local pts = Instance.new('IntValue', stats)\n  pts.Name = 'Pontos'\n  pts.Value = ok and valor or 0\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Salvar quando o jogador sai\nPlayers.PlayerRemoving:Connect(function(p)\n  local pts = p:FindFirstChild('leaderstats')\n             and p.leaderstats:FindFirstChild('Pontos')\n  if not pts then return end\n  local ok, err = pcall(function()\n    pontos:SetAsync(p.UserId, pts.Value)\n  end)\n  if not ok then warn('Falha ao salvar:', err) end\nend)\n\n-- Garante salvamento se o servidor desligar\ngame:BindToClose(function()\n  for _, p in ipairs(Players:GetPlayers()) do\n    pcall(function()\n      pontos:SetAsync(p.UserId, p.leaderstats.Pontos.Value)\n    end)\n  end\nend)"
      },
      {
        "lang": "lua",
        "code": "-- UpdateAsync: leitura + escrita atômica (evita race condition)\nlocal function adicionarPontos(userId, qtd)\n  return pcall(function()\n    pontos:UpdateAsync(userId, function(antigo)\n      return (antigo or 0) + qtd\n    end)\n  end)\nend"
      }
    ],
    "points": [
      "game:GetService é o ponto de entrada para tudo",
      "Guarde services em variáveis locais no topo",
      "DataStoreService persiste dados entre sessões",
      "SEMPRE envolva chamadas Async em pcall",
      "Use UserId (estável) como chave, não Name",
      "UpdateAsync é atômico — prefira para incrementos",
      "BindToClose evita perda de dados ao fechar servidor"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Datastores em modo Studio só funcionam se a opção \"Enable Studio Access to API Services\" estiver ligada em Game Settings > Security."
      },
      {
        "type": "warning",
        "content": "Cota: ~60 chamadas/min/servidor. Se salvar a cada ação do jogador, vai estourar e dados serão perdidos. Salve em momentos chave."
      }
    ]
  },
  {
    "slug": "roblox-remoteevent",
    "section": "lua-embarcado",
    "title": "Roblox: RemoteEvents (cliente↔servidor)",
    "difficulty": "intermediario",
    "subtitle": "Comunicação entre o cliente do jogador e o servidor autoritativo.",
    "intro": "No Roblox, o jogador roda **LocalScripts** no próprio computador (responsivos, mas não confiáveis), enquanto a lógica importante roda em **Server Scripts** no servidor (autoritativo). Essas duas máquinas precisam conversar — essa ponte é o **RemoteEvent**.\n\nUm RemoteEvent é um objeto criado em `ReplicatedStorage` (pasta visível para servidor e cliente). Para o cliente avisar o servidor: `evento:FireServer(args)`. Para o servidor avisar UM cliente: `evento:FireClient(player, args)`. Para todos: `evento:FireAllClients(args)`.\n\nDo lado que recebe, conecte: `OnServerEvent:Connect(function(player, ...))` no servidor (recebe o player como 1º arg automaticamente), ou `OnClientEvent:Connect(function(...))` no cliente.\n\nExiste também o **RemoteFunction**, que funciona como chamada com retorno (`:InvokeServer()`), mas use com cuidado: bloqueia até a resposta chegar e pode travar.\n\nRegra de ouro de segurança: **nunca confie em dado vindo do cliente**. Exploits enviam valores absurdos. O servidor sempre valida: se o jogador está perto do baú, se tem o item, se a quantidade é razoável.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Crie em ReplicatedStorage um RemoteEvent chamado 'PedirPulo'\n\n-- Server Script (em ServerScriptService):\nlocal evt = game.ReplicatedStorage:WaitForChild('PedirPulo')\n\nevt.OnServerEvent:Connect(function(player, intensidade)\n  -- VALIDE tudo que vem do cliente\n  if type(intensidade) ~= 'number' then return end\n  intensidade = math.clamp(intensidade, 1, 100)\n\n  local char = player.Character\n  if char and char:FindFirstChild('Humanoid') then\n    char.Humanoid.JumpPower = 50 + intensidade\n    char.Humanoid.Jump = true\n  end\nend)"
      },
      {
        "lang": "lua",
        "code": "-- LocalScript (em StarterPlayerScripts):\nlocal evt = game.ReplicatedStorage:WaitForChild('PedirPulo')\nlocal UIS = game:GetService('UserInputService')\n\nUIS.InputBegan:Connect(function(input, processado)\n  if processado then return end\n  if input.KeyCode == Enum.KeyCode.Space then\n    evt:FireServer(50)   -- pede ao servidor um pulo de força 50\n  end\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Servidor avisando todos os clientes (broadcast)\nlocal anuncio = game.ReplicatedStorage.Anuncio\n\nfunction notificarVitoria(vencedor)\n  anuncio:FireAllClients(vencedor.Name, 'venceu a partida!')\nend\n\n-- LocalScript:\nanuncio.OnClientEvent:Connect(function(nome, msg)\n  print(nome, msg)   -- mostra no chat ou em UI\nend)"
      }
    ],
    "points": [
      "RemoteEvent = mensagem fire-and-forget (sem retorno)",
      "RemoteFunction = chamada com retorno (bloqueia até responder)",
      "Cliente:FireServer / Servidor:FireClient(jogador) / FireAllClients",
      "OnServerEvent recebe SEMPRE 'player' como 1º arg",
      "Coloque RemoteEvents em ReplicatedStorage",
      "Use WaitForChild para evitar race no carregamento",
      "Valide TUDO no servidor — cliente pode mentir"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Nunca confie em dados vindos do cliente. Exploits enviam valores absurdos. Sempre valide tipo, faixa e contexto no servidor antes de aplicar."
      },
      {
        "type": "warning",
        "content": "RemoteFunction:InvokeClient é arriscado — se o cliente travar ou sair, o servidor fica preso esperando. Prefira RemoteEvent para tudo que não exige retorno."
      }
    ]
  },
  {
    "slug": "openresty-intro",
    "section": "lua-embarcado",
    "title": "OpenResty: Lua dentro do NGINX",
    "difficulty": "avancado",
    "subtitle": "Quando você precisa de performance HTTP de outro nível.",
    "intro": "OpenResty é o NGINX (servidor web mais usado do mundo) acoplado com **LuaJIT** e bibliotecas Lua para HTTP, Redis, MySQL, WebSocket, JWT. Você escreve lógica de aplicação web em Lua que roda **dentro** do servidor, com performance de C.\n\nA ideia-chave: o NGINX já tem I/O assíncrono extremamente eficiente. OpenResty adiciona ganchos chamados \"phases\" (`access_by_lua`, `content_by_lua`, `log_by_lua`) onde você injeta código Lua. Cada requisição roda em uma corrotina LuaJIT — milhares simultâneas, latência em microssegundos.\n\nEmpresas como Cloudflare, Adobe e Taobao usam OpenResty em produção, em escala de milhões de requisições por segundo. Não é nicho — é infraestrutura séria.\n\nPara começar: instale via `apt install openresty`, `brew install openresty/brew/openresty` ou Docker. Configure rotas no `nginx.conf` usando `content_by_lua_block { ... }`. Em segundos você tem um servidor HTTP rodando lógica customizada.\n\nO grande poder vem das bibliotecas **lua-resty-***: módulos otimizados para Redis, MySQL, HTTP cliente, JSON, criptografia — tudo não-bloqueante.",
    "codes": [
      {
        "lang": "nginx",
        "code": "# nginx.conf — OpenResty mínimo\nworker_processes auto;\nevents { worker_connections 1024; }\n\nhttp {\n    server {\n        listen 8080;\n\n        location /ola {\n            content_by_lua_block {\n                ngx.say('Olá de Lua dentro do NGINX!')\n                ngx.say('Hora: ', ngx.localtime())\n            }\n        }\n    }\n}"
      },
      {
        "lang": "bash",
        "code": "# Rodar e testar\nopenresty -p $PWD -c nginx.conf\n\ncurl http://localhost:8080/ola\n# Olá de Lua dentro do NGINX!\n# Hora: 2024-01-15 10:32:11"
      },
      {
        "lang": "nginx",
        "code": "# Phases: a mesma requisição passa por várias\nlocation /api {\n    access_by_lua_block {\n        -- valida token JWT, IP, rate limit\n        local token = ngx.var.http_authorization\n        if not token then\n            ngx.exit(401)  -- bloqueia antes do content\n        end\n    }\n    content_by_lua_block {\n        ngx.say('autorizado')\n    }\n    log_by_lua_block {\n        -- registra em Redis/Kafka, não bloqueia resposta\n        ngx.log(ngx.INFO, 'req em ', ngx.var.request_uri)\n    }\n}"
      }
    ],
    "points": [
      "OpenResty = NGINX + LuaJIT + libs lua-resty-*",
      "Cada requisição vira uma corrotina (não bloqueia)",
      "Performance comparável a C, com produtividade de Lua",
      "Phases: rewrite, access, content, header_filter, log",
      "Cloudflare, Taobao, Adobe usam em produção massiva",
      "Instala via apt (openresty), brew ou Docker",
      "ngx.* é a API global (say, exit, log, var, req, header)"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Nunca use bibliotecas Lua síncronas (LuaSocket, luasql) dentro do OpenResty — elas bloqueiam o worker e matam a performance. Use sempre as lua-resty-* (cosocket)."
      },
      {
        "type": "info",
        "content": "OpenResty traz LuaJIT 2.1, que é compatível com Lua 5.1 + algumas extensões 5.2/5.3. Não é Lua 5.4 puro."
      }
    ]
  },
  {
    "slug": "openresty-api",
    "section": "lua-embarcado",
    "title": "OpenResty: API REST simples",
    "difficulty": "avancado",
    "subtitle": "Endpoints que recebem JSON e devolvem JSON.",
    "intro": "Vamos do \"Olá Mundo\" para algo realmente útil: um endpoint HTTP que recebe um JSON, processa em Lua e devolve JSON. É a base de qualquer API REST — e em OpenResty isso são poucas dezenas de linhas com performance de microsserviço C++.\n\nO fluxo padrão dentro de `content_by_lua_block`: chamar `ngx.req.read_body()` para garantir que o corpo da requisição foi lido, pegar o conteúdo com `ngx.req.get_body_data()`, decodificar com `cjson.decode`, processar, codificar a resposta com `cjson.encode`, e escrever com `ngx.say` (ou `ngx.print`). Definir `Content-Type` é obrigatório se você quer um cliente bem comportado.\n\nO `cjson` é uma biblioteca embutida no OpenResty, ultra-rápida (escrita em C). Para parâmetros de query string use `ngx.req.get_uri_args()`. Para diferenciar métodos HTTP, leia `ngx.req.get_method()`.\n\nNa hora de tratar erro: nunca confie no body. Se vier malformado, `cjson.decode` lança erro. Use `pcall` para capturar e responder 400. Para acessar banco/Redis/HTTP externo, use as bibliotecas `lua-resty-*` correspondentes — assíncronas, não bloqueiam o worker.",
    "codes": [
      {
        "lang": "nginx",
        "code": "# Endpoint POST /soma — recebe {a, b}, devolve {resultado}\nlocation = /soma {\n    content_by_lua_block {\n        ngx.req.read_body()\n        local body = ngx.req.get_body_data() or '{}'\n\n        local cjson = require 'cjson'\n        local ok, dados = pcall(cjson.decode, body)\n        if not ok then\n            ngx.status = 400\n            ngx.say('JSON inválido')\n            return\n        end\n\n        local resp = { resultado = (dados.a or 0) + (dados.b or 0) }\n        ngx.header.content_type = 'application/json'\n        ngx.say(cjson.encode(resp))\n    }\n}"
      },
      {
        "lang": "bash",
        "code": "# Testando com curl\ncurl -X POST http://localhost:8080/soma \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"a\":2, \"b\":3}'\n# {\"resultado\":5}"
      },
      {
        "lang": "nginx",
        "code": "# Roteamento por método e query string\nlocation = /usuarios {\n    content_by_lua_block {\n        local cjson = require 'cjson'\n        local metodo = ngx.req.get_method()\n        local args   = ngx.req.get_uri_args()\n\n        ngx.header.content_type = 'application/json'\n        if metodo == 'GET' then\n            ngx.say(cjson.encode({ id = args.id, nome = 'Lia' }))\n        elseif metodo == 'POST' then\n            ngx.req.read_body()\n            local body = cjson.decode(ngx.req.get_body_data())\n            ngx.say(cjson.encode({ criado = body.nome }))\n        else\n            ngx.exit(405)  -- Method Not Allowed\n        end\n    }\n}"
      }
    ],
    "points": [
      "ngx.req.read_body() obrigatório antes de get_body_data",
      "cjson é embutido, em C, rapidíssimo",
      "Sempre envolva cjson.decode em pcall",
      "ngx.header.content_type define o Content-Type da resposta",
      "ngx.req.get_method() e get_uri_args() para roteamento manual",
      "ngx.status = 400/404/500 controla o status code",
      "Para projetos grandes, use Lapis em vez de bloco cru"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para arquivos grandes (upload), prefira ngx.req.get_body_file() — o NGINX salva em disco automaticamente quando o body excede client_body_buffer_size."
      },
      {
        "type": "warning",
        "content": "cjson não distingue array vazio de objeto vazio. Use cjson.empty_array para forçar [] em vez de {} na resposta."
      }
    ]
  },
  {
    "slug": "lapis-framework",
    "section": "lua-embarcado",
    "title": "Lapis: framework web em Lua",
    "difficulty": "avancado",
    "subtitle": "Uma stack web completa em cima do OpenResty.",
    "intro": "Escrever rotas em `nginx.conf` puro funciona, mas em projetos sérios você quer estrutura: roteamento expressivo, ORM, validação, templates, sessões. **Lapis** entrega tudo isso, escrito por Leaf Corcoran (autor do MoonScript) e estável desde 2014.\n\nA experiência lembra Flask (Python) ou Express (Node.js): você define uma `Application`, registra rotas com `:get`, `:post`, `:match`, e cada handler recebe `self` com `params`, `session`, helpers. Por baixo roda OpenResty/LuaJIT — performance absurda (5x-10x Express em benchmarks).\n\nLapis vem com **ORM próprio** que fala PostgreSQL e MySQL, **migrations**, **templates** estilo eRuby (`.etlua`), validação, CSRF, i18n. Bateria-incluída de verdade.\n\nVocê pode escrever em **Lua puro** ou em **MoonScript** (compila para Lua, sintaxe estilo CoffeeScript). Para iniciantes em Lua, prefira Lua puro.\n\nO comando `lapis new` gera projeto vazio com `nginx.conf`, `app.lua`, `models.lua` e config para dev/prod. Em três comandos você está com servidor rodando.",
    "codes": [
      {
        "lang": "bash",
        "code": "# Instalar e criar projeto\nluarocks install lapis\nlapis new --lua          -- gera estrutura\nlapis server             -- inicia em modo development"
      },
      {
        "lang": "lua",
        "code": "-- app.lua\nlocal lapis = require 'lapis'\nlocal app = lapis.Application()\n\napp:get('/', function(self)\n  return 'Olá do Lapis!'\nend)\n\n-- parâmetros nomeados na URL\napp:get('/oi/:nome', function(self)\n  return 'Olá, ' .. self.params.nome\nend)\n\n-- POST com JSON\napp:post('/soma', function(self)\n  local a = tonumber(self.params.a) or 0\n  local b = tonumber(self.params.b) or 0\n  return { json = { resultado = a + b } }\nend)\n\nreturn app"
      },
      {
        "lang": "lua",
        "code": "-- ORM: definindo um Model\nlocal Model = require('lapis.db.model').Model\nlocal Usuarios = Model:extend('usuarios')\n\n-- Criar registro\nlocal u = Usuarios:create({ nome = 'Lia', idade = 28 })\n\n-- Buscar\nlocal todos = Usuarios:select('order by id desc limit 10')\nlocal achei = Usuarios:find({ nome = 'Lia' })\n\n-- Atualizar\nachei:update({ idade = 29 })"
      }
    ],
    "points": [
      "Lapis = framework web Lua sobre OpenResty/LuaJIT",
      "Sintaxe inspirada em Flask/Express — rotas e handlers",
      "ORM próprio para PostgreSQL e MySQL",
      "Migrations, templates etlua, sessões, CSRF inclusos",
      "Performance >5x Express em benchmarks reais",
      "lapis new gera projeto pronto; lapis server roda",
      "Funciona em Lua puro ou MoonScript (sua escolha)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Em produção, use 'lapis server production' e configure o config.lua com diferentes ambientes. lapis.config permite separar dev, staging, prod facilmente."
      },
      {
        "type": "info",
        "content": "Lapis depende de OpenResty (não Lua puro). Para projetos onde você não pode/quer NGINX, considere alternativas como lor, sailor ou um cliente HTTP simples (pegasus.lua)."
      }
    ]
  },
  {
    "slug": "redis-lua",
    "section": "lua-embarcado",
    "title": "Lua dentro do Redis",
    "difficulty": "avancado",
    "subtitle": "Scripts atômicos para operações compostas seguras.",
    "intro": "O Redis tem um problema comum: muitas operações úteis exigem **ler um valor, decidir e escrever** (\"se contador > 0, decremente\"). Em duas chamadas separadas dá race condition (outro cliente pode mudar o valor entre uma e outra). A solução do Redis: você manda um script Lua, ele executa **atomicamente** dentro do servidor — nada mais roda durante.\n\nO comando é `EVAL script numkeys [chaves...] [args...]`. Chaves vão como `KEYS[1], KEYS[2]...` dentro do script (numeração começa em 1, claro), argumentos vão como `ARGV[1], ARGV[2]...`. Para chamar comandos Redis, use `redis.call('GET', KEYS[1])` (lança erro se algo der errado) ou `redis.pcall(...)` (devolve erro como tabela).\n\nUse para: contadores com mínimo, rate limiting (token bucket), filas com prioridade, lock distribuído com expiração, leaderboards com regras customizadas. Em todos esses casos, atomicidade é o que torna a solução correta.\n\nA partir do **Redis 7**, existe `FUNCTION LOAD` que registra o script no servidor com nome — você chama por `FCALL` em vez de mandar o código toda vez. É o substituto moderno do `EVAL`/`EVALSHA` para libraries reutilizáveis.\n\nLimitação: scripts são **bloqueantes**. Não escreva loop infinito; o Redis inteiro trava (afeta todos os clientes). Mantenha scripts curtos.",
    "codes": [
      {
        "lang": "bash",
        "code": "# CLI: GET via Lua (1 chave)\nredis-cli EVAL \"return redis.call('GET', KEYS[1])\" 1 minha_chave\n\n# Decremento atômico com mínimo zero\nredis-cli EVAL \"\nlocal v = tonumber(redis.call('GET', KEYS[1])) or 0\nif v > 0 then\n  return redis.call('DECR', KEYS[1])\nelse\n  return -1\nend\" 1 estoque"
      },
      {
        "lang": "bash",
        "code": "# Rate limiting: máximo N requests por janela\nredis-cli EVAL \"\nlocal chave = KEYS[1]\nlocal limite = tonumber(ARGV[1])\nlocal janela = tonumber(ARGV[2])\nlocal atual  = redis.call('INCR', chave)\nif atual == 1 then redis.call('EXPIRE', chave, janela) end\nif atual > limite then return 0 end\nreturn 1\" 1 user:42 100 60\n# permite 100 chamadas por 60s; retorna 1 se ok, 0 se bloqueado"
      },
      {
        "lang": "lua",
        "code": "-- Redis 7+: FUNCTION (registrável e versionada)\n-- arquivo lib_estoque.lua\n#!lua name=lib_estoque\n\nredis.register_function('decr_min', function(keys, args)\n  local v = tonumber(redis.call('GET', keys[1])) or 0\n  if v <= 0 then return -1 end\n  return redis.call('DECR', keys[1])\nend)\n\n-- Carregar e chamar:\n-- redis-cli FUNCTION LOAD \"$(cat lib_estoque.lua)\"\n-- redis-cli FCALL decr_min 1 estoque"
      }
    ],
    "points": [
      "EVAL roda Lua atomicamente no servidor Redis",
      "KEYS[i] e ARGV[i] são os parâmetros (índice 1)",
      "redis.call() lança erro; redis.pcall() retorna",
      "Use para operações compostas: ler+decidir+escrever",
      "EVALSHA executa por hash (mais leve que mandar código)",
      "Redis 7+: FUNCTION LOAD + FCALL substituem EVAL",
      "Scripts são BLOQUEANTES — mantenha curtos"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Loop infinito ou script muito longo trava o Redis inteiro. Use SCRIPT KILL para abortar (só funciona se o script ainda não escreveu nada)."
      },
      {
        "type": "warning",
        "content": "Sempre passe chaves via KEYS, não hardcoded no script. É o que permite ao Redis Cluster rotear corretamente quando há sharding."
      }
    ]
  },
  {
    "slug": "nodemcu-esp",
    "section": "lua-embarcado",
    "title": "Lua em microcontroladores: NodeMCU",
    "difficulty": "avancado",
    "subtitle": "Programando ESP8266 e ESP32 em Lua puro.",
    "intro": "**NodeMCU** é um firmware open-source que coloca um interpretador Lua dentro dos chips Wi-Fi populares **ESP8266** e **ESP32** (placas de US$3-5). Em vez de programar em C/C++ via Arduino IDE, você grava o firmware uma vez e depois envia scripts `.lua` para a placa via porta serial. Mudou o código? Reenvia em segundos, sem recompilar nada.\n\nO firmware expõe módulos para tudo que importa em IoT: `wifi` (conexão), `net` (TCP/UDP, HTTP cliente, MQTT), `gpio` (pinos), `i2c`, `spi`, `pwm`, `adc`, `tmr` (timers), `file` (FAT no flash). Você programa eventos (\"quando chegar dado TCP, faça X\") e o firmware cuida do resto, em estilo orientado a eventos.\n\nA grande limitação é **memória**. ESP8266 tem ~80KB de RAM total e ~512KB de flash; ESP32 é mais generoso (~320KB RAM, 4MB flash). Lua, mesmo otimizado, consome muita RAM com strings e tabelas grandes. Não dá pra processar imagens ou rodar lógica pesada — IoT mesmo: ler sensor, mandar pra nuvem, controlar relé.\n\nFerramentas: **NodeMCU Pyflasher** (grava firmware), **ESPlorer** ou **EsPy** (IDE para enviar scripts), **luatool** ou **nodemcu-tool** (CLI). O firmware customizado se monta em nodemcu-build.com — você escolhe os módulos para enxugar tamanho.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- init.lua: roda automaticamente no boot\nwifi.setmode(wifi.STATION)\nwifi.sta.config({\n  ssid = 'MinhaRede',\n  pwd  = 'senha123',\n  save = true,\n})\nwifi.sta.connect()\n\n-- aguarda conectar e mostra IP\ntmr.create():alarm(2000, tmr.ALARM_AUTO, function(t)\n  if wifi.sta.getip() then\n    print('IP:', wifi.sta.getip())\n    t:unregister()\n  end\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Servidor HTTP minimalista\nsrv = net.createServer(net.TCP)\nsrv:listen(80, function(conn)\n  conn:on('receive', function(c, payload)\n    c:send('HTTP/1.1 200 OK\\r\\n' ..\n           'Content-Type: text/plain\\r\\n\\r\\n' ..\n           'Olá da ESP! Uptime: ' .. tmr.time() .. 's')\n    c:on('sent', function() c:close() end)\n  end)\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Ler sensor (DHT22) e publicar via MQTT\nlocal mqttc = mqtt.Client('esp01', 60)\nmqttc:connect('broker.hivemq.com', 1883, false, function()\n  print('conectado ao broker')\n\n  tmr.create():alarm(10000, tmr.ALARM_AUTO, function()\n    local s, t, h = dht.read(4)   -- pino 4\n    if s == dht.OK then\n      mqttc:publish('casa/sala', t..','..h, 0, 0)\n    end\n  end)\nend)"
      }
    ],
    "points": [
      "NodeMCU = firmware Lua para ESP8266/ESP32",
      "Grava firmware 1x; envia scripts .lua via serial",
      "Modelo orientado a eventos (callbacks de net/tmr)",
      "RAM apertada: ~32-64KB livres no ESP8266",
      "Módulos: wifi, net, mqtt, gpio, i2c, spi, dht, file",
      "init.lua roda automaticamente no boot",
      "Alternativas: MicroPython, ESP-IDF (C), Arduino"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Cuidado com loops síncronos longos — o watchdog reinicia a placa. Sempre use tmr.create():alarm(...) para ações periódicas, nunca while em busy-wait."
      },
      {
        "type": "tip",
        "content": "Compile scripts para bytecode com node.compile('arquivo.lua') e delete o .lua. Carrega mais rápido e libera RAM no boot."
      }
    ]
  },
  {
    "slug": "wireshark-lua",
    "section": "lua-embarcado",
    "title": "Wireshark: dissectores em Lua",
    "difficulty": "avancado",
    "subtitle": "Estendendo o sniffer para entender protocolos customizados.",
    "intro": "O **Wireshark** é o canivete suíço de quem analisa rede. Por padrão ele já entende centenas de protocolos (HTTP, TLS, DNS, BitTorrent...), mas quando você está debugando um protocolo proprietário — o jogo da empresa, um IoT custom, uma API binária interna — os pacotes aparecem como bytes opacos. A solução elegante: escrever um **dissector** em Lua.\n\nUm dissector é um script Lua colocado em `~/.config/wireshark/plugins/` (Linux/Mac) ou `%APPDATA%\\Wireshark\\plugins\\` (Windows). O Wireshark carrega no startup. Você cria um objeto `Proto`, declara campos com `ProtoField.*` (uint8, uint32, string, bytes...), implementa a função `dissector(buf, pkt, tree)` que recebe o buffer do pacote e popula a árvore de detalhes que você vê na GUI.\n\nPara registrar onde o seu protocolo aparece, use `DissectorTable.get('udp.port'):add(porta, proto)` ou `'tcp.port'`. Quando um pacote chegar nessa porta, o Wireshark chamará seu dissector.\n\nÚtil também: **filtros de display em Lua**, **listener de tap** (estatística em tempo real), **scripts de janela** (GUI customizada). É a forma mais flexível de adaptar o Wireshark sem recompilar.\n\nDepois de salvar o arquivo, recarregue com **Ctrl+Shift+L** (Analyze > Reload Lua Plugins). Erros aparecem na janela Tools > Lua > Console.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- meu_proto.lua (em ~/.config/wireshark/plugins/)\nlocal p = Proto('meuprot', 'Meu Protocolo Customizado')\n\nlocal f_versao = ProtoField.uint8 ('meuprot.versao', 'Versão')\nlocal f_tipo   = ProtoField.uint8 ('meuprot.tipo',   'Tipo de mensagem')\nlocal f_len    = ProtoField.uint16('meuprot.len',    'Tamanho')\nlocal f_data   = ProtoField.bytes ('meuprot.dados',  'Payload')\n\np.fields = { f_versao, f_tipo, f_len, f_data }\n\nfunction p.dissector(buf, pkt, tree)\n  pkt.cols.protocol = 'MEUPROT'\n  local sub = tree:add(p, buf())\n  sub:add(f_versao, buf(0, 1))\n  sub:add(f_tipo,   buf(1, 1))\n  sub:add(f_len,    buf(2, 2))\n  sub:add(f_data,   buf(4))\nend\n\n-- registra na porta UDP 9999\nDissectorTable.get('udp.port'):add(9999, p)"
      },
      {
        "lang": "lua",
        "code": "-- Bonito: campo enum legível\nlocal tipos = {\n  [1] = 'PING',\n  [2] = 'PONG',\n  [3] = 'DADOS',\n  [4] = 'ERRO',\n}\nlocal f_tipo = ProtoField.uint8('meuprot.tipo', 'Tipo', base.DEC, tipos)\n-- Wireshark vai mostrar \"Tipo: PING (1)\" em vez de só \"Tipo: 1\""
      },
      {
        "lang": "bash",
        "code": "# Localizar pasta de plugins\nwireshark -G folders | grep \"Personal Lua\"\n\n# Após editar o script:\n# Wireshark > Analyze > Reload Lua Plugins   (Ctrl+Shift+L)\n# Erros: Tools > Lua > Console"
      }
    ],
    "points": [
      "Útil para protocolos proprietários ou custom",
      "Plugins ficam em ~/.config/wireshark/plugins (Linux)",
      "Proto + ProtoField.* + dissector(buf,pkt,tree)",
      "DissectorTable registra em udp.port, tcp.port, etc",
      "ProtoField com tabela de enum mostra nomes humanos",
      "Recarregar com Ctrl+Shift+L (não precisa reiniciar)",
      "Console em Tools > Lua mostra erros e print()"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para protocolos com mensagens de tamanho variável e multiplexadas em TCP, use dissect_pdus para o Wireshark juntar segmentos certinho. É o que clientes maduros fazem."
      },
      {
        "type": "info",
        "content": "tshark (CLI) também carrega scripts Lua. Útil para pipelines de análise automatizada de captura."
      }
    ]
  },
  {
    "slug": "defold-engine",
    "section": "lua-embarcado",
    "title": "Defold: motor de jogos",
    "difficulty": "intermediario",
    "subtitle": "Uma alternativa profissional ao LÖVE, com editor visual.",
    "intro": "**Defold** é um motor de jogos 2D (com suporte 3D limitado) gratuito, mantido pela King (criadora de Candy Crush) e usado em jogos comerciais reais — incluindo títulos da própria King e centenas de indies. Toda a programação é em **Lua** (LuaJIT internamente), com sintaxe idêntica.\n\nA diferença filosófica para LÖVE: Defold é uma **engine completa**, com editor visual onde você cria game objects, monta cenas (\"collections\"), arrasta sprites, configura colisão, anima — tudo na GUI. Os scripts Lua entram em pontos específicos do ciclo de vida (`init`, `update`, `on_input`, `on_message`).\n\nVantagens em relação a LÖVE: build nativo para web (HTML5), iOS, Android, Switch, PS4 sem ferramenta externa; sistema de mensagens entre objetos baseado em endereços (`/objeto#componente`); hot reload de scripts; engine bem otimizada para mobile; tamanho final do binário muito menor que Unity/Godot.\n\nDesvantagens: a curva é mais íngreme que LÖVE (você precisa entender o modelo de game objects, scripts atrelados, mensagens), comunidade é menor, menos bibliotecas terceiras, e algumas coisas \"simples\" exigem ler doc oficial.\n\nVeredito: se você quer fazer um jogo mobile/web com cara profissional e está disposto a estudar uma semana o editor, Defold é uma escolha sólida. Se quer um framework minimalista para prototipar rápido, fique com LÖVE.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- player.script (atrelado a um game object \"player\")\nfunction init(self)\n  self.vel = vmath.vector3(0, 0, 0)\n  msg.post('.', 'acquire_input_focus')   -- recebe input\nend\n\nfunction update(self, dt)\n  local pos = go.get_position()\n  go.set_position(pos + self.vel * dt)\nend\n\nfunction on_input(self, action_id, action)\n  if action_id == hash('right') then\n    self.vel.x = action.pressed and 200 or 0\n  elseif action_id == hash('left') then\n    self.vel.x = action.pressed and -200 or 0\n  elseif action_id == hash('jump') and action.pressed then\n    self.vel.y = -300   -- Defold: y cresce pra baixo no padrão UI\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Comunicação entre objetos via mensagem\n-- player.script envia:\nmsg.post('/hud#score', 'add_pontos', { quanto = 10 })\n\n-- score.script (no game object 'hud', componente 'score') recebe:\nfunction on_message(self, msg_id, message, sender)\n  if msg_id == hash('add_pontos') then\n    self.total = self.total + message.quanto\n    print('total:', self.total)\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Animar sprite e trocar de animação\nfunction on_input(self, action_id, action)\n  if action_id == hash('right') and action.pressed then\n    sprite.play_flipbook('#sprite', hash('andando'))\n  end\n  if action_id == hash('right') and action.released then\n    sprite.play_flipbook('#sprite', hash('parado'))\n  end\nend"
      }
    ],
    "points": [
      "Defold = engine 2D completa, gratuita, da King",
      "Lua (LuaJIT) é a única linguagem de script",
      "Editor visual: game objects, collections, GUI scenes",
      "Build nativo p/ Web/iOS/Android/Switch/PS4",
      "Modelo: game object + scripts + mensagens",
      "msg.post('/obj#script', 'evento', dados) comunica entre objetos",
      "Mais 'engine' que LÖVE; menos comunidade indie"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Defold ficou totalmente open source (Apache 2.0) em 2020. Antes precisava de conta e tinha cláusulas chatas — hoje é livre de verdade."
      },
      {
        "type": "tip",
        "content": "Para começar, rode os tutoriais oficiais 'War battles' e 'Side-scroller' (defold.com/tutorials). Cobrem 80% do que você precisa para um primeiro jogo."
      }
    ]
  },
  {
    "slug": "luajit-intro",
    "section": "performance",
    "title": "LuaJIT em detalhe",
    "difficulty": "avancado",
    "subtitle": "Por que tão rápido — e quando isso muda sua vida.",
    "intro": "Lua puro já é uma das linguagens dinâmicas mais rápidas que existem. Mas quando você precisa de mais — processar milhões de pacotes por segundo, rodar lógica de jogo a 60 FPS, ou competir com C — entra em cena o **LuaJIT**.\n\nLuaJIT é uma reimplementação independente da linguagem Lua 5.1 escrita por Mike Pall. Em vez de só interpretar o bytecode (como o Lua oficial), ele observa quais trechos do seu código rodam muito (os chamados **traces quentes**) e os compila em tempo de execução para código de máquina otimizado — é o tal do **JIT**, *just-in-time compilation*. O resultado: programas que muitas vezes rodam de 5 a 50 vezes mais rápido que Lua puro, chegando perto de C otimizado em loops numéricos.\n\nDo ponto de vista prático, você usa LuaJIT como um *drop-in replacement*: troca o binário `lua` por `luajit` e seu código continua rodando. A API é idêntica à de Lua 5.1, com algumas extensões poderosas (FFI, `bit`, `table.new`).\n\nO detalhe que pega iniciantes: LuaJIT travou em Lua 5.1. Ele NÃO suporta `goto`, operador `//`, bitops nativos do 5.3 nem `<close>` do 5.4. Se você escreve para LuaJIT, mire a sintaxe 5.1.",
    "codes": [
      {
        "lang": "bash",
        "code": "# Instalar LuaJIT\nbrew install luajit          # macOS\nsudo apt install luajit      # Ubuntu/Debian\nsudo pacman -S luajit        # Arch\n\n# Rodar como interpretador\nluajit script.lua\n\n# Versão e features\nluajit -v\n# saída: LuaJIT 2.1.x ... -- Copyright (C) 2005-2023 Mike Pall."
      },
      {
        "lang": "bash",
        "code": "# Ver o que o JIT está fazendo (diagnóstico)\nluajit -jv script.lua    # mostra traces compilados\nluajit -jdump=+rs s.lua  # dump completo (assembly!)\n\n# Desligar o JIT (para comparar)\nluajit -joff script.lua"
      },
      {
        "lang": "lua",
        "code": "-- Mesmo código, brutal diferença de tempo\nlocal t = os.clock()\nlocal s = 0\nfor i = 1, 1e8 do\n  s = s + i * 2\nend\nprint(s, os.clock() - t)\n-- lua 5.4:    ~3.5s\n-- luajit:    ~0.05s   (60x+ mais rápido)"
      }
    ],
    "points": [
      "JIT detecta loops quentes e compila para código de máquina nativo",
      "API compatível com Lua 5.1 — não tem // nem bitops nativos do 5.3",
      "Drop-in: troque `lua` por `luajit` e pronto",
      "Padrão em OpenResty, Defold, Wireshark, World of Warcraft",
      "Inclui FFI e biblioteca `bit` para operações bit a bit",
      "Use `-jv` para ver quais traces estão sendo compilados",
      "Mike Pall mantém praticamente sozinho — projeto enxuto e estável"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "LuaJIT está congelado em Lua 5.1 + algumas extensões. Para usar Lua 5.4 com performance, você fica com o interpretador padrão mesmo."
      },
      {
        "type": "tip",
        "content": "Se seu projeto pode rodar em LuaJIT, escolha-o desde o início. Migrar depois é mais doloroso do que parece, principalmente por causa do FFI."
      }
    ]
  },
  {
    "slug": "luajit-ffi",
    "section": "performance",
    "title": "LuaJIT FFI: chamando C diretamente",
    "difficulty": "avancado",
    "subtitle": "Adeus bindings escritos à mão.",
    "intro": "Antes do FFI, integrar Lua com bibliotecas C exigia escrever um módulo C com `lua_pushnumber`, `luaL_check*` e companhia — código repetitivo, sujeito a erros e que precisava ser recompilado a cada mudança. O **FFI** (*Foreign Function Interface*) do LuaJIT eliminou esse trabalho.\n\nA ideia é simples: você cola o protótipo C dentro de uma string Lua, o LuaJIT parseia esse cabeçalho e, dali em diante, chamar a função C é tão natural quanto chamar uma função Lua. Não há *trampoline*, não há *boxing* desnecessário — o JIT inlinea a chamada direto no código de máquina.\n\nIsso muda o jogo: você consegue usar `printf`, `sqrt`, `malloc`, abrir sockets do sistema, falar com OpenGL, com SDL, com qualquer `.so`/`.dll`/`.dylib` — sem compilar uma única linha de C.\n\nA pegadinha clássica: tipos C **não são** objetos Lua. Um `Vec2` criado com `ffi.new` vive fora do GC tradicional (o LuaJIT cuida dele), tem layout binário fixo e segue regras de C — incluindo a chance de segfault se você passar lixo. Use FFI quando precisa de performance ou interop; para tudo mais, prefira tabelas Lua normais.",
    "codes": [
      {
        "lang": "lua",
        "code": "local ffi = require 'ffi'\n\n-- 1) declare os protótipos C\nffi.cdef[[\n  int printf(const char *fmt, ...);\n  double sqrt(double x);\n]]\n\n-- 2) chame via ffi.C (libc do sistema)\nffi.C.printf('Olá %s, %d\\n', 'Lua', 42)\nprint(ffi.C.sqrt(2.0))  -- saída: 1.4142135623731"
      },
      {
        "lang": "lua",
        "code": "local ffi = require 'ffi'\n\n-- Estruturas C nativas (sem overhead de tabela)\nffi.cdef[[\n  typedef struct { float x, y; } Vec2;\n]]\n\nlocal v = ffi.new('Vec2', 1.5, 2.0)\nprint(v.x, v.y)            -- saída: 1.5  2\n\n-- Array de 1000 vetores: contíguos na memória\nlocal arr = ffi.new('Vec2[1000]')\nfor i = 0, 999 do           -- arrays C começam em 0\n  arr[i].x = i\n  arr[i].y = i * 2\nend"
      },
      {
        "lang": "lua",
        "code": "-- Carregando uma biblioteca externa\nlocal ffi = require 'ffi'\nffi.cdef[[\n  unsigned int sleep(unsigned int seconds);\n]]\n\nlocal lib = ffi.load('c')   -- libc; em Windows: 'msvcrt'\nlib.sleep(1)\nprint('acordei')"
      }
    ],
    "points": [
      "ffi.cdef declara assinaturas C que o LuaJIT parseia",
      "ffi.C dá acesso à libc (e símbolos do executável)",
      "ffi.load('nome') carrega .so/.dll/.dylib qualquer",
      "ffi.new('T') aloca struct/array C; arrays começam em 0",
      "Tipos C não passam por _G nem têm metatables Lua por padrão",
      "Chamadas FFI são inlineadas pelo JIT — quase free",
      "Use `ffi.string(ptr, n)` para converter buffer C em string Lua"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "FFI desliga as proteções de Lua. Um índice fora do array é um buffer overflow real, com chance de segfault. Trate como C mesmo."
      },
      {
        "type": "tip",
        "content": "Para padrões longos, separe o `cdef` em outro arquivo. Você pode chamar `ffi.cdef` várias vezes — ele acumula declarações."
      }
    ]
  },
  {
    "slug": "medindo-performance",
    "section": "performance",
    "title": "Medindo performance",
    "difficulty": "intermediario",
    "subtitle": "Sem medir, qualquer otimização é palpite.",
    "intro": "A regra de ouro da otimização vale o triplo em linguagens dinâmicas: **meça antes, meça depois**. Nosso cérebro é péssimo para prever o que é rápido. Aquela troca de `for` por `ipairs` que você jura ser mais rápida pode ser irrelevante — ou até pior — quando rodada de verdade.\n\nEm Lua, a ferramenta básica é `os.clock()`, que devolve o tempo de CPU consumido pelo processo (em segundos, com fração). Diferente de `os.time()`, que devolve segundos do relógio de parede e tem resolução de 1 segundo, `os.clock()` tem resolução de microssegundos e ignora o tempo em que o sistema estava ocupado com outra coisa.\n\nPara comparar duas implementações, o padrão é o **microbenchmark**: rode a função N vezes (tipicamente 10⁶ ou mais) num loop, divida o tempo total. Isso amortiza o custo de chamada de função e dá um número estável.\n\nPegadinhas: o GC pode disparar no meio do benchmark e estragar a medição. JIT precisa de algumas iterações para esquentar (warm-up). E rodar um benchmark uma única vez é praticamente jogar dado — repita 5 vezes e use a mediana.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Helper de benchmark reutilizável\nlocal function bench(nome, fn, n)\n  n = n or 1e6\n  collectgarbage('collect')         -- limpa antes\n  local t = os.clock()\n  for _ = 1, n do fn() end\n  local dt = os.clock() - t\n  print(string.format('%-20s %.3fs  (%.0f ns/op)',\n    nome, dt, dt * 1e9 / n))\nend\n\nbench('soma 100 numeros', function()\n  local s = 0\n  for i = 1, 100 do s = s + i end\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Comparando duas implementações\nlocal t = {}\nfor i = 1, 1000 do t[i] = i end\n\nbench('for numerico', function()\n  local s = 0\n  for i = 1, #t do s = s + t[i] end\nend)\n\nbench('ipairs', function()\n  local s = 0\n  for _, v in ipairs(t) do s = s + v end\nend)"
      },
      {
        "lang": "lua",
        "code": "-- Memória usada (em KB)\nprint(collectgarbage('count'))    -- saída: ~25.4\nlocal big = {}\nfor i = 1, 100000 do big[i] = {x=i, y=i} end\nprint(collectgarbage('count'))    -- saída: ~6500"
      }
    ],
    "points": [
      "os.clock() = tempo de CPU em segundos, alta resolução",
      "os.time() = relógio de parede, resolução de 1 segundo (ruim)",
      "Sempre rode N iterações grandes para estabilizar a medida",
      "collectgarbage('collect') antes de medir evita GC no meio",
      "collectgarbage('count') retorna memória usada em KB",
      "Repita o benchmark e use a mediana, nunca uma rodada só",
      "No LuaJIT, descarte as primeiras iterações (warm-up do JIT)"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Microbenchmarks mentem com facilidade. O compilador pode eliminar código \"morto\" e dar 0s. Sempre use o resultado da função (acumule numa variável global, por exemplo)."
      },
      {
        "type": "tip",
        "content": "Para profiling de verdade (descobrir QUEM é lento, não SE é lento), use luaprofiler, mobdebug ou o `-jp` do LuaJIT."
      }
    ]
  },
  {
    "slug": "dicas-performance",
    "section": "performance",
    "title": "Dicas de performance",
    "difficulty": "intermediario",
    "subtitle": "Truques que a comunidade Lua aprendeu na marra.",
    "intro": "Lua é rápido por padrão, mas alguns padrões idiomáticos custam caro em loops apertados. Conhecer esses truques separa o código que aguenta um servidor com 10 mil requisições por segundo do código que engasga.\n\nA dica número um: **variável local é radicalmente mais rápida que global**. Uma global vive em uma tabela (`_ENV` ou `_G`) e exige uma busca de hash a cada acesso; uma local vira um *slot* na pilha, acessado por índice direto. Em loops apertados, essa diferença é facilmente 2x a 5x.\n\nO segundo padrão é **cachear funções da stdlib**: `string.format`, `math.sin`, `io.write` — todos são acessos de campo em tabela. Atribua a uma local antes do loop e a busca acontece uma vez só.\n\nO terceiro grande pecado é **concatenar strings com `..` dentro de loops**. Strings em Lua são imutáveis: cada `..` cria uma string nova, copiando tudo. Isso é O(n²). A solução é juntar pedaços numa tabela e fechar com `table.concat`, que aloca uma vez só.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- LENTO: acesso global em loop\nfor i = 1, 1e6 do io.write('x') end\n\n-- RÁPIDO: cache local\nlocal w = io.write\nfor i = 1, 1e6 do w('x') end\n-- Diferença típica: 2-3x"
      },
      {
        "lang": "lua",
        "code": "-- Concatenação O(n²) — RUIM\nlocal s = ''\nfor i = 1, 1000 do\n  s = s .. tostring(i) .. ','\nend\n\n-- Concatenação O(n) — BOM\nlocal partes = {}\nfor i = 1, 1000 do\n  partes[i] = tostring(i)\nend\nlocal s = table.concat(partes, ',')"
      },
      {
        "lang": "lua",
        "code": "-- Pré-alocar tabela (LuaJIT)\nlocal new = require('table').new   -- LuaJIT\nlocal t = new(10000, 0)            -- 10000 slots de array\nfor i = 1, 10000 do t[i] = i end\n\n-- Em Lua puro, sem table.new:\n-- atribuir t[10000]=0 antes do loop dá hint ao alocador"
      },
      {
        "lang": "lua",
        "code": "-- Cache de função custosa\nlocal format = string.format\nlocal sin, cos = math.sin, math.cos\n\nfor i = 1, 1e5 do\n  local s = format('%.3f, %.3f', sin(i), cos(i))\nend"
      }
    ],
    "points": [
      "Locais usam slots de pilha; globais exigem hash em _G",
      "Cache `string.format`, `math.sin` etc. em locais antes do loop",
      "Concatenar com `..` em loop é O(n²); use `table.concat`",
      "table.concat também aceita separador: table.concat(t, ',')",
      "Pré-alocar tabela evita realocações sucessivas",
      "Evite criar tabelas e closures em loops quentes (pressiona GC)",
      "No LuaJIT, `table.new(narr, nhash)` pré-aloca explicitamente",
      "Multiplicação é mais rápida que divisão; cache `1/x` se reusar"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Não saia otimizando tudo cegamente. Código \"otimizado\" geralmente é menos legível. Otimize só o que o profiler aponta como gargalo."
      },
      {
        "type": "tip",
        "content": "Se você só vai escrever scripts pequenos, esqueça essas dicas. Elas valem para hot loops, servidores e jogos a 60 FPS."
      }
    ]
  },
  {
    "slug": "jit-friendly",
    "section": "performance",
    "title": "Código JIT-friendly (LuaJIT)",
    "difficulty": "avancado",
    "subtitle": "O que faz o JIT desistir e cair no interpretador.",
    "intro": "O LuaJIT trabalha por **trace compilation**: ele observa um caminho de execução (um *trace*), compila para código de máquina e, da próxima vez, executa essa versão otimizada. Mas se o trace encontra uma operação que o JIT ainda não sabe compilar — uma **NYI** (*Not Yet Implemented*) — ele aborta e cai de volta no interpretador, que é muito mais lento.\n\nIsso significa que escrever código LuaJIT-eficiente não é só sobre algoritmo: é sobre evitar construções que sabotam o JIT. As mais comuns são `pcall`/`xpcall` em hot path, `pairs` em tabelas mistas, certas chamadas de `string.format`, `coroutine.yield` cruzando fronteira C, e `error()` no caminho normal.\n\nA boa notícia: o LuaJIT te diz quando isso acontece. O flag `-jv` mostra cada trace que começa, completa ou aborta — e por quê. O `-jdump` vai mais fundo, mostrando o IR e o assembly final.\n\nA mentalidade: deixe loops quentes simples, numéricos, com `ipairs` ou `for i = 1, n`, sem alocação, sem `pcall`, sem `error`. Toda essa decoração fica fora — em código \"frio\" que só roda uma vez na inicialização.",
    "codes": [
      {
        "lang": "text",
        "code": "Construções NYI (até LuaJIT 2.1) — evite em hot loops:\n  - pcall / xpcall (parcialmente NYI)\n  - pairs() em tabelas com keys mistas (use ipairs)\n  - string.format com certos especificadores\n  - coroutine.yield através de chamada C\n  - error() em caminho normal\n  - select('#', ...) com varargs longos\n  - debug.* (qualquer coisa)\n\nLista oficial: http://wiki.luajit.org/NYI"
      },
      {
        "lang": "bash",
        "code": "# Diagnosticando o JIT\nluajit -jv script.lua\n# Saída exemplo:\n# [TRACE   1 script.lua:5 loop]\n# [TRACE --- script.lua:8 -- NYI: bytecode 51 at script.lua:9]\n#         ^ aqui o JIT desistiu — investigue a linha 9\n\nluajit -jdump=+rs script.lua > trace.log"
      },
      {
        "lang": "lua",
        "code": "-- RUIM: pcall no hot loop trava o JIT\nfor i = 1, 1e6 do\n  pcall(processar, dados[i])\nend\n\n-- BOM: valide antes, faça pcall só do bloco grande\nlocal ok, err = pcall(function()\n  for i = 1, 1e6 do\n    processar(dados[i])\n  end\nend)"
      }
    ],
    "points": [
      "NYI = Not Yet Implemented; aborta o trace e cai no interpretador",
      "Hot loop com NYI dentro é praticamente Lua puro (lento)",
      "Use `luajit -jv script.lua` para ver onde o JIT desiste",
      "Prefira `for i=1,n` e `ipairs` em loops quentes",
      "Tire `pcall`, `error` e `debug.*` dos caminhos críticos",
      "Loops curtos demais (< ~50 iterações) podem nem disparar o JIT",
      "Lista atualizada de NYI: wiki.luajit.org/NYI"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Muitas NYIs foram resolvidas no LuaJIT 2.1 (em beta perpétuo, mas estável). Vale a pena usá-lo no lugar do 2.0."
      },
      {
        "type": "warning",
        "content": "Não confunda \"código bonito\" com \"código rápido no JIT\". Funções helper, closures e abstrações de alto nível podem custar caro em hot path."
      }
    ]
  },
  {
    "slug": "alocacao-gc",
    "section": "performance",
    "title": "Alocação e o coletor de lixo",
    "difficulty": "avancado",
    "subtitle": "Reduzindo pressão no GC para manter 60 FPS.",
    "intro": "Toda vez que você escreve `{}`, `function() end` ou concatena uma string, Lua aloca memória. Eventualmente, o coletor de lixo (GC) precisa rodar para liberar o que não é mais usado — e quando ele roda, o seu programa pausa por alguns milissegundos. Em scripts comuns, ninguém percebe. Em jogos a 60 FPS (16ms por frame), uma pausa de GC de 5ms já gera engasgo visível.\n\nA estratégia para minimizar pausas: **reduzir alocações**. Pré-alocar buffers no início, reusar tabelas em vez de criar novas, evitar closures dentro de loops, usar arrays C via FFI (que ficam fora do GC) quando faz sentido.\n\nUm padrão clássico em jogos é o **pool de objetos**: em vez de criar e descartar tabelas a cada frame, mantenha uma lista de tabelas livres. Quando precisar de uma, tire do pool; quando terminar, devolva limpa. Assim o número total de tabelas vivas se estabiliza e o GC tem pouco trabalho.\n\nOutro detalhe sutil: o GC de Lua é incremental por padrão, mas você pode controlá-lo com `collectgarbage`. Em jogos, é comum desligar o GC durante o frame e rodar passos pequenos entre frames com `collectgarbage('step', n)`.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- RUIM: cria closure nova a cada iteração\nfor i = 1, 1000 do\n  table.sort(t, function(a, b) return a < b end)\nend\n\n-- BOM: declare a função uma vez e reuse\nlocal function cmp(a, b) return a < b end\nfor i = 1, 1000 do\n  table.sort(t, cmp)\nend"
      },
      {
        "lang": "lua",
        "code": "-- Pool de tabelas\nlocal pool = {}\n\nlocal function take()\n  return table.remove(pool) or {}\nend\n\nlocal function give(t)\n  for k in pairs(t) do t[k] = nil end\n  pool[#pool + 1] = t\nend\n\n-- Uso típico em jogo\nlocal evento = take()\nevento.tipo = 'click'\nevento.x, evento.y = 10, 20\nprocessar(evento)\ngive(evento)   -- volta para o pool"
      },
      {
        "lang": "lua",
        "code": "-- Controle manual do GC em jogos\ncollectgarbage('stop')              -- desliga GC automático\n\nlocal function frame()\n  atualizarJogo()\n  desenhar()\n  collectgarbage('step', 1)         -- passo pequeno entre frames\nend\n\n-- Diagnóstico\nprint(collectgarbage('count'), 'KB em uso')"
      }
    ],
    "points": [
      "Tabelas, strings novas e closures alocam — todas pesam no GC",
      "Pausas de GC podem destruir framerate em jogos",
      "Pools de objetos estabilizam o número de alocações",
      "Closures em loops criam funções novas a cada iteração",
      "collectgarbage('count') mostra memória em uso (KB)",
      "collectgarbage('step', n) roda um passo manual",
      "FFI (LuaJIT) aloca fora do GC — útil para buffers grandes",
      "Concatenar strings também aloca; cuidado em hot path"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Em jogos, criar tabelas dentro do loop principal é o assassino de FPS mais comum em projetos Lua. Sempre pré-aloque."
      },
      {
        "type": "tip",
        "content": "Antes de fazer pool de tudo, meça. Em scripts não-real-time, GC é praticamente invisível e otimização aqui só polui o código."
      }
    ]
  },
  {
    "slug": "c-bindings",
    "section": "performance",
    "title": "Escrevendo módulos C para Lua",
    "difficulty": "avancado",
    "subtitle": "Quando Lua puro não basta e FFI não é opção.",
    "intro": "Mesmo com LuaJIT e FFI, há momentos em que você precisa escrever um módulo C de verdade: quando o alvo é Lua oficial (sem FFI), quando você quer distribuir um rock pré-compilado, ou quando precisa expor uma API rica e tipada para usuários do seu módulo.\n\nA API C do Lua é elegantemente simples: tudo gira em torno de uma **pilha de valores**. Você empilha argumentos antes de chamar a função Lua; quando o Lua chama sua função C, os argumentos já estão lá. Você lê, processa, empilha o resultado e retorna o número de valores que deixou na pilha.\n\nO arquivo é uma `.c` comum que linka contra `liblua` (ou `libluajit`). Você compila como biblioteca compartilhada (`-shared` no Linux/macOS, `.dll` no Windows). O Lua descobre seu módulo procurando uma função chamada `luaopen_NOMEDOMODULO`, que registra as funções e devolve a tabela do módulo.\n\nFunções como `luaL_checknumber(L, 1)` fazem dois trabalhos: pegam o valor na posição 1 da pilha e validam que é um número (lançando erro Lua se não for). É o padrão para argumentos: sempre `luaL_check*` para os obrigatórios, `luaL_opt*` para os opcionais.",
    "codes": [
      {
        "lang": "c",
        "code": "// mymath.c — módulo C para Lua 5.3/5.4\n#include <lua.h>\n#include <lauxlib.h>\n\nstatic int l_quadrado(lua_State *L) {\n  double n = luaL_checknumber(L, 1);  // 1º arg\n  lua_pushnumber(L, n * n);            // empilha resultado\n  return 1;                            // 1 valor de retorno\n}\n\nstatic int l_somar(lua_State *L) {\n  double a = luaL_checknumber(L, 1);\n  double b = luaL_checknumber(L, 2);\n  lua_pushnumber(L, a + b);\n  return 1;\n}\n\nstatic const luaL_Reg funcs[] = {\n  {\"quadrado\", l_quadrado},\n  {\"somar\",    l_somar},\n  {NULL, NULL}\n};\n\nint luaopen_mymath(lua_State *L) {\n  luaL_newlib(L, funcs);\n  return 1;\n}"
      },
      {
        "lang": "bash",
        "code": "# Compilar (Linux)\ngcc -O2 -fPIC -shared mymath.c -o mymath.so \\\n    -I/usr/include/lua5.4\n\n# macOS\ngcc -O2 -bundle -undefined dynamic_lookup mymath.c \\\n    -o mymath.so -I$(brew --prefix lua)/include\n\n# Testar\nlua -e \"local m = require 'mymath'; print(m.quadrado(7))\"\n# saída: 49"
      },
      {
        "lang": "lua",
        "code": "-- Usando do lado Lua\nlocal mymath = require 'mymath'\nprint(mymath.quadrado(9))       -- saída: 81\nprint(mymath.somar(2, 3))       -- saída: 5\n\n-- Erro de tipo: o luaL_checknumber dispara erro Lua\nlocal ok, err = pcall(mymath.quadrado, 'oi')\nprint(err)\n-- bad argument #1 to 'quadrado' (number expected, got string)"
      }
    ],
    "points": [
      "API C é baseada em pilha (lua_State *L)",
      "luaL_check* lê e valida argumentos (lança erro Lua se inválido)",
      "lua_push* empilha resultados; return n diz quantos foram",
      "luaL_newlib registra a tabela de funções do módulo",
      "Função de entrada: luaopen_NOMEDOMODULO",
      "Compile com -fPIC -shared (Linux) ou -bundle (macOS)",
      "Para LuaJIT, considere FFI antes — quase sempre mais fácil"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "A assinatura `luaL_newlib` é Lua 5.2+. Para 5.1, use `luaL_register(L, \"mymath\", funcs)` e crie a tabela manualmente."
      },
      {
        "type": "warning",
        "content": "Bugs em C estouram a stack do Lua e travam o processo inteiro. Trate ponteiros, tamanhos e índices como se fossem dinamite."
      }
    ]
  },
  {
    "slug": "alternativas-rapidas",
    "section": "performance",
    "title": "Quando NÃO usar Lua puro",
    "difficulty": "intermediario",
    "subtitle": "Reconhecendo os limites e escolhendo a saída certa.",
    "intro": "Lua é absurdamente eficiente para uma linguagem de script, mas tem teto. Saber QUANDO trocar Lua puro por LuaJIT, FFI ou C é o que diferencia engenheiro experiente de iniciante que tenta otimizar o impossível.\n\nA ordem prática é quase sempre: **comece em Lua puro** (o mais simples e portável), **suba para LuaJIT** se o gargalo é CPU em loops, **use FFI** se precisa falar com lib C ou processar buffers binários, e **escreva C** só quando nada disso resolve. Ir direto para C porque \"vai ser mais rápido\" é uma armadilha — você gasta 10x mais tempo de desenvolvimento para ganhar talvez 20% sobre LuaJIT.\n\nLua brilha em: lógica de jogo, scripts, configuração, DSLs, glue code, automação, plugins. Lua sofre em: processamento numérico massivo (matrizes, sinais), criptografia pesada, parsing de gigabytes de texto, e qualquer coisa que precise de threads de verdade (Lua tem corrotinas, não threads).\n\nA dica mais valiosa do capítulo: **meça antes de migrar**. Muitas vezes o gargalo não é CPU — é I/O, é uma query SQL ruim, é um algoritmo O(n²) escondido. Trocar Lua por C nesse caso só torna o problema mais rápido sem resolver.",
    "codes": [
      {
        "lang": "text",
        "code": "Hierarquia típica de performance (loops numéricos):\n\n  Python puro      <  Lua puro\n  Lua puro         <  LuaJIT      (10-50x)\n  LuaJIT           ~=  C otimizado (em muitos casos)\n  Lua + C via FFI  ~=  C puro\n\nQuando MIGRAR de Lua puro para LuaJIT:\n  - Loops numéricos pesados\n  - Processamento de muitos pacotes/eventos por segundo\n  - Jogos que querem física complexa em Lua\n\nQuando IR para FFI:\n  - Já tem uma lib C que faz o trabalho\n  - Precisa manipular buffers binários\n  - Quer integrar com OpenGL, SDL, OpenSSL etc.\n\nQuando ESCREVER módulo C:\n  - Distribuição: rocks pré-compilados\n  - Alvo é Lua oficial (sem FFI)\n  - Código C antigo que vale a pena empacotar\n\nQuando FICAR em Lua puro:\n  - Lógica de jogo, máquinas de estado, scripts\n  - I/O, rede, automação\n  - DSLs, configuração, parsing leve\n  - Tudo que não apareceu no profiler"
      },
      {
        "lang": "lua",
        "code": "-- Antes de migrar, MEÇA o gargalo real\nlocal function profile_simples(fn)\n  collectgarbage()\n  local t = os.clock()\n  fn()\n  print(string.format('%.3fs', os.clock() - t))\nend\n\nprofile_simples(function()\n  -- código suspeito de ser lento\n  for i = 1, 1e6 do math.sqrt(i) end\nend)"
      }
    ],
    "points": [
      "LuaJIT cobre confortavelmente 90% dos casos de performance",
      "FFI é a porta de saída barata para integrar com C",
      "Módulos C valem para distribuição e quando FFI não é opção",
      "Não otimize sem profilar — gargalo costuma estar no I/O",
      "Lua é ruim para threads paralelas — use processos ou C",
      "Para matrizes/numpy, considere torch, cuda ou C via FFI",
      "Rewrite parcial vence rewrite total: troque só o hot loop"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Se você está pensando \"Lua é lento\", pare e meça. Em 9 de 10 casos o problema é algoritmo, não a linguagem."
      },
      {
        "type": "info",
        "content": "Empresas como CloudFlare, Adobe, Wikipedia e Cisco rodam Lua em produção em larga escala. Se está lento pra você, provavelmente dá pra arrumar sem trocar de stack."
      }
    ]
  },
  {
    "slug": "projeto-cli-todo",
    "section": "casos-apendice",
    "title": "Projeto: CLI de To-Do",
    "difficulty": "intermediario",
    "subtitle": "Juntando io, tabelas e argumentos numa app real.",
    "intro": "Nada consolida aprendizado como construir algo que funciona de ponta a ponta. Neste projeto, vamos juntar tudo que vimos sobre `io`, tabelas e a tabela global `arg` para fazer uma CLI de tarefas — daquelas que você usa de verdade no terminal.\n\nA arquitetura é simples: uma função para **carregar** as tarefas de um arquivo de texto, uma para **salvar**, e um pequeno *dispatcher* que olha o primeiro argumento (`add`, `rem`, `list`) e age de acordo. Esse padrão — comando + argumentos + persistência em arquivo — é a base de centenas de utilitários reais.\n\nA tabela `arg` é mágica: o Lua a preenche automaticamente com os argumentos passados na linha de comando. `arg[0]` é o nome do script, `arg[1]` o primeiro argumento, e assim por diante. É a equivalência direta do `argv` em C ou `sys.argv` em Python.\n\nDepois que esse esqueleto está rodando, você consegue evoluir em direções óbvias: salvar como JSON em vez de texto puro, marcar tarefas como concluídas, adicionar prazos, ordenar por prioridade. Cada uma dessas é uma boa prática de extensão.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- todo.lua — uso: lua todo.lua [add|rem|list] [valor]\nlocal arq = 'tarefas.txt'\n\nlocal function carregar()\n  local t = {}\n  local f = io.open(arq, 'r')\n  if f then\n    for linha in f:lines() do t[#t + 1] = linha end\n    f:close()\n  end\n  return t\nend\n\nlocal function salvar(t)\n  local f = assert(io.open(arq, 'w'))\n  for _, x in ipairs(t) do f:write(x, '\\n') end\n  f:close()\nend\n\nlocal cmd, val = arg[1], arg[2]\nlocal t = carregar()\n\nif cmd == 'add' and val then\n  table.insert(t, val)\n  salvar(t)\n  print('+ ' .. val)\nelseif cmd == 'rem' and val then\n  table.remove(t, tonumber(val))\n  salvar(t)\nelse\n  for i, x in ipairs(t) do print(i, x) end\nend"
      },
      {
        "lang": "bash",
        "code": "# Uso prático\nlua todo.lua add 'comprar pão'\nlua todo.lua add 'estudar Lua'\nlua todo.lua             # lista\n# 1  comprar pão\n# 2  estudar Lua\nlua todo.lua rem 1\nlua todo.lua\n# 1  estudar Lua"
      },
      {
        "lang": "lua",
        "code": "-- Evolução: marcar como concluído (prefix '[x] ')\nlocal function toggle(t, i)\n  local item = t[i]\n  if not item then return end\n  if item:sub(1, 4) == '[x] ' then\n    t[i] = item:sub(5)\n  else\n    t[i] = '[x] ' .. item\n  end\nend"
      }
    ],
    "points": [
      "arg[0] = nome do script; arg[1], arg[2]... = argumentos",
      "io.open retorna nil + msg em caso de erro — use assert",
      "f:lines() é um iterador que devolve linha a linha",
      "table.insert e table.remove operam por índice (1-based)",
      "Salvar tudo a cada operação é simples e suficiente para CLIs",
      "Próximos passos: serializar como JSON, usar OptParse",
      "Para args complexos, veja `argparse` (luarocks)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Para uma CLI \"de gente grande\", o rock `argparse` (do mesmo autor do luacheck) dá flags, subcomandos e --help automático."
      },
      {
        "type": "info",
        "content": "O padrão arquivo-de-texto-uma-linha-por-item é simples mas frágil: quebra se a tarefa contém quebra de linha. Para algo robusto, prefira JSON ou serialização Lua."
      }
    ]
  },
  {
    "slug": "projeto-config",
    "section": "casos-apendice",
    "title": "Projeto: arquivo de config em Lua",
    "difficulty": "intermediario",
    "subtitle": "Por que escolher Lua como linguagem de configuração.",
    "intro": "Configuração é um problema chato. JSON é restritivo (sem comentários, sem variáveis, sem condicionais). YAML é traiçoeiro (whitespace significativo, tipos surpresa). TOML é melhor mas ainda limitado. Em projetos Lua — e em vários outros, como NeoVim, AwesomeWM e Wireshark — a comunidade descobriu que **a melhor linguagem de configuração é a própria Lua**.\n\nO truque é simples: o arquivo de config é um script Lua que termina com `return { ... }`, devolvendo uma tabela. Você carrega com `dofile` e tem acesso à estrutura como qualquer outra tabela. Como é Lua de verdade, você pode usar `os.getenv` para variáveis de ambiente, condicionais para diferentes ambientes, loops para gerar listas, comentários — tudo o que JSON nega.\n\nO ponto delicado é segurança: um arquivo de config Lua é código executável. Se vem de fonte confiável (do próprio dev), tudo bem. Se vem de fonte externa (usuário, internet), você precisa rodar em **sandbox** — criar um `_ENV` mínimo que não dá acesso a `os.execute`, `io.open`, `require` etc.\n\nPara configs internas do seu projeto, esse padrão é ouro. Para configs de usuários finais (tipo ferramentas com plugins), faça o sandbox com carinho.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- config.lua — exemplo expressivo\nlocal env = os.getenv('ENV') or 'dev'\n\nreturn {\n  ambiente = env,\n  servidor = {\n    host = (env == 'prod') and '0.0.0.0' or 'localhost',\n    porta = tonumber(os.getenv('PORT')) or 8080,\n    cors = {'localhost', 'meusite.com'},\n  },\n  banco = os.getenv('DB_URL') or 'postgres://localhost/dev',\n  features = {\n    nova_ui  = env ~= 'prod',\n    cache_ms = 300,\n  },\n}"
      },
      {
        "lang": "lua",
        "code": "-- app.lua — consumindo a config\nlocal cfg = dofile('config.lua')\n\nprint('Ambiente: ' .. cfg.ambiente)\nprint('Escutando em ' .. cfg.servidor.host\n      .. ':' .. cfg.servidor.porta)\n\nfor _, origem in ipairs(cfg.servidor.cors) do\n  print('CORS allow: ' .. origem)\nend\n\nif cfg.features.nova_ui then print('UI nova ativa') end"
      },
      {
        "lang": "lua",
        "code": "-- Carregando config externa em sandbox (Lua 5.2+)\nlocal function carregar_seguro(path)\n  local sandbox = {  -- só o que é seguro\n    string = string, math = math,\n    table = table,   tonumber = tonumber,\n    tostring = tostring,\n  }\n  local chunk, err = loadfile(path, 't', sandbox)\n  if not chunk then error(err) end\n  return chunk()\nend\n\nlocal cfg = carregar_seguro('user_config.lua')"
      }
    ],
    "points": [
      "Config é só um arquivo Lua que termina com `return { ... }`",
      "dofile() executa e devolve o valor retornado",
      "Permite comentários, variáveis, condicionais, loops",
      "os.getenv() integra naturalmente com env vars",
      "Para configs de fontes externas: SEMPRE use sandbox",
      "loadfile(path, 't', env) define o ambiente no Lua 5.2+",
      "Padrão usado em NeoVim, AwesomeWM, Wireshark, Hammerspoon"
    ],
    "alerts": [
      {
        "type": "danger",
        "content": "Carregar config Lua de fonte não-confiável SEM sandbox é executar código arbitrário. Equivale a `eval()` do JavaScript com input de usuário."
      },
      {
        "type": "tip",
        "content": "Se sua config precisa ser editada por gente que não programa, JSON/TOML pode ser melhor — Lua dá poder demais para quem só queria mudar um número."
      }
    ]
  },
  {
    "slug": "projeto-scraper",
    "section": "casos-apendice",
    "title": "Projeto: scraper HTTP simples",
    "difficulty": "intermediario",
    "subtitle": "Baixando e extraindo dados de páginas web.",
    "intro": "Web scraping em Lua é confortável: a biblioteca `luasocket` cuida de HTTP, e os patterns nativos resolvem a maior parte da extração de texto sem precisar de regex completa.\n\nNeste projeto vamos baixar uma página, medir o tamanho da resposta, e extrair informações específicas usando patterns. O fluxo é universal: requisição → resposta → parse. Para HTTPS, instale o `luasec` (`luarocks install luasec`); ele entra como dependência transparente e habilita `https://`.\n\nUm cuidado importante: `luasocket` é síncrono e bloqueante — cada requisição trava o programa até voltar. Para muitas requisições paralelas, considere `lua-http` (mais moderno, suporta HTTP/2 e cothreads) ou rodar em OpenResty (que dá I/O cooperativo via cosockets).\n\nE o aviso de sempre: scraping precisa respeitar `robots.txt`, termos de uso, e ter limite de taxa. Bater milhares de vezes num site sem cuidado é desrespeito — e dá ban.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- scraper básico com luasocket\nlocal http = require 'socket.http'\n\nlocal corpo, status = http.request('https://example.com')\nprint('Status:', status)\nprint('Tamanho:', #corpo, 'bytes')\nprint(corpo:sub(1, 200))   -- primeiras 200 chars\n\n-- Extrair o título com pattern Lua\nlocal titulo = corpo:match('<title>(.-)</title>')\nprint('Título:', titulo)"
      },
      {
        "lang": "lua",
        "code": "-- Coletando todos os links da página\nlocal http = require 'socket.http'\nlocal corpo = http.request('https://example.com')\n\nlocal links = {}\nfor href in corpo:gmatch('href=\"([^\"]+)\"') do\n  links[#links + 1] = href\nend\n\nfor i, l in ipairs(links) do print(i, l) end"
      },
      {
        "lang": "lua",
        "code": "-- POST com headers e corpo (luasocket)\nlocal http = require 'socket.http'\nlocal ltn12 = require 'ltn12'\n\nlocal resp = {}\nlocal corpo = 'campo1=valor1&campo2=valor2'\n\nhttp.request{\n  url = 'https://httpbin.org/post',\n  method = 'POST',\n  headers = {\n    ['Content-Type']   = 'application/x-www-form-urlencoded',\n    ['Content-Length'] = tostring(#corpo),\n  },\n  source = ltn12.source.string(corpo),\n  sink   = ltn12.sink.table(resp),\n}\nprint(table.concat(resp))"
      }
    ],
    "points": [
      "luasocket cobre HTTP/1.1 simples; instala com luarocks",
      "Para HTTPS, adicione luasec (carregamento transparente)",
      "http.request() retorna corpo, status, headers, status_line",
      "Use `corpo:match` e `corpo:gmatch` com patterns Lua",
      "luasocket é síncrono — uma requisição por vez",
      "Para paralelismo: lua-http, OpenResty (cosockets), copas",
      "Sempre respeite robots.txt e adicione delay entre requisições",
      "Defina User-Agent customizado para identificar seu bot"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Patterns Lua não são regex completas. Para HTML complexo, use um parser real como `htmlparser` ou `lua-gumbo` em vez de tentar parsear com gmatch."
      },
      {
        "type": "info",
        "content": "Para scraping sério em escala, considere ferramentas dedicadas (Scrapy em Python). Lua brilha quando o scraping é parte de outro pipeline já em Lua."
      }
    ]
  },
  {
    "slug": "projeto-irc-bot",
    "section": "casos-apendice",
    "title": "Projeto: bot de IRC simples",
    "difficulty": "intermediario",
    "subtitle": "TCP puro com luasocket — uma aula de protocolo.",
    "intro": "IRC (*Internet Relay Chat*) parece coisa do passado, mas continua vivo, ativo e é o ambiente perfeito para aprender networking de baixo nível. O protocolo é texto puro, definido em RFCs simples, e qualquer pessoa consegue conectar com `socket.connect` e mandar comandos.\n\nNeste projeto, vamos abrir uma conexão TCP no servidor `irc.libera.chat`, fazer o handshake (NICK + USER), entrar num canal e responder ao PING — que é como o servidor verifica se você ainda está vivo. Se você não responder PONG, leva *kick* em segundos.\n\nO loop principal é um padrão clássico de protocolo texto: ler uma linha, decidir o que fazer, escrever de volta. `s:receive('*l')` lê uma linha completa terminada em CRLF; `s:send` manda bytes.\n\nDepois de funcionar, dá pra evoluir para um bot útil: responder a comandos (`!hora`, `!clima`), logar conversas, integrar com APIs. Os princípios — handshake, loop de eventos, parsing de mensagens — são os mesmos de qualquer protocolo de rede.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- bot.lua — bot mínimo que responde a PING\nlocal socket = require 'socket'\nlocal s = assert(socket.connect('irc.libera.chat', 6667))\n\ns:send('NICK luabot\\r\\n')\ns:send('USER luabot 0 * :Lua Bot\\r\\n')\ns:send('JOIN #lua\\r\\n')\n\nwhile true do\n  local linha, err = s:receive('*l')\n  if not linha then print('erro:', err); break end\n  print('<<', linha)\n\n  if linha:match('^PING') then\n    s:send('PONG' .. linha:sub(5) .. '\\r\\n')\n  end\nend"
      },
      {
        "lang": "lua",
        "code": "-- Parsing de mensagem IRC\n-- Formato: :nick!user@host PRIVMSG #canal :texto da mensagem\nlocal function parse_msg(linha)\n  local nick, cmd, alvo, texto = linha:match(\n    '^:(%S+)%S* (%S+) (%S+) :(.*)$')\n  return nick, cmd, alvo, texto\nend\n\nlocal n, c, a, t = parse_msg(\n  ':ana!~a@host PRIVMSG #lua :olá pessoal')\nprint(n, c, a, t)\n-- saída: ana  PRIVMSG  #lua  olá pessoal"
      },
      {
        "lang": "lua",
        "code": "-- Respondendo a comandos !hora\nlocal function on_msg(s, nick, alvo, texto)\n  if texto == '!hora' then\n    local resp = nick .. ': ' .. os.date('%H:%M:%S')\n    s:send('PRIVMSG ' .. alvo .. ' :' .. resp .. '\\r\\n')\n  end\nend"
      }
    ],
    "points": [
      "socket.connect(host, porta) abre TCP cliente",
      "s:receive('*l') lê uma linha; s:send(str) escreve bytes",
      "Protocolo IRC é texto, terminado por CRLF (\\r\\n)",
      "Sempre responda PING com PONG ou leva kick",
      "Patterns Lua dão conta do parsing de mensagens",
      "Para algo robusto, use lua-irc (luarocks)",
      "Mesmo padrão (TCP + linha + parse) serve a SMTP, HTTP, etc."
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Antes de logar num servidor real, teste em modo \"observador\" só lendo mensagens. Bots mal comportados são banidos rapidamente."
      },
      {
        "type": "info",
        "content": "Para aprender protocolos de verdade, dá uma olhada em RFC 1459 (IRC original) e RFC 2812 (atualização). São pequenos e legíveis."
      }
    ]
  },
  {
    "slug": "projeto-templating",
    "section": "casos-apendice",
    "title": "Projeto: mini templating",
    "difficulty": "intermediario",
    "subtitle": "Renderizando strings com {{var}} em três linhas.",
    "intro": "Sistemas de template (Mustache, Jinja, ERB) são ferramentas onipresentes em web. A boa notícia é que, para o caso simples de \"substituir `{{nome}}` pelo valor de `nome`\", os patterns nativos do Lua resolvem em uma linha.\n\nA ideia: `gsub` aceita uma função como segundo argumento. Quando você passa o pattern `{{%s*(.-)%s*}}`, o `%s*` come espaços opcionais e o `(.-)` captura o nome da variável (lazy, para não engolir `}}` adjacentes). A função é chamada para cada match, recebe o nome e devolve o valor — pronto, render feito.\n\nEsse mini-template é perfeito para coisas simples: emails parametrizados, mensagens de erro, snippets de configuração gerados. Para algo sério com condicionais, loops e includes, parta para `etlua` (estilo ERB), `lustache` (Mustache compatível) ou `lua-resty-template` (usado em OpenResty).\n\nA pegadinha: confiar em template não escapa HTML. Se você renderiza dados de usuário em HTML, escape antes (substituir `<`, `>`, `&`, `\"`) ou use uma lib que faça isso por você.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- A função inteira em 3 linhas\nlocal function render(tpl, vars)\n  return (tpl:gsub('{{%s*(.-)%s*}}', function(nome)\n    return tostring(vars[nome] or '')\n  end))\nend\n\nlocal tpl = 'Olá, {{nome}}! Você tem {{idade}} anos.'\nprint(render(tpl, {nome = 'Ana', idade = 30}))\n-- saída: Olá, Ana! Você tem 30 anos."
      },
      {
        "lang": "lua",
        "code": "-- Suportando caminhos aninhados (cfg.banco.host)\nlocal function get_path(t, path)\n  for parte in path:gmatch('[^.]+') do\n    if type(t) ~= 'table' then return nil end\n    t = t[parte]\n  end\n  return t\nend\n\nlocal function render(tpl, vars)\n  return (tpl:gsub('{{%s*(.-)%s*}}', function(p)\n    return tostring(get_path(vars, p) or '')\n  end))\nend\n\nprint(render('Banco: {{db.host}}:{{db.porta}}',\n  {db = {host = 'localhost', porta = 5432}}))\n-- saída: Banco: localhost:5432"
      },
      {
        "lang": "lua",
        "code": "-- Escape básico de HTML\nlocal subs = {['<']='&lt;', ['>']='&gt;',\n              ['&']='&amp;', ['\"']='&quot;'}\nlocal function esc(s)\n  return (tostring(s):gsub('[<>&\"]', subs))\nend\n\nlocal function render_html(tpl, vars)\n  return (tpl:gsub('{{%s*(.-)%s*}}', function(n)\n    return esc(vars[n] or '')\n  end))\nend"
      }
    ],
    "points": [
      "gsub aceita função; ela é chamada com cada captura",
      "Pattern '{{%s*(.-)%s*}}' captura nome com espaços opcionais",
      "(.-) é lazy — para no primeiro }}, sem engolir tudo",
      "tostring(...) evita erro com nil ou tipos exóticos",
      "Para HTML, sempre escape ou use uma lib confiável",
      "Para condicionais/loops: lustache, etlua, lua-resty-template",
      "Padrão útil para emails, configs e mensagens parametrizadas"
    ],
    "alerts": [
      {
        "type": "warning",
        "content": "Renderizar dados de usuário em HTML sem escape abre porta para XSS. O mini-render acima NÃO escapa; use a versão com `esc` em contexto web."
      },
      {
        "type": "tip",
        "content": "Para templates mais ricos, etlua (sintaxe `<%= var %>`) é minimalista e poderoso — basicamente \"ERB do Lua\"."
      }
    ]
  },
  {
    "slug": "debugging-pratico",
    "section": "casos-apendice",
    "title": "Debugging na prática",
    "difficulty": "intermediario",
    "subtitle": "De print() a debuggers gráficos.",
    "intro": "Lua não tem console interativo embutido como Python (`pdb`) ou Ruby (`pry`), mas a comunidade construiu um ecossistema sólido para debugging. O ponto de partida é, sem vergonha nenhuma, o velho `print` — ele resolve mais bugs do que qualquer ferramenta sofisticada.\n\nO problema do `print` é que ele mostra tabelas como `table: 0x7f9...`. Para debugar tabelas de verdade, você precisa de um *pretty printer* — uma função recursiva que indenta e formata. A biblioteca `Penlight` traz `pl.pretty.dump`, que é o padrão da comunidade. Se você não quer dependência, escreva o seu — são 10 linhas.\n\nPara contexto de erros, `debug.traceback` é seu amigo: ele captura o stack trace do ponto onde foi chamado e devolve como string. É comum embrulhar `pcall` com `xpcall(fn, debug.traceback)` para que erros venham com o caminho completo.\n\nQuando print não basta, suba um nível: **ZeroBrane Studio** é uma IDE leve que dá debugger gráfico (breakpoints, step, inspeção de variáveis) para Lua, LuaJIT, LÖVE, Corona — e é gratuita. Para debugging remoto (servidor rodando longe), `mobdebug` é a referência.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- Pretty printer caseiro de tabelas\nlocal function dump(o, indent)\n  indent = indent or ''\n  if type(o) ~= 'table' then\n    return type(o) == 'string' and ('%q'):format(o) or tostring(o)\n  end\n  local partes = {}\n  for k, v in pairs(o) do\n    partes[#partes + 1] = indent .. '  '\n      .. tostring(k) .. ' = ' .. dump(v, indent .. '  ')\n  end\n  return '{\\n' .. table.concat(partes, ',\\n')\n         .. '\\n' .. indent .. '}'\nend\n\nprint(dump({nome = 'Ana', tags = {'a', 'b'}, idade = 30}))"
      },
      {
        "lang": "lua",
        "code": "-- Stack trace em erros\nlocal function pode_falhar(x)\n  if x < 0 then error('x negativo!') end\n  return math.sqrt(x)\nend\n\nlocal ok, err = xpcall(\n  function() return pode_falhar(-1) end,\n  debug.traceback)\n\nprint(err)\n-- imprime o erro + stack trace completo"
      },
      {
        "lang": "lua",
        "code": "-- Hook para rastrear toda chamada de função\nlocal function hook_chamadas(evento)\n  local info = debug.getinfo(2)\n  print(string.format('%s -> %s @ %s:%d',\n    evento, info.name or '?', info.short_src, info.currentline))\nend\n\ndebug.sethook(hook_chamadas, 'c')   -- 'c' = call\n-- ... seu código ...\ndebug.sethook()                      -- desliga"
      }
    ],
    "points": [
      "print é a primeira ferramenta — não tenha vergonha",
      "Para tabelas, use dump() ou pl.pretty.dump (Penlight)",
      "xpcall(fn, debug.traceback) captura erro com stack trace",
      "debug.getinfo(n) inspeciona o nível n da stack",
      "ZeroBrane Studio: IDE leve com debugger gráfico",
      "mobdebug: debugger remoto, integra com ZBS",
      "Para profiling de tempo: luaprofiler ou luajit -jp"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Configure um `printf` debug global no início dos seus projetos: `function p(...) print(dump({...})) end`. Vale ouro."
      },
      {
        "type": "warning",
        "content": "debug.* é poderoso e lento. Use em desenvolvimento, mas tire de produção — especialmente sethook, que custa caro a cada call."
      }
    ]
  },
  {
    "slug": "testes-busted",
    "section": "casos-apendice",
    "title": "Testes com busted",
    "difficulty": "intermediario",
    "subtitle": "BDD em Lua que parece Jasmine, RSpec ou Mocha.",
    "intro": "Testar código não é ritual de purificação — é um investimento que paga ao próximo programador (que pode ser você daqui a três meses). Em Lua, o framework dominante é o **busted**, criado por Olivine Labs e amplamente usado em projetos sérios como Kong, OpenResty e Penlight.\n\nA sintaxe é BDD (*behavior-driven development*): você descreve o comportamento esperado em frases legíveis. Um `describe` agrupa testes relacionados; um `it` é uma asserção específica. O conjunto fica próximo de uma especificação executável — alguém lendo o `spec/` entende o que o módulo faz.\n\nA biblioteca de assertions é rica: `assert.are.equal`, `assert.is_true`, `assert.has_error`, `assert.spy`, `assert.stub`. Há suporte a *mocks* e *spies* embutidos, então você não precisa puxar lib extra para isolar dependências.\n\nA convenção é colocar testes em `spec/` com nomes `*_spec.lua`. Você roda com `busted` e ele descobre tudo automaticamente. Suporte a TAP, JUnit XML, watch mode e cobertura (com `luacov`) está tudo lá.",
    "codes": [
      {
        "lang": "lua",
        "code": "-- spec/calc_spec.lua\ndescribe('Calculadora', function()\n  local calc = require 'calc'\n\n  it('soma dois números', function()\n    assert.are.equal(5, calc.somar(2, 3))\n  end)\n\n  it('lança erro em divisão por zero', function()\n    assert.has_error(function() calc.dividir(1, 0) end,\n      'divisao por zero')\n  end)\n\n  describe('quando recebe negativos', function()\n    it('soma corretamente', function()\n      assert.are.equal(-1, calc.somar(2, -3))\n    end)\n  end)\nend)"
      },
      {
        "lang": "bash",
        "code": "# Instalar e rodar\nluarocks install busted\n\nbusted spec/                # roda tudo em spec/\nbusted -v                   # verbose\nbusted -o TAP > resultado   # saída TAP\nbusted --coverage           # com luacov\n\n# Saída típica:\n# ●●●● 4 successes / 0 failures / 0 errors / 0 pending"
      },
      {
        "lang": "lua",
        "code": "-- Setup, teardown e mocks\ndescribe('Usuario', function()\n  local db\n\n  before_each(function()\n    db = mock({salvar = function() return true end})\n  end)\n\n  it('chama db.salvar ao criar usuário', function()\n    local usuario = require('usuario').novo('Ana', db)\n    assert.spy(db.salvar).was.called(1)\n  end)\nend)"
      }
    ],
    "points": [
      "busted = framework BDD popular para Lua (luarocks install busted)",
      "Convenção: testes em spec/ com sufixo _spec.lua",
      "describe/it agrupa e descreve comportamentos",
      "Asserts ricos: are.equal, is_true, has_error, spy, stub",
      "Suporta before_each, after_each, setup, teardown",
      "Mocks e spies embutidos — sem dependência extra",
      "Integra com luacov para relatório de cobertura",
      "Saída em texto, TAP ou JUnit XML (CI-friendly)"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Comece pequeno: um `describe` por módulo, um `it` por comportamento público. Não teste detalhes de implementação — teste o contrato."
      },
      {
        "type": "info",
        "content": "Outras alternativas: `luaunit` (xUnit-style), `telescope` (já abandonado). busted é a escolha padrão hoje."
      }
    ]
  },
  {
    "slug": "lua-vs-outras",
    "section": "casos-apendice",
    "title": "Lua vs outras linguagens",
    "difficulty": "iniciante",
    "subtitle": "Quando escolher Lua e quando usar outra ferramenta.",
    "intro": "Linguagem de programação não é religião. Cada uma resolve uma classe de problemas melhor que outras, e maturidade técnica é saber escolher. Lua não é a melhor para tudo — mas em algumas áreas, é simplesmente imbatível.\n\nLua brilha em **scripting embarcado**: quando um programa em C/C++ precisa de extensibilidade via scripts, Lua é praticamente o padrão da indústria (jogos, plugins, configuração). É leve, embarcável em ~200KB, e a API C é a mais limpa e acessível entre linguagens dinâmicas.\n\nLua brilha em **jogos e gráficos**: WoW, Roblox, LÖVE 2D, Defold, Garry's Mod, Civilization, todos rodam Lua. O motivo: rápido o suficiente, fácil de hot-reload, simples para designers aprenderem.\n\nLua brilha em **sistemas de alto throughput**: OpenResty (NGINX + LuaJIT) sustenta milhões de requisições no Cloudflare, na Wikipedia, no Adobe.\n\nE Lua perde feio em algumas frentes: ecossistema de pacotes muito menor que npm/PyPI; stdlib enxuta demais para tarefas comuns; quase nenhum suporte web full-stack pronto; comunidade pequena (poucos tutoriais em PT-BR). Para essas frentes, escolher Python, JavaScript ou Go faz mais sentido.",
    "codes": [
      {
        "lang": "text",
        "code": "Lua vs Python:\n  + Muito mais leve, mais rápido (LuaJIT)\n  + Embarcável em qualquer programa C\n  + Sintaxe mais simples (~20 keywords)\n  - Stdlib bem menor (sem datetime, urllib, json embutidos)\n  - Comunidade muito menor\n  - Menos jobs no mercado\n\nLua vs JavaScript:\n  + Mais simples e consistente (1 estrutura: tabela)\n  + Não tem == vs === e outras pegadinhas\n  + Embarcável em apps nativas\n  - Sem ecossistema npm-like\n  - Sem async/await nativo\n  - Front-end web não é caso de uso\n\nLua vs C/C++:\n  + Muito mais produtiva (sem types, sem make, sem segfault)\n  - Mais lenta — mas LuaJIT chega muito perto\n  + FFI une o melhor dos dois mundos\n\nLua vs Go:\n  + Mais flexível, dinâmica, embutível\n  - Sem concorrência paralela de verdade\n  - Sem tipagem estática nem ferramental robusto"
      },
      {
        "lang": "lua",
        "code": "-- A elegância da \"tabela única\" do Lua\nlocal pessoa = {\n  nome = 'Ana',           -- registro/objeto\n  tags = {'dev', 'lua'},  -- array\n  endereco = {            -- aninhado\n    rua = 'X', numero = 10\n  },\n}\n\n-- Em JS você teria objeto + array separados.\n-- Em Lua, é tudo a MESMA coisa: tabela.\n-- Aprende uma estrutura, modela qualquer dado."
      }
    ],
    "points": [
      "Lua é a melhor 'cola' para C — embeddability sem rival",
      "LuaJIT compete com C em muitos benchmarks numéricos",
      "Para web full-stack, considere Python, Node, Go, Ruby",
      "Para data science, Python ganha de longe",
      "Stdlib enxuta exige LuaRocks para coisas básicas",
      "Comunidade pequena, mas concentrada e acessível",
      "Padrão na indústria de jogos e em redes (OpenResty)"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Mesmo que Lua não seja a escolha principal de um projeto, conhecê-la abre portas: Roblox, LÖVE, Wireshark, NeoVim, Redis (scripts) — todos usam Lua."
      },
      {
        "type": "tip",
        "content": "Não venda Lua como \"linguagem geral\". Venda como ferramenta certa para o lugar certo: scripts dentro de C, jogos, ngnix, sistemas embarcados."
      }
    ]
  },
  {
    "slug": "zen-lua",
    "section": "casos-apendice",
    "title": "A filosofia de Lua",
    "difficulty": "iniciante",
    "subtitle": "Mecanismos, não políticas — e por que isso importa.",
    "intro": "Lua tem uma filosofia de design que é, ao mesmo tempo, sua maior força e o motivo pelo qual algumas pessoas a estranham no início. O lema oficial dos autores é: **\"mecanismos, não políticas\"**.\n\nEm linguagens \"políticas\" (Java, C#, Python), você recebe um sistema de classes pronto, um sistema de módulos pronto, um sistema de async pronto — tudo decidido por quem desenhou a linguagem. Em Lua, você recebe **mecanismos primitivos** poderosos (tabelas, metatables, corrotinas, primeira classe para funções) e *constroi* o que precisa em cima deles.\n\nResultado: Lua tem ~20 palavras-chave, ~200KB de binário, código-fonte de ~17 mil linhas em C ANSI puro, e cabe inteira na cabeça de uma pessoa em um fim de semana. Em vez de classes, você usa metatables (`__index`). Em vez de threads, corrotinas. Em vez de async/await, `coroutine.yield`. Em vez de tipos, convenções.\n\nO custo: para cada problema, você costuma ter três jeitos diferentes de fazer (porque não há \"o jeito\"). A vantagem: a linguagem cabe em qualquer cabeça e em qualquer programa. Lua é como o sal — quase invisível, mas presente em jogos que você jogou, em sites que você visitou, em ferramentas que você usou hoje.",
    "codes": [
      {
        "lang": "text",
        "code": "Princípios da linguagem (do paper original):\n\n  1. Mecanismos, não políticas\n     → Não impõe paradigma; combine como quiser.\n\n  2. Tabela é a única estrutura de dados\n     → Array, dict, objeto, namespace: tudo é tabela.\n\n  3. Pequena\n     → ~17 mil linhas de C, binário ~200KB.\n\n  4. Portável\n     → C ANSI puro; roda em qualquer coisa que tenha\n       compilador C (de mainframe a router).\n\n  5. Embarcável\n     → API C primeira classe; Lua foi PROJETADA\n       para viver dentro de outros programas.\n\n  6. Simples\n     → ~20 keywords; o leitor consegue prever o que\n       cada construção faz.\n\n'Lua deveria ser como o sal: invisível, mas presente em tudo.'\n            — Roberto Ierusalimschy"
      },
      {
        "lang": "lua",
        "code": "-- Mesmo conceito, três soluções idiomáticas\n\n-- 1) OO clássica via metatable\nlocal Pessoa = {}\nPessoa.__index = Pessoa\nfunction Pessoa.novo(n) return setmetatable({nome=n}, Pessoa) end\nfunction Pessoa:falar() print('Oi, sou ' .. self.nome) end\n\n-- 2) Closure (sem classe nenhuma)\nlocal function pessoa(nome)\n  return { falar = function() print('Oi, sou ' .. nome) end }\nend\n\n-- 3) Tabela direta\nlocal p = {nome = 'Ana'}\nlocal function falar(p) print('Oi, sou ' .. p.nome) end\n\n-- TODAS são Lua idiomática. Política é sua."
      }
    ],
    "points": [
      "Mecanismos > políticas: combine primitivas para resolver",
      "Tabela + metatable resolve qualquer estrutura de dados",
      "Linguagem cabe inteira na cabeça em poucos dias",
      "Código fonte é C ANSI puro, ~17k linhas, totalmente portável",
      "Embarcabilidade é first-class — API C limpa e estável",
      "Simplicidade é uma feature, não falta de recursos",
      "Não há 'o jeito Lua' rígido — há vários, e tudo bem"
    ],
    "alerts": [
      {
        "type": "info",
        "content": "Recomendado: leia o paper \"The Evolution of Lua\" (Ierusalimschy, 2007). Curto, didático e mostra o pensamento por trás de cada decisão de design."
      },
      {
        "type": "tip",
        "content": "Se você vem de Java/Python, vai sentir falta de \"o jeito certo\". Abrace a liberdade: escolha a solução mais simples para o seu caso e siga em frente."
      }
    ]
  },
  {
    "slug": "recursos",
    "section": "casos-apendice",
    "title": "Para continuar aprendendo",
    "difficulty": "iniciante",
    "subtitle": "Livros, sites e comunidades para depois deste guia.",
    "intro": "Lua tem uma comunidade pequena mas com qualidade técnica acima da média. Os recursos são poucos, mas os bons são realmente bons. Esta lista cobre o essencial para se aprofundar a partir daqui.\n\nA referência absoluta é o **Reference Manual oficial** em lua.org. É curto (~50 páginas), preciso e gratuito. Quando bater dúvida sobre semântica exata de uma função, o manual é a verdade.\n\nO livro **\"Programming in Lua\"** do próprio Roberto Ierusalimschy (autor da linguagem) é a bíblia. A 1ª edição está online de graça; as edições mais novas (4ª de 2017) cobrem Lua 5.3 e podem ser compradas. É didático, completo, escrito por quem desenhou cada decisão.\n\nPara áreas específicas — LÖVE 2D, Roblox, OpenResty, Defold — cada projeto tem documentação e wiki próprios, geralmente excelentes. O **lua-users wiki** é um tesouro de receitas, padrões e discussões antigas que ainda valem.\n\nComunidade: a mailing list `lua-l` é onde os autores respondem dúvidas; subreddits como r/lua, r/love2d e r/roblox têm gente disposta a ajudar; servidores Discord de LÖVE e Roblox são bem ativos.",
    "codes": [
      {
        "lang": "text",
        "code": "📚 Documentação oficial:\n  https://www.lua.org/manual/5.4/   Reference Manual (5.4)\n  https://www.lua.org/manual/5.1/   (LuaJIT compat)\n  https://www.lua.org/pil/          Programming in Lua, 1ª ed. (free)\n\n📖 Livros recomendados:\n  - Programming in Lua, 4ª ed. (Roberto Ierusalimschy)\n  - Lua Programming Gems\n  - Game Development with LÖVE 2D (Darmie Akinlaja)\n\n🌐 Wikis e referências:\n  http://lua-users.org/wiki/        Receitas e padrões\n  https://love2d.org/wiki/          LÖVE 2D oficial\n  https://luajit.org/               LuaJIT (Mike Pall)\n  https://openresty.org/            NGINX + Lua\n  https://create.roblox.com/docs    Roblox DevHub\n\n💬 Comunidades:\n  - r/lua, r/love2d, r/roblox       Reddit ativo\n  - lua-l mailing list              Onde os autores estão\n  - Discord LÖVE, Discord Roblox    Tira-dúvidas em tempo real\n  - Stack Overflow tag [lua]        Q&A clássico\n\n📦 Pacotes e ferramentas:\n  https://luarocks.org/             Gerenciador de pacotes\n  https://github.com/topics/lua     Projetos no GitHub"
      },
      {
        "lang": "bash",
        "code": "# Configurando ambiente sério para estudo\nbrew install lua luajit luarocks   # macOS\nsudo apt install lua5.4 luajit luarocks  # Ubuntu\n\n# Bibliotecas úteis para aprender\nluarocks install luasocket\nluarocks install luafilesystem\nluarocks install penlight          # \"stdlib estendida\"\nluarocks install busted            # testes\nluarocks install luacheck          # lint"
      }
    ],
    "points": [
      "Reference Manual oficial: curto, preciso, gratuito",
      "'Programming in Lua' (Ierusalimschy) é a bíblia",
      "1ª edição do PIL está online de graça em lua.org/pil",
      "lua-users wiki tem ouro escondido em receitas antigas",
      "Cada engine (LÖVE, Roblox, OpenResty) tem docs próprias",
      "Comunidade é pequena mas amigável e tecnicamente forte",
      "Penlight é a 'stdlib estendida' que vale conhecer"
    ],
    "alerts": [
      {
        "type": "tip",
        "content": "Se for ler um único livro, escolha o 'Programming in Lua' do Roberto Ierusalimschy. Sério, não tem substituto."
      },
      {
        "type": "info",
        "content": "Conteúdo em português é raro mas existe: tutorial.com.br tem trilha de Lua, e a comunidade do LÖVE BR é ativa no Discord."
      }
    ]
  },
  {
    "slug": "proximos-passos",
    "section": "casos-apendice",
    "title": "Próximos passos",
    "difficulty": "iniciante",
    "subtitle": "Para onde ir depois de fechar este livro.",
    "intro": "Você terminou. De variáveis a metatables, de corrotinas a FFI, de scripts simples a CLIs e bots — o material está consolidado. Mas, como em qualquer linguagem, ler é só metade. A outra metade — a que de fato fixa conhecimento — vem fazendo.\n\nA sugestão é escolher **um projeto pessoal** que te empolgue e construir nas próximas semanas. Não precisa ser grande: um Pong em LÖVE, um plugin para o NeoVim, um bot que automatiza algo no seu dia. O importante é ter as mãos no teclado escrevendo Lua de verdade, com erros de verdade, com dúvidas de verdade.\n\nLua é uma linguagem **pequena**, e esse é o segredo do seu poder: você consegue dominar bem o que ela oferece. Não fique buscando \"mais features\". Aprofunde-se nas que existem — metatables, corrotinas, patterns, tabelas. Quanto mais você pratica os fundamentos, mais elegantes ficam as soluções.\n\nA comunidade Lua é amigável e técnica. Faça perguntas no r/lua, no Discord do LÖVE, no fórum da Roblox. Abra issues nos projetos que você usa. Contribua com um rock pequeno no LuaRocks. Cada interação te coloca um nível acima.",
    "codes": [
      {
        "lang": "text",
        "code": "🎯 Caminhos sugeridos (escolha um e ataque):\n\n  1. Faça um joguinho em LÖVE 2D\n     Pong → Snake → Breakout → Platformer\n     (a curva é divertida e visual)\n\n  2. Crie uma experiência no Roblox\n     Mundo aberto, mecânica simples, multiplayer\n     (mercado gigante, especialmente para devs jovens)\n\n  3. Construa um plugin para NeoVim ou Wireshark\n     Ferramenta que você usa todo dia, ganha automação\n\n  4. Escreva um servidor com OpenResty\n     API REST, gateway, microserviço — performance brutal\n\n  5. Contribua para um rock no LuaRocks\n     Issues, PRs, manutenção — entra na comunidade\n\n  6. Modifique um jogo que use Lua\n     Garry's Mod, World of Warcraft, Factorio, Defold\n\n  7. Escreva um interpretador toy em Lua\n     DSL para automação, parser de mini-linguagem\n\n💡 O importante: PRATIQUE.\n   Lua é pequena — o desafio é dominar bem o pouco que tem."
      },
      {
        "lang": "lua",
        "code": "-- O 'Hello World' do próximo passo: LÖVE 2D\n-- (salve como main.lua e rode com: love .)\nfunction love.load()\n  x, y = 100, 100\nend\n\nfunction love.update(dt)\n  if love.keyboard.isDown('right') then x = x + 200 * dt end\n  if love.keyboard.isDown('left')  then x = x - 200 * dt end\n  if love.keyboard.isDown('down')  then y = y + 200 * dt end\n  if love.keyboard.isDown('up')    then y = y - 200 * dt end\nend\n\nfunction love.draw()\n  love.graphics.circle('fill', x, y, 30)\n  love.graphics.print('Use as setas!', 10, 10)\nend"
      }
    ],
    "points": [
      "Faça um joguinho — é a forma mais divertida de fixar",
      "Lua é pequena: invista em dominar bem o pouco que tem",
      "Pratique todos os dias, nem que sejam 15 minutos",
      "Contribua para um rock — entrar na comunidade ensina muito",
      "Leia código de projetos open source (Kong, busted, Penlight)",
      "Não tente saber tudo — aprenda o que o seu projeto precisa",
      "Erre, debugue, pergunte. É o ciclo que ensina de verdade"
    ],
    "alerts": [
      {
        "type": "success",
        "content": "Parabéns por chegar até aqui! A jornada Lua é só o começo. Boa lua! 🌙"
      },
      {
        "type": "tip",
        "content": "Marque um projeto na agenda para esta semana. Não 'algum dia' — uma data. Sem deadline, livro fechado vira livro esquecido."
      }
    ]
  }
];

export const chapterMap: Record<string, Chapter> = Object.fromEntries(
  chapters.map(c => [c.slug, c])
);

export function chapterIndex(slug: string): number {
  return chapters.findIndex(c => c.slug === slug);
}
