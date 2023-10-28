// main page visual swiper
if (document.querySelector('#mainPageVisualSwiper')) {
  const mainPageVisualSwiper = new Swiper('#mainPageVisualSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  })
}

// main page event swiper
if (document.querySelector('#mainPageEventSwiper')) {
  const mainPageEventSwiper = new Swiper('#mainPageEventSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  })
}

// 768px 이하 헤더 메뉴 토글 로직
if (document.querySelector('.headerBodyInfo .menuBtn')) {
  const menuBtn = document.querySelector('.headerBodyInfo .menuBtn');
  const gnb = document.querySelector('.gnb');
  const gnbDetailMenu = document.querySelector('.gnbDetailMenu');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menuOpen');

    if (menuBtn.className.indexOf('menuOpen') !== -1) {
      gnb.style.display = 'block';
      gnbDetailMenu.style.display = 'block';
    } else {
      gnb.style.display = 'none';
      gnbDetailMenu.style.display = 'none';
    }
  })
}

if (document.querySelector('.headerSearchArea')) {
  const [areaApplyBtn, itemApplyBtn] = document.querySelectorAll('.applyBtn'); // 지역, 분류 적용 버튼 구분
  const areaItem = [];
  const itemItem = [];

  const areaCategory = document.querySelector('.main_search_bar_area_category')
  const itemCategory = document.querySelector('.main_search_bar_item_category')

  areaCategory.addEventListener('click', (e) => {
    handleItemBtn(e, areaItem)
  })
  itemCategory.addEventListener('click', (e) => {
    handleItemBtn(e, itemItem)
  })

  areaApplyBtn.addEventListener('click', () => {
    printArea(areaCategory);
  })

  itemApplyBtn.addEventListener('click', () => {
    printItem(itemCategory);
  })

  function handleItemBtn(e, arr) {
    const targetClassName = e.target.className; // 해당 버튼의 클레스명

    if (targetClassName === 'categoryItemBtn') {
      arr.length = 0;
      for (let i = 0; i < e.target.parentNode.parentNode.parentNode.parentNode.children[0].children.length; i++) {
        for (let j = 0; j < e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children.length; j++) {
          e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children[j].className === 'active' ? arr.push(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children[j].innerText) : ''
        }
      }
    }
  }

  function printArea() {
    const printArea = document.querySelector('.printArea');
    const table = document.querySelector('.main_search_bar_area_category_wrapper')
    if (areaItem.length === 0) {
      printArea.innerText = '지역을 선택해주세요'
    } else if (areaItem.length === 1) {
      printArea.innerText = areaItem[0]
    } else {
      printArea.innerText = `${areaItem[0]} 외 ${areaItem.length - 1}곳`
    }
    printArea.classList.toggle('active')
    table.classList.toggle('hide')
  }

  function printItem() {
    const printItem = document.querySelector('.printItem');
    const table = document.querySelector('.main_search_bar_item_category_wrapper')
    if (itemItem.length === 0) {
      printItem.innerText = '분류를 선택해주세요'
    } else if (itemItem.length === 1) {
      printItem.innerText = itemItem[0]
    } else {
      printItem.innerText = `${itemItem[0]} 외 ${itemItem.length - 1}개`
    }
    printItem.classList.toggle('active')
    table.classList.toggle('hide')
  }
}

