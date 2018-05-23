const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:8000/');

driver.manage().deleteAllCookies();
driver.manage().window().maximize();

let nome = driver.findElement(By.name('nome')).sendKeys('Lucas');
let sobrenome = driver.findElement(By.name('sobrenome')).sendKeys('Santos');
let nome1 = driver.findElement(By.name('idade')).sendKeys('18');
let nome1 = driver.findElement(By.name('telefone')).sendKeys('984791311');
let nome1 = driver.findElement(By.name('endereco')).sendKeys('Rua Desembargador');
let nome1 = driver.findElement(By.name('profissao')).sendKeys('Desenvolvedor');
let nome1 = driver.findElement(By.id('btn')).click();


// driver.findElement(By.name('nome')).sendKeys('Lucas');
// driver.findElement(By.name('sobrenome')).sendKeys('Santos');
// driver.findElement(By.name('idade')).sendKeys('18');
// driver.findElement(By.name('telefone')).sendKeys('984791311');
// driver.findElement(By.name('endereco')).sendKeys('Rua Desembargador');
// driver.findElement(By.name('profissao')).sendKeys('Desenvolvedor');
// driver.findElement(By.id('btn')).click();

// driver.findElement(By.name('nome')).sendKeys('Lucas');
// driver.findElement(By.name('sobrenome')).sendKeys('Santos');
// driver.findElement(By.name('idade')).sendKeys('18');
// driver.findElement(By.name('telefone')).sendKeys('984791311');
// driver.findElement(By.name('endereco')).sendKeys('Rua Desembargador');
// driver.findElement(By.name('profissao')).sendKeys('Desenvolvedor');
// driver.findElement(By.id('btn')).click();

// driver.findElement(By.name('nome')).sendKeys('Lucas');
// driver.findElement(By.name('sobrenome')).sendKeys('Santos');
// driver.findElement(By.name('idade')).sendKeys('18');
// driver.findElement(By.name('telefone')).sendKeys('984791311');
// driver.findElement(By.name('endereco')).sendKeys('Rua Desembargador');
// driver.findElement(By.name('profissao')).sendKeys('Desenvolvedor');
// driver.findElement(By.id('btn')).click();

