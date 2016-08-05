
function Player(gameConn)
{
    this.gameConn = gameConn;
    this.duel = null;   //战斗管理
    this.idx = -1;
    this.teamColor = -1;
    this.isTurnActive = false;  //行动标志
    this.nextPlayer = null; //下一个行动玩家

    this.heroName = '';   //英雄名字
    this.hp = 30;         //英雄生命值
    this.critical = 0;    //英雄当前水晶数
    this.maxCritical = 0; //英雄当前回合最大水晶数
    
    this.deckArray = [];  //卡组数组（Card类型）
    this.handArray = [];  //手牌数组（Card类型）
    this.fieldArray = []; //场上随从数组（CardMonster类型）

    //this.handCardSpriteArray = []; //手牌图片数组
    //this.monsterSpriteArray = [];  //随从图片数组
}

//打包数据
Player.prototype.packData = function()
{
    var data = {};

}

//初始化
Player.prototype.init = function(duel, idx, teamColor)
{
    this.duel = duel;
    this.idx = idx;
    this.teamColor = teamColor;
    this.isTurnActive = false;
    this.nextPlayer = null; 

    this.heroName = this.getPlayerName();
    this.hp = 30;         
    this.critical = 0;    
    this.maxCritical = 0;

    this.deckArray = [];
    this.handArray = []; 
    this.fieldArray = []; 
}

//设置下个玩家
Player.prototype.setNextPlayer = function(next)
{
    this.nextPlayer = next;
}

Player.prototype.getNextPlayer = function()
{
    return this.nextPlayer;
}

//设置是否行动回合
Player.prototype.setTurnActive = function(isActive)
{
    this.isTurnActive = isActive;
}

//设置IDX
Player.prototype.setIdx = function(idx)
{
    this.idx = idx;
}

//获取玩家名字
Player.prototype.getPlayerName = function()
{
    return this.gameConn.getAccountName();  //先用账号名代替
}

//设置游戏管理
Player.prototype.setDuel = function(duel)
{
    this.duel = duel;
}

Player.prototype.getDuel = function()
{
    return this.duel;
}

init
createDeck
drawDeck
reduceHp
refreshMonsterField
getHp

module.exports = Player;

