---
title: "Chart"
template: "page"
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charts</title>
  <link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
    <main id="main">
    <section>
      <article>
        <h4>Style</h4>
        <div>
          <label for="type">Type of Line</label>
          <div>
            <input type="radio" name="radio" value="curve">curve
            <input type="radio" name="radio" value="step">step
            <input type="radio" name="radio" value="default">default
          </div>
        </div>
        <div>
          <label for="data-list">Chart Data</label>
          <div><input type="text" id="data-list" name="data-list" value="1,2,3" />
          </div>
        </div>
        <div>
          <label for="width">width</label>
          <div><input type="text" id="width" name="width" value="1700" /></div>
        </div>
      </article>
    </section>
    <section id="svg-area">
      <h4>Chart</h4>
    </section>

  </main>
  <script src="../src/chart.js"></script>
</body>
</html>