// Carregar produtos via AJAX
document.getElementById("load-products").addEventListener("click", () => {
    fetch("produtos.json")
      .then((response) => response.json())
      .then((produtos) => {
        const produtosDiv = document.getElementById("produtos");
        produtosDiv.innerHTML = "";
  
        produtos.forEach((produto) => {
          const produtoDiv = document.createElement("div");
          produtoDiv.className = "produto";
          produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
          `;
          produtoDiv.addEventListener("click", () => openLightbox(produto.imagem));
          produtosDiv.appendChild(produtoDiv);
        });
      })
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  });
  
  // Formulário dinâmico
  document.getElementById("form-contato").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("mensagem-sucesso").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("mensagem-sucesso").classList.add("hidden");
    }, 3000);
    e.target.reset();
  });
  
  // Lightbox
  function openLightbox(imagem) {
    const lightbox = document.getElementById("lightbox");
    document.getElementById("lightbox-img").src = imagem;
    lightbox.classList.remove("hidden");
  
    document.getElementById("close-lightbox").addEventListener("click", () => {
      lightbox.classList.add("hidden");
    });
  }
  