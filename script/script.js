const fixedBlock=document.querySelector('.header_top_block');
const logoBlock=document.querySelector('.logo_block');
const tour=document.querySelector('.tour');
const compile=document.querySelector('.compile');
const feedback=document.querySelector('.feedback');
const stories=document.querySelector('.stories');
const tel=document.querySelector('.tel');

window.onscroll = function ()
{let scrollCount=document.documentElement.scrollTop;
  if (scrollCount>450)
  {
    logoBlock.setAttribute('class','logo_black');
    fixedBlock.setAttribute('class','change_background');
    tour.setAttribute('class','tour_black');
    compile.setAttribute('class','compile_black');
    feedback.setAttribute('class','feedback_black');
    stories.setAttribute('class','stories_black');
    tel.setAttribute('class','tel_black');
  }
  else
  {
    logoBlock.setAttribute('class','logo_block');
    fixedBlock.setAttribute('class','header_top_block');
    tour.setAttribute('class', 'tour');
    compile.setAttribute('class','compile');
    feedback.setAttribute('class','feedback');
    stories.setAttribute('class','stories');
    tel.setAttribute('class','tel');
  }
};