function colourToNumber(r, g, b) {
  return (r << 16) + (g << 8) + (b);
}
const brickcolor = {1:[242, 243, 243],2:[161, 165, 162],3:[249, 233, 153],5:[215, 197, 154],6:[194, 218, 184],9:[232, 186, 200],11:[128, 187, 219],12:[203, 132, 66],18:[204, 142, 105],21:[196, 40, 28],22:[196, 112, 160],23:[13, 105, 172],24:[245, 205, 48],25:[98, 71, 50],26:[27, 42, 53],27:[109, 110, 108],28:[40, 127, 71],29:[161, 196, 140],36:[243, 207, 155],37:[75, 151, 75],38:[160, 95, 53],39:[193, 202, 222],40:[236, 236, 236],41:[205, 84, 75],42:[193, 223, 240],43:[123, 182, 232],44:[247, 241, 141],45:[180, 210, 228],47:[217, 133, 108],48:[132, 182, 141],49:[248, 241, 132],50:[236, 232, 222],100:[238, 196, 182],101:[218, 134, 122],102:[110, 153, 202],103:[199, 193, 183],104:[107, 50, 124],105:[226, 155, 64],106:[218, 133, 65],107:[0, 143, 156],108:[104, 92, 67],110:[67, 84, 147],111:[191, 183, 177],112:[104, 116, 172],113:[229, 173, 200],115:[199, 210, 60],116:[85, 165, 175],118:[183, 215, 213],119:[164, 189, 71],120:[217, 228, 167],121:[231, 172, 88],123:[211, 111, 76],124:[146, 57, 120],125:[234, 184, 146],126:[165, 165, 203],127:[220, 188, 129],128:[174, 122, 89],131:[156, 163, 168],133:[213, 115, 61],134:[216, 221, 86],135:[116, 134, 157],136:[135, 124, 144],137:[224, 152, 100],138:[149, 138, 115],140:[32, 58, 86],141:[39, 70, 45],143:[207, 226, 247],145:[121, 136, 161],146:[149, 142, 163],147:[147, 135, 103],148:[87, 88, 87],149:[22, 29, 50],150:[171, 173, 172],151:[120, 144, 130],153:[149, 121, 119],154:[123, 46, 47],157:[255, 246, 123],158:[225, 164, 194],168:[117, 108, 98],176:[151, 105, 91],178:[180, 132, 85],179:[137, 135, 136],180:[215, 169, 75],190:[249, 214, 46],191:[232, 171, 45],192:[105, 64, 40],193:[207, 96, 36],194:[163, 162, 165],195:[70, 103, 164],196:[35, 71, 139],198:[142, 66, 133],199:[99, 95, 98],200:[130, 138, 93],208:[229, 228, 223],209:[176, 142, 68],210:[112, 149, 120],211:[121, 181, 181],212:[159, 195, 233],213:[108, 129, 183],216:[144, 76, 42],217:[124, 92, 70],218:[150, 112, 159],219:[107, 98, 155],220:[167, 169, 206],221:[205, 98, 152],222:[228, 173, 200],223:[220, 144, 149],224:[240, 213, 160],225:[235, 184, 127],226:[253, 234, 141],232:[125, 187, 221],268:[52, 43, 117],301:[80, 109, 84],302:[91, 93, 105],303:[0, 16, 176],304:[44, 101, 29],305:[82, 124, 174],306:[51, 88, 130],307:[16, 42, 220],308:[61, 21, 133],309:[52, 142, 64],310:[91, 154, 76],311:[159, 161, 172],312:[89, 34, 89],313:[31, 128, 29],314:[159, 173, 192],315:[9, 137, 207],316:[123, 0, 123],317:[124, 156, 107],318:[138, 171, 133],319:[185, 196, 177],320:[202, 203, 209],321:[167, 94, 155],322:[123, 47, 123],323:[148, 190, 129],324:[168, 189, 153],325:[223, 223, 222],327:[151, 0, 0],328:[177, 229, 166],329:[152, 194, 219],330:[255, 152, 220],331:[255, 89, 89],332:[117, 0, 0],333:[239, 184, 56],334:[248, 217, 109],335:[231, 231, 236],336:[199, 212, 228],337:[255, 148, 148],338:[190, 104, 98],339:[86, 36, 36],340:[241, 231, 199],341:[254, 243, 187],342:[224, 178, 208],343:[212, 144, 189],344:[150, 85, 85],345:[143, 76, 42],346:[211, 190, 150],347:[226, 220, 188],348:[237, 234, 234],349:[233, 218, 218],350:[136, 62, 62],351:[188, 155, 93],352:[199, 172, 120],353:[202, 191, 163],354:[187, 179, 178],355:[108, 88, 75],356:[160, 132, 79],357:[149, 137, 136],358:[171, 168, 158],359:[175, 148, 131],360:[150, 103, 102],361:[86, 66, 54],362:[126, 104, 63],363:[105, 102, 92],364:[90, 76, 66],365:[106, 57, 9],1001:[248, 248, 248],1002:[205, 205, 205],1003:[17, 17, 17],1004:[255, 0, 0],1005:[255, 176, 0],1006:[180, 128, 255],1007:[163, 75, 75],1008:[193, 190, 66],1009:[255, 255, 0],1010:[0, 0, 255],1011:[0, 32, 96],1012:[33, 84, 185],1013:[4, 175, 236],1014:[170, 85, 0],1015:[170, 0, 170],1016:[255, 102, 204],1017:[255, 175, 0],1018:[18, 238, 212],1019:[0, 255, 255],1020:[0, 255, 0],1021:[58, 125, 21],1022:[127, 142, 100],1023:[140, 91, 159],1024:[175, 221, 255],1025:[255, 201, 201],1026:[177, 167, 255],1027:[159, 243, 233],1028:[204, 255, 204],1029:[255, 255, 204],1030:[255, 204, 153],1031:[98, 37, 209],1032:[255, 0, 191],
}

