const buttons = document.querySelectorAll('.btn');

const handleCLick = (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
};

buttons.forEach((btn) => {
  btn.addEventListener('click', handleCLick);
});