if (document.querySelector('.headerSearchArea')) {
  const closeBtn = document.querySelectorAll('.close_btn');
  const mainSearchBarArea = document.querySelector('.main_search_bar_area');
  const mainSearchBarItem = document.querySelector('.main_search_bar_item'); // 분류 검색 버튼
  const areaItem = document.querySelector('.area_item');
  const itemItem = document.querySelector('.item_item');
  const mainSearchBarAreaCategoryWrapper = document.querySelector('.main_search_bar_area_category_wrapper'); // 지역 카테고리
  const mainSearchBarItemCategoryWrapper = document.querySelector('.main_search_bar_item_category_wrapper'); // 분류 카테고리
  const itemDetailItem = document.querySelector('.main_search_bar_item_detail_category');


  if (document.querySelector('.close_btn') !== null) {
    closeBtn[1].addEventListener('click', () => {
      mainSearchBarArea.children[1].classList.remove('active')
      mainSearchBarItem.children[1].classList.remove('active')
      mainSearchBarAreaCategoryWrapper.classList.add('hide');
      mainSearchBarItemCategoryWrapper.classList.add('hide')
    })
    closeBtn[0].addEventListener('click', () => {
      mainSearchBarArea.children[1].classList.remove('active')
      mainSearchBarItem.children[1].classList.remove('active')
      mainSearchBarAreaCategoryWrapper.classList.add('hide');
      mainSearchBarItemCategoryWrapper.classList.add('hide')
    })
  }

  // event Listener
  /** 지역 검색 버튼 클릭 */
  if (document.querySelector('.main_search_bar_area') !== null) {
    mainSearchBarArea.addEventListener('click', (e) => {
      e.preventDefault();
      mainSearchBarArea.children[1].classList.toggle('active')
      mainSearchBarItem.children[1].classList.remove('active')
      mainSearchBarAreaCategoryWrapper.classList.toggle('hide');
      mainSearchBarItemCategoryWrapper.classList.add('hide')
    });
  }

  /** 분류 검색 버튼 클릭 */
  if (document.querySelector('.main_search_bar_item') !== null) {
    mainSearchBarItem.addEventListener('click', (e) => {
      e.preventDefault();
      mainSearchBarItem.children[1].classList.toggle('active')
      mainSearchBarArea.children[1].classList.remove('active')
      mainSearchBarAreaCategoryWrapper.classList.add('hide')
      mainSearchBarItemCategoryWrapper.classList.toggle('hide');
    });
  }

  /** 지역 검색 카테고리 버튼 클릭 */

  if (document.querySelector('.area_item') !== null) {
    const areaDetailItem = document.querySelector('.main_search_bar_area_detail_category');

    for (let i = 0; i < areaItem.children.length; i++) {
      areaItem.children[i].addEventListener('click', (e) => {
        for (let j = 0; j < areaItem.children.length; j++) {
          areaItem.children[j].classList.remove('active')
          areaDetailItem.children[j].classList.add('hide')
        }
        e.currentTarget.classList.toggle('active');
        areaDetailItem.children[i].classList.toggle('hide')
      })
    }
  }

  /** 지역 디테일 검색 */
  if (document.querySelector('.main_search_bar_area_detail_category') !== null) {
    const areaDetailItem = document.querySelector('.main_search_bar_area_detail_category'); // 전국 지역
    const areaTitle = areaDetailItem.children // 전체 지역(전국 아님)
    const allAreaBtn = areaTitle[0].children[0]
    for (let i = 0; i < areaTitle.length; i++) {
      areaTitle[i].addEventListener('click', (e) => {
        const cityArea = e.target.parentNode.parentNode.children
        const AREA_NAME = e.target.innerText
        // console.log(AREA_NAME)
        if (AREA_NAME === '전국') {
          for (let i = 1; i < areaTitle.length; i++) {
            // console.log(areaTitle[i].children.length)
            for (let j = 0; j < areaTitle[i].children.length; j++) {
              areaTitle[i].children[j].classList.remove('active')
            }
          }
        } else if (AREA_NAME.indexOf('전체') >= 0) {
          allAreaBtn.classList.remove('active')
          for (let i = 1; i < cityArea.length; i++) {
            cityArea[i].classList.remove('active')
          }
        } else if (AREA_NAME.indexOf('전체') < 0) {
          allAreaBtn.classList.remove('active')
          cityArea[0].classList.remove('active')
        }
        e.target.parentNode.classList.toggle('active')
      })
    }

  }

  /** 분류 검색 카테고리 버튼 클릭 */
  if (document.querySelector('.item_item') !== null) {
    for (let i = 0; i < itemItem.children.length; i++) {
      itemItem.children[i].addEventListener('click', (e) => {
        for (let j = 0; j < itemItem.children.length; j++) {
          itemItem.children[j].classList.remove('active')
          itemDetailItem.children[j].classList.add('hide')
        }
        e.currentTarget.classList.toggle('active');
        itemDetailItem.children[i].classList.toggle('hide')
      })
    }
  }

  /** 분류 디테일 검색 */
  if (document.querySelector('.main_search_bar_item_detail_category') !== null) {
    const itemDetailItem = document.querySelector('.main_search_bar_item_detail_category');
    const itemTitle = itemDetailItem.children
    const allItemBtn = itemTitle[0].children[0]
    for (let i = 0; i < itemTitle.length; i++) {
      itemTitle[i].addEventListener('click', (e) => {
        const itemsArea = e.target.parentNode.parentNode.children
        const ITEM_NAME = e.target.innerText
        if (ITEM_NAME === '분류전체') {
          for (let i = 1; i < itemTitle.length; i++) {
            for (let j = 0; j < itemTitle[i].children.length; j++) {
              itemTitle[i].children[j].classList.remove('active')
            }
          }
        } else if (ITEM_NAME.indexOf('전체') >= 0) {
          allItemBtn.classList.remove('active')
          for (let i = 1; i < itemsArea.length; i++) {
            itemsArea[i].classList.remove('active')
          }
        } else if (ITEM_NAME.indexOf('전체') < 0) {
          allItemBtn.classList.remove('active')
          itemsArea[0].classList.remove('active')
        }
        e.target.parentNode.classList.toggle('active')
      })
    }
  }
}

