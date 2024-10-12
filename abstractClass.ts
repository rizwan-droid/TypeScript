abstract class Akar {
  color: string = "";
  abstract display(): void;
}
class Chaokor extends Akar {
  display() {
    console.log("abstract function to inherited class me v likhna padta hai");
  }
  color = "red";
}

const object = new Chaokor();
object.display();
