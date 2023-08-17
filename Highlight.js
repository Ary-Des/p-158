AFRAME.registerComponent("highlights", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        const placesId = ["superman", "spiderman", "captain-areo", "outer-space"];
        if (placesId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          placeContainer.setAttribute("camera-cursor", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#D76B30",
            opacity: 1,
          });
        }
      },
      handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter', () -> {
            constId = this.el.getAttribute('')
        })
      }