// 검색창 팝업 토글
if (document.querySelector('.headerSearchArea')) {
  const closeBtn = document.querySelector('.searchLayout .closeBtn')
  const searchArea = document.querySelector('.headerSearchArea')
  const toggleBtn = document.querySelector('.headerBodyInfo .xi-search.xi-2x')

  closeBtn.addEventListener('click', () => {
    addClassList(searchArea, 'hide')
  })

  toggleBtn.addEventListener('click', () => {
    toggleClassList(searchArea, 'hide')
  })
}

/**
 * 인자에 DOM 요소와 클레스명을 전달하면 해당 DOM 요소에 클레스명을 첨삭(더하거나 빼거나)해줌
 * @param {document} target 클레스명을 변경하고자 하는 DOM 요소
 * @param {string} className 첨삭하고자 하는 클레스명
 */
function toggleClassList(target, className) {
  target.classList.toggle(className);
}

/**
 * 인자에 DOM 요소와 클레스명을 전달하면 해당 DOM 요소에 클레스명을 더해줌 
 * @param {document} target 클레스명을 변경하고자 하는 DOM 요소
 * @param {string} className 더하고자 하는 클레스명
 */
function addClassList(target, className) {
  target.classList.add(className);
}

/**
 * 인자에 DOM 요소와 클레스명을 전달하면 해당 DOM 요소에 클레스명을 더해줌
 * @param {document} target 클레스명을 변경하고자 하는 DOM 요소
 * @param {string} className 더하고자 하는 클레스명
 */
function removeClassList(target, className) {
  target.classList.remove(className);
}





if (document.querySelector('.calcArea') !== null) {
  // DOM
  const calcInput = document.querySelector('.amount>div:nth-child(2)>input')
  const calcProcessResult = document.querySelector('.calcProcess>div:nth-child(2)>div')
  const calcResult = document.querySelector('.calcResult>div:nth-child(2)>div')

  // event listener
  calcInput.addEventListener('keyup', () => {
    calcProcess(calcInput.value)
  })

  // function
  function checkNum(event) { // 기부금에 숫자와 방향키, backspace 만 입력할 수 있도록 함
    const regExp = /[^0-9]/g;
    const ele = event.target;
    if (regExp.test(ele.value)) {
      ele.value = ele.value.replace(regExp, '');
    }

  }

  function calcProcess(num) {
    if (num <= 100000) {
      calcProcessResult.innerText = `${Number(num).toLocaleString('ko-KR')}원 전액 공제`
      calcResult.innerText = Number(num).toLocaleString('ko-KR')
    } else if (num <= 5000000) {
      calcProcessResult.innerText = `100,000원 전액 공제 + ${Math.floor((num - 100000) * 0.165).toLocaleString('ko-KR')}원 추가 공제`
      calcResult.innerText = (100000 + Math.floor((num - 100000) * 0.165)).toLocaleString('ko-KR')
    } else {
      calcProcessResult.innerText = `연 500만원 이상은 기부하실 수 없습니다`
      calcResult.innerText = 0
    }
  }

  function resetCalc() {
    calcInput.value = ''
    calcProcessResult.innerText = '...'
    calcResult.innerText = 0
  }
}


