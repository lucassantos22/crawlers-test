const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();

driver.get('https://www.google.com.br/');

driver.findElement(By.name('q')).then(el=>{
    el.sendKeys('Digitro Tecnologia');
    el.sendKeys(webdriver.Key.ENTER);
});

driver.findElements(By.xpath('//h3/a')).then(titles=>{
    for(const title of titles){ 
        title.getText().then(Result=>{
            console.log(Result);
        })
    }
});

driver.getTitle().then(title=>{
    console.log("Título da página: ");
    console.log(title);
})

driver.navigate().refresh();
// driver.navigate().back();
// driver.navigate().forward();
driver.navigate().to('http://www.digitro.com/pt/');

// driver.quite();
