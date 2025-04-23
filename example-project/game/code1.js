gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewSpriteObjects1= [];
gdjs.gameoverCode.GDNewSpriteObjects2= [];
gdjs.gameoverCode.GDgameoverObjects1= [];
gdjs.gameoverCode.GDgameoverObjects2= [];
gdjs.gameoverCode.GDNewTextObjects1= [];
gdjs.gameoverCode.GDNewTextObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDgameoverObjects1.length = 0;
gdjs.gameoverCode.GDgameoverObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDgameoverObjects1.length = 0;
gdjs.gameoverCode.GDgameoverObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
