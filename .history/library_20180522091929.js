const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:8000/');

driver.manage().deleteAllCookies();
driver.manage().window().maximize();

let Nome = driver.findElement(By.xpath('nome')).sendKeys('Lucas');
let Sobrenome = driver.findElement(By.xpath('sobrenome')).sendKeys('Santos');
let Idade = driver.findElement(By.xpath('idade')).sendKeys('18');
let Telefone = driver.findElement(By.xpath('telefone')).sendKeys('984791311');
let Endereço = driver.findElement(By.xpath('endereco')).sendKeys('Rua Desembargador');
let Profissão = driver.findElement(By.xpath('input[@id=myTable')).sendKeys('Desenvolvedor');


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

