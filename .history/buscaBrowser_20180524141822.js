const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com.br/');

driver.manage().window().maximize();

driver.findElement(By.name('q')).then(el=>{
    el.sendKeys('Digitro Tecnologia');
    el.sendKeys(webdriver.Key.ENTER);
});
driver.wait(until.elementLocated({xpath:"//h3[@class='r']/a[@href='http://www.digitro.com/']"}),5000);
driver.findElement(By.xpath("//h3[@class='r']/a[@href='http://www.digitro.com/']")).then(el=>{ 
    console.log("Site da Digitro encontrado. \n", el);
});
driver.findElement(By.xpath("//h3[@class='r']/a[@href='http://www.digitro.com/']")).click();
driver.findElement(By.name('search_show')).click();
driver.findElement(By.name('search_show')).sendKeys(webdriver.Key.ARROW_DOWN);
driver.findElement(By.className('button_busca')).click();
driver.wait(until.elementLocated(By.xpath('//div[@id="glossarysearchheading"]/parent::form/input[@id="glossarysearchword"]'),5000));
driver.findElement(By.xpath('//div[@id="glossarysearchheading"]/parent::form/input[@id="glossarysearchword"]')).then(function(el){
    el.sendKeys('Glossário');
    el.sendKeys(webdriver.Key.ENTER);
});
driver.findElement(By.xpath('//a[@title="Contato"]')).click();
driver.wait(until.elementLocated({xpath:"//label[@class='nome']"}),5000);

//Enviado dados para o formulário.

driver.findElement(By.xpath("//input[@class='nome']")).sendKeys('Teste');
driver.findElement(By.xpath("//input[@class='E-mail']")).sendKeys('Teste');
driver.findElement(By.xpath("//input[@class='veiculo']")).sendKeys('Teste');
//input[@class='jftextbox' and @id='h9885_6691']
driver.findElement(By.xpath("//input[@class='jftextbox'][2]")).sendKeys('Teste');
driver.findElement(By.xpath("//input[@class='telefone']")).sendKeys('Teste');
driver.findElement(By.xpath("//input[@class='telefone']")).sendKeys('Teste');
driver.findElement(By.xpath("//input[@class='mensagem']")).sendKeys('Teste');

// driver.quit();