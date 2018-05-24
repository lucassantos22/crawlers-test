const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com.br/');

driver.manage().window().maximize();

driver.findElement(By.name('q')).sendKeys('Digitro Tecnologia');
driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
driver.wait(until.elementLocated({xpath:'//h3/a[1]'}),5000);
driver.findElement(By.xpath('//h3/a[1]')).then(el=>{
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

driver.quit();