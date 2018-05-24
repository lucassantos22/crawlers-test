const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:8000/');

// driver.manage().deleteAllCookies();
driver.manage().window().maximize();

driver.findElements(By.xpath('//table//tr')).then(trs=>{
    for(const tr of trs){
        tr.findElements(By.xpath('.//td')).then(tds=>{
            for(const td of tds){
                td.getText().then(Resultado=>{
                    console.log(Resultado);
                });
            }
        });
    }
});


