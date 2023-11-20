let products = {
    data: [
      {
        productName: "Malcom X",
        autor:"Luiz Carlos Santos",
        category: "Historia",
        image: "img/capas/MALCONX.jpg",
        pages:544,
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"Numa narrativa minuciosa, o autor acompanha os passos desse gigante afro-americano ao longo de dezenas de cidades dos Estados Unidos, além das viagens à África, à Europa e ao Oriente Médio como porta-voz da revolta dos descendentes de escravos e dos direitos dos oprimidos."
        
  
      },
      
      {
        productName: "Capão pecado",
        autor:"Ferrez",
        category: "Romance", 
        image: "img/capas/capaopecado-capa.jpg",
        pages:455,
        editora: "Romances Books",
        edicao: "33",
        idioma:"Portugues",
        isbn:"0445376714",
        sinopse:"O escritor Ferréz (Reginaldo Ferreira da Silva), autor de Capão Pecado, é um dos grandes nomes da literatura marginal do país. Ele nasceu em Valo Velho, bairro pertencente ao Capão Redondo, na zona sul de São Paulo. Aos três anos, foi morar em Capão, um dos bairros mais violentos de São Paulo e lá vive até hoje, com sua família. Não pensa em sair do bairro uma vez que lá é o espaço onde tem voz, onde é alguém. É também o bairro fonte das histórias de suas obras literárias."
  
      },
      {
        productName:"Padrões JavaScript",
        autor:"Jão Almeida",
        category: "Tecnologia",        
        image: "img/capas/padroesjs.jpg",
        editora: "Jovem Publica",
        edicao: "64",
        idioma:"Portugues",
        isbn:"0585376714",
        sinopse: "Qual é a melhor maneira de desenvolver uma aplicação em JavaScript? Este livro, ao apresentar inúmeros padrões e as melhores práticas no JavaScript, vai ajudá-lo a responder a essa pergunta. Se você for um desenvolvedor experiente e está tentando resolver problemas relacionados a objetos, funções, herança e outras categorias específicas à linguagem, as abstrações e os modelos de código deste guia são ideais — independentemente de você estar escrevendo uma aplicação JavaScript no lado do cliente, no lado do servidor ou uma aplicação desktop."
  
      },
      {
        productName:"Introdução á linguagem SQL",
        autor:"Thomas Nield",
        category: "Tecnologia",
        image: "img/capas/sql.jpg",
        editora: "Renascendo Livros",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"Você dominará rapidamente os aspectos básicos do SQL e aprenderá como criar seus próprios bancos de dados. O autor Thomas Nield fornece exercícios no decorrer de todo o livro para ajudá-lo a praticar em casa suas recém descobertas aptidões no uso do SQL, sem precisar empregar um ambiente de servidor de banco de dados"
  
      },
      {
        productName:"Banco de dados",
        autor:"Willian Pereira Alves",
        category: "Tecnologia",
        image: "img/capas/bancodados.jpg",
        editora: "Juna Fontes",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0344376714",
        sinopse:"Este livro aborda os aspectos mais práticos de bancos de dados, como, por exemplo, criar tabelas, inserir dados e consultar dados, trazendo desde as consultas mais simples até as mais complexas, envolvendo junções e funções analíticas"
  
      },
      {
        productName:"Aprendendo Node",
        autor:"Shelley Powers",
        category: "Tecnologia",
        image: "img/capas/node.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName:"Introdução á programação Python",
        autor:"Nilo Ney",
        category: "Tecnologia",
        image: "img/capas/phyton.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName:"Autobiografia Martin LKJ",
        autor:"Martin Luther King Jr",
        category: "Historia",
        image: "img/capas/martinLT-biografia.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
      },
      {
        productName:"A coisa",
        autor:"Stephen King",
        category:"Terror",
        image: "img/capas/a-coisa.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
        
      },
      {
        productName: "Dono do Morro",
        autor:"Caco Barcellos",
        category: "Romance",
        price: "30",
        image: "img/capas/donodomorro.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName: "Romeu e Julieta",
        autor:"William Shakespeare",
        category: "Romance",
        price: "30",
        image: "img/capas/romeu-julieta.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName: "A culpa é das estrelas",
        autor:"Harry Jon",
        category: "Romance",
        image: "img/capas/culpadasestrelas.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName: "O iluminado",
        autor:"Stephen King",
        category: "Terror",
        image: "img/capas/o-iluminado.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName: "The Amityville Horror",
        autor:"Stephen King",
        category: "Terror",
        image: "img/capas/amityville.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName: "Cemitério maldito",
        autor:"Stephen King",
        category: "Terror",
        image: "img/capas/cemiterio.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      {
        productName: "Luiz Gama",
        autor:"Luiz Carlos Santos",
        category: "Historia",
        image: "img/capas/luizgama.jpg",
        editora: "Ballantine Books",
        edicao: "44",
        idioma:"Portugues",
        isbn:"0345376714",
        sinopse:"O conteúdo deste livro é bastante prático, “mão na massa”, e fará com que o programador de JavaScript, acostumado a lidar apenas com processamento no navegador, domine com maestria os fundamentos do Node no servidor. Serão abordados inúmeros módulos nativos e também de terceiros."
  
      },
      
    ],
  };
  
