async function addAndRenderBook() {
  try {
    const book = await addBook({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

async function updateAndRenderBook() {
  try {
    const book = await updateBookById({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}