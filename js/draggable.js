$(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  });