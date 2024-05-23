//create PowerFullGirl object
function PowerPullGirl(name,color,superPower) {
 this.name = name;
 this.color = color;
 this.superPower = superPower;
 this.isLeader=false;

 this.displayInfo=function(){
    console.log(`Powerpuff Girl Information:
    Name: ${this.name}
    Color: ${this.color}
     superPower: ${this.superPower} 
     ${this.isLeader ? 'Leader:Yes': 'Leader:No'}  `);
 }

 this.becomeLeader=function(){
    this.isLeader=true;
    console.log(`${this.name} has become the leader of the PowerpuffGirl.`);
 };
}
const blossom= new PowerPullGirl('Blossom','Pink','Ice Breath');
const buttercup= new PowerPullGirl('Buttercup','Green','Super Strenght');
const bubbles= new PowerPullGirl('Bubbles','Blue','Flight');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeLeader()

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();