const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:8000/');

driver.manage().deleteAllCookies();
driver.manage().window().maximize();

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

// driver.findElements(By.xpath('//table//tr')).then(rows => {
//     for(const row of rows){
//         row.findElements(By.xpath('.//td')).then(columns => {
//             for(const column of columns){
//                 column.getText().then(text =>{
//                     console.log(text);
//                 });
//             }
//         });
//     }
// });

driver.findElements(By.xpath('//table//tr')).then(rows =>{
    for(const row of rows){
        row.findElements(By.xpath('.//td')).then(columns =>{
            for(const column of columns){
                columns.getText().then(Txt=>{
                    console.log(Txt)
                })
            }
        })
    }
})