const con = document.querySelectorAll('.qna_list');
const arturn = document.querySelectorAll('.qus_item3');
for (let i = 0; i < con.length; i++) {
  con[i].addEventListener('click', () => {
    con[i].children[1].classList.toggle('none')
    arturn[i].classList.toggle('turn');
  })



}



const number = document.getElementsByClassName("video_page_link");
const categoryA = document.querySelectorAll('.category_activeA>li>a');
const categoryB = document.querySelectorAll('.category_activeB>li>a');



function handleClick(event) {
  for (var i = 0; i < number.length; i++) {
    number[i].classList.remove("clicked");
  }
  event.target.classList.add("clicked");
}
function CategoryClickA(event) {
  for (var i = 0; i < categoryA.length; i++) {
    categoryA[i].classList.remove("active");
  }
  event.target.classList.add("active");
}
function CategoryClickB(event) {
  for (var i = 0; i < categoryB.length; i++) {
    categoryB[i].classList.remove("active");
  }
  event.target.classList.add("active");
}

function init() {
  for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", handleClick);
  }

  for (var i = 0; i < categoryA.length; i++) {
    categoryA[i].addEventListener("click", CategoryClickA);
    // console.log(categoryA[i])
  }
  for (var i = 0; i < categoryB.length; i++) {
    categoryB[i].addEventListener("click", CategoryClickB);
    // console.log(categoryB[i])
  }
}

init();


if (document.querySelector('.giftMainImg') !== null) {

  const giftMainImg = document.querySelector('.giftMainImg')
  const gitfImgArea = document.querySelector('.gitfImgArea')
  const productItemContents = document.querySelector('.prt_item_desc')
  const prtpad = document.querySelector('.prt_pad')

  window.addEventListener('resize', () => {
    if (`${prtpad.clientWidth}` >= 768) {
      giftMainImg.style.height = `${giftMainImg.clientWidth}px`
      productItemContents.style.height = `${gitfImgArea.clientHeight}px`
    }
    else {

      productItemContents.style.height = `100%`
      giftMainImg.style.height = `${giftMainImg.clientWidth}px`
    }
  })

  giftMainImg.style.height = `${giftMainImg.clientWidth}px`
  productItemContents.style.height = `${gitfImgArea.clientHeight}px`
}


if (document.querySelector('.giftMainImg') !== null) {
  const giftMainImg = document.querySelector('.giftMainImg')
  const giftSubImgList = document.querySelectorAll('.giftSubImgList>li')

  giftSubImgList.forEach((item) => {
    item.addEventListener('mouseover', () => {
      giftMainImg.src = item.children[0].src
    })
    // item.addEventListener('mouseout', () => {
    //   giftMainImg.src = giftMainImgSrc
    // })
  })
}

if (document.querySelector('.giftSubImgArea') !== null) {
  // DOM
  const giftSubImgList = document.querySelector('.giftSubImgList') // 테마 버튼들 모여있는 영역
  const prevBtn = document.querySelectorAll('.subImgSlideBtn')[0] // < 버튼
  const nextBtn = document.querySelectorAll('.subImgSlideBtn')[1] // > 버튼

  // variable
  const PREV_NUM = -309 // < 버튼 클릭 시 이동할 픽셀
  const NEXT_NUM = 309 // > 버튼 클릭 시 이동할 픽셀

  // EventListener
  prevBtn.addEventListener('click', () => handleControlBtn(PREV_NUM))
  nextBtn.addEventListener('click', () => handleControlBtn(NEXT_NUM))

  // function
  function handleControlBtn(num) {
    giftSubImgList.scrollBy({ left: num, top: 0, behavior: "smooth" });
  }
}

