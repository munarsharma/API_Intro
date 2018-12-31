document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('button');

  const APIResponse = {
    status: 'success',
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      basenji: [],
      beagle: [],
      bluetick: [],
      borzoi: [],
      bouvier: [],
      boxer: [],
      brabancon: [],
      briard: [],
      bulldog: ['boston', 'french'],
      bullterrier: ['staffordshire'],
      cairn: [],
      cattledog: ['australian'],
      chihuahua: [],
      chow: [],
      clumber: [],
      cockapoo: [],
      collie: ['border'],
      coonhound: [],
      corgi: ['cardigan'],
      cotondetulear: [],
      dachshund: [],
      dalmatian: [],
      dane: ['great'],
      deerhound: ['scottish'],
      dhole: [],
      dingo: [],
      doberman: [],
      elkhound: ['norwegian'],
      entlebucher: [],
      eskimo: [],
      frise: ['bichon'],
      germanshepherd: [],
      greyhound: ['italian'],
      groenendael: [],
      hound: ['afghan', 'basset', 'blood', 'english', 'ibizan', 'walker'],
      husky: [],
      keeshond: [],
      kelpie: [],
      komondor: [],
      kuvasz: [],
      labrador: [],
      leonberg: [],
      lhasa: [],
      malamute: [],
      malinois: [],
      maltese: [],
      mastiff: ['bull', 'tibetan'],
      mexicanhairless: [],
      mix: [],
      mountain: ['bernese', 'swiss'],
      newfoundland: [],
      otterhound: [],
      papillon: [],
      pekinese: [],
      pembroke: [],
      pinscher: ['miniature'],
      pointer: ['german', 'germanlonghair'],
      pomeranian: [],
      poodle: ['miniature', 'standard', 'toy'],
      pug: [],
      puggle: [],
      pyrenees: [],
      redbone: [],
      retriever: ['chesapeake', 'curly', 'flatcoated', 'golden'],
      ridgeback: ['rhodesian'],
      rottweiler: [],
      saluki: [],
      samoyed: [],
      schipperke: [],
      schnauzer: ['giant', 'miniature'],
      setter: ['english', 'gordon', 'irish'],
      sheepdog: ['english', 'shetland'],
      shiba: [],
      shihtzu: [],
      spaniel: [
        'blenheim',
        'brittany',
        'cocker',
        'irish',
        'japanese',
        'sussex',
        'welsh',
      ],
      springer: ["english"],
      stbernard: [],
      terrier: [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      vizsla: [],
      weimaraner: [],
      whippet: [],
      wolfhound: ["irish"]
    }
  };

  const breedList = [];

  let breed = APIResponse.message;

  // debugger;

  // console.log(Object.keys(breed));

  Object.keys(breed).forEach(sub => {
    if (breed[sub]) {
      breed[sub].forEach(el => {
        let first = el[0].toUpperCase();
        let rest = el.slice(1);

        let firstSub = sub[0].toUpperCase();
        let restSub = sub.slice(1);
        // debugger;
        breedList.push(`${first + rest} ${firstSub + restSub}`);
        console.log(breedList);
      });
    } else {
      let first = sub[0].toUpperCase();
      let rest = sub.slice(1);
      breedList.push(`${first + rest}`);
    }
  });

  const random = length => {
    return Math.floor(Math.random() * length);
  };
  const getElem = arr => {
    let randomIdx = random(arr.length);
    return arr[randomIdx];
  };

  button.addEventListener("click", event => {
    let body = document.querySelector("body");
    let p = document.querySelector("p");
    p.innerText = getElem(breedList);

    if (p.innerText) {
      p.innerText = getElemt(breedList);
      button.innerText = " Another one";
    } else {
      let p = document.createElement("p");
      body.appendChild(p);
      p.innerText = getElem(breedList);
    }
  });
});
