const webdriver = require('selenium-webdriver'),    
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();

driver.get('https://www.google.com.br/');
driver.findElement(By.name('q')).then(el=>{
    el.sendKeys('Wallpapers');
    el.sendKeys(webdriver.Key.ENTER);
});
driver.findElement(By.xpath("//a[text()='Imagens']")).click();

//Coletar imagens.

driver.findElement(By.xpath('//img[@class="rg_ic rg_i"]')).then(images=>{
    for(const image of images){
        image.getAttribute("href").then(hrefs=>{
            console.log(hrefs);
        })
    }
});