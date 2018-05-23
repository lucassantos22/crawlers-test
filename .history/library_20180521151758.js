var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://localhost:8000/');

    driver.findElement(webdriver.By.Name('nome')).sendKeys('Lucas');
    driver.findElement(webdriver.By.Name('sobrenomeId')).sendKeys('Santos');
    driver.findElement(webdriver.By.Name('idadeId')).sendKeys('18');
    driver.findElement(webdriver.By.Name('telefoneId')).sendKeys('984791311');
    driver.findElement(webdriver.By.Name('enderecoId')).sendKeys('Rua Desembargador');
    driver.findElement(webdriver.By.Name('profissaoId')).sendKeys('Desenvolvedor');

    ///////////////////////////////////////////////////////////////
    driver.findElement({name:'q'}).sendKeys(webdriver.Key.ENTER);
    driver.findElement({xpath:'(//div[@id="search"]//div[@class="rc"]//h3/a)[1]'}).click();
    