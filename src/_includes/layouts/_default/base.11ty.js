module.exports = function (data) {
  return /*html*/ `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
<script src="https://kit.fontawesome.com/1fca07cddd.js" crossorigin="anonymous"></script>
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
  </body>
</html>
  `
}
