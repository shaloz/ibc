export const data = [
  {
    id: "11212112",
    price: 20.9,
    imageUrl: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11212112",
    price: 49.0,
    imageUrl: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11212112",
    price: 120.0,
    imageUrl: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11212112",
    price: 234.0,
    imageUrl: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11212112",
    price: 12.0,
    imageUrl: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11212112",
    price: 42.0,
    imageUrl: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

export const showPrice = (containerId, index) => {
  document.getElementById(`${containerId}` + index).style.visibility = "visible";
  document.getElementById(`${containerId}` + index).style.webkitTransform = "translateY(-40px)";
  document.getElementById(`${containerId}` + index).style.transform = "translateY(-40px)";
};

export const removePrice = (containerId, index) => {
  document.getElementById(`${containerId}` + index).style.webkitTransform = "translateY(0px)";
  document.getElementById(`${containerId}` + index).style.transform = "translateY(0px)";
  document.getElementById(`${containerId}` + index).style.visibility = "hidden";
};
