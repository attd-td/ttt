gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBirdObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDPipeObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDfloorObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDBirdObjects1= [];
gdjs.Untitled_32sceneCode.GDBirdObjects2= [];
gdjs.Untitled_32sceneCode.GDPipeObjects1= [];
gdjs.Untitled_32sceneCode.GDPipeObjects2= [];
gdjs.Untitled_32sceneCode.GDpointObjects1= [];
gdjs.Untitled_32sceneCode.GDpointObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects2= [];
gdjs.Untitled_32sceneCode.GDfloorObjects1= [];
gdjs.Untitled_32sceneCode.GDfloorObjects2= [];
gdjs.Untitled_32sceneCode.GDbgObjects1= [];
gdjs.Untitled_32sceneCode.GDbgObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPipeObjects1Objects = Hashtable.newFrom({"Pipe": gdjs.Untitled_32sceneCode.GDPipeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPipeObjects2Objects = Hashtable.newFrom({"Pipe": gdjs.Untitled_32sceneCode.GDPipeObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfloorObjects2Objects = Hashtable.newFrom({"floor": gdjs.Untitled_32sceneCode.GDfloorObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpointObjects1Objects = Hashtable.newFrom({"point": gdjs.Untitled_32sceneCode.GDpointObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBirdObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBirdObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBirdObjects1[k] = gdjs.Untitled_32sceneCode.GDBirdObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBirdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBirdObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].rotateTowardAngle(-(45), 700, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBirdObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBirdObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBirdObjects1[k] = gdjs.Untitled_32sceneCode.GDBirdObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBirdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBirdObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].rotateTowardAngle(89, 240, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe") >= 1.8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Pipes", (( gdjs.Untitled_32sceneCode.GDBirdObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBirdObjects1[0].getPointX("")) + 800, 200 - gdjs.random(400), 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pipe"), gdjs.Untitled_32sceneCode.GDPipeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPipeObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPipeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("point"), gdjs.Untitled_32sceneCode.GDpointObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPipeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPipeObjects1[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpointObjects1[i].addForce(-(300), 0, 0);
}
}}

}


{

gdjs.Untitled_32sceneCode.GDBirdObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDPipeObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDPipeObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pipe"), gdjs.Untitled_32sceneCode.GDPipeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPipeObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.push(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPipeObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDPipeObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPipeObjects1_1final.push(gdjs.Untitled_32sceneCode.GDPipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.Untitled_32sceneCode.GDfloorObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfloorObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.push(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDfloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDfloorObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDfloorObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDfloorObjects1_1final.push(gdjs.Untitled_32sceneCode.GDfloorObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDBirdObjects1_1final, gdjs.Untitled_32sceneCode.GDBirdObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPipeObjects1_1final, gdjs.Untitled_32sceneCode.GDPipeObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDfloorObjects1_1final, gdjs.Untitled_32sceneCode.GDfloorObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBirdObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("point"), gdjs.Untitled_32sceneCode.GDpointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpointObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9511660);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBirdObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBirdObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPipeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPipeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDBirdObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBirdObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPipeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPipeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