// Dentro do loop de criação de cards
for (let i of products.data) {
  // Criar Card
  let card = document.createElement("div");
  card.addEventListener("click", () => showBookSpecs(i)); // Adiciona o evento de clique

    // O card deve ter a categoria e ficar oculto inicialmente
    card.classList.add("card-livros", i.category, "hide");

   // Criar um link âncora
   let anchor = document.createElement("a");
   anchor.href = "javascript:void(0)"; // Use javascript:void(0) para que o link não altere a URL
   

    // Div da imagem
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("capa-container");
    // Tag de imagem
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    anchor.appendChild(imgContainer);

    // Container
    let container = document.createElement("div");
    container.classList.add("container");
    // Nome do produto
    let name = document.createElement("h5");
    name.classList.add("productName"); // Adiciona a classe productName
    name.innerText = i.productName;
    container.appendChild(name);
    // Páginas do produto
    let pages = document.createElement("p");
    pages.innerText = i.pages;
    // Editora do produto
    let editora = document.createElement("p");
    editora.innerText = i.editora;
    // Edição do produto
    let edicao = document.createElement("p");
    edicao.innerText = i.edicao;
    // Idioma do produto
    let idioma = document.createElement("p");
    idioma.innerText = i.idioma;
    // ISBN do produto
    let isbn = document.createElement("p");
    isbn.innerText = i.isbn;

    // Nome do autor
    let autor = document.createElement("h3");
    autor.classList.add("autor");
    autor.innerText = i.autor;
    container.appendChild(autor);

    // Anexa o container à âncora em vez do card
    anchor.appendChild(container);

    // Anexa a âncora ao card
    card.appendChild(anchor);

    document.getElementById("products").appendChild(card);
}

// Função para filtrar produtos com base na categoria
function filterProduct(value) {
    // Código dos botões
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // Verifica se o valor é igual ao texto do botão (ignorando maiúsculas e minúsculas)
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active-acervo");
        } else {
            button.classList.remove("active-acervo");
        }
    });

    // Seleciona todos os cards
    let elements = document.querySelectorAll(".card-livros");
    // Loop por todos os cards
    elements.forEach((element) => {
        // Exibe todos os cards ao clicar no botão "todos"
        if (value === "todos") {
            element.classList.remove("hide");
        } else {
            // Verifica se o elemento contém a classe da categoria
            if (element.classList.contains(value)) {
                // Exibe o elemento com base na categoria
                element.classList.remove("hide");
            } else {
                // Oculta outros elementos
                element.classList.add("hide");
            }
        }
    });
}


// Função para exibir as especificações do livro selecionado
function showBookSpecs(book) {
    // Cria um objeto com as informações do livro selecionado
    const bookSpecs = {
        productName: book.productName,
        autor: book.autor,
        category: book.category,
        image: book.image,
        pages: book.pages,
        editora: book.editora,
        edicao: book.edicao,
        idioma: book.idioma,
        isbn: book.isbn,
    };

    // Converte o objeto em uma string JSON
    const bookSpecsJSON = JSON.stringify(bookSpecs);

    // Armazena a string JSON no localStorage
    localStorage.setItem("bookSpecs", bookSpecsJSON);

    // Redireciona o usuário para a página de especificações do livro
    window.location.href = "book_specs.html";
}

function removeSpecialCharacters(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Adiciona um ouvinte de evento ao botão de pesquisa
document.getElementById("search").addEventListener("click", () => {
  // Obtém o valor do campo de entrada de pesquisa e converte para letras minúsculas
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  
  // Remove acentos e caracteres especiais do valor de pesquisa
  let cleanedSearchInput = removeSpecialCharacters(searchInput); // Remove acentos e caracteres especiais
  
  // Seleciona todos os elementos com a classe "productName"
  let elements = document.querySelectorAll(".productName");
  
  // Seleciona todos os cards de livros
  let cards = document.querySelectorAll(".card-livros");

  // Percorre todos os elementos (títulos de livros)
  elements.forEach((element, index) => {
      // Remove acentos e caracteres especiais do texto do elemento
      let elementText = removeSpecialCharacters(element.innerText.toLowerCase()); // Remove acentos e caracteres especiais
      
      // Verifica se o texto do elemento inclui o valor de pesquisa tratado
      if (elementText.includes(cleanedSearchInput)) {
          // Remove a classe "hide" para mostrar o card de livro
          cards[index].classList.remove("hide");
      } else {
          // Adiciona a classe "hide" para esconder o card de livro
          cards[index].classList.add("hide");
      }
  });
});

// Mostrar inicialmente todos os produtos
window.onload = () => {
    filterProduct("todos");
};