const canvas = document.getElementById("display"); 
const engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);

function makeBox(width,height,depth,colors){
  var box = BABYLON.MeshBuilder.CreateBox("box", {height: height, width: width, depth: depth, faceColors: colors}, scene);	
  box.enableEdgesRendering(); 
  box.edgesWidth = 4.0;
  box.edgesColor = new BABYLON.Color4(0, 0, 0, 1);
  return(box)
}

var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

camera.keysUp = [87]; // W
camera.keysDown = [83]; // S
camera.keysLeft = [65]; // A
camera.keysRight = [68]; // D
camera.speed = 10;
camera.inertia = 0.1;
camera.angularSensibility = 500;
camera.maxZ = 100
camera.attachControl(canvas, true);

var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

engine.runRenderLoop(function () {
        scene.render();
});
window.addEventListener("resize", function () {
        engine.resize();
});

function findin(node,type){
  for (var i = 0; i<node.length;i++) {
    if (node[i].getAttribute("name") == type){
      return(node[i])
    }
  }
}

function nodeValue(obj){
  return(Number(obj[0].childNodes[0].nodeValue))
}

function hexToRgb(hex) {
  var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

function color3uint8(dec) {
  return hexToRgb(Number(dec).toString(16).substring(2))
}

function clamp(num,min,max){
  return(Math.max(Math.min(num,max),min))
}

fetch('robloshq.rbxlx').then(response => response.text()).then(function(data){
  const xml = new window.DOMParser().parseFromString(data, "text/xml");
  for (let i = 0, v; v = xml.getElementsByTagName("roblox")[0].getElementsByTagName("Item")[i]; i++) {
    if (v.getAttribute("class") == "Part"){
      const properties = v.getElementsByTagName("Properties")[0]
      const size = findin(properties.getElementsByTagName("Vector3"),"size")
      const bc = findin(properties.getElementsByTagName("int"),"BrickColor")
      const cf = findin(properties.getElementsByTagName("CoordinateFrame"),"CFrame")
      const color = bc && brickcolor[bc.childNodes[0].nodeValue] || color3uint8(nodeValue(properties.getElementsByTagName("Color3uint8")))
      const color4 = new BABYLON.Color4(color[0]/255,color[1]/255,color[2]/255,1)
      const box = makeBox(nodeValue(size.getElementsByTagName("X")),nodeValue(size.getElementsByTagName("Y")),nodeValue(size.getElementsByTagName("Z")),[color4,color4,color4,color4,color4,color4])
      box.position = new BABYLON.Vector3(-nodeValue(cf.getElementsByTagName("X")),nodeValue(cf.getElementsByTagName("Y")),nodeValue(cf.getElementsByTagName("Z")))

      const rotY = Math.asin( clamp( nodeValue(cf.getElementsByTagName("R02")), - 1, 1 ) );

      if ( Math.abs( nodeValue(cf.getElementsByTagName("R02")) ) < 0.9999999 ) {

        rotX = Math.atan2( - nodeValue(cf.getElementsByTagName("R12")), nodeValue(cf.getElementsByTagName("R22")));
        rotZ = Math.atan2( - nodeValue(cf.getElementsByTagName("R01")), nodeValue(cf.getElementsByTagName("R00")));

      } else {

        rotX = Math.atan2( - nodeValue(cf.getElementsByTagName("R22")), nodeValue(cf.getElementsByTagName("R11")));
        rotZ = 0;

      }
      console.log(rotX,rotY,rotZ)
      box.rotation = new BABYLON.Vector3(rotX,rotY,rotZ)
    }
  }
}).catch((error) => {
  console.error(error);
})

// Make the camera further from the cube so we can see it better
