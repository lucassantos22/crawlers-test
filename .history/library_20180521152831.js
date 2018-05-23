const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://localhost:8000/');

    driver.findElement(By.Name('nome')).sendKeys('Lucas');
    driver.findElement(By.Name('sobrenome')).sendKeys('Santos');
    driver.findElement(By.Name('idade')).sendKeys('18');
    driver.findElement(By.Name('telefone')).sendKeys('984791311');
    driver.findElement(By.Name('endereco')).sendKeys('Rua Desembargador');
    driver.findElement(By.Name('profissao')).sendKeys('Desenvolvedor');

    ///////////////////////////////////////////////////////////////
    driver.findElement({id:'q'}).sendKeys(webdriver.Key.ENTER);
    driver.findElement({xpath:'(//div[@id="search"]//div[@class="rc"]//h3/a)[1]'}).click();
    