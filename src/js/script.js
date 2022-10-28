{
  'use strict';

  const select = {
    templateOf:{
      bookTemplate: '#template-book',

    },
    containerOf:{
      bookList: '.books-list',
    },
  };

  const templates = {
    templateBook: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML)
  };

  const bookList = document.querySelector(select.containerOf.bookList);

  const booksData = dataSource.books;


  function render(){
    for(const book of booksData){

      /* generate HTML based on template */
      const generatedHTML = templates.templateBook({
        id: book.id,
        name: book.name,
        price: book.price,
        rating: book.rating,
        image: book.image,
      });

      /* create element using utils.createElementFromHTML */
      const elem = utils.createDOMFromHTML(generatedHTML);

      /* add book to menu */

      bookList.appendChild(elem);
  

      console.log(book);

    }
  }

  render();

  const favoriteBooks = [];

  function initActions(){
    const images = document.querySelectorAll('.book_image');

    for(const imgLink of images){
      imgLink.addEventListener('dbclick', function(event){
        event.preventDefault();
        imgLink.classList.toggle('favorite');
        const dataId = imgLink.getAttribute('data-id');
        favoriteBooks.push(dataId);

      });
    }
  }

  initActions();












}