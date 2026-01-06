// Dados extraídos das imagens enviadas
const pontosDeColeta = [
    // Água Verde
    { bairro: "Água Verde", nome: "Bali Home", endereco: "Av. Iguaçu, 2.074" },
    { bairro: "Água Verde", nome: "Chá & Arte", endereco: "Av. República Argentina, 334 - loja 3" },
    { bairro: "Água Verde", nome: "Dhuan Comissária", endereco: "Av. Pres. Getúlio Vargas, 3796" },
    { bairro: "Água Verde", nome: "Grupo Escoteiro Carlos Pereira", endereco: "Praça Elías Abdo Bitar, 2-144" },
    { bairro: "Água Verde", nome: "Le Farma", endereco: "Av. Iguaçu, 1.521, loja 2" },
    { bairro: "Água Verde", nome: "Seven Grill", endereco: "Av. Sete de Setembro, 4.125" },
    
    // Bairro Alto
    { bairro: "Bairro Alto", nome: "Zelinda Óticas (Loja 1)", endereco: "Rua José Verissimo, 1.710" },
    { bairro: "Bairro Alto", nome: "Zelinda Óticas (Loja 2)", endereco: "Rua José de Oliveira Franco, 1.262" },

    // Boa Vista
    { bairro: "Boa Vista", nome: "Saintvet - Centro Médico", endereco: "Rua Ludovico Geronazzo, 738" },

    // Cabral
    { bairro: "Cabral", nome: "Cartório do Bacacheri", endereco: "Av. Paraná, 1.330" },
    { bairro: "Cabral", nome: "Chá & Arte", endereco: "Rua Dr. Manoel Pedro, 365" },

    // Campina do Siqueira
    { bairro: "Campina do Siqueira", nome: "Le Bio Sucos", endereco: "Rua Hugo Kinzelmann, 264" },

    // Campo Comprido
    { bairro: "Campo Comprido", nome: "Escola Est. Santo Antônio", endereco: "Rua Amadeu Piotto, 37" },

    // Centro
    { bairro: "Centro", nome: "Chá & Arte", endereco: "Rua Comendador Macedo, 137" },
    { bairro: "Centro", nome: "Imobiliária Galvão", endereco: "Rua Monsenhor Celso, 231" },
    { bairro: "Centro", nome: "Shopping Omar", endereco: "Rua Comendador Araújo, 268" },

    // CIC
    { bairro: "CIC", nome: "Adega Sub Zero", endereco: "Rua Padre José Lopacinsk, 888" },
    { bairro: "CIC", nome: "Gráfica Bom Jesus", endereco: "Rua Anselmo de Lima Filho, 242" },
    { bairro: "CIC", nome: "Grupo Escoteiro Milton Horibe", endereco: "Rua Maria Homan Wisniewski, 729" },
    { bairro: "CIC", nome: "Posto Pelanda Analipe", endereco: "Av. Juscelino Kubtschek de Oliveira, 5.955" },

    // Cristo Rei
    { bairro: "Cristo Rei", nome: "Posto Pelanda Estrela Guia", endereco: "Av. Sete de Setembro, 1.581" },

    // Fanny
    { bairro: "Fanny", nome: "Posto Pelanda Maestro", endereco: "Av. Presidente Wenceslau Braz, 765" },

    // Guabirotuba
    { bairro: "Guabirotuba", nome: "Instituto Atitude na Cabeça", endereco: "Rua Francisco Rocha, 1.544" },

    // Hauer
    { bairro: "Hauer", nome: "Chá & Arte", endereco: "Rua Frei Henrique de Coimbra, 749" },
    { bairro: "Hauer", nome: "Bella Saúde", endereco: "Rua Doutor Júlio César Ribeiro de Souza, 926" },

    // Jardim das Américas
    { bairro: "Jardim das Américas", nome: "Projete Estofados", endereco: "Av. Comendador Franco, 2.509" },

    // Jardim Social
    { bairro: "Jardim Social", nome: "CCAA Jardim Social", endereco: "Rua Fagundes Varela, 731" },

    // Juvevê
    { bairro: "Juvevê", nome: "Fios e Cia Armarinhos", endereco: "Rua Rocha Pombo, 480" },
    { bairro: "Juvevê", nome: "Le Farma", endereco: "Rua Manoel Eufrásio, 403, loja 6" },
    { bairro: "Juvevê", nome: "Mallorca Uniformes", endereco: "Av. João Gualberto, 1449" },

    // Mercês
    { bairro: "Mercês", nome: "Mallorca Uniformes", endereco: "Av. Manoel Ribas, 805" },
    { bairro: "Mercês", nome: "Navalha, Beer & Co", endereco: "Rua Martin Afonso, 1.059" },
    { bairro: "Mercês", nome: "Nossa Saúde", endereco: "Rua Júlio Perneta, 71" },
    { bairro: "Mercês", nome: "Panificadora Doces de Família", endereco: "Rua Alcides Munhoz, 993" },

    // Novo Mundo
    { bairro: "Novo Mundo", nome: "Condomínio Res. Roma", endereco: "Rua Dr. José Palú, 285" },
    { bairro: "Novo Mundo", nome: "Escola Húnica", endereco: "Rua Visconde do Cerro Frio, 175" },
    { bairro: "Novo Mundo", nome: "Ivo's Beauty", endereco: "Rua Dr. José Palú, 744" },

    // Orleans
    { bairro: "Orleans", nome: "Seminário Vicentino", endereco: "Rua da Pedreira, 250" },

    // Pilarzinho
    { bairro: "Pilarzinho", nome: "Naxos Training", endereco: "Av. Fredolin Wolf, 5280" },
    { bairro: "Pilarzinho", nome: "Supermercado Basso", endereco: "Rua São Salvador, 402" },

    // Pinheirinho
    { bairro: "Pinheirinho", nome: "Empeçauto Auto Peças", endereco: "Rua Nita Hubel, 62" },
    { bairro: "Pinheirinho", nome: "Panificadora Miguel e Bassi", endereco: "Rua Cid Marcondes de Albuquerque, 1.404" },
    { bairro: "Pinheirinho", nome: "Restaurante dos Gordinhos", endereco: "Rua Nicola Pellanda, 950" },

    // Portão
    { bairro: "Portão", nome: "Centro Automotivo MAN", endereco: "Rua Itatiaia, 1538" },
    { bairro: "Portão", nome: "Kirei Cosméticos", endereco: "Av. República Argentina, 3079" },
    { bairro: "Portão", nome: "Mallorca Uniformes", endereco: "Av. República Argentina, 2182" },
    { bairro: "Portão", nome: "Panificadora Gostinho de Pão", endereco: "Rua Morretes, 163" },
    { bairro: "Portão", nome: "Serviço Distrital do Portão", endereco: "Av. Pres. Arthur da Silva Bernardes, 2350" },

    // Rebouças
    { bairro: "Rebouças", nome: "Chá & Arte", endereco: "Av. Sete de Setembro, 5.033" },
    { bairro: "Rebouças", nome: "Le Farma", endereco: "Rua Desemb. Westphalen, 3.312" },

    // Santa Cândida
    { bairro: "Santa Cândida", nome: "Posto Pelanda", endereco: "Rua Theodoro Makiolka, 1.095" },

    // Santa Felicidade
    { bairro: "Santa Felicidade", nome: "Empório Camponesa", endereco: "Av. Manoel Ribas, 6.975" },

    // São Francisco
    { bairro: "São Francisco", nome: "Chá & Arte", endereco: "Rua Vicente Machado, 1.186" },
];

const grid = document.getElementById('pointsGrid');
const searchInput = document.getElementById('searchInput');

// Função para renderizar os cards
function renderCards(pontos) {
    grid.innerHTML = ''; // Limpa a grid
    
    if(pontos.length === 0) {
        grid.innerHTML = '<p>Nenhum ponto encontrado com esse termo.</p>';
        return;
    }

    pontos.forEach(ponto => {
        const card = document.createElement('div');
        card.className = 'point-card';
        card.innerHTML = `
            <span class="bairro-tag">${ponto.bairro}</span>
            <div class="point-name">${ponto.nome}</div>
            <div class="point-address">📍 ${ponto.endereco}</div>
        `;
        grid.appendChild(card);
    });
}

// Renderiza todos inicialmente
renderCards(pontosDeColeta);

// Evento de Busca
searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const filtrados = pontosDeColeta.filter(ponto => 
        ponto.bairro.toLowerCase().includes(termo) || 
        ponto.nome.toLowerCase().includes(termo)
    );
    renderCards(filtrados);
});