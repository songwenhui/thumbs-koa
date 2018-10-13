const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/index/index');
    await driver.findElement(By.id('palm')).click();
    await driver.findElement(By.id('palm')).click();
    await driver.findElement(By.id('palm')).click();
    await driver.findElement(By.id('palm')).click();
    await driver.findElement(By.id('palm')).click();
    driver.sleep(10 * 1000).then(function(){ //等待20秒
      driver.quit(); //关闭浏览器
    })
  } finally {
    await driver.quit();
  }
})();