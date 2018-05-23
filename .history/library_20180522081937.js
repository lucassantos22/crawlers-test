const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://localhost:8000/');
    
    driver.findElement(By.name('nome')).sendKeys('Lucas');
    driver.findElement(By.name('sobrenome')).sendKeys('Santos');
    driver.findElement(By.name('idade')).sendKeys('18');
    driver.findElement(By.name('telefone')).sendKeys('984791311');
    driver.findElement(By.name('endereco')).sendKeys('Rua Desembargador');
    driver.findElement(By.name('profissao')).sendKeys('Desenvolvedor');
    driver.findElement(By.id('btn')).click();
    
    driver.findElement(By.name('nome')).sendKeys('Claudinei');
    driver.findElement(By.name('sobrenome')).sendKeys('Joaquim');
    driver.findElement(By.name('idade')).sendKeys('18');
    driver.findElement(By.name('telefone')).sendKeys('984791311');
    driver.findElement(By.name('endereco')).sendKeys('Rua Desembargador');
    driver.findElement(By.name('profissao')).sendKeys('Desenvolvedor');
    driver.findElement(By.id('btn')).click();
    
    