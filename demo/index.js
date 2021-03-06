import svgCloud from '../src/decorator';

const form = document.querySelector('.controls');
const clouds = [
  {
    selector: '#cloud1',
    coords: [[10, 120], [180, 120], [230, 180]]
  },
  {
    selector: '#cloud2',
    coords: [[20, 300], [180, 300],  [200, 330], [190, 360], [140, 420],
             [70, 380]]
  },
  {
    selector: '#cloud3',
    coords: [[460, 120], [290, 120], [240, 180]]
  },
  {
    selector: '#cloud4',
    coords: [[450, 300], [290, 300], [270, 330], [280, 360], [330, 420],
             [400, 380]]
  },
  {
    selector: '#cloud_l1',
    coords: [[10, 10], [230, 10]]
  },
  {
    selector: '#cloud_l2',
    coords: [[450, 10], [240, 10]]
  }
];


const render = () => {
  let elem;
  let cloud;
  const radius = parseFloat(form.radius.value);
  const closed = form.closed.checked;
  const inward = form.inward.checked;
  const swapping = form.swapping.checked;

  for (let ind = 0, cnt = clouds.length; ind < cnt; ++ind) {
    elem = document.querySelector(clouds[ind].selector);
    cloud = svgCloud(clouds[ind].coords, radius, closed, inward,
      swapping);
    elem.setAttribute('d', cloud);
  }
};

form.addEventListener('change', render);
render();
