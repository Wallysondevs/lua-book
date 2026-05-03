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
    "intro": "Lua é uma linguagem leve, rápida e embarcável criada na PUC-Rio em 1993. É a linguagem por trás de jogos como World of Warcraft, Roblox, Angry Birds, do servidor web NGINX (via OpenResty), de softwares como Adobe Lightroom e até de muitos sistemas embarcados.",
    "codes": [
      [
        "lua",
        "print('Olá, Lua!')\n-- Esta linha imprime no terminal."
      ]
    ],
    "points": [
      "Mais de 140 capítulos organizados em 15 trilhas",
      "Inclui LÖVE 2D, Roblox, OpenResty, LuaJIT",
      "Do iniciante ao avançado"
    ],
    "alerts": [
      [
        "tip",
        "Leia em ordem se for iniciante. Quem já programa pode ir direto para tabelas, metatables ou LÖVE 2D."
      ]
    ]
  },
  {
    "slug": "por-que-lua",
    "section": "boas-vindas",
    "title": "Por que aprender Lua?",
    "difficulty": "iniciante",
    "subtitle": "Onde Lua brilha: jogos, scripting e sistemas embarcados.",
    "intro": "Lua é minimalista, ocupa pouca memória e é fácil de embarcar em outros programas. Por isso é a escolha de motores de jogo, banco de dados (Redis), servidores (NGINX/OpenResty) e firmwares (NodeMCU/ESP).",
    "codes": [
      [
        "lua",
        "-- Lua é multiparadigma\n-- Funcional\nlocal quadrados = {}\nfor i = 1, 5 do quadrados[i] = i * i end\n-- 'Orientado a objetos' via tabelas\nlocal Pessoa = { nome = 'Ana' }\nfunction Pessoa:saudar() return 'Oi, ' .. self.nome end"
      ]
    ],
    "points": [
      "Sintaxe pequena (~20 palavras-chave)",
      "Interpretador com poucos KB",
      "Embarcável em qualquer programa C",
      "Brutalmente rápida (especialmente LuaJIT)"
    ],
    "alerts": []
  },
  {
    "slug": "historia-lua",
    "section": "boas-vindas",
    "title": "A história do Lua",
    "difficulty": "iniciante",
    "subtitle": "Da PUC-Rio para o mundo dos jogos e além.",
    "intro": "Lua foi criada em 1993 por Roberto Ierusalimschy, Luiz Henrique de Figueiredo e Waldemar Celes na PUC-Rio (Brasil). 'Lua' significa 'Lua' em português — vem da linguagem Sol (sua antecessora). É a única linguagem amplamente usada criada na América Latina.",
    "codes": [
      [
        "text",
        "1993 - Lua 1.0\n2003 - Lua 5.0 (corotinas)\n2006 - Lua 5.1 (referência por muitos anos)\n2011 - Lua 5.2 (goto, _ENV)\n2015 - Lua 5.3 (inteiros nativos)\n2020 - Lua 5.4 (geracional, atributos const/close)"
      ]
    ],
    "points": [
      "Criada na PUC-Rio em 1993",
      "É 'Lua' em português, não acrônimo",
      "Lua 5.4 é a versão atual; LuaJIT segue 5.1"
    ],
    "alerts": []
  },
  {
    "slug": "lua-vs-luajit",
    "section": "boas-vindas",
    "title": "Lua oficial vs LuaJIT",
    "difficulty": "iniciante",
    "subtitle": "Duas implementações importantes.",
    "intro": "Lua 'PUC' é a referência. LuaJIT é uma reimplementação com compilador JIT, muito mais rápida, mas presa à API do Lua 5.1. Você precisa saber em qual está rodando.",
    "codes": [
      [
        "text",
        "Lua 5.4 (PUC):\n  + Atualizado, inteiros nativos, atributos\n  + Compatível com versões mais novas\n  - Mais lento que LuaJIT\n\nLuaJIT:\n  + Velocidade comparável a C em muitos benchmarks\n  + Tem FFI: chama C sem bindings\n  - Travado na API do Lua 5.1\n  + Usado em OpenResty, Defold, Wireshark"
      ]
    ],
    "points": [
      "LuaJIT é Lua 5.1 + extensões",
      "OpenResty/Defold usam LuaJIT",
      "Roblox usa Luau (variante própria)"
    ],
    "alerts": [
      [
        "info",
        "Existe ainda Luau (Roblox), Ravi (JIT tipado), elua (embarcados). Veremos as principais."
      ]
    ]
  },
  {
    "slug": "onde-lua-roda",
    "section": "boas-vindas",
    "title": "Onde o Lua roda",
    "difficulty": "iniciante",
    "subtitle": "Sistemas, jogos e dispositivos.",
    "intro": "Lua roda praticamente em qualquer lugar com C: Windows, macOS, Linux, BSDs, Android (jogos), iOS, microcontroladores (NodeMCU/ESP), routers (OpenWrt), servidores web (NGINX/Kong), bancos (Redis), e dezenas de motores de jogo.",
    "codes": [
      [
        "bash",
        "# Verificar instalação\nlua -v\n# Saída: Lua 5.4.x  Copyright (C) 1994-2024 Lua.org, PUC-Rio"
      ]
    ],
    "points": [
      "Multiplataforma de verdade",
      "Embarcado em milhares de softwares",
      "Pesa apenas algumas centenas de KB"
    ],
    "alerts": []
  },
  {
    "slug": "instalacao",
    "section": "instalacao",
    "title": "Instalando o Lua",
    "difficulty": "iniciante",
    "subtitle": "Como instalar Lua no seu sistema operacional.",
    "intro": "A instalação é simples e o pacote é minúsculo. No Windows, baixe um instalador. No macOS, use Homebrew. No Linux, geralmente está nos repositórios.",
    "codes": [
      [
        "bash",
        "# Windows (winget)\nwinget install DEVCOM.Lua\n\n# macOS (Homebrew)\nbrew install lua\n\n# Ubuntu/Debian\nsudo apt install lua5.4\n\n# Verificar\nlua -v"
      ]
    ],
    "points": [
      "Lua 5.4 é a versão oficial atual",
      "LuaJIT instala separadamente: brew install luajit",
      "Para Roblox, basta o Roblox Studio (já vem)"
    ],
    "alerts": []
  },
  {
    "slug": "luarocks",
    "section": "instalacao",
    "title": "LuaRocks: o gerenciador de pacotes",
    "difficulty": "iniciante",
    "subtitle": "Instalando bibliotecas Lua.",
    "intro": "LuaRocks é o equivalente a npm/pip do Lua. Instala pacotes (rocks) do repositório oficial luarocks.org.",
    "codes": [
      [
        "bash",
        "# Instalar LuaRocks\nbrew install luarocks       # macOS\nsudo apt install luarocks   # Ubuntu\n\n# Usar\nluarocks install lua-cjson  # instala\nluarocks list               # lista\nluarocks search redis       # busca\nluarocks remove lua-cjson"
      ]
    ],
    "points": [
      "Pacotes se chamam 'rocks'",
      "Use --local para instalar no usuário",
      "Combine com lua_modules/ no projeto"
    ],
    "alerts": []
  },
  {
    "slug": "interpretador-repl",
    "section": "instalacao",
    "title": "O interpretador interativo (REPL)",
    "difficulty": "iniciante",
    "subtitle": "Testando código direto no terminal.",
    "intro": "Digite 'lua' (sem argumentos) no terminal para entrar no REPL. Excelente para experimentar.",
    "codes": [
      [
        "bash",
        "$ lua\nLua 5.4.6  Copyright (C) 1994-2024 Lua.org, PUC-Rio\n> 2 + 2\n4\n> nome = 'Maria'\n> print('Olá, ' .. nome)\nOlá, Maria\n> os.exit()"
      ]
    ],
    "points": [
      "Útil para testar trechos rápidos",
      "Use Ctrl+D ou os.exit() para sair",
      "Para resultado imediato, prefixe com = (Lua 5.3+)"
    ],
    "alerts": []
  },
  {
    "slug": "primeiro-script",
    "section": "instalacao",
    "title": "Seu primeiro script",
    "difficulty": "iniciante",
    "subtitle": "Crie e execute um arquivo .lua.",
    "intro": "Crie um arquivo de texto chamado ola.lua e execute com 'lua ola.lua'.",
    "codes": [
      [
        "lua",
        "-- arquivo: ola.lua\nio.write('Qual seu nome? ')\nlocal nome = io.read()\nprint('Olá, ' .. nome .. '! Bem-vindo ao Lua.')"
      ]
    ],
    "points": [
      "Arquivos Lua têm extensão .lua",
      "Use lua nome.lua para executar",
      "io.read() lê do teclado, print() escreve na tela"
    ],
    "alerts": []
  },
  {
    "slug": "editores-ides",
    "section": "instalacao",
    "title": "Editores e IDEs",
    "difficulty": "iniciante",
    "subtitle": "VS Code, ZeroBrane Studio e outros.",
    "intro": "VS Code com a extensão 'Lua' do sumneko é a melhor combinação hoje. ZeroBrane Studio é uma IDE específica para Lua, leve e excelente para iniciantes.",
    "codes": [
      [
        "text",
        "Recomendações:\n- VS Code + extensão 'Lua' (sumneko/LuaLS)\n- ZeroBrane Studio (IDE dedicada, gratuita)\n- IntelliJ + EmmyLua (para projetos grandes)\n- Roblox Studio (obrigatório para Roblox)\n- Sublime Text + LSP (configurável)"
      ]
    ],
    "points": [
      "VS Code + LuaLS é o padrão moderno",
      "ZeroBrane tem debugger gráfico embutido",
      "Para Roblox, use o Studio oficial"
    ],
    "alerts": []
  },
  {
    "slug": "organizando-projeto",
    "section": "instalacao",
    "title": "Estrutura recomendada de projetos",
    "difficulty": "iniciante",
    "subtitle": "Organizando código em pastas.",
    "intro": "Em projetos pequenos, basta um único .lua. Para projetos maiores, organize em módulos numa pasta src/ ou lua/.",
    "codes": [
      [
        "text",
        "meu-projeto/\n├── main.lua            # entrada\n├── README.md\n├── conf.lua            # configurações (LÖVE)\n├── src/\n│   ├── jogador.lua\n│   ├── inimigo.lua\n│   └── util/\n│       └── math2.lua\n└── spec/               # testes (busted)\n    └── jogador_spec.lua"
      ]
    ],
    "points": [
      "Sem padrão único — adote o do framework usado",
      "Roblox: estrutura via Workspace/ScriptService",
      "LÖVE 2D: main.lua + conf.lua na raiz"
    ],
    "alerts": []
  },
  {
    "slug": "argumentos-cli",
    "section": "instalacao",
    "title": "Argumentos de linha de comando",
    "difficulty": "iniciante",
    "subtitle": "Passando argumentos pro script.",
    "intro": "A tabela global 'arg' contém os argumentos passados ao script.",
    "codes": [
      [
        "lua",
        "-- arquivo: somar.lua\nlocal a = tonumber(arg[1])\nlocal b = tonumber(arg[2])\nprint(a + b)\n\n-- Executar:\n-- $ lua somar.lua 10 20\n-- 30"
      ]
    ],
    "points": [
      "arg[0] é o nome do script (em alguns casos)",
      "Sempre converta com tonumber se for número",
      "Para CLIs ricas, use lapp ou argparse"
    ],
    "alerts": []
  },
  {
    "slug": "hello-world-completo",
    "section": "instalacao",
    "title": "Hello World completo",
    "difficulty": "iniciante",
    "subtitle": "Um primeiro programa que faz algo útil.",
    "intro": "Vamos juntar o que aprendemos em um pequeno script que cumprimenta o usuário com base na hora.",
    "codes": [
      [
        "lua",
        "local hora = tonumber(os.date('%H'))\nio.write('Como você se chama? ')\nlocal nome = io.read()\n\nlocal saudacao\nif hora < 12 then saudacao = 'Bom dia'\nelseif hora < 18 then saudacao = 'Boa tarde'\nelse saudacao = 'Boa noite'\nend\n\nprint(string.format('%s, %s! Já são %dh.', saudacao, nome, hora))"
      ]
    ],
    "points": [
      ".. concatena strings",
      "os.date() formata data/hora",
      "string.format é como printf"
    ],
    "alerts": []
  },
  {
    "slug": "sintaxe-basica",
    "section": "sintaxe",
    "title": "Sintaxe básica de Lua",
    "difficulty": "iniciante",
    "subtitle": "Comentários, ponto e vírgula, blocos.",
    "intro": "Lua usa palavras-chave (do/end, then/end) para delimitar blocos — sem chaves, sem indentação obrigatória. Comentários começam com -- (linha) ou --[[ ]] (bloco).",
    "codes": [
      [
        "lua",
        "-- Comentário de uma linha\n--[[ Comentário\n     de múltiplas linhas ]]\n\nif true then\n  print('Indentação é só estética')\n  print('mas use 2 espaços por convenção')\nend\n\n-- Ponto e vírgula é opcional\nlocal a = 1; local b = 2"
      ]
    ],
    "points": [
      "-- inicia comentário",
      "Blocos terminam com end",
      "Indentação não é sintática (mas use!)"
    ],
    "alerts": []
  },
  {
    "slug": "variaveis-local",
    "section": "sintaxe",
    "title": "Variáveis: local vs global",
    "difficulty": "iniciante",
    "subtitle": "Por que SEMPRE usar local.",
    "intro": "Por padrão, variáveis em Lua são GLOBAIS. Use 'local' para criar variáveis no escopo atual — é praticamente sempre o que você quer.",
    "codes": [
      [
        "lua",
        "x = 10           -- GLOBAL (evite)\nlocal y = 20     -- local (sempre prefira)\n\nlocal nome, idade = 'Ana', 30   -- múltipla atribuição\n\n-- Trocar valores em uma linha\nlocal a, b = 1, 2\na, b = b, a"
      ]
    ],
    "points": [
      "SEMPRE use local — globais são uma armadilha",
      "Múltipla atribuição funciona",
      "Globais ficam em _G"
    ],
    "alerts": [
      [
        "danger",
        "Esquecer 'local' é a fonte #1 de bugs em Lua. Configure seu linter para alertar."
      ]
    ]
  },
  {
    "slug": "tipos-basicos",
    "section": "sintaxe",
    "title": "Os 8 tipos de Lua",
    "difficulty": "iniciante",
    "subtitle": "nil, boolean, number, string, table, function, userdata, thread.",
    "intro": "Lua tem apenas 8 tipos. Use type() para descobrir o tipo de um valor.",
    "codes": [
      [
        "lua",
        "print(type(nil))      -- 'nil'\nprint(type(true))     -- 'boolean'\nprint(type(42))       -- 'number'\nprint(type('oi'))     -- 'string'\nprint(type({}))       -- 'table'\nprint(type(print))    -- 'function'\n-- userdata: dados de C\n-- thread: corotinas"
      ]
    ],
    "points": [
      "Apenas 8 tipos — minimalismo total",
      "Tabela é a única estrutura de dados",
      "type() retorna string"
    ],
    "alerts": []
  },
  {
    "slug": "nil-truthy",
    "section": "sintaxe",
    "title": "nil e o que é 'falsy'",
    "difficulty": "iniciante",
    "subtitle": "Em Lua, só nil e false são falsos.",
    "intro": "Diferente de C/Python, em Lua zero, string vazia e tabela vazia são VERDADEIROS. Apenas nil e false são falsos.",
    "codes": [
      [
        "lua",
        "if 0 then print('zero é true!') end\nif '' then print('string vazia é true!') end\nif {} then print('tabela vazia é true!') end\n\nif nil then print('nunca') end\nif false then print('nunca') end\n\n-- Padrão para valor padrão\nlocal nome = entrada or 'Anônimo'"
      ]
    ],
    "points": [
      "0, '', {} são TODOS verdadeiros",
      "Só nil e false são falsos",
      "x or padrão é a forma idiomática"
    ],
    "alerts": [
      [
        "warning",
        "Quem vem de C/JS sempre se confunde: 0 é VERDADEIRO em Lua!"
      ]
    ]
  },
  {
    "slug": "numeros",
    "section": "sintaxe",
    "title": "Números: integer e float",
    "difficulty": "iniciante",
    "subtitle": "Lua 5.3+ tem inteiros nativos.",
    "intro": "Desde Lua 5.3, há subtipos integer e float. Antes, todo número era float (double precisão). LuaJIT/Lua 5.1 ainda só tem float.",
    "codes": [
      [
        "lua",
        "local i = 10        -- integer\nlocal f = 10.5      -- float\nprint(math.type(i)) -- 'integer'\nprint(math.type(f)) -- 'float'\n\n-- Operadores\nprint(10 / 3)   -- 3.3333... (sempre float)\nprint(10 // 3)  -- 3 (divisão inteira)\nprint(10 % 3)   -- 1\nprint(2 ^ 10)   -- 1024.0 (sempre float)"
      ]
    ],
    "points": [
      "// é divisão inteira (Lua 5.3+)",
      "/ sempre devolve float",
      "^ é potência (sempre float)"
    ],
    "alerts": []
  },
  {
    "slug": "strings-basico",
    "section": "sintaxe",
    "title": "Strings: básico",
    "difficulty": "iniciante",
    "subtitle": "Texto em Lua.",
    "intro": "Strings em Lua são imutáveis. Use aspas simples, duplas ou colchetes longos [[ ]] para múltiplas linhas.",
    "codes": [
      [
        "lua",
        "local s1 = 'aspas simples'\nlocal s2 = \"aspas duplas\"\nlocal s3 = [[\nstring de\nvárias linhas\n]]\n\n-- Concatenação com ..\nlocal nome = 'Lua'\nlocal cumpr = 'Olá, ' .. nome .. '!'\n\n-- Tamanho\nprint(#'lua')   -- 3\nprint(#nome)    -- 3"
      ]
    ],
    "points": [
      "Aspas simples e duplas equivalem",
      "[[ ]] para múltiplas linhas",
      ".. é o operador de concatenação",
      "# devolve o tamanho"
    ],
    "alerts": []
  },
  {
    "slug": "string-format",
    "section": "sintaxe",
    "title": "Formatação com string.format",
    "difficulty": "iniciante",
    "subtitle": "O 'printf' do Lua.",
    "intro": "string.format usa especificadores como em C: %d, %f, %s, %x, etc.",
    "codes": [
      [
        "lua",
        "local nome, idade = 'Ana', 30\nprint(string.format('%s tem %d anos', nome, idade))\n\nlocal pi = math.pi\nprint(string.format('%.2f', pi))    -- 3.14\nprint(string.format('%10.2f', pi))  -- alinhado à direita\nprint(string.format('%-10s|', 'a')) -- alinhado à esquerda\nprint(string.format('%x', 255))     -- 'ff' (hex)"
      ]
    ],
    "points": [
      "Sintaxe igual a printf",
      "Apelido comum: local fmt = string.format",
      "Em Lua 5.4 dá pra usar string:format"
    ],
    "alerts": []
  },
  {
    "slug": "string-metodos",
    "section": "sintaxe",
    "title": "Métodos de string",
    "difficulty": "iniciante",
    "subtitle": "upper, lower, sub, rep e mais.",
    "intro": "A biblioteca string tem dezenas de funções. Você pode chamá-las como s:upper() ou string.upper(s).",
    "codes": [
      [
        "lua",
        "local s = '  Olá Lua  '\nprint(s:upper())          -- '  OLÁ LUA  '\nprint(s:lower())\nprint(string.rep('-', 10))-- '----------'\nprint(s:sub(3, 5))        -- 'Olá'\nprint(s:reverse())\nprint(('abc'):rep(3, '-'))-- 'abc-abc-abc'\n\n-- len e #\nprint(#s)\nprint(s:len())"
      ]
    ],
    "points": [
      "s:metodo() é açúcar para string.metodo(s, ...)",
      "string.sub é como slicing",
      "string.rep repete strings"
    ],
    "alerts": []
  },
  {
    "slug": "operadores",
    "section": "sintaxe",
    "title": "Operadores: aritméticos, lógicos, comparação",
    "difficulty": "iniciante",
    "subtitle": "Visão geral.",
    "intro": "Operadores de Lua são quase todos familiares. Diferença: 'and', 'or', 'not' (palavras), '..' para concat e '~=' para diferente.",
    "codes": [
      [
        "lua",
        "-- Aritméticos: + - * / // % ^\n-- Comparação: == ~= < > <= >=\n-- Lógicos: and or not (palavras!)\n\nprint(5 ~= 4)              -- true (diferente!)\nprint(true and 'a' or 'b') -- 'a' (ternário)\nprint(false and 'a' or 'b')-- 'b'\n\n-- Bitwise (Lua 5.3+)\n-- & | ~ << >> ~\nprint(0xFF & 0x0F)         -- 15"
      ]
    ],
    "points": [
      "~= é 'diferente' (não !=)",
      "and/or são curto-circuito",
      "Não há ternário; use 'a and b or c'"
    ],
    "alerts": []
  },
  {
    "slug": "entrada-saida",
    "section": "sintaxe",
    "title": "Entrada e saída no terminal",
    "difficulty": "iniciante",
    "subtitle": "io.read e io.write em detalhe.",
    "intro": "Use io.write quando NÃO quiser quebrar linha (diferente de print). io.read('*n') lê número, '*l' lê linha.",
    "codes": [
      [
        "lua",
        "io.write('Nome: ')\nlocal nome = io.read('*l')      -- linha (padrão)\n\nio.write('Idade: ')\nlocal idade = io.read('*n')     -- número\n\nio.write('Olá ', nome, ', ', idade, ' anos\\n')\n\n-- Lê arquivo inteiro\nlocal txt = io.open('a.txt', 'r'):read('*a')"
      ]
    ],
    "points": [
      "print quebra linha; io.write não",
      "io.read('*n') retorna número",
      "io.read('*a') lê tudo"
    ],
    "alerts": []
  },
  {
    "slug": "if-else",
    "section": "controle",
    "title": "if / elseif / else",
    "difficulty": "iniciante",
    "subtitle": "Tomada de decisão.",
    "intro": "if executa o bloco se a condição for verdadeira. Use elseif (uma palavra!) para alternativas e else para padrão. Termina com 'end'.",
    "codes": [
      [
        "lua",
        "local idade = tonumber(io.read())\n\nif idade < 0 then\n  print('Inválida')\nelseif idade < 18 then\n  print('Menor de idade')\nelseif idade < 60 then\n  print('Adulto')\nelse\n  print('Idoso')\nend"
      ]
    ],
    "points": [
      "elseif é UMA palavra (não else if!)",
      "Não há switch — use if/elseif",
      "Sempre fecha com end"
    ],
    "alerts": []
  },
  {
    "slug": "while-loop",
    "section": "controle",
    "title": "Laço while",
    "difficulty": "iniciante",
    "subtitle": "Repetição condicional.",
    "intro": "while executa enquanto a condição for verdadeira. Sintaxe: while cond do ... end.",
    "codes": [
      [
        "lua",
        "local contador = 0\nwhile contador < 5 do\n  print(contador)\n  contador = contador + 1   -- não há ++\nend\n\n-- Loop infinito + break\nwhile true do\n  io.write('Sair? (s/n) ')\n  if io.read() == 's' then break end\nend"
      ]
    ],
    "points": [
      "Não há ++ ou += em Lua padrão",
      "while true do ... break é comum",
      "Garanta que a condição muda"
    ],
    "alerts": []
  },
  {
    "slug": "repeat-until",
    "section": "controle",
    "title": "repeat / until",
    "difficulty": "iniciante",
    "subtitle": "Loop pós-condicional.",
    "intro": "repeat ... until executa o bloco PELO MENOS UMA VEZ, depois testa. Cuidado: a condição inverte (until = 'até que').",
    "codes": [
      [
        "lua",
        "local n\nrepeat\n  io.write('Digite um número > 10: ')\n  n = tonumber(io.read())\nuntil n and n > 10\n\nprint('Você digitou', n)"
      ]
    ],
    "points": [
      "repeat/until é como do/while invertido",
      "until é a condição de SAÍDA",
      "Variáveis locais valem dentro do until"
    ],
    "alerts": []
  },
  {
    "slug": "for-numerico",
    "section": "controle",
    "title": "Laço for numérico",
    "difficulty": "iniciante",
    "subtitle": "for i = ini, fim, passo.",
    "intro": "Lua tem dois tipos de for. O numérico itera de início a fim, com passo opcional (padrão 1).",
    "codes": [
      [
        "lua",
        "-- de 1 a 5\nfor i = 1, 5 do print(i) end\n\n-- de 0 a 10 de 2 em 2\nfor i = 0, 10, 2 do print(i) end\n\n-- decrescente\nfor i = 10, 1, -1 do print(i) end\n\n-- O fim é INCLUSIVO\nfor i = 1, #'lua' do print(i) end  -- 1,2,3"
      ]
    ],
    "points": [
      "Limite é INCLUSIVO (1 a 5 = 1,2,3,4,5)",
      "Passo padrão é 1",
      "Pode ser negativo para decrescer"
    ],
    "alerts": []
  },
  {
    "slug": "for-generico",
    "section": "controle",
    "title": "Laço for genérico (ipairs/pairs)",
    "difficulty": "iniciante",
    "subtitle": "Iterando sobre tabelas.",
    "intro": "O for genérico usa um iterador. ipairs percorre arrays (1..n), pairs percorre todas as chaves.",
    "codes": [
      [
        "lua",
        "local frutas = {'maçã', 'banana', 'uva'}\nfor i, v in ipairs(frutas) do\n  print(i, v)\nend\n\nlocal pessoa = {nome='Ana', idade=30}\nfor chave, valor in pairs(pessoa) do\n  print(chave, valor)\nend"
      ]
    ],
    "points": [
      "ipairs: arrays (índice numérico contínuo)",
      "pairs: TODAS as chaves (qualquer tipo)",
      "Ordem de pairs NÃO é garantida"
    ],
    "alerts": []
  },
  {
    "slug": "break-goto",
    "section": "controle",
    "title": "break e goto",
    "difficulty": "intermediario",
    "subtitle": "Saindo de loops e usando rótulos.",
    "intro": "break sai do loop atual. Lua NÃO tem 'continue' (mas tem goto desde 5.2).",
    "codes": [
      [
        "lua",
        "for i = 1, 10 do\n  if i == 5 then break end\n  print(i)\nend\n\n-- Não há 'continue' — use goto\nfor i = 1, 10 do\n  if i % 2 == 0 then goto continue end\n  print(i)  -- só ímpares\n  ::continue::\nend"
      ]
    ],
    "points": [
      "NÃO há 'continue' nativo",
      "goto + ::label:: é o jeito padrão",
      "break só sai do loop interno"
    ],
    "alerts": []
  },
  {
    "slug": "multiplos-retornos",
    "section": "controle",
    "title": "Múltiplos retornos e atribuições",
    "difficulty": "intermediario",
    "subtitle": "Funções podem retornar vários valores.",
    "intro": "Lua suporta múltiplos retornos nativamente. Funções padrão usam isso (string.find, table.unpack, etc).",
    "codes": [
      [
        "lua",
        "-- Função com múltiplo retorno\nlocal function divmod(a, b)\n  return a // b, a % b\nend\n\nlocal q, r = divmod(17, 5)\nprint(q, r)  -- 3, 2\n\n-- Ignorar com _\nlocal _, resto = divmod(17, 5)\n\n-- string.find devolve início, fim\nprint(string.find('Lua é demais', 'é'))"
      ]
    ],
    "points": [
      "Recurso central de Lua",
      "_ é convenção para 'descartar'",
      "Se chamada não é o último argumento, só pega o primeiro retorno"
    ],
    "alerts": []
  },
  {
    "slug": "expressoes-vararg",
    "section": "controle",
    "title": "Vararg (...) e select",
    "difficulty": "intermediario",
    "subtitle": "Trabalhando com listas variáveis.",
    "intro": "Funções e blocos podem receber número variável de argumentos via '...'. Use select para acessá-los.",
    "codes": [
      [
        "lua",
        "local function imprimir(...)\n  local args = {...}\n  for i, v in ipairs(args) do\n    print(i, v)\n  end\nend\nimprimir('a', 'b', 'c')\n\n-- select\nlocal function quantidade(...)\n  return select('#', ...)\nend\nprint(quantidade(10, 20, 30))  -- 3"
      ]
    ],
    "points": [
      "... é o vararg",
      "select('#', ...) conta argumentos (incluindo nils)",
      "{...} colapsa em tabela"
    ],
    "alerts": []
  },
  {
    "slug": "tabelas-intro",
    "section": "tabelas",
    "title": "Tabelas: tudo gira em torno delas",
    "difficulty": "iniciante",
    "subtitle": "A única estrutura de dados de Lua.",
    "intro": "Tabela é uma estrutura associativa que serve como array, dicionário, objeto, namespace, módulo, classe... Em Lua, TUDO de estrutura é tabela.",
    "codes": [
      [
        "lua",
        "-- Como dicionário\nlocal pessoa = {nome = 'Ana', idade = 30}\n\n-- Como array\nlocal cores = {'vermelho', 'verde', 'azul'}\n\n-- Mista\nlocal config = {\n  host = 'localhost',\n  porta = 8080,\n  tags = {'web', 'api'},\n}\n\nprint(pessoa.nome, cores[1], config.tags[2])"
      ]
    ],
    "points": [
      "Tabelas servem para tudo",
      "Acesso: t.x ou t['x'] são equivalentes",
      "Arrays começam em 1, NÃO em 0"
    ],
    "alerts": []
  },
  {
    "slug": "arrays",
    "section": "tabelas",
    "title": "Arrays em Lua",
    "difficulty": "iniciante",
    "subtitle": "Listas indexadas a partir de 1.",
    "intro": "Arrays em Lua são tabelas com chaves numéricas contíguas começando em 1. Use # para tamanho.",
    "codes": [
      [
        "lua",
        "local frutas = {'maçã', 'banana', 'uva'}\nprint(#frutas)        -- 3\nprint(frutas[1])      -- 'maçã' (NÃO frutas[0]!)\n\nfrutas[4] = 'kiwi'    -- adiciona\ntable.insert(frutas, 'pera')   -- empilha no fim\ntable.insert(frutas, 1, 'limão') -- insere no início\ntable.remove(frutas, 1)        -- remove e devolve"
      ]
    ],
    "points": [
      "ÍNDICES COMEÇAM EM 1",
      "table.insert/remove são as operações comuns",
      "# em arrays com nils intermediários é instável"
    ],
    "alerts": [
      [
        "danger",
        "Tabelas com 'buracos' (nil no meio) podem fazer # devolver qualquer fronteira. Mantenha contíguos."
      ]
    ]
  },
  {
    "slug": "dicionarios",
    "section": "tabelas",
    "title": "Tabelas como dicionário",
    "difficulty": "iniciante",
    "subtitle": "Pares chave-valor.",
    "intro": "Qualquer valor (exceto nil e NaN) pode ser chave: strings, números, booleanos, até funções e outras tabelas.",
    "codes": [
      [
        "lua",
        "local d = {nome = 'Ana', idade = 30}\nd.email = 'ana@x.com'   -- adiciona\nd['cidade'] = 'Recife'  -- equivalente\nd.idade = nil           -- remove\n\n-- Verificar existência\nif d.nome then print('tem nome') end\nif d.email ~= nil then ... end"
      ]
    ],
    "points": [
      "d.x e d['x'] são equivalentes",
      "Atribuir nil REMOVE a chave",
      "Use ~= nil para checar (já que false também é falsy)"
    ],
    "alerts": []
  },
  {
    "slug": "table-construtor",
    "section": "tabelas",
    "title": "Construtor de tabela detalhado",
    "difficulty": "iniciante",
    "subtitle": "{ } com sintaxes flexíveis.",
    "intro": "O construtor { } aceita várias formas: lista, pares chave=valor, e [expr]=valor para chaves dinâmicas.",
    "codes": [
      [
        "lua",
        "local t = {\n  10, 20, 30,                -- arrays: t[1]=10, t[2]=20...\n  nome = 'Ana',              -- t.nome = 'Ana'\n  ['e-mail'] = 'a@x.com',    -- chave que não é id\n  [42] = 'resposta',         -- chave numérica não-sequencial\n  true,                      -- t[4] = true (índice continua)\n}"
      ]
    ],
    "points": [
      "Pode misturar lista + chaves nomeadas",
      "[expr] = valor para chaves dinâmicas",
      "Use vírgula ou ponto e vírgula como separador"
    ],
    "alerts": []
  },
  {
    "slug": "table-biblioteca",
    "section": "tabelas",
    "title": "Biblioteca table: insert, remove, concat, sort",
    "difficulty": "iniciante",
    "subtitle": "Operações comuns.",
    "intro": "A biblioteca padrão 'table' contém as principais operações.",
    "codes": [
      [
        "lua",
        "local t = {3, 1, 4, 1, 5, 9, 2, 6}\n\ntable.insert(t, 5)         -- empilha\ntable.remove(t)            -- desempilha (último)\ntable.sort(t)              -- ordena in-place\ntable.sort(t, function(a,b) return a > b end) -- decrescente\n\nprint(table.concat({'a','b','c'}, '-'))  -- 'a-b-c'\n\n-- Lua 5.2+\nlocal len = #t\nlocal copy = table.move(t, 1, len, 1, {})"
      ]
    ],
    "points": [
      "table.sort modifica in-place",
      "table.concat junta com separador",
      "table.move copia trechos"
    ],
    "alerts": []
  },
  {
    "slug": "copiando-tabelas",
    "section": "tabelas",
    "title": "Copiando tabelas (referência vs cópia)",
    "difficulty": "intermediario",
    "subtitle": "Atribuição NÃO copia.",
    "intro": "Tabelas são passadas por REFERÊNCIA. a = b NÃO copia. Para copiar, faça shallow ou deep manualmente.",
    "codes": [
      [
        "lua",
        "local a = {1, 2, 3}\nlocal b = a            -- mesma tabela!\nb[4] = 4\nprint(a[4])            -- 4 — surpresa!\n\n-- Cópia rasa\nlocal function shallow(t)\n  local r = {}\n  for k, v in pairs(t) do r[k] = v end\n  return r\nend"
      ]
    ],
    "points": [
      "a = b NÃO copia tabelas",
      "Sempre escreva sua função copy",
      "Para deep copy, recurse em valores que são tabela"
    ],
    "alerts": []
  },
  {
    "slug": "tabelas-aninhadas",
    "section": "tabelas",
    "title": "Tabelas aninhadas (estruturas)",
    "difficulty": "intermediario",
    "subtitle": "JSON-like em Lua puro.",
    "intro": "Combine tabelas para representar dados estruturados. É o que JSON, configs e modelos fazem.",
    "codes": [
      [
        "lua",
        "local usuarios = {\n  {nome='Ana', tags={'admin','beta'}},\n  {nome='Bia', tags={'user'}},\n}\n\nfor _, u in ipairs(usuarios) do\n  for _, tag in ipairs(u.tags) do\n    if tag == 'admin' then\n      print(u.nome)\n    end\n  end\nend"
      ]
    ],
    "points": [
      "Estruturas naturais para configs e dados",
      "Acesse com . encadeado: a.b.c",
      "Cuidado com nil em níveis profundos"
    ],
    "alerts": []
  },
  {
    "slug": "tabela-como-set",
    "section": "tabelas",
    "title": "Tabela como conjunto (set)",
    "difficulty": "intermediario",
    "subtitle": "Removendo duplicatas e checando pertencimento.",
    "intro": "Use o valor true como marcador. Checar se elemento existe é O(1).",
    "codes": [
      [
        "lua",
        "-- Set a partir de lista\nlocal set = {}\nfor _, v in ipairs({1,2,2,3,3,3}) do set[v] = true end\n\n-- Pertencimento O(1)\nif set[2] then print('tem 2') end\n\n-- Iterar\nfor v in pairs(set) do print(v) end\n\n-- Remover\nset[3] = nil"
      ]
    ],
    "points": [
      "Marcador é true (ou qualquer truthy)",
      "Pertencimento é O(1)",
      "Mais idiomático que array para 'tem-ou-não'"
    ],
    "alerts": []
  },
  {
    "slug": "tabela-como-fila-pilha",
    "section": "tabelas",
    "title": "Tabela como pilha e fila",
    "difficulty": "intermediario",
    "subtitle": "Estruturas clássicas em cima de table.",
    "intro": "Pilha = insert/remove no fim. Fila = insert no fim, remove no início (mas isso é O(n)). Para fila eficiente, use índices manuais.",
    "codes": [
      [
        "lua",
        "-- Pilha\nlocal pilha = {}\ntable.insert(pilha, 'a')\ntable.insert(pilha, 'b')\nprint(table.remove(pilha))   -- 'b'\n\n-- Fila eficiente (deque)\nlocal q = {primeiro = 1, ultimo = 0}\nlocal function push(v) q.ultimo = q.ultimo + 1; q[q.ultimo] = v end\nlocal function pop()\n  if q.primeiro > q.ultimo then return nil end\n  local v = q[q.primeiro]; q[q.primeiro] = nil\n  q.primeiro = q.primeiro + 1\n  return v\nend"
      ]
    ],
    "points": [
      "Pilha simples = table.insert/remove",
      "Fila com remove(t,1) é O(n)",
      "Para fila O(1), use índices primeiro/ultimo"
    ],
    "alerts": []
  },
  {
    "slug": "pairs-vs-ipairs",
    "section": "tabelas",
    "title": "pairs vs ipairs: a diferença crucial",
    "difficulty": "intermediario",
    "subtitle": "Quando usar cada um.",
    "intro": "ipairs varre 1, 2, 3... até achar nil. pairs varre TODAS as chaves (em ordem indefinida).",
    "codes": [
      [
        "lua",
        "local t = {'a', 'b', 'c', nome = 'X'}\n\nfor i, v in ipairs(t) do print(i, v) end\n-- 1 a, 2 b, 3 c (ignora 'nome')\n\nfor k, v in pairs(t) do print(k, v) end\n-- todas as chaves, ordem indefinida\n\n-- ipairs PARA no primeiro nil\nlocal t2 = {'a', nil, 'c'}\nfor i, v in ipairs(t2) do print(v) end  -- só 'a'"
      ]
    ],
    "points": [
      "ipairs: arrays contíguos",
      "pairs: dicionários",
      "Ordem de pairs não é garantida"
    ],
    "alerts": []
  },
  {
    "slug": "next-iterator",
    "section": "tabelas",
    "title": "next() e iteradores customizados",
    "difficulty": "avancado",
    "subtitle": "Como pairs/ipairs funcionam por baixo.",
    "intro": "next(t, chave) devolve a próxima chave/valor. pairs e ipairs são apenas funções padrão sobre next.",
    "codes": [
      [
        "lua",
        "local t = {a=1, b=2, c=3}\nlocal k, v = next(t)\nprint(k, v)\n\n-- Iterador customizado\nlocal function reverso(t)\n  local i = #t + 1\n  return function()\n    i = i - 1\n    if i > 0 then return i, t[i] end\n  end\nend\n\nfor i, v in reverso({'a','b','c'}) do print(i, v) end\n-- 3 c, 2 b, 1 a"
      ]
    ],
    "points": [
      "Iterador é função que devolve next valor (ou nil)",
      "for-in chama o iterador até retornar nil",
      "next() é o motor de pairs"
    ],
    "alerts": []
  },
  {
    "slug": "weak-tables",
    "section": "tabelas",
    "title": "Tabelas fracas (weak tables)",
    "difficulty": "avancado",
    "subtitle": "Quando o GC pode coletar valores.",
    "intro": "Tabelas fracas permitem que valores sejam coletados pelo GC mesmo se referenciados. Útil para caches.",
    "codes": [
      [
        "lua",
        "local cache = setmetatable({}, {__mode = 'v'})\n-- 'v' = valores fracos\n-- 'k' = chaves fracas\n-- 'kv' = ambas\n\ncache['chave'] = {dados = 'pesados'}\n-- Pode ser coletado se nada mais o referencia"
      ]
    ],
    "points": [
      "__mode em metatable: 'k', 'v', 'kv'",
      "Útil para caches",
      "Não impede o GC"
    ],
    "alerts": []
  },
  {
    "slug": "funcoes-basico",
    "section": "funcoes",
    "title": "Definindo funções",
    "difficulty": "iniciante",
    "subtitle": "Reusando código.",
    "intro": "Use 'function nome(params) ... end'. Funções são VALORES de primeira classe (podem ser passadas, retornadas, atribuídas).",
    "codes": [
      [
        "lua",
        "function saudar(nome, formal)\n  if formal then\n    return 'Prezado(a) ' .. nome\n  end\n  return 'Olá, ' .. nome .. '!'\nend\n\nprint(saudar('Ana'))\nprint(saudar('Dr. Silva', true))\n\n-- Sempre prefira local!\nlocal function dobrar(x) return x * 2 end"
      ]
    ],
    "points": [
      "function ... end define função",
      "SEMPRE 'local function' a menos que precise global",
      "Funções são valores (1ª classe)"
    ],
    "alerts": []
  },
  {
    "slug": "funcoes-anonimas",
    "section": "funcoes",
    "title": "Funções anônimas e como valores",
    "difficulty": "intermediario",
    "subtitle": "Lua é funcional por natureza.",
    "intro": "Funções não têm nome — o que tem nome é a variável que aponta para elas. Use anônimas em qualquer lugar.",
    "codes": [
      [
        "lua",
        "-- Estas duas formas são equivalentes:\nlocal f = function(x) return x * 2 end\nlocal function f(x) return x * 2 end\n\n-- Como argumento\ntable.sort(t, function(a, b) return a > b end)\n\n-- Como retorno\nlocal function multiplicador(n)\n  return function(x) return x * n end\nend\nlocal triplicar = multiplicador(3)\nprint(triplicar(10))  -- 30"
      ]
    ],
    "points": [
      "function(x) ... end é a forma anônima",
      "Aceita em qualquer expressão",
      "Base para closures e callbacks"
    ],
    "alerts": []
  },
  {
    "slug": "closures",
    "section": "funcoes",
    "title": "Closures",
    "difficulty": "intermediario",
    "subtitle": "Funções que lembram do contexto.",
    "intro": "Quando uma função interna captura variáveis locais da externa, vira uma closure. Lua suporta isso plenamente.",
    "codes": [
      [
        "lua",
        "local function contador(inicio)\n  local n = inicio or 0\n  return function()\n    n = n + 1\n    return n\n  end\nend\n\nlocal c = contador()\nprint(c())  -- 1\nprint(c())  -- 2\nprint(c())  -- 3\n\nlocal d = contador(100)\nprint(d())  -- 101"
      ]
    ],
    "points": [
      "Closures capturam variáveis ('upvalues')",
      "Cada chamada de contador cria estado novo",
      "Base de muitas APIs Lua"
    ],
    "alerts": []
  },
  {
    "slug": "self-colon",
    "section": "funcoes",
    "title": "Açúcar ':' para self",
    "difficulty": "intermediario",
    "subtitle": "obj:metodo() é obj.metodo(obj).",
    "intro": "Quando se define uma função com ':', ela recebe um primeiro parâmetro implícito chamado 'self'. Usado em OOP.",
    "codes": [
      [
        "lua",
        "local pessoa = {nome = 'Ana'}\n\n-- Estas duas formas são equivalentes\nfunction pessoa.saudar1(self)\n  return 'Olá, ' .. self.nome\nend\nfunction pessoa:saudar2()\n  return 'Olá, ' .. self.nome\nend\n\n-- Chamada\nprint(pessoa:saudar2())   -- mesma coisa\nprint(pessoa.saudar2(pessoa))"
      ]
    ],
    "points": [
      "':' adiciona self implícito",
      "Define com : e chama com :",
      "Base de toda OOP em Lua"
    ],
    "alerts": []
  },
  {
    "slug": "recursao",
    "section": "funcoes",
    "title": "Recursão",
    "difficulty": "intermediario",
    "subtitle": "Funções que chamam a si mesmas.",
    "intro": "Recursão funciona normalmente. Cuidado com a profundidade — Lua tem otimização de chamada de cauda (TCO) em alguns casos.",
    "codes": [
      [
        "lua",
        "local function fatorial(n)\n  if n <= 1 then return 1 end\n  return n * fatorial(n - 1)\nend\n\nprint(fatorial(5))  -- 120\n\n-- Chamada de cauda otimizada (não cresce stack)\nlocal function loop(n)\n  if n == 0 then return 'pronto' end\n  return loop(n - 1)         -- TCO: ok\nend\nprint(loop(10000))"
      ]
    ],
    "points": [
      "Lua tem TCO para 'return f(...)'",
      "Sem TCO, cuidado com profundidade",
      "Recursão é elegante para árvores e parsers"
    ],
    "alerts": []
  },
  {
    "slug": "argumentos-padrao",
    "section": "funcoes",
    "title": "Argumentos padrão",
    "difficulty": "iniciante",
    "subtitle": "Lua não tem padrão nativo, mas é fácil simular.",
    "intro": "Diferente de Python, Lua não tem sintaxe para defaults. Use 'or' ou condicional dentro da função.",
    "codes": [
      [
        "lua",
        "local function saudar(nome, lingua)\n  nome = nome or 'amigo'\n  lingua = lingua or 'pt'\n  if lingua == 'pt' then return 'Olá, ' .. nome end\n  if lingua == 'en' then return 'Hello, ' .. nome end\nend\n\nprint(saudar())\nprint(saudar('Ana', 'en'))"
      ]
    ],
    "points": [
      "x = x or padrão é a forma idiomática",
      "Não funciona se padrão for false (use ~=nil)",
      "Para muitos params, use tabela de opções"
    ],
    "alerts": []
  },
  {
    "slug": "argumentos-tabela",
    "section": "funcoes",
    "title": "Argumentos via tabela",
    "difficulty": "intermediario",
    "subtitle": "Para funções com muitas opções.",
    "intro": "Quando uma função tem muitos parâmetros, passe uma tabela. Lua permite chamar 'f{...}' (sem parênteses).",
    "codes": [
      [
        "lua",
        "local function criar_botao(opts)\n  return {\n    texto = opts.texto or '',\n    cor = opts.cor or 'azul',\n    largura = opts.largura or 100,\n  }\nend\n\n-- Sintaxe especial: parênteses opcionais com {}\nlocal b = criar_botao{texto = 'OK', cor = 'verde'}\nprint(b.texto, b.cor)"
      ]
    ],
    "points": [
      "f{...} é açúcar para f({...})",
      "Excelente para muitas opções nomeadas",
      "Padrão em DSLs Lua"
    ],
    "alerts": []
  },
  {
    "slug": "funcoes-de-ordem-superior",
    "section": "funcoes",
    "title": "Funções de ordem superior",
    "difficulty": "intermediario",
    "subtitle": "map, filter, reduce manuais.",
    "intro": "Lua não tem map/filter/reduce na stdlib (penny-pinching!). Mas é trivial implementar.",
    "codes": [
      [
        "lua",
        "local function map(t, f)\n  local r = {}\n  for i, v in ipairs(t) do r[i] = f(v) end\n  return r\nend\n\nlocal function filter(t, p)\n  local r = {}\n  for _, v in ipairs(t) do\n    if p(v) then r[#r+1] = v end\n  end\n  return r\nend\n\nprint(table.concat(\n  map({1,2,3,4}, function(x) return x*x end), ','\n))"
      ]
    ],
    "points": [
      "Lua é minimalista — você implementa",
      "Use lib penlight para utilitários ricos",
      "r[#r+1] = v é o jeito idiomático de empilhar"
    ],
    "alerts": []
  },
  {
    "slug": "escopo-local",
    "section": "funcoes",
    "title": "Escopo de variáveis (do/end)",
    "difficulty": "intermediario",
    "subtitle": "Como Lua resolve nomes.",
    "intro": "Lua tem escopo léxico em blocos (do/end, function/end, then/end, etc.). Variáveis local valem até o fim do bloco.",
    "codes": [
      [
        "lua",
        "local x = 1\ndo\n  local x = 2\n  print(x)  -- 2\nend\nprint(x)    -- 1\n\n-- 'do/end' anônimo é útil para escopo manual\ndo\n  local pi = 3.14159\n  print(pi)\nend\n-- pi NÃO existe aqui"
      ]
    ],
    "points": [
      "Cada bloco tem seu escopo",
      "do/end cria escopo manual",
      "local x sombreia x externo"
    ],
    "alerts": []
  },
  {
    "slug": "funcoes-locais-recursivas",
    "section": "funcoes",
    "title": "O truque das funções locais recursivas",
    "difficulty": "intermediario",
    "subtitle": "Por que precisamos declarar antes.",
    "intro": "Quando uma função local se chama, a variável precisa existir antes. Há um truque: declarar 'local f' antes da definição.",
    "codes": [
      [
        "lua",
        "-- ERRO sutil:\nlocal function fat(n)\n  if n <= 1 then return 1 end\n  return n * fat(n - 1)   -- aqui 'fat' é GLOBAL?\nend\n-- Felizmente, 'local function' resolve isso automaticamente\n\n-- Mas com 'local f = function ...' precisa do truque:\nlocal fib\nfib = function(n)\n  if n < 2 then return n end\n  return fib(n-1) + fib(n-2)\nend"
      ]
    ],
    "points": [
      "'local function' lida certo com a recursão",
      "'local f = function ...' precisa declarar antes",
      "Detalhe importante para closures recursivas"
    ],
    "alerts": []
  },
  {
    "slug": "string-find",
    "section": "strings-padroes",
    "title": "string.find: busca básica",
    "difficulty": "intermediario",
    "subtitle": "Encontrando substrings.",
    "intro": "string.find devolve as posições inicial e final. Aceita padrões (lua patterns) ou texto literal com 'plain'.",
    "codes": [
      [
        "lua",
        "local s = 'Lua é incrível'\n\n-- Busca padrão\nlocal i, j = s:find('é')\nprint(i, j)            -- 5, 5\n\n-- Texto literal (sem padrões)\nlocal i, j = s:find('é', 1, true)\n\n-- Não encontrou\nprint(s:find('xyz'))    -- nil\n\n-- Para checar 'contém'\nif s:find('Lua') then print('tem Lua') end"
      ]
    ],
    "points": [
      "Devolve início, fim ou nil",
      "Quarto arg true desativa padrões",
      "find é poderoso — leia a doc"
    ],
    "alerts": []
  },
  {
    "slug": "string-match",
    "section": "strings-padroes",
    "title": "string.match: extrai pedaços",
    "difficulty": "intermediario",
    "subtitle": "Mais útil que find na maioria dos casos.",
    "intro": "string.match retorna o que casou (não as posições). Com captura, retorna os grupos.",
    "codes": [
      [
        "lua",
        "-- Sem captura: o casamento inteiro\nprint(('numero: 42'):match('%d+'))  -- '42'\n\n-- Com captura ()\nlocal nome, idade = ('Ana,30'):match('(%w+),(%d+)')\nprint(nome, idade)  -- 'Ana', '30' (strings!)\n\n-- Padrão de email simples\nfor email in ('a@x.com b@y.com'):gmatch('[%w.]+@[%w.]+') do\n  print(email)\nend"
      ]
    ],
    "points": [
      "match devolve a captura, não a posição",
      "Use () para capturar grupos",
      "gmatch itera todas as ocorrências"
    ],
    "alerts": []
  },
  {
    "slug": "string-gsub",
    "section": "strings-padroes",
    "title": "string.gsub: substituição",
    "difficulty": "intermediario",
    "subtitle": "Replace com poder.",
    "intro": "string.gsub substitui (uma, várias ou todas) ocorrências. O segundo retorno é a contagem.",
    "codes": [
      [
        "lua",
        "-- Substituição literal\nlocal r = ('olá mundo'):gsub('mundo', 'Lua')\nprint(r)\n\n-- Limitar quantidade\nprint(('aaaa'):gsub('a', 'b', 2))   -- 'bbaa', 2\n\n-- Substituição por função\nprint(('preço 10 reais'):gsub('%d+', function(n)\n  return tonumber(n) * 2\nend))   -- 'preço 20 reais'"
      ]
    ],
    "points": [
      "Substitui por string, tabela ou função",
      "Devolve nova string + número de subs",
      "Função recebe as capturas como argumento"
    ],
    "alerts": []
  },
  {
    "slug": "lua-patterns",
    "section": "strings-padroes",
    "title": "Lua Patterns: classes básicas",
    "difficulty": "intermediario",
    "subtitle": "Não é regex, mas é parecido.",
    "intro": "Lua não usa regex padrão. Tem 'patterns' próprios, mais simples mas suficientes na maioria dos casos.",
    "codes": [
      [
        "text",
        "Classes:\n  %a  letras\n  %A  não-letras\n  %d  dígitos\n  %D  não-dígitos\n  %s  espaços\n  %S  não-espaços\n  %w  alfanuméricos\n  %p  pontuação\n  %l  minúsculas, %u maiúsculas\n  .   qualquer caractere\n\nEscape: %.  %%  %[  etc."
      ]
    ],
    "points": [
      "%a, %d, %w, %s são as principais",
      "Sempre escape com % (não \\)",
      "Não há | (alternância) nos patterns Lua"
    ],
    "alerts": []
  },
  {
    "slug": "lua-patterns-quantif",
    "section": "strings-padroes",
    "title": "Patterns: quantificadores e âncoras",
    "difficulty": "intermediario",
    "subtitle": "+, *, -, ?, ^, $.",
    "intro": "Os modificadores são parecidos com regex, mas não idênticos. '-' é o equivalente preguiçoso.",
    "codes": [
      [
        "lua",
        "-- Quantificadores:\n-- *  zero ou mais (guloso)\n-- +  um ou mais (guloso)\n-- -  zero ou mais (preguiçoso)\n-- ?  zero ou um\n\n-- Âncoras:\n-- ^  início\n-- $  fim\n\nprint(('aaa.bbb'):match('^(.-)%.'))  -- 'aaa' (preguiçoso)\nprint(('aaa.bbb'):match('^(.*)%.'))  -- 'aaa' (guloso)\nprint(('palavra123'):match('%a+'))   -- 'palavra'"
      ]
    ],
    "points": [
      "- é preguiçoso (não +?)",
      "^ e $ ancoram início/fim",
      "(.-) entre delimitadores é o truque clássico"
    ],
    "alerts": []
  },
  {
    "slug": "lua-patterns-conjuntos",
    "section": "strings-padroes",
    "title": "Patterns: conjuntos [ ] e capturas",
    "difficulty": "intermediario",
    "subtitle": "Refinando padrões.",
    "intro": "Conjuntos definem quais caracteres aceitar. Capturas extraem partes.",
    "codes": [
      [
        "lua",
        "-- Conjunto: [aeiou]\nprint(('Lua'):gsub('[aeiou]', '*'))   -- 'L**', 2\n\n-- Negação: [^aeiou]\nprint(('Lua'):gsub('[^aeiou]', '*'))  -- '*ua', 1\n\n-- Capturas múltiplas\nlocal d, m, a = ('15/01/2026'):match('(%d+)/(%d+)/(%d+)')\nprint(d, m, a)\n\n-- Capturas posicionais\nprint(('abc'):match('()(%w)()'))  -- 1 a 2"
      ]
    ],
    "points": [
      "[abc] aceita qualquer um",
      "[^abc] negação",
      "Capturas com () extraem"
    ],
    "alerts": []
  },
  {
    "slug": "string-rep-format",
    "section": "strings-padroes",
    "title": "string.rep, string.format e mais",
    "difficulty": "iniciante",
    "subtitle": "Outras funções úteis.",
    "intro": "Repetir, formatar, padronizar, converter caso, dividir... Tudo na biblioteca string.",
    "codes": [
      [
        "lua",
        "print(string.rep('-', 30))\nprint(string.rep('ab', 3, '|'))   -- 'ab|ab|ab' (Lua 5.3+)\nprint(string.format('%05d', 42))   -- '00042'\nprint(string.byte('A'))            -- 65\nprint(string.char(65, 66, 67))     -- 'ABC'\nprint(string.lower('LUA'), string.upper('lua'))"
      ]
    ],
    "points": [
      "rep para repetir",
      "byte/char converte com tabela ASCII/UTF-8",
      "format para padding e formatação"
    ],
    "alerts": []
  },
  {
    "slug": "utf8",
    "section": "strings-padroes",
    "title": "UTF-8 com a biblioteca utf8",
    "difficulty": "intermediario",
    "subtitle": "Trabalhando com Unicode.",
    "intro": "Strings em Lua são sequências de BYTES. Para Unicode correto, use a biblioteca 'utf8' (Lua 5.3+).",
    "codes": [
      [
        "lua",
        "local s = 'Olá, Lua! 🌙'\nprint(#s)                  -- 14 (BYTES, não caracteres!)\nprint(utf8.len(s))         -- 11 (caracteres reais)\n\n-- Iterar codepoints\nfor _, c in utf8.codes(s) do\n  io.write(utf8.char(c))\nend\n\n-- Converter codepoint <-> char\nprint(utf8.char(0x1F319))  -- '🌙'"
      ]
    ],
    "points": [
      "#s conta BYTES",
      "utf8.len conta caracteres",
      "Lua não tem Unicode 'transparente'"
    ],
    "alerts": []
  },
  {
    "slug": "metatables-intro",
    "section": "metatables-oop",
    "title": "Introdução a metatables",
    "difficulty": "avancado",
    "subtitle": "O recurso mais poderoso de Lua.",
    "intro": "Metatables permitem mudar o COMPORTAMENTO de uma tabela: como ela responde a +, ==, indexação, chamada, etc.",
    "codes": [
      [
        "lua",
        "local t = {1, 2, 3}\nlocal mt = {\n  __add = function(a, b)\n    local r = {}\n    for i = 1, #a do r[i] = a[i] + b[i] end\n    return r\n  end,\n}\nsetmetatable(t, mt)\n\nlocal soma = t + {10, 20, 30}\nprint(soma[1], soma[2], soma[3])  -- 11, 22, 33"
      ]
    ],
    "points": [
      "setmetatable(t, mt) anexa",
      "Metatable é uma tabela com chaves __metodo",
      "Permite operadores customizados"
    ],
    "alerts": []
  },
  {
    "slug": "metamethods-aritmeticos",
    "section": "metatables-oop",
    "title": "Metamétodos aritméticos",
    "difficulty": "avancado",
    "subtitle": "__add, __sub, __mul, __div, __unm...",
    "intro": "Para cada operador, há um metamétodo. Permite escrever 'vetor + vetor', 'matriz * escalar', etc.",
    "codes": [
      [
        "lua",
        "local Vetor = {}\nVetor.__index = Vetor\nVetor.__add = function(a, b) return setmetatable({a[1]+b[1], a[2]+b[2]}, Vetor) end\nVetor.__sub = function(a, b) return setmetatable({a[1]-b[1], a[2]-b[2]}, Vetor) end\nVetor.__tostring = function(v) return string.format('(%g, %g)', v[1], v[2]) end\n\nlocal function v(x, y) return setmetatable({x, y}, Vetor) end\n\nprint(v(1,2) + v(3,4))   -- (4, 6)"
      ]
    ],
    "points": [
      "__add, __sub, __mul, __div, __mod, __pow",
      "__unm: unário menos",
      "__tostring: como o objeto vira string"
    ],
    "alerts": []
  },
  {
    "slug": "index-newindex",
    "section": "metatables-oop",
    "title": "__index e __newindex",
    "difficulty": "avancado",
    "subtitle": "Os metamétodos mais usados.",
    "intro": "__index controla o que acontece quando se ACESSA uma chave inexistente. __newindex, quando se ATRIBUI a uma chave inexistente. Base de OOP.",
    "codes": [
      [
        "lua",
        "local padroes = {cor = 'azul', tamanho = 10}\n\nlocal botao = setmetatable({texto = 'OK'}, {__index = padroes})\n\nprint(botao.texto)     -- 'OK' (próprio)\nprint(botao.cor)       -- 'azul' (vem do __index)\nprint(botao.tamanho)   -- 10\n\n-- __index pode ser função também\nlocal lazy = setmetatable({}, {\n  __index = function(t, k) return 'auto-' .. k end\n})\nprint(lazy.x)   -- 'auto-x'"
      ]
    ],
    "points": [
      "__index é a base de herança em Lua",
      "Pode ser tabela OU função",
      "__newindex bloqueia/intercepta atribuição"
    ],
    "alerts": []
  },
  {
    "slug": "oop-classes",
    "section": "metatables-oop",
    "title": "OOP: criando classes",
    "difficulty": "avancado",
    "subtitle": "Padrão clássico de OOP em Lua.",
    "intro": "Lua não tem classes, mas dá pra simular com tabelas + metatables. O padrão é simples e idiomático.",
    "codes": [
      [
        "lua",
        "local Pessoa = {}\nPessoa.__index = Pessoa\n\nfunction Pessoa.new(nome, idade)\n  return setmetatable({nome = nome, idade = idade}, Pessoa)\nend\n\nfunction Pessoa:saudar()\n  return 'Oi, sou ' .. self.nome\nend\n\nlocal ana = Pessoa.new('Ana', 30)\nprint(ana:saudar())\nprint(ana.idade)"
      ]
    ],
    "points": [
      "Tabela + __index = self = classe",
      "Construtor é função estática (.new)",
      "Métodos com ':' recebem self"
    ],
    "alerts": []
  },
  {
    "slug": "oop-heranca",
    "section": "metatables-oop",
    "title": "OOP: herança",
    "difficulty": "avancado",
    "subtitle": "Encadeando metatables.",
    "intro": "Para herança, faça a metatable da subclasse apontar para a superclasse via __index.",
    "codes": [
      [
        "lua",
        "local Animal = {}\nAnimal.__index = Animal\nfunction Animal.new(nome) return setmetatable({nome = nome}, Animal) end\nfunction Animal:mover() print(self.nome .. ' se move') end\n\nlocal Cao = setmetatable({}, {__index = Animal})\nCao.__index = Cao\nfunction Cao.new(nome, raca)\n  local self = Animal.new(nome)\n  self.raca = raca\n  return setmetatable(self, Cao)\nend\nfunction Cao:latir() print(self.nome .. ': au!') end\n\nlocal rex = Cao.new('Rex', 'SRD')\nrex:mover()   -- herdou\nrex:latir()"
      ]
    ],
    "points": [
      "Herança: cadeia de __index",
      "super = chamar Pai.metodo(self)",
      "Não há super() automático"
    ],
    "alerts": []
  },
  {
    "slug": "call-metamethod",
    "section": "metatables-oop",
    "title": "__call: tabelas chamáveis",
    "difficulty": "avancado",
    "subtitle": "Quando você usa obj() como função.",
    "intro": "Define o que acontece ao chamar uma tabela como se fosse função. Útil para construtores de classe.",
    "codes": [
      [
        "lua",
        "local Counter = {}\nCounter.__index = Counter\nCounter.__call = function(cls)\n  return setmetatable({n = 0}, cls)\nend\nsetmetatable(Counter, {__call = Counter.__call})\n\nfunction Counter:incrementar()\n  self.n = self.n + 1\n  return self.n\nend\n\nlocal c = Counter()  -- chamado como função!\nprint(c:incrementar(), c:incrementar())"
      ]
    ],
    "points": [
      "__call torna tabelas chamáveis",
      "Útil para construtores fluentes",
      "Padrão de muitas libs Lua"
    ],
    "alerts": []
  },
  {
    "slug": "metamethods-comparacao",
    "section": "metatables-oop",
    "title": "__eq, __lt, __le: comparação",
    "difficulty": "avancado",
    "subtitle": "Tornando objetos comparáveis.",
    "intro": "Lua compara tabelas por identidade por padrão. Para comparar por VALOR, use metamétodos.",
    "codes": [
      [
        "lua",
        "local Vec = {}\nVec.__index = Vec\nVec.__eq = function(a, b) return a.x == b.x and a.y == b.y end\nVec.__lt = function(a, b) return a.x*a.x + a.y*a.y < b.x*b.x + b.y*b.y end\n\nlocal function v(x, y) return setmetatable({x=x, y=y}, Vec) end\n\nprint(v(1,2) == v(1,2))   -- true (com __eq)\nprint(v(1,1) < v(3,4))    -- true (magnitude)"
      ]
    ],
    "points": [
      "__eq só funciona se ambos forem tabelas",
      "__lt e __le definem ordem",
      "Sem isso, == compara identidade"
    ],
    "alerts": []
  },
  {
    "slug": "tostring-len",
    "section": "metatables-oop",
    "title": "__tostring, __len e __index avançado",
    "difficulty": "avancado",
    "subtitle": "Outros metamétodos comuns.",
    "intro": "__tostring define como print() mostra. __len define o comportamento de #.",
    "codes": [
      [
        "lua",
        "local Lista = {}\nLista.__index = Lista\nLista.__tostring = function(l)\n  return '[' .. table.concat(l.dados, ', ') .. ']'\nend\nLista.__len = function(l) return #l.dados end\n\nlocal l = setmetatable({dados = {1,2,3,4}}, Lista)\nprint(l)        -- [1, 2, 3, 4]\nprint(#l)       -- 4"
      ]
    ],
    "points": [
      "__tostring usado por print/tostring",
      "__len responde a #",
      "Em Lua 5.2+, __len também funciona para tabelas (não só userdata)"
    ],
    "alerts": []
  },
  {
    "slug": "raw-funcs",
    "section": "metatables-oop",
    "title": "rawget, rawset, rawequal: ignorando metatables",
    "difficulty": "avancado",
    "subtitle": "Quando você precisa do acesso bruto.",
    "intro": "Às vezes você quer ler/escrever sem disparar metamétodos (importante dentro do próprio metamétodo!).",
    "codes": [
      [
        "lua",
        "local t = setmetatable({}, {\n  __index = function(t, k) return 'padrão' end,\n  __newindex = function(t, k, v) print('bloqueado: '..k) end,\n})\n\nt.x = 10           -- bloqueado!\nrawset(t, 'x', 10) -- atribui mesmo assim\nprint(t.x)         -- 'padrão' (via __index)\nprint(rawget(t, 'x'))  -- 10 (cru!)"
      ]
    ],
    "points": [
      "raw* ignora metamétodos",
      "Essencial dentro de __index/__newindex",
      "rawequal compara por identidade"
    ],
    "alerts": []
  },
  {
    "slug": "proxies-encapsulamento",
    "section": "metatables-oop",
    "title": "Proxies e encapsulamento via metatables",
    "difficulty": "avancado",
    "subtitle": "Tornando atributos privados.",
    "intro": "Use uma tabela 'proxy' com __index e __newindex para validar/log/proteger atributos.",
    "codes": [
      [
        "lua",
        "local function readonly(t)\n  return setmetatable({}, {\n    __index = t,\n    __newindex = function() error('readonly!') end,\n    __metatable = 'protegida',\n  })\nend\n\nlocal cfg = readonly({host='localhost', porta=8080})\nprint(cfg.host)\n-- cfg.host = 'x'   -- erro!"
      ]
    ],
    "points": [
      "__metatable bloqueia getmetatable",
      "Padrão de readonly muito usado",
      "Útil para constantes e configs"
    ],
    "alerts": []
  },
  {
    "slug": "modulos-require",
    "section": "modulos",
    "title": "Módulos com require",
    "difficulty": "iniciante",
    "subtitle": "Reusando código entre arquivos.",
    "intro": "require carrega um módulo (uma só vez, depois cacheia). O módulo deve retornar uma tabela com a API.",
    "codes": [
      [
        "lua",
        "-- arquivo: mate.lua\nlocal M = {}\nfunction M.somar(a, b) return a + b end\nfunction M.dobrar(x) return x * 2 end\nM.PI = 3.14159\nreturn M\n\n-- arquivo: app.lua\nlocal mate = require('mate')\nprint(mate.somar(2, 3))\nprint(mate.PI)"
      ]
    ],
    "points": [
      "Módulo deve return uma tabela",
      "require cacheia (require duas vezes carrega uma)",
      "Não use ponto/.lua no nome"
    ],
    "alerts": []
  },
  {
    "slug": "modulos-pacotes",
    "section": "modulos",
    "title": "Submódulos com pontos",
    "difficulty": "intermediario",
    "subtitle": "Organizando em pastas.",
    "intro": "Subpastas usam ponto: require('foo.bar') carrega foo/bar.lua. Caminho controlado por package.path.",
    "codes": [
      [
        "text",
        "meu-projeto/\n├── main.lua\n└── util/\n    ├── string.lua    -- require 'util.string'\n    └── math/\n        └── vec.lua   -- require 'util.math.vec'\n\n-- main.lua\nlocal vec = require 'util.math.vec'"
      ]
    ],
    "points": [
      "Pontos viram barras de pasta",
      "Cada arquivo é um módulo separado",
      "Sem __init__.lua (diferente de Python)"
    ],
    "alerts": []
  },
  {
    "slug": "package-path",
    "section": "modulos",
    "title": "package.path e package.cpath",
    "difficulty": "intermediario",
    "subtitle": "Onde require procura módulos.",
    "intro": "package.path é uma string com padrões de caminhos separados por ';'. Use ? como placeholder do nome.",
    "codes": [
      [
        "lua",
        "print(package.path)\n-- típico: ./?.lua;./?/init.lua;/usr/share/lua/...\n\n-- Adicionar pasta ao caminho\npackage.path = './lib/?.lua;' .. package.path\n\n-- cpath é o equivalente para .so / .dll (módulos C)\nprint(package.cpath)"
      ]
    ],
    "points": [
      "? é o placeholder",
      "Configuração via env LUA_PATH/LUA_CPATH",
      "Adicione antes de require do módulo"
    ],
    "alerts": []
  },
  {
    "slug": "padrao-modulo-moderno",
    "section": "modulos",
    "title": "Padrão moderno de módulo",
    "difficulty": "intermediario",
    "subtitle": "Como escrever módulos limpos.",
    "intro": "Evite o velho 'module()' (5.1). Hoje, retorne uma tabela com a API explícita.",
    "codes": [
      [
        "lua",
        "-- modulo bom (moderno)\nlocal M = {}\n\nlocal function privada() return 'segredo' end\n\nfunction M.publica()\n  return privada()\nend\n\nM.VERSAO = '1.0'\nreturn M\n\n-- Uso:\nlocal m = require 'meu_modulo'\nprint(m.publica())"
      ]
    ],
    "points": [
      "Sempre retorne uma tabela",
      "Funções não exportadas ficam local",
      "Evite poluir _G"
    ],
    "alerts": []
  },
  {
    "slug": "modulos-com-estado",
    "section": "modulos",
    "title": "Módulos com estado",
    "difficulty": "intermediario",
    "subtitle": "Módulos guardam estado entre usos.",
    "intro": "Como require cacheia, o estado interno do módulo persiste. Útil para singletons (config, logger).",
    "codes": [
      [
        "lua",
        "-- logger.lua\nlocal M = {nivel = 'info', historico = {}}\nfunction M.set_nivel(n) M.nivel = n end\nfunction M.info(msg)\n  if M.nivel == 'info' or M.nivel == 'debug' then\n    M.historico[#M.historico+1] = msg\n    print('[INFO] ' .. msg)\n  end\nend\nreturn M"
      ]
    ],
    "points": [
      "require devolve sempre a MESMA instância",
      "Útil para singletons",
      "Cuidado: modificações são globais"
    ],
    "alerts": []
  },
  {
    "slug": "dofile-loadfile",
    "section": "modulos",
    "title": "dofile, loadfile e load",
    "difficulty": "intermediario",
    "subtitle": "Outras formas de carregar Lua.",
    "intro": "dofile executa um arquivo. loadfile compila mas não executa. load compila uma string.",
    "codes": [
      [
        "lua",
        "-- Executa arquivo (sem cache)\ndofile('script.lua')\n\n-- Compila para chamada posterior\nlocal chunk, err = loadfile('script.lua')\nif chunk then chunk() end\n\n-- Compila string\nlocal f = load('return 1 + 2')\nprint(f())  -- 3\n\n-- Útil para configs em Lua puro\nlocal cfg = dofile('config.lua')"
      ]
    ],
    "points": [
      "dofile NÃO cacheia (require sim)",
      "load executa código de string (cuidado!)",
      "Padrão comum: configs como arquivos Lua"
    ],
    "alerts": []
  },
  {
    "slug": "sandbox-loader",
    "section": "modulos",
    "title": "Sandbox: limitando código carregado",
    "difficulty": "avancado",
    "subtitle": "Executando código não confiável.",
    "intro": "Você pode passar um ambiente customizado para load, limitando o que o código vê. Útil para configs/plugins.",
    "codes": [
      [
        "lua",
        "local sandbox = {print = print, math = math}  -- só isso!\n\nlocal codigo = 'return math.sqrt(x)'\nsandbox.x = 16\nlocal f = load(codigo, 'usuário', 't', sandbox)\nprint(f())   -- 4\n\n-- O código não vê io, os, debug, etc.\nlocal mau = load('os.execute(\"rm -rf /\")', 'mau', 't', sandbox)\nprint(mau())  -- erro (os não existe)"
      ]
    ],
    "points": [
      "4º arg de load é o _ENV",
      "Restrinja a APIs seguras",
      "Use para plugins, configs, mods"
    ],
    "alerts": [
      [
        "danger",
        "NUNCA execute código não confiável sem sandbox. Lua tem APIs perigosas (os, io, debug)."
      ]
    ]
  },
  {
    "slug": "luarocks-uso",
    "section": "modulos",
    "title": "Usando LuaRocks: instalar e usar",
    "difficulty": "intermediario",
    "subtitle": "Bibliotecas comunitárias.",
    "intro": "Pacotes do LuaRocks são instalados localmente ou globalmente. Depois é só require normal.",
    "codes": [
      [
        "bash",
        "# Instalar local (recomendado)\nluarocks --local install lua-cjson\n\n# Para encontrar localmente\neval $(luarocks path)\n\n# No script:\nlua -e 'local json = require \"cjson\"; print(json.encode({a=1}))'"
      ]
    ],
    "points": [
      "--local instala em ~/.luarocks",
      "eval $(luarocks path) ajusta env vars",
      "Pacotes binários precisam de compilador C"
    ],
    "alerts": []
  },
  {
    "slug": "criando-rock",
    "section": "modulos",
    "title": "Criando seu próprio rockspec",
    "difficulty": "avancado",
    "subtitle": "Distribuindo via LuaRocks.",
    "intro": "Um rockspec é um arquivo Lua que descreve seu pacote. Você publica no luarocks.org.",
    "codes": [
      [
        "lua",
        "-- meu-pacote-1.0-1.rockspec\npackage = 'meu-pacote'\nversion = '1.0-1'\nsource = {\n  url = 'git+https://github.com/voce/meu-pacote.git',\n  tag = 'v1.0',\n}\ndescription = {\n  summary = 'Faz coisas legais',\n  license = 'MIT',\n}\ndependencies = { 'lua >= 5.1' }\nbuild = {\n  type = 'builtin',\n  modules = { ['meu_modulo'] = 'src/meu_modulo.lua' }\n}"
      ]
    ],
    "points": [
      "rockspec é Lua puro",
      "version segue X.Y-Z",
      "luarocks upload publica"
    ],
    "alerts": []
  },
  {
    "slug": "organizacao-grandes",
    "section": "modulos",
    "title": "Organizando projetos maiores",
    "difficulty": "intermediario",
    "subtitle": "Estrutura para projetos grandes.",
    "intro": "Convenções comuns: src/ para código, spec/ ou tests/ para testes, init.lua para entrada do módulo principal.",
    "codes": [
      [
        "text",
        "meu-projeto/\n├── meu_projeto-scm-1.rockspec\n├── README.md\n├── src/\n│   └── meu_projeto/\n│       ├── init.lua       -- carregado por require 'meu_projeto'\n│       ├── core.lua\n│       └── util.lua\n├── spec/\n│   └── core_spec.lua\n└── examples/\n    └── basico.lua"
      ]
    ],
    "points": [
      "init.lua é o 'index'",
      "src-layout evita imports acidentais",
      "Use spec/ para testes (busted)"
    ],
    "alerts": []
  },
  {
    "slug": "coroutines-intro",
    "section": "coroutines-erros",
    "title": "Corrotinas: introdução",
    "difficulty": "avancado",
    "subtitle": "Cooperative multitasking.",
    "intro": "Corrotinas são threads cooperativas. Elas se cedem o controle voluntariamente (yield), não são pré-emptivas.",
    "codes": [
      [
        "lua",
        "local co = coroutine.create(function(a, b)\n  print('1:', a, b)\n  local c = coroutine.yield(a + b)\n  print('2:', c)\n  return 'fim'\nend)\n\nprint(coroutine.resume(co, 10, 20))  -- true, 30\nprint(coroutine.resume(co, 100))     -- true, 'fim'\nprint(coroutine.status(co))          -- 'dead'"
      ]
    ],
    "points": [
      "create cria, resume executa, yield pausa",
      "yield(v) retorna v ao resume",
      "Não é multithreading real (cooperativo)"
    ],
    "alerts": []
  },
  {
    "slug": "coroutines-iteradores",
    "section": "coroutines-erros",
    "title": "Corrotinas como iteradores",
    "difficulty": "avancado",
    "subtitle": "Geradores em Lua.",
    "intro": "Corrotinas + coroutine.wrap geram iteradores poderosos para uso em for-in.",
    "codes": [
      [
        "lua",
        "local function fibs(max)\n  return coroutine.wrap(function()\n    local a, b = 0, 1\n    while a < max do\n      coroutine.yield(a)\n      a, b = b, a + b\n    end\n  end)\nend\n\nfor n in fibs(50) do io.write(n, ' ') end\n-- 0 1 1 2 3 5 8 13 21 34"
      ]
    ],
    "points": [
      "coroutine.wrap devolve uma função",
      "Cada chamada é um yield",
      "Padrão de geradores como em Python"
    ],
    "alerts": []
  },
  {
    "slug": "coroutines-async",
    "section": "coroutines-erros",
    "title": "Corrotinas para I/O assíncrono",
    "difficulty": "avancado",
    "subtitle": "Padrão usado em Lapis, OpenResty, copas.",
    "intro": "Várias bibliotecas usam corrotinas para esconder asincronia. O código parece síncrono, mas cede no I/O.",
    "codes": [
      [
        "lua",
        "-- Pseudocódigo (ex: copas, OpenResty)\nlocal function baixar(url)\n  -- internamente: cede ao loop até resposta chegar\n  return http_get(url)\nend\n\n-- O código fica linear, sem callbacks!\nlocal a = baixar('https://x')\nlocal b = baixar('https://y')\nprint(a, b)"
      ]
    ],
    "points": [
      "Padrão usado em libs assíncronas Lua",
      "Evita 'callback hell'",
      "OpenResty/cqueues/copas usam isso"
    ],
    "alerts": []
  },
  {
    "slug": "pcall-xpcall",
    "section": "coroutines-erros",
    "title": "pcall e xpcall: capturando erros",
    "difficulty": "intermediario",
    "subtitle": "Try/catch em Lua.",
    "intro": "Lua não tem try/catch. Use pcall (protected call) para capturar erros sem crashar.",
    "codes": [
      [
        "lua",
        "local function arriscado(x)\n  if x == 0 then error('zero!') end\n  return 100 / x\nend\n\nlocal ok, valor = pcall(arriscado, 0)\nif not ok then\n  print('erro:', valor)\nelse\n  print('resultado:', valor)\nend\n\n-- xpcall aceita handler\nlocal ok, err = xpcall(arriscado, debug.traceback, 0)\nprint(err)  -- com stack trace!"
      ]
    ],
    "points": [
      "pcall(f, args) chama protegido",
      "Devolve true/resultado ou false/erro",
      "xpcall aceita handler de erro"
    ],
    "alerts": []
  },
  {
    "slug": "error-assert",
    "section": "coroutines-erros",
    "title": "error() e assert()",
    "difficulty": "intermediario",
    "subtitle": "Lançando erros.",
    "intro": "error('msg') lança erro. assert(cond, msg) testa e lança se for falso. Útil para validação de argumentos.",
    "codes": [
      [
        "lua",
        "local function dividir(a, b)\n  assert(type(a) == 'number', 'a deve ser número')\n  assert(b ~= 0, 'divisão por zero')\n  return a / b\nend\n\n-- error com nível\nlocal function deprecated()\n  error('uso descontinuado', 2)  -- nível 2 = quem CHAMOU\nend\n\n-- error com tabela (estruturado)\nlocal ok, err = pcall(function()\n  error({codigo = 42, msg = 'falhou'})\nend)\nif not ok then print(err.codigo, err.msg) end"
      ]
    ],
    "points": [
      "assert valida e dispara erro",
      "error pode receber qualquer valor",
      "nível controla onde a mensagem aponta"
    ],
    "alerts": []
  },
  {
    "slug": "debug-traceback",
    "section": "coroutines-erros",
    "title": "Debug.traceback e localizando erros",
    "difficulty": "avancado",
    "subtitle": "Stack traces.",
    "intro": "debug.traceback() retorna uma string com a pilha de chamadas. Use com xpcall para logs ricos.",
    "codes": [
      [
        "lua",
        "local function um()\n  error('boom!')\nend\nlocal function dois()\n  um()\nend\n\nlocal ok, err = xpcall(dois, debug.traceback)\nprint(err)\n--[[\nboom!\nstack traceback:\n        [C]: in function 'error'\n        teste.lua:2: in function 'um'\n        teste.lua:5: in function 'dois'\n        ...\n--]]"
      ]
    ],
    "points": [
      "debug.traceback() devolve string",
      "Use com xpcall em entrypoints",
      "Inestimável para debugging"
    ],
    "alerts": []
  },
  {
    "slug": "finally",
    "section": "coroutines-erros",
    "title": "Padrão 'finally' com pcall",
    "difficulty": "intermediario",
    "subtitle": "Garantindo limpeza.",
    "intro": "Lua não tem 'finally'. Você simula chamando a limpeza após pcall, capturando o erro para re-throw.",
    "codes": [
      [
        "lua",
        "local function com_arquivo(nome, fn)\n  local f = assert(io.open(nome, 'r'))\n  local ok, err = pcall(fn, f)\n  f:close()                  -- 'finally'\n  if not ok then error(err, 0) end\nend\n\ncom_arquivo('a.txt', function(f)\n  print(f:read('*a'))\nend)"
      ]
    ],
    "points": [
      "pcall + close + re-error é o padrão",
      "Em Lua 5.4: variáveis 'close' fazem isso automático",
      "Crítico para arquivos, locks, conexões"
    ],
    "alerts": []
  },
  {
    "slug": "lua54-close",
    "section": "coroutines-erros",
    "title": "Lua 5.4: variáveis <close>",
    "difficulty": "avancado",
    "subtitle": "RAII em Lua moderno.",
    "intro": "Lua 5.4 introduziu atributos const e close. Variáveis 'close' chamam __close ao sair de escopo.",
    "codes": [
      [
        "lua",
        "-- Exige Lua 5.4\nlocal function abrir(n)\n  return setmetatable({nome=n}, {\n    __close = function(self) print('fechando', self.nome) end\n  })\nend\n\ndo\n  local x <close> = abrir('A')\n  local y <close> = abrir('B')\n  print('trabalhando...')\nend  -- imprime 'fechando B' e 'fechando A'"
      ]
    ],
    "points": [
      "Apenas Lua 5.4+",
      "Ordem inversa de declaração",
      "Substitui try/finally para recursos"
    ],
    "alerts": []
  },
  {
    "slug": "math-lib",
    "section": "stdlib",
    "title": "Biblioteca math",
    "difficulty": "iniciante",
    "subtitle": "Matemática essencial.",
    "intro": "math contém constantes (pi, huge), funções básicas (sqrt, log, exp), trigonométricas, randômicas.",
    "codes": [
      [
        "lua",
        "print(math.pi)             -- 3.14159...\nprint(math.huge)           -- infinito\nprint(math.sqrt(16))       -- 4\nprint(math.floor(3.7))     -- 3\nprint(math.ceil(3.2))      -- 4\nprint(math.abs(-5))        -- 5\nprint(math.min(1, 2, 3))\nprint(math.max(1, 2, 3))\nprint(math.log(100, 10))   -- 2\nprint(math.exp(1))         -- e"
      ]
    ],
    "points": [
      "math.huge é infinito",
      "math.maxinteger / math.mininteger (5.3+)",
      "Para conversão: math.tointeger"
    ],
    "alerts": []
  },
  {
    "slug": "math-random",
    "section": "stdlib",
    "title": "math.random e seeding",
    "difficulty": "iniciante",
    "subtitle": "Aleatoriedade.",
    "intro": "math.random gera número entre 0 e 1, ou no intervalo dado. Use math.randomseed para semente.",
    "codes": [
      [
        "lua",
        "math.randomseed(os.time())\n\nprint(math.random())        -- [0,1)\nprint(math.random(10))      -- [1,10] inteiro\nprint(math.random(5, 15))   -- [5,15] inteiro\n\n-- Embaralhar (Fisher-Yates)\nlocal function shuffle(t)\n  for i = #t, 2, -1 do\n    local j = math.random(i)\n    t[i], t[j] = t[j], t[i]\n  end\nend"
      ]
    ],
    "points": [
      "Sempre seede no início (os.time)",
      "math.random(n) inclui n",
      "Não é seguro para criptografia"
    ],
    "alerts": []
  },
  {
    "slug": "string-lib-completo",
    "section": "stdlib",
    "title": "Biblioteca string completa",
    "difficulty": "intermediario",
    "subtitle": "Visão geral.",
    "intro": "Já vimos várias. Outras importantes: string.byte/char, string.split (não existe nativo!), string.dump.",
    "codes": [
      [
        "lua",
        "-- Não há split nativo, mas é fácil:\nlocal function split(s, sep)\n  local r = {}\n  for parte in s:gmatch('[^' .. sep .. ']+') do\n    r[#r+1] = parte\n  end\n  return r\nend\n\nfor _, p in ipairs(split('a,b,c', ',')) do print(p) end\n\nprint(string.byte('A'))    -- 65\nprint(string.char(65,66))  -- 'AB'"
      ]
    ],
    "points": [
      "NÃO há split nativo!",
      "Use gmatch para dividir",
      "Penlight tem util.string.split"
    ],
    "alerts": []
  },
  {
    "slug": "table-lib-completo",
    "section": "stdlib",
    "title": "Biblioteca table completa",
    "difficulty": "intermediario",
    "subtitle": "Operações avançadas.",
    "intro": "Além das vistas: table.move (cópia rápida), table.unpack (desempacotar), table.pack (empacotar).",
    "codes": [
      [
        "lua",
        "local t = {10, 20, 30, 40}\n\n-- pack: cria tabela com .n = quantidade\nlocal p = table.pack(10, 20, 30)\nprint(p.n, p[1])  -- 3, 10\n\n-- unpack: vira lista de retornos\nprint(table.unpack({1,2,3}))  -- 1 2 3\n\n-- move: copia trecho\nlocal copia = table.move(t, 2, 4, 1, {})  -- {20,30,40}"
      ]
    ],
    "points": [
      "pack/unpack para varargs",
      "table.move é eficiente",
      "table.unpack era _G.unpack em 5.1"
    ],
    "alerts": []
  },
  {
    "slug": "io-lib",
    "section": "stdlib",
    "title": "Biblioteca io: arquivos",
    "difficulty": "intermediario",
    "subtitle": "Leitura e escrita.",
    "intro": "io.open devolve um arquivo. Métodos: read, write, lines, close. Sempre feche!",
    "codes": [
      [
        "lua",
        "-- Ler tudo\nlocal f = io.open('texto.txt', 'r')\nlocal todo = f:read('*a')\nf:close()\n\n-- Linha a linha\nfor linha in io.lines('arquivo.txt') do\n  print(linha)\nend\n\n-- Escrever\nlocal f = io.open('saida.txt', 'w')\nf:write('linha 1\\n')\nf:write('linha 2\\n')\nf:close()\n\n-- Append\nio.open('log.txt', 'a'):write('nova entrada\\n')"
      ]
    ],
    "points": [
      "Modos: r, w, a, r+, w+ (binário com b)",
      "*a (todo), *l (linha), *n (número)",
      "io.lines fecha o arquivo automaticamente"
    ],
    "alerts": []
  },
  {
    "slug": "os-lib",
    "section": "stdlib",
    "title": "Biblioteca os",
    "difficulty": "intermediario",
    "subtitle": "Sistema operacional.",
    "intro": "os tem time, date, getenv, execute, remove, rename, tmpname.",
    "codes": [
      [
        "lua",
        "print(os.time())              -- timestamp UNIX\nprint(os.date())              -- 'Tue May  3 14:30:00 2026'\nprint(os.date('%Y-%m-%d'))    -- '2026-05-03'\nprint(os.date('!%c'))         -- UTC\n\nprint(os.getenv('HOME'))\n\n-- Diferenças\nlocal i = os.time()\n-- ... trabalho ...\nlocal d = os.difftime(os.time(), i)\nprint(d, 'segundos')"
      ]
    ],
    "points": [
      "os.time + difftime para medir tempo",
      "os.date para formatação",
      "os.execute roda comando do shell"
    ],
    "alerts": [
      [
        "warning",
        "os.execute, os.remove, os.rename: pense duas vezes em sandbox/web."
      ]
    ]
  },
  {
    "slug": "io-popen",
    "section": "stdlib",
    "title": "Executando comandos do sistema",
    "difficulty": "avancado",
    "subtitle": "io.popen e os.execute.",
    "intro": "os.execute roda e devolve status. io.popen abre processo e dá um pipe (leitura/escrita).",
    "codes": [
      [
        "lua",
        "-- Capturar saída\nlocal handle = io.popen('ls -la')\nlocal saida = handle:read('*a')\nhandle:close()\nprint(saida)\n\n-- Status só\nlocal ok, motivo, codigo = os.execute('ls /nao-existe')\nprint(ok, motivo, codigo)"
      ]
    ],
    "points": [
      "io.popen para CAPTURAR stdout",
      "Cuidado com injeção de comando!",
      "Sempre feche o handle"
    ],
    "alerts": []
  },
  {
    "slug": "debug-lib",
    "section": "stdlib",
    "title": "Biblioteca debug",
    "difficulty": "avancado",
    "subtitle": "Introspecção e ferramentas de debug.",
    "intro": "Permite inspecionar a stack, getinfo, getlocal, hooks. Útil para debuggers e logs ricos.",
    "codes": [
      [
        "lua",
        "print(debug.traceback('opa', 1))\n\n-- info da função atual\nlocal info = debug.getinfo(1, 'nSl')\nprint(info.name, info.source, info.currentline)\n\n-- variáveis locais\nlocal function dump_locals()\n  local i = 1\n  while true do\n    local n, v = debug.getlocal(2, i)\n    if not n then break end\n    print(n, '=', v)\n    i = i + 1\n  end\nend"
      ]
    ],
    "points": [
      "Use só em ferramentas, não em produção",
      "getinfo dá metadados da função",
      "Pode ser desabilitado em sandboxes"
    ],
    "alerts": []
  },
  {
    "slug": "bit32-bit",
    "section": "stdlib",
    "title": "Operações de bits",
    "difficulty": "intermediario",
    "subtitle": "Bitwise em Lua.",
    "intro": "Lua 5.3+ tem operadores nativos (& | ~ << >>). Em 5.1/LuaJIT, use bit32 ou bit (LuaJIT).",
    "codes": [
      [
        "lua",
        "-- Lua 5.3+\nprint(0xFF & 0x0F)    -- 15\nprint(0x0F | 0xF0)    -- 255\nprint(~0)             -- -1\nprint(1 << 4)         -- 16\n\n-- Lua 5.1 (LuaJIT)\nlocal bit = require 'bit'\nprint(bit.band(0xFF, 0x0F))\nprint(bit.bor(0x0F, 0xF0))\nprint(bit.lshift(1, 4))"
      ]
    ],
    "points": [
      "5.3+ tem operadores nativos",
      "LuaJIT usa lib bit",
      "5.2 tem bit32 (deprecated)"
    ],
    "alerts": []
  },
  {
    "slug": "json-cjson",
    "section": "stdlib",
    "title": "JSON com lua-cjson",
    "difficulty": "intermediario",
    "subtitle": "Trabalhando com JSON.",
    "intro": "Lua não tem JSON na stdlib. lua-cjson é a biblioteca padrão (rápida, em C).",
    "codes": [
      [
        "lua",
        "local json = require 'cjson'\n\n-- Lua -> JSON\nlocal s = json.encode({nome='Ana', tags={'a','b'}})\nprint(s)\n\n-- JSON -> Lua\nlocal t = json.decode('{\"x\":10,\"y\":[1,2,3]}')\nprint(t.x, t.y[2])\n\n-- Pretty\n-- (cjson não tem; use lua-cjson-2.x ou dkjson)\nlocal dk = require 'dkjson'\nprint(dk.encode({a=1,b=2}, {indent=true}))"
      ]
    ],
    "points": [
      "lua-cjson é o mais rápido",
      "dkjson tem pretty-print",
      "Cuidado: tabela vazia vira [] ou {} ambíguo"
    ],
    "alerts": []
  },
  {
    "slug": "love-intro",
    "section": "love2d",
    "title": "Introdução ao LÖVE 2D",
    "difficulty": "intermediario",
    "subtitle": "O framework de jogos 2D em Lua.",
    "intro": "LÖVE (love2d.org) é gratuito, open source, multiplataforma e MUITO fácil de começar. É o framework Lua mais popular para jogos.",
    "codes": [
      [
        "bash",
        "# Instalar\n# macOS\nbrew install --cask love\n# Ubuntu\nsudo apt install love\n# Windows\n# Baixe de love2d.org\n\n# Rodar um projeto\nlove .          # pasta atual\nlove jogo.love  # arquivo .love (ZIP)"
      ]
    ],
    "points": [
      "Multiplataforma (Win/Mac/Linux/Android/iOS)",
      "Apenas escreva main.lua e rode 'love .'",
      "Comunidade gigante e amigável"
    ],
    "alerts": []
  },
  {
    "slug": "love-callbacks",
    "section": "love2d",
    "title": "Callbacks do LÖVE: load, update, draw",
    "difficulty": "intermediario",
    "subtitle": "O ciclo de vida.",
    "intro": "LÖVE chama love.load uma vez, love.update(dt) a cada frame e love.draw a cada frame.",
    "codes": [
      [
        "lua",
        "-- main.lua\nfunction love.load()\n  print('inicia uma vez')\n  jogador = {x=100, y=100}\nend\n\nfunction love.update(dt)\n  -- dt = tempo desde o último frame, em segundos\n  jogador.x = jogador.x + 60 * dt   -- 60px/s\nend\n\nfunction love.draw()\n  love.graphics.rectangle('fill', jogador.x, jogador.y, 50, 50)\nend"
      ]
    ],
    "points": [
      "dt sempre em segundos",
      "Use velocidade * dt para FPS-independente",
      "love.draw NÃO recebe dt"
    ],
    "alerts": []
  },
  {
    "slug": "love-input",
    "section": "love2d",
    "title": "Entrada: teclado, mouse, gamepad",
    "difficulty": "intermediario",
    "subtitle": "Reagindo ao usuário.",
    "intro": "love.keyboard.isDown checa em update. love.keypressed/love.mousepressed são eventos.",
    "codes": [
      [
        "lua",
        "function love.update(dt)\n  if love.keyboard.isDown('right') then\n    jogador.x = jogador.x + 200 * dt\n  end\nend\n\nfunction love.keypressed(tecla)\n  if tecla == 'space' then jogador.pulo = true end\n  if tecla == 'escape' then love.event.quit() end\nend\n\nfunction love.mousepressed(x, y, botao)\n  print('clique', x, y, botao)\nend"
      ]
    ],
    "points": [
      "isDown para 'segurar'",
      "keypressed para 'tocou'",
      "Combine: contínuo vs evento"
    ],
    "alerts": []
  },
  {
    "slug": "love-graphics",
    "section": "love2d",
    "title": "Desenho com love.graphics",
    "difficulty": "intermediario",
    "subtitle": "Primitivas e cores.",
    "intro": "love.graphics tem rectangle, circle, line, polygon, print, draw, setColor, setLineWidth.",
    "codes": [
      [
        "lua",
        "function love.draw()\n  -- Cor: 0..1 (RGBA)\n  love.graphics.setColor(1, 0.5, 0)        -- laranja\n  love.graphics.rectangle('fill', 100, 100, 50, 50)\n  love.graphics.setColor(0, 1, 0, 0.5)     -- verde transparente\n  love.graphics.circle('line', 200, 200, 30)\n  love.graphics.setColor(1, 1, 1)\n  love.graphics.print('FPS: ' .. love.timer.getFPS(), 10, 10)\nend"
      ]
    ],
    "points": [
      "Cores: 0..1 (não 0..255)",
      "'fill' ou 'line' para preencher/contornar",
      "setColor é stateful — afeta tudo até trocar"
    ],
    "alerts": []
  },
  {
    "slug": "love-imagens-sprites",
    "section": "love2d",
    "title": "Imagens e sprites",
    "difficulty": "intermediario",
    "subtitle": "Carregando e desenhando texturas.",
    "intro": "Carregue imagens em love.load. Desenhe com love.graphics.draw.",
    "codes": [
      [
        "lua",
        "function love.load()\n  player_img = love.graphics.newImage('player.png')\nend\n\nfunction love.draw()\n  -- draw(imagem, x, y, rot, sx, sy, ox, oy)\n  love.graphics.draw(player_img, 100, 100)\n  love.graphics.draw(player_img, 200, 100, math.pi/4, 2, 2)  -- rotacionado e dobrado\nend"
      ]
    ],
    "points": [
      "Sempre carregue em love.load (uma vez)",
      "ox/oy = origem (para girar em torno)",
      "Use atlases (1 imagem) para performance"
    ],
    "alerts": []
  },
  {
    "slug": "love-audio",
    "section": "love2d",
    "title": "Som: efeitos e música",
    "difficulty": "intermediario",
    "subtitle": "love.audio.",
    "intro": "love.audio.newSource cria som. Tipos: 'static' (efeitos curtos) ou 'stream' (músicas).",
    "codes": [
      [
        "lua",
        "function love.load()\n  pulo_snd = love.audio.newSource('pulo.wav', 'static')\n  musica   = love.audio.newSource('musica.ogg', 'stream')\n  musica:setLooping(true)\n  musica:setVolume(0.5)\n  musica:play()\nend\n\nfunction love.keypressed(k)\n  if k == 'space' then pulo_snd:play() end\nend"
      ]
    ],
    "points": [
      "'static' carrega tudo na RAM (efeitos)",
      "'stream' lê do disco (música)",
      "Use OGG para músicas, WAV para efeitos curtos"
    ],
    "alerts": []
  },
  {
    "slug": "love-textos-fontes",
    "section": "love2d",
    "title": "Texto e fontes",
    "difficulty": "intermediario",
    "subtitle": "Renderizando texto.",
    "intro": "love.graphics.newFont carrega fontes. setFont para selecionar. print/printf para desenhar.",
    "codes": [
      [
        "lua",
        "function love.load()\n  fonte_g = love.graphics.newFont('Arial.ttf', 32)\nend\n\nfunction love.draw()\n  love.graphics.setFont(fonte_g)\n  love.graphics.setColor(1, 1, 0)\n  love.graphics.print('Pontos: 100', 10, 10)\n  -- printf com alinhamento\n  love.graphics.printf('Centro!', 0, 100, love.graphics.getWidth(), 'center')\nend"
      ]
    ],
    "points": [
      "TTF embutida no jogo",
      "printf alinha (left/right/center)",
      "Padrão é Vera Sans em ~12pt"
    ],
    "alerts": []
  },
  {
    "slug": "love-colisao",
    "section": "love2d",
    "title": "Colisão simples (AABB)",
    "difficulty": "intermediario",
    "subtitle": "Detecção retângulo-retângulo.",
    "intro": "Pra colisão simples, AABB (Axis-Aligned Bounding Box) basta. Para física avançada, use love.physics (Box2D).",
    "codes": [
      [
        "lua",
        "local function aabb(a, b)\n  return a.x < b.x + b.w\n     and b.x < a.x + a.w\n     and a.y < b.y + b.h\n     and b.y < a.y + a.h\nend\n\nlocal jogador = {x=100, y=100, w=32, h=32}\nlocal moeda   = {x=200, y=100, w=16, h=16}\n\nif aabb(jogador, moeda) then print('pegou!') end"
      ]
    ],
    "points": [
      "AABB resolve 90% dos casos 2D",
      "Para forma livre, use círculos ou Box2D",
      "love.physics tem Box2D embutido"
    ],
    "alerts": []
  },
  {
    "slug": "love-fisica-box2d",
    "section": "love2d",
    "title": "Física com love.physics (Box2D)",
    "difficulty": "avancado",
    "subtitle": "Simulação física profissional.",
    "intro": "love.physics expõe Box2D. Você cria um mundo, body, shape, fixture e deixa simular.",
    "codes": [
      [
        "lua",
        "function love.load()\n  love.physics.setMeter(64)  -- 1m = 64 pixels\n  mundo = love.physics.newWorld(0, 9.81*64, true)\n\n  chao = {}\n  chao.body = love.physics.newBody(mundo, 400, 580, 'static')\n  chao.shape = love.physics.newRectangleShape(800, 40)\n  chao.fixt = love.physics.newFixture(chao.body, chao.shape)\n\n  caixa = {}\n  caixa.body = love.physics.newBody(mundo, 400, 100, 'dynamic')\n  caixa.shape = love.physics.newRectangleShape(50, 50)\n  caixa.fixt = love.physics.newFixture(caixa.body, caixa.shape, 1)\nend\n\nfunction love.update(dt) mundo:update(dt) end"
      ]
    ],
    "points": [
      "Box2D = padrão da indústria 2D",
      "Use setMeter pra mapear unidades",
      "static, dynamic, kinematic body types"
    ],
    "alerts": []
  },
  {
    "slug": "love-game-state",
    "section": "love2d",
    "title": "Game states (telas)",
    "difficulty": "intermediario",
    "subtitle": "Menu, jogo, game over.",
    "intro": "Padrão simples: variável current_state que decide qual update/draw rodar. Bibliotecas como hump.gamestate ajudam.",
    "codes": [
      [
        "lua",
        "local estado = 'menu'\n\nfunction love.update(dt)\n  if estado == 'menu' then\n    -- ...\n  elseif estado == 'jogo' then\n    -- ...\n  end\nend\n\nfunction love.draw()\n  if estado == 'menu' then\n    love.graphics.printf('PRESSIONE ESPACO', 0, 200, 800, 'center')\n  elseif estado == 'jogo' then\n    love.graphics.print('jogando!', 10, 10)\n  end\nend\n\nfunction love.keypressed(k)\n  if estado == 'menu' and k == 'space' then estado = 'jogo' end\nend"
      ]
    ],
    "points": [
      "Padrão simples = variável + if/elseif",
      "Para projetos grandes: hump.gamestate",
      "Cada estado isola lógica"
    ],
    "alerts": []
  },
  {
    "slug": "love-projeto-completo",
    "section": "love2d",
    "title": "Projeto: Pong em LÖVE",
    "difficulty": "intermediario",
    "subtitle": "Um Pong completo em ~50 linhas.",
    "intro": "Vamos juntar o que aprendemos num joguinho.",
    "codes": [
      [
        "lua",
        "local p1, p2, bola\nfunction love.load()\n  p1 = {x=20, y=250, w=10, h=80, vel=400}\n  p2 = {x=770, y=250, w=10, h=80, vel=400}\n  bola = {x=400, y=300, r=8, vx=300, vy=200}\nend\nfunction love.update(dt)\n  if love.keyboard.isDown('w') then p1.y = p1.y - p1.vel*dt end\n  if love.keyboard.isDown('s') then p1.y = p1.y + p1.vel*dt end\n  if love.keyboard.isDown('up')   then p2.y = p2.y - p2.vel*dt end\n  if love.keyboard.isDown('down') then p2.y = p2.y + p2.vel*dt end\n  bola.x = bola.x + bola.vx*dt\n  bola.y = bola.y + bola.vy*dt\n  if bola.y < bola.r or bola.y > 600-bola.r then bola.vy = -bola.vy end\n  if bola.x < 0 or bola.x > 800 then bola.x, bola.y = 400, 300 end\nend\nfunction love.draw()\n  love.graphics.rectangle('fill', p1.x, p1.y, p1.w, p1.h)\n  love.graphics.rectangle('fill', p2.x, p2.y, p2.w, p2.h)\n  love.graphics.circle('fill', bola.x, bola.y, bola.r)\nend"
      ]
    ],
    "points": [
      "Pong em ~25 linhas!",
      "Falta apenas colisão raquete-bola",
      "Próximo passo: pontuação e som"
    ],
    "alerts": []
  },
  {
    "slug": "love-distribuicao",
    "section": "love2d",
    "title": "Distribuindo um jogo LÖVE",
    "difficulty": "intermediario",
    "subtitle": "Gerando .love e .exe.",
    "intro": "Um .love é um ZIP da pasta do jogo. Para distribuir como .exe, concatene com o binário do LÖVE.",
    "codes": [
      [
        "bash",
        "# Criar .love (ZIP da pasta)\ncd meu-jogo\nzip -r ../jogo.love .\n\n# Para Windows .exe\ncopy /b love.exe+jogo.love jogo.exe\n\n# Use love-release ou makelove para automatizar\npip install makelove\nmakelove --config makelove.toml"
      ]
    ],
    "points": [
      "Arquivo .love = ZIP renomeado",
      "love jogo.love roda direto",
      "makelove automatiza para todas plataformas"
    ],
    "alerts": []
  },
  {
    "slug": "roblox-luau",
    "section": "lua-embarcado",
    "title": "Roblox e Luau",
    "difficulty": "intermediario",
    "subtitle": "A versão de Lua do Roblox.",
    "intro": "Roblox usa Luau, um fork de Lua 5.1 com tipagem opcional, mais segurança e otimizações. Sintaxe quase idêntica.",
    "codes": [
      [
        "lua",
        "-- Em Roblox Studio (script de servidor)\nlocal Players = game:GetService('Players')\n\nPlayers.PlayerAdded:Connect(function(player)\n  print('Entrou: ' .. player.Name)\n  player.CharacterAdded:Connect(function(char)\n    char.Humanoid.WalkSpeed = 32  -- mais rápido\n  end)\nend)\n\n-- Tipagem opcional do Luau\nlocal function somar(a: number, b: number): number\n  return a + b\nend"
      ]
    ],
    "points": [
      "Roblox Studio é a IDE obrigatória",
      "Luau adiciona tipagem opcional",
      "Scripts: server, local, module"
    ],
    "alerts": []
  },
  {
    "slug": "roblox-services",
    "section": "lua-embarcado",
    "title": "Roblox: Services e DataStore",
    "difficulty": "intermediario",
    "subtitle": "Acessando recursos do jogo.",
    "intro": "Tudo no Roblox é via game:GetService(). Para persistência, use DataStoreService.",
    "codes": [
      [
        "lua",
        "local DSS = game:GetService('DataStoreService')\nlocal pontos = DSS:GetDataStore('PontosJogador')\n\ngame.Players.PlayerRemoving:Connect(function(p)\n  pcall(function()\n    pontos:SetAsync(p.UserId, p.leaderstats.Pontos.Value)\n  end)\nend)\n\ngame.Players.PlayerAdded:Connect(function(p)\n  local ok, valor = pcall(function() return pontos:GetAsync(p.UserId) end)\n  if ok and valor then print(p.Name, 'tinha', valor) end\nend)"
      ]
    ],
    "points": [
      "DataStoreService persiste dados",
      "Sempre use pcall (rede pode falhar)",
      "Limites de chamadas — leia a doc!"
    ],
    "alerts": []
  },
  {
    "slug": "roblox-remoteevent",
    "section": "lua-embarcado",
    "title": "Roblox: RemoteEvents (cliente↔servidor)",
    "difficulty": "intermediario",
    "subtitle": "Comunicação entre máquinas.",
    "intro": "RemoteEvents permitem que script de cliente e servidor se falem. Cliente :FireServer, servidor :FireClient.",
    "codes": [
      [
        "lua",
        "-- ReplicatedStorage.MeuEvento (RemoteEvent)\n-- Server script:\nlocal evt = game.ReplicatedStorage.MeuEvento\nevt.OnServerEvent:Connect(function(player, msg)\n  print(player.Name, 'disse:', msg)\nend)\n\n-- LocalScript no jogador:\nlocal evt = game.ReplicatedStorage.MeuEvento\nevt:FireServer('olá!')"
      ]
    ],
    "points": [
      "RemoteEvent: cliente↔servidor",
      "RemoteFunction: bidirecional com retorno",
      "Valide TUDO no servidor (segurança)"
    ],
    "alerts": [
      [
        "danger",
        "Nunca confie em dados vindos do cliente. Valide tudo no server."
      ]
    ]
  },
  {
    "slug": "openresty-intro",
    "section": "lua-embarcado",
    "title": "OpenResty: Lua dentro do NGINX",
    "difficulty": "avancado",
    "subtitle": "Programação web com Lua.",
    "intro": "OpenResty é o NGINX + LuaJIT. Permite escrever lógica HTTP completa em Lua, rodando dentro do servidor.",
    "codes": [
      [
        "nginx",
        "# nginx.conf\nlocation /ola {\n    content_by_lua_block {\n        ngx.say('Olá de Lua dentro do NGINX!')\n        ngx.say('Hora: ', ngx.localtime())\n    }\n}"
      ]
    ],
    "points": [
      "LuaJIT dentro do NGINX = ULTRA rápido",
      "Empresas como Cloudflare usam",
      "Diretivas: access_by_lua, content_by_lua, log_by_lua"
    ],
    "alerts": []
  },
  {
    "slug": "openresty-api",
    "section": "lua-embarcado",
    "title": "OpenResty: API REST simples",
    "difficulty": "avancado",
    "subtitle": "Construindo endpoints.",
    "intro": "Vamos criar uma rota que processa JSON e devolve JSON.",
    "codes": [
      [
        "nginx",
        "location = /soma {\n    content_by_lua_block {\n        ngx.req.read_body()\n        local cjson = require 'cjson'\n        local body = cjson.decode(ngx.req.get_body_data() or '{}')\n        ngx.header.content_type = 'application/json'\n        ngx.say(cjson.encode({\n            resultado = (body.a or 0) + (body.b or 0)\n        }))\n    }\n}"
      ]
    ],
    "points": [
      "ngx.req lê dados da requisição",
      "ngx.say escreve resposta",
      "lua-resty-* tem clients (redis, mysql, http)"
    ],
    "alerts": []
  },
  {
    "slug": "lapis-framework",
    "section": "lua-embarcado",
    "title": "Lapis: framework web em Lua",
    "difficulty": "avancado",
    "subtitle": "Roda sobre OpenResty.",
    "intro": "Lapis é como Express/Flask, mas em Lua e sobre NGINX/OpenResty. Performance excepcional.",
    "codes": [
      [
        "lua",
        "-- app.moon ou app.lua\nlocal lapis = require 'lapis'\nlocal app = lapis.Application()\n\napp:get('/', function(self)\n  return 'Olá do Lapis!'\nend)\n\napp:get('/hello/:nome', function(self)\n  return 'Olá, ' .. self.params.nome\nend)\n\nreturn app"
      ]
    ],
    "points": [
      "Roteamento, ORM, validação, templates",
      "Performance >5x Express em benchmarks",
      "Use 'lapis new' para iniciar projeto"
    ],
    "alerts": []
  },
  {
    "slug": "redis-lua",
    "section": "lua-embarcado",
    "title": "Lua dentro do Redis",
    "difficulty": "avancado",
    "subtitle": "Scripts atômicos no Redis.",
    "intro": "EVAL executa Lua atomicamente no servidor Redis. Excelente para operações compostas seguras.",
    "codes": [
      [
        "bash",
        "# CLI do Redis\nredis-cli EVAL \"return redis.call('GET', KEYS[1])\" 1 minha_chave\n\n# Decremento atômico com mínimo\nredis-cli EVAL \"local v = tonumber(redis.call('GET', KEYS[1]))\nif v and v > 0 then\n  return redis.call('DECR', KEYS[1])\nelse\n  return -1\nend\" 1 contador"
      ]
    ],
    "points": [
      "EVAL executa atomicamente",
      "KEYS[i] e ARGV[i] são os args",
      "Redis 7+ tem 'functions' (registráveis)"
    ],
    "alerts": []
  },
  {
    "slug": "nodemcu-esp",
    "section": "lua-embarcado",
    "title": "Lua em microcontroladores: NodeMCU",
    "difficulty": "avancado",
    "subtitle": "Lua na ESP8266/ESP32.",
    "intro": "NodeMCU é firmware Lua para ESP8266/ESP32. Permite IoT em Lua puro.",
    "codes": [
      [
        "lua",
        "-- Conectar Wi-Fi\nwifi.setmode(wifi.STATION)\nwifi.sta.config({ssid='MinhaRede', pwd='senha'})\nwifi.sta.connect()\n\n-- Servidor HTTP simples\nsrv = net.createServer(net.TCP)\nsrv:listen(80, function(conn)\n  conn:on('receive', function(c, payload)\n    c:send('HTTP/1.1 200 OK\\r\\n\\r\\nOlá da ESP!')\n  end)\nend)\n\n-- Acender LED\ngpio.mode(4, gpio.OUTPUT)\ngpio.write(4, gpio.HIGH)"
      ]
    ],
    "points": [
      "Lua roda direto na ESP",
      "RAM limitada (~32-64KB)",
      "Alternativas: MicroPython, Arduino IDE"
    ],
    "alerts": []
  },
  {
    "slug": "wireshark-lua",
    "section": "lua-embarcado",
    "title": "Wireshark: dissectores em Lua",
    "difficulty": "avancado",
    "subtitle": "Estendendo o sniffer.",
    "intro": "Você pode escrever dissectores de protocolo customizados para o Wireshark em Lua.",
    "codes": [
      [
        "lua",
        "-- meu_proto.lua (em Wireshark plugins)\nlocal p = Proto('meuprot', 'Meu Protocolo')\nlocal f_versao = ProtoField.uint8('meuprot.versao', 'Versão')\np.fields = {f_versao}\n\nfunction p.dissector(buf, pkt, tree)\n  pkt.cols.protocol = 'MEU'\n  local sub = tree:add(p, buf())\n  sub:add(f_versao, buf(0,1))\nend\n\nDissectorTable.get('udp.port'):add(9999, p)"
      ]
    ],
    "points": [
      "Útil para protocolos proprietários",
      "Coloca em ~/.config/wireshark/plugins",
      "Recarregar com Ctrl+Shift+L"
    ],
    "alerts": []
  },
  {
    "slug": "defold-engine",
    "section": "lua-embarcado",
    "title": "Defold: motor de jogos",
    "difficulty": "intermediario",
    "subtitle": "Outro motor que usa Lua.",
    "intro": "Defold (gratuito, da King) é um motor 2D/3D leve usando LuaJIT. Boa alternativa ao LÖVE para jogos comerciais.",
    "codes": [
      [
        "lua",
        "-- player.script (em Defold)\nfunction init(self)\n  self.vel = vmath.vector3(0)\n  msg.post('.', 'acquire_input_focus')\nend\n\nfunction update(self, dt)\n  local pos = go.get_position()\n  go.set_position(pos + self.vel * dt)\nend\n\nfunction on_input(self, action_id, action)\n  if action_id == hash('right') then\n    self.vel.x = action.pressed and 200 or 0\n  end\nend"
      ]
    ],
    "points": [
      "Defold é gratuito e profissional",
      "Usa LuaJIT internamente",
      "Mais 'engine' que LÖVE — tem editor visual"
    ],
    "alerts": []
  },
  {
    "slug": "luajit-intro",
    "section": "performance",
    "title": "LuaJIT em detalhe",
    "difficulty": "avancado",
    "subtitle": "Por que tão rápido.",
    "intro": "LuaJIT é um JIT (just-in-time) compiler que traduz Lua para código de máquina otimizado. Em muitos benchmarks, fica perto de C.",
    "codes": [
      [
        "bash",
        "# Instalar\nbrew install luajit       # macOS\nsudo apt install luajit   # Ubuntu\n\n# Usar como interpretador\nluajit script.lua\n\n# Ver assembly gerado (avançado)\nluajit -jdump=+rs script.lua"
      ]
    ],
    "points": [
      "JIT compila trechos quentes para nativo",
      "API igual a Lua 5.1",
      "Padrão em OpenResty, Defold, Wireshark"
    ],
    "alerts": []
  },
  {
    "slug": "luajit-ffi",
    "section": "performance",
    "title": "LuaJIT FFI: chamando C diretamente",
    "difficulty": "avancado",
    "subtitle": "Sem precisar escrever bindings.",
    "intro": "FFI permite declarar protótipos C e chamá-los direto. É o que torna LuaJIT brutalmente integrável.",
    "codes": [
      [
        "lua",
        "local ffi = require 'ffi'\n\nffi.cdef[[\n  int printf(const char *fmt, ...);\n  double sqrt(double x);\n]]\n\nffi.C.printf('Olá %s, %d\\n', 'Lua', 42)\nprint(ffi.C.sqrt(2.0))\n\n-- Estruturas\nffi.cdef[[ typedef struct { float x, y; } Vec2; ]]\nlocal v = ffi.new('Vec2', 1.0, 2.0)\nprint(v.x, v.y)"
      ]
    ],
    "points": [
      "ffi.cdef declara assinaturas C",
      "ffi.C acessa libc",
      "Estruturas C nativas (sem GC)"
    ],
    "alerts": []
  },
  {
    "slug": "medindo-performance",
    "section": "performance",
    "title": "Medindo performance",
    "difficulty": "intermediario",
    "subtitle": "os.clock e benchmarks.",
    "intro": "Use os.clock() para medir tempo de CPU. Para microbenchmarks, rode N iterações.",
    "codes": [
      [
        "lua",
        "local function bench(nome, fn, n)\n  n = n or 1e6\n  local t = os.clock()\n  for _ = 1, n do fn() end\n  print(string.format('%s: %.3fs', nome, os.clock() - t))\nend\n\nbench('soma', function()\n  local s = 0\n  for i = 1, 100 do s = s + i end\nend)"
      ]
    ],
    "points": [
      "os.clock() = tempo CPU",
      "Sempre meça com N iterações",
      "MEÇA antes de otimizar"
    ],
    "alerts": []
  },
  {
    "slug": "dicas-performance",
    "section": "performance",
    "title": "Dicas de performance",
    "difficulty": "intermediario",
    "subtitle": "Truques comuns.",
    "intro": "Locais > globais. Cache funções. Pré-aloque. Evite criar tabelas em loops apertados.",
    "codes": [
      [
        "lua",
        "-- LENTO: acesso global em loop\nfor i = 1, 1e6 do io.write('x') end\n\n-- RÁPIDO: cache local\nlocal w = io.write\nfor i = 1, 1e6 do w('x') end\n\n-- Pré-alocar tabela\nlocal t = table.new(1000, 0)  -- LuaJIT only\nfor i = 1, 1000 do t[i] = i end\n\n-- Concatenação: use table.concat, não ..\nlocal partes = {}\nfor i = 1, 1000 do partes[i] = tostring(i) end\nlocal s = table.concat(partes)"
      ]
    ],
    "points": [
      "Variáveis locais são MUITO mais rápidas",
      "Cache 'string.format' em local",
      "Concat com .. em loop é O(n²)"
    ],
    "alerts": []
  },
  {
    "slug": "jit-friendly",
    "section": "performance",
    "title": "Código JIT-friendly (LuaJIT)",
    "difficulty": "avancado",
    "subtitle": "O que faz o JIT desistir.",
    "intro": "LuaJIT compila 'traces'. Construções não suportadas (NYI) fazem fall back para o interpretador, perdendo performance.",
    "codes": [
      [
        "text",
        "Coisas a EVITAR em loops quentes (NYI):\n- pcall/xpcall (parcial)\n- pairs em tabelas mistas (use ipairs)\n- string.format (ok em alguns casos)\n- coroutine.yield através de C\n- error()\n\nUse o flag -jv para ver traces:\nluajit -jv script.lua"
      ]
    ],
    "points": [
      "NYI = Not Yet Implemented (no JIT)",
      "Use -jv para diagnosticar",
      "Mantenha hot loops simples e em ipairs"
    ],
    "alerts": []
  },
  {
    "slug": "alocacao-gc",
    "section": "performance",
    "title": "Alocação e o coletor de lixo",
    "difficulty": "avancado",
    "subtitle": "Reduzindo pressão no GC.",
    "intro": "Toda criação de tabela aloca. Em jogos, pré-aloque buffers. Reuse tabelas. Evite closures em loop.",
    "codes": [
      [
        "lua",
        "-- RUIM: cria fechamento por iteração\nfor i = 1, 1000 do\n  table.sort(t, function(a, b) return a < b end)\nend\n\n-- BOM: reusa\nlocal cmp = function(a, b) return a < b end\nfor i = 1, 1000 do\n  table.sort(t, cmp)\nend\n\n-- Pré-alocar pool de tabelas\nlocal pool = {}\nlocal function take()\n  return table.remove(pool) or {}\nend\nlocal function give(t)\n  for k in pairs(t) do t[k] = nil end\n  pool[#pool+1] = t\nend"
      ]
    ],
    "points": [
      "Tabelas e closures pesam no GC",
      "Pools reusam memória",
      "Em jogos: trying é assassino de FPS"
    ],
    "alerts": []
  },
  {
    "slug": "c-bindings",
    "section": "performance",
    "title": "Escrevendo módulos C para Lua",
    "difficulty": "avancado",
    "subtitle": "Quando Lua puro não basta.",
    "intro": "A API C de Lua é simples: a stack. Você empilha valores, chama, desempilha.",
    "codes": [
      [
        "c",
        "// mymath.c\n#include <lua.h>\n#include <lauxlib.h>\n\nstatic int l_quadrado(lua_State *L) {\n  double n = luaL_checknumber(L, 1);\n  lua_pushnumber(L, n * n);\n  return 1;  // 1 valor de retorno\n}\n\nstatic const luaL_Reg funcs[] = {\n  {\"quadrado\", l_quadrado},\n  {NULL, NULL}\n};\n\nint luaopen_mymath(lua_State *L) {\n  luaL_newlib(L, funcs);\n  return 1;\n}"
      ]
    ],
    "points": [
      "API C é via stack",
      "luaL_check* valida e converte",
      "Compile com -shared e cabeçalhos do Lua"
    ],
    "alerts": []
  },
  {
    "slug": "alternativas-rapidas",
    "section": "performance",
    "title": "Quando NÃO usar Lua puro",
    "difficulty": "intermediario",
    "subtitle": "Reconhecendo limites.",
    "intro": "Lua é rápido, mas há limites. Para CPU pesado: LuaJIT. Para CPU MUITO pesado: C via FFI ou módulo C.",
    "codes": [
      [
        "text",
        "Hierarquia de performance (típica):\n  Python puro      <  Lua puro\n  Lua puro         <  LuaJIT\n  LuaJIT           ≈  C otimizado (em muitos casos)\n  Lua + C via FFI  ≈  C puro\n\nQuando ir para C:\n- Loops apertados de processamento numérico\n- Estruturas de dados massivas\n- Integração com bibliotecas C existentes\n\nQuando ficar em Lua:\n- Lógica de jogo, estado, scripts\n- I/O e rede (assíncrono)\n- DSLs e configuração"
      ]
    ],
    "points": [
      "LuaJIT cobre 90% dos casos",
      "FFI é a porta de saída para C",
      "Não otimize sem MEDIR"
    ],
    "alerts": []
  },
  {
    "slug": "projeto-cli-todo",
    "section": "casos-apendice",
    "title": "Projeto: CLI de To-Do",
    "difficulty": "intermediario",
    "subtitle": "Construindo uma aplicação de linha de comando.",
    "intro": "Vamos juntar io, tabelas e serialização para um to-do em terminal.",
    "codes": [
      [
        "lua",
        "-- todo.lua\nlocal arq = 'tarefas.txt'\n\nlocal function carregar()\n  local t = {}\n  local f = io.open(arq, 'r')\n  if f then\n    for l in f:lines() do t[#t+1] = l end\n    f:close()\n  end\n  return t\nend\n\nlocal function salvar(t)\n  local f = assert(io.open(arq, 'w'))\n  for _, x in ipairs(t) do f:write(x, '\\n') end\n  f:close()\nend\n\nlocal cmd, val = arg[1], arg[2]\nlocal t = carregar()\nif cmd == 'add' then table.insert(t, val); salvar(t)\nelseif cmd == 'rem' then table.remove(t, tonumber(val)); salvar(t)\nelse for i, x in ipairs(t) do print(i, x) end\nend"
      ]
    ],
    "points": [
      "Subcomandos via arg[1]",
      "Persistência simples em texto",
      "Próximo passo: usar JSON"
    ],
    "alerts": []
  },
  {
    "slug": "projeto-config",
    "section": "casos-apendice",
    "title": "Projeto: arquivo de config em Lua",
    "difficulty": "intermediario",
    "subtitle": "Lua como linguagem de configuração.",
    "intro": "Lua é EXCELENTE como linguagem de config. Mais expressivo que JSON, mais seguro que código de prog.",
    "codes": [
      [
        "lua",
        "-- config.lua\nreturn {\n  servidor = {\n    host = 'localhost',\n    porta = 8080,\n    cors = {'localhost', 'meusite.com'},\n  },\n  banco = 'postgres://...',\n  ambiente = os.getenv('ENV') or 'dev',\n}\n\n-- app.lua\nlocal cfg = dofile('config.lua')\nprint(cfg.servidor.porta)\nfor _, origem in ipairs(cfg.servidor.cors) do\n  print('cors:', origem)\nend"
      ]
    ],
    "points": [
      "Mais expressivo que JSON/YAML",
      "Pode ter lógica condicional",
      "Use sandbox para configs externas"
    ],
    "alerts": []
  },
  {
    "slug": "projeto-scraper",
    "section": "casos-apendice",
    "title": "Projeto: scraper HTTP simples",
    "difficulty": "intermediario",
    "subtitle": "Baixando páginas com lua-http.",
    "intro": "Use luasocket (fácil) ou lua-http (moderno). Para Wireshark, lua-curl.",
    "codes": [
      [
        "lua",
        "local http = require 'socket.http'\n\nlocal corpo, status = http.request('https://example.com')\nprint(status, #corpo, 'bytes')\nprint(corpo:sub(1, 200))\n\n-- Para HTTPS, instale luasec\n-- luarocks install luasec\n\n-- Padrão para extrair título\nlocal titulo = corpo:match('<title>(.-)</title>')\nprint('Título:', titulo)"
      ]
    ],
    "points": [
      "luasocket cobre 90% dos casos",
      "Para HTTPS: luasec",
      "Use lua patterns para extração"
    ],
    "alerts": []
  },
  {
    "slug": "projeto-irc-bot",
    "section": "casos-apendice",
    "title": "Projeto: bot de IRC simples",
    "difficulty": "intermediario",
    "subtitle": "Networking puro com luasocket.",
    "intro": "Demonstra TCP cliente. IRC ainda existe e é ótimo para aprender protocolos texto.",
    "codes": [
      [
        "lua",
        "local socket = require 'socket'\nlocal s = socket.connect('irc.libera.chat', 6667)\ns:send('NICK luabot\\r\\n')\ns:send('USER luabot 0 * :Lua Bot\\r\\n')\ns:send('JOIN #lua\\r\\n')\n\nwhile true do\n  local linha = s:receive('*l')\n  print('<<', linha)\n  if linha:match('^PING') then\n    s:send('PONG' .. linha:sub(5) .. '\\r\\n')\n  end\nend"
      ]
    ],
    "points": [
      "Sockets TCP brutos",
      "Útil para aprender protocolos",
      "Para algo robusto: lua-irc"
    ],
    "alerts": []
  },
  {
    "slug": "projeto-templating",
    "section": "casos-apendice",
    "title": "Projeto: mini templating",
    "difficulty": "intermediario",
    "subtitle": "Renderização tipo {{var}}.",
    "intro": "Vamos criar um substituidor simples que renderiza templates com {{variavel}}.",
    "codes": [
      [
        "lua",
        "local function render(tpl, vars)\n  return (tpl:gsub('{{%s*(.-)%s*}}', function(nome)\n    return tostring(vars[nome] or '')\n  end))\nend\n\nlocal tpl = 'Olá, {{nome}}! Você tem {{idade}} anos.'\nprint(render(tpl, {nome='Ana', idade=30}))\n-- Para algo sério: etlua, lustache, lua-resty-template"
      ]
    ],
    "points": [
      "Patterns Lua resolvem isso em 1 linha",
      "Para condicionais/loops: use lustache",
      "etlua é como ERB"
    ],
    "alerts": []
  },
  {
    "slug": "debugging-pratico",
    "section": "casos-apendice",
    "title": "Debugging na prática",
    "difficulty": "intermediario",
    "subtitle": "print, hooks e ZeroBrane.",
    "intro": "print é seu primeiro amigo. debug.traceback dá contexto. ZeroBrane Studio tem debugger gráfico.",
    "codes": [
      [
        "lua",
        "-- print debug rico\nlocal function dump(o, indent)\n  indent = indent or ''\n  if type(o) ~= 'table' then return tostring(o) end\n  local parts = {}\n  for k, v in pairs(o) do\n    parts[#parts+1] = indent .. tostring(k) .. ' = ' .. dump(v, indent .. '  ')\n  end\n  return '{\\n' .. table.concat(parts, '\\n') .. '\\n' .. indent .. '}'\nend\n\nprint(dump({nome='Ana', tags={'a','b'}}))"
      ]
    ],
    "points": [
      "dump(t) mostra tabelas legíveis",
      "Penlight tem pl.pretty",
      "Para profilers, use mobdebug ou luap"
    ],
    "alerts": []
  },
  {
    "slug": "testes-busted",
    "section": "casos-apendice",
    "title": "Testes com busted",
    "difficulty": "intermediario",
    "subtitle": "Framework de testes BDD-style.",
    "intro": "busted é o framework de testes mais popular para Lua. Sintaxe describe/it parecida com Jasmine/RSpec.",
    "codes": [
      [
        "lua",
        "-- spec/calc_spec.lua\ndescribe('Calculadora', function()\n  local calc = require 'calc'\n\n  it('soma dois números', function()\n    assert.are.equal(5, calc.somar(2, 3))\n  end)\n\n  it('lança erro em divisão por zero', function()\n    assert.has_error(function() calc.dividir(1, 0) end)\n  end)\nend)\n\n-- Rodar:\n-- luarocks install busted\n-- busted spec/"
      ]
    ],
    "points": [
      "luarocks install busted",
      "Sintaxe describe/it",
      "Suporta mocks, spies, async"
    ],
    "alerts": []
  },
  {
    "slug": "lua-vs-outras",
    "section": "casos-apendice",
    "title": "Lua vs outras linguagens",
    "difficulty": "iniciante",
    "subtitle": "Quando escolher Lua.",
    "intro": "Lua brilha em scripting embarcado, jogos e situações que precisam de leveza extrema.",
    "codes": [
      [
        "text",
        "Lua vs Python:\n+ Muito mais leve, mais rápido (LuaJIT)\n- Stdlib menor, comunidade menor\n+ Embarcável em qualquer programa C\n\nLua vs JavaScript:\n+ Mais simples (~20 keywords vs ~50)\n+ Tabela única é mais elegante que objetos+arrays\n- Sem ecossistema npm-like comparável\n\nLua vs C:\n+ Muito mais produtiva\n- Mais lenta (mas LuaJIT chega perto)\n+ FFI une o melhor dos dois"
      ]
    ],
    "points": [
      "Lua é a melhor 'cola' para C",
      "LuaJIT compete com C em muitos casos",
      "Para web full-stack, considere outras"
    ],
    "alerts": []
  },
  {
    "slug": "zen-lua",
    "section": "casos-apendice",
    "title": "A filosofia de Lua",
    "difficulty": "iniciante",
    "subtitle": "Mecanismos, não políticas.",
    "intro": "Lua é construída sobre 'meta-mecanismos' que você combina. Em vez de classes, dá metatables. Em vez de threads, dá corrotinas. Em vez de async, dá yield.",
    "codes": [
      [
        "text",
        "Princípios:\n- Mecanismos, não políticas\n- Tabela é a única estrutura de dados\n- Pequena (4MB de fonte, ~200KB binário)\n- Portável: C ANSI puro\n- Embarcável: API C primeira classe\n- Simples: ~20 palavras-chave\n\n'Lua deveria ser como o sal: invisível, mas presente em tudo.'"
      ]
    ],
    "points": [
      "Combine mecanismos para resolver problemas",
      "Tabelas + metatables = qualquer estrutura",
      "Simplicidade é uma feature"
    ],
    "alerts": []
  },
  {
    "slug": "recursos",
    "section": "casos-apendice",
    "title": "Para continuar aprendendo",
    "difficulty": "iniciante",
    "subtitle": "Livros, sites e comunidades.",
    "intro": "Recursos para se aprofundar em Lua, LÖVE, Roblox, OpenResty.",
    "codes": [
      [
        "text",
        "Documentação oficial: https://www.lua.org/manual/5.4/\nLua-users wiki: http://lua-users.org/wiki/\nLÖVE 2D: https://love2d.org/wiki/\nLuaJIT: https://luajit.org/\nOpenResty: https://openresty.org/\nRoblox DevHub: https://create.roblox.com/docs\n\nLivros (alguns gratuitos):\n- Programming in Lua, 4ª ed. (Roberto Ierusalimschy) — A bíblia\n- Lua Quick Start Guide\n- Game Development with LÖVE 2D\n\nComunidades:\n- r/lua, r/love2d, r/roblox\n- lua-l mailing list\n- Discords de LÖVE, Roblox Devs"
      ]
    ],
    "points": [
      "O 'Programming in Lua' é a referência",
      "lua-users wiki tem ouro",
      "Comunidade pequena mas amigável"
    ],
    "alerts": []
  },
  {
    "slug": "proximos-passos",
    "section": "casos-apendice",
    "title": "Próximos passos",
    "difficulty": "iniciante",
    "subtitle": "Para onde ir depois deste livro.",
    "intro": "Você terminou! Sugestões para continuar.",
    "codes": [
      [
        "text",
        "Caminhos:\n1. Faça um joguinho em LÖVE 2D (Pong, Snake, Breakout)\n2. Crie uma experiência no Roblox\n3. Construa um plugin para NeoVim ou Wireshark\n4. Escreva um servidor com OpenResty\n5. Contribua para um rock no LuaRocks\n6. Modifique um jogo que use Lua (Garry's Mod, WoW, Factorio)\n7. Escreva um interpretador toy em Lua (DSL)\n\nO importante: pratique. Lua é pequena — o desafio é dominar bem o pouco que tem."
      ]
    ],
    "points": [
      "Faça um joguinho — é a forma mais divertida",
      "Lua é pequena: domine bem",
      "Pratique todos os dias"
    ],
    "alerts": [
      [
        "success",
        "Parabéns por chegar até aqui! A jornada Lua é só o começo. Boa lua! 🌙"
      ]
    ]
  }
];

export const chapterMap: Record<string, Chapter> = Object.fromEntries(
  chapters.map(c => [c.slug, c])
);

export function chapterIndex(slug: string): number {
  return chapters.findIndex(c => c.slug === slug);
}
