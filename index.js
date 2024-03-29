const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    // TODO: Pull a random quote from the quotes.txt file
    // console log the quote and author
    // You may style the text with chalk as you wish
    const quotes = await fs.readFile('./quotes.txt', 'utf-8')
    const randomQuote = quotes.split('\n')
    const displayQuote = randomQuote[Math.floor(Math.random()*randomQuote.length)]
    console.log(chalk.bgMagenta(displayQuote))
    })


program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    if (author === undefined) {
      author = "Anonymous"
    } else {
      author
    }
      const newQuote = '\n' + quote + "|" + author
      await fs.appendFile('./quotes.txt', newQuote)
      console.log(chalk.bgCyan(quote + "|" + author + " — " + 'Quote added successfully.'))
    })
    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving


program.parse();

