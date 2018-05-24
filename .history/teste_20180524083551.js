const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com.br/');

driver.manage().deleteAllCookies();
driver.manage().window().maximize();

driver.findElement(By.name('q')).sendKeys('Digitro Tecnologia');
driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
driver.wait(until.elementLocated({xpath:'//h3/a[1]'}),5000);
driver.findElement(By.xpath('//h3/a[1]')).then(function(el){
    console.log("Site da Digitro encontrado. \n", el);
});
driver.findElement(By.xpath('//h3/a[1]')).click();
driver.findElement(By.name('search_show')).click();
driver.findElement(By.name('search_show')).sendKeys(webdriver.Key.ARROW_DOWN);
driver.findElement(By.className('button_busca')).click();
driver.wait(until.elementLocated(By.id("glossarysearchword"),5000));

driver.sleep(5000);

driver.findElement(By.id("glossarysearchword")).sendKeys('Glossário');


// driver.quit();