if (document.querySelector('.detail_title_category') !== null) {
  const detailTitleCategory = document.querySelector('.detail_title_category')
  const detailTitleList = document.querySelector('.detail_title_list');
  const scrollBtnSet = document.querySelector('.fix');
  const prevBtn = document.querySelector('.prev_btn');
  const nextBtn = document.querySelector('.next_btn');

  // EventListener
  detailTitleCategory.addEventListener('mouseover', controlBtnView)
  detailTitleCategory.addEventListener('mouseout', controlBtnHide)
  scrollBtnSet.addEventListener('click', handleScrollBtn)

  // Function
  function controlBtnView() {
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
  }

  function controlBtnHide() {
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
  }

  function handleScrollBtn(e) {
    const POSITION = detailTitleList.scrollLeft;
    if (e.target.className === 'xi-angle-left xi-3x') {
      detailTitleList.scrollTo({ left: POSITION - 300, behavior: 'smooth' })
    } else if (e.target.className === 'xi-angle-right xi-3x') {
      detailTitleList.scrollTo({ left: POSITION + 300, behavior: 'smooth' })
    }
  }
}

if (document.querySelector('.title_category') !== null) {
  const scrollC = document.querySelector('.title_category');
  const scrollD = document.querySelector('.detail_title_category');
  const scrollE = document.querySelector('.ItemTop');


  window.addEventListener('scroll', () => {
    if (window.scrollY >= 66) {
      scrollC.style.position = "fixed";
      scrollC.style.top = "0";
      scrollC.style.background = "white";
      scrollD.style.position = "fixed";
      scrollD.style.top = "2%";
      scrollD.style.background = "white";

      scrollE.style.padding = "20.5rem 0 7.5rem";

    } else {
      scrollC.style = " ";
      scrollD.style = " ";
      scrollE.style = " ";
    }
  });
}

const privacyBtn = document.querySelectorAll('.privacyBox');
const secretArea = document.querySelector('.secretArea');





function privacyBTN() {
  for (let i = 0; i < privacyBtn.length; i++) {
    privacyBtn[i].addEventListener('click', () => {
      secretArea.classList.remove('hide');
    })

  }
}

function popupToggle(toggleBtn, area) {
  if (document.querySelector(`.${toggleBtn}`) !== null) {
    const BTN = document.querySelector(`.${toggleBtn}`)
    const AREA = document.querySelector(`.${area}`)

    BTN.addEventListener('click', () => toggleClassList(AREA, 'hide'));


    AREA.addEventListener('click', (e) => {
      if (e.target.className === AREA.className) {
        toggleClassList(AREA, 'hide');
      };
    });
  };
}

popupToggle('btn_close', 'secretArea');


// const privacyBtn = document.querySelectorAll('.privacyBtn');
// const secretArea = document.querySelectorAll('.secretArea');
// function privacyBTN() {
//   for (let i = 0; i < privacyBtn.length; i++) {
//     privacyBtn[i].addEventListener('click', () => {
//       secretArea.classList.remove('hide');
//     })
//   }
// }











document.querySelector("#js-scroll").addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});




if (document.querySelector('.product_header') !== null) {


  const toggleBtn = document.querySelector('.headerBodyInfo .xi-search.xi-2x')
  const HeaderFi = document.querySelector('.product_header')
  const HeaderCa = document.querySelector('.Header_category')
  const closeBtn = document.querySelector('.searchLayout .closeBtn')


  toggleBtn.addEventListener('click', () => {
    toggleClassList(HeaderFi, 'product_header')
    // toggleClassList(HeaderCa, 'hide')

  })
  closeBtn.addEventListener('click', () => {

    toggleClassList(HeaderFi, 'product_header')
    // toggleClassList(HeaderCa, 'pad')
  })


}


SearchToggle('HsearchBtn', 'headerSearchArea');

function SearchToggle(toggleBtn, area) {
  if (document.querySelector(`.${toggleBtn}`) !== null) {
    const BTN = document.querySelector(`.${toggleBtn}`)
    const AREA = document.querySelector(`.${area}`)
    BTN.addEventListener('click', () => {
      toggleClassList(AREA, 'hide');
    })
  }
}


if (document.querySelector('.product_header') !== null) {
  const HeaderFi = document.querySelector('.product_header')
  const HeaderCa = document.querySelector('.Header_category')
  const RightSearchBTN = document.querySelector('.HsearchBtn')
  RightSearchBTN.addEventListener('click', () => {
    toggleClassList(HeaderFi, 'product_header')
    toggleClassList(HeaderCa, 'pad')
  })
}
