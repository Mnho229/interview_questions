//For this implementation of BST, duplicate keys aren't allowed.
//Nodes for BST
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

//Binary Search Tree
function BST() {

  this.root = null;

}

//-----------------------------------Insert-----------------------------------\\
BST.prototype.insert = function(data) {
  var root = this.root;
  
  if (!root)
  {
    this.root = new Node(data);
    console.log("Create root: " + data);
    return;
  }
  
  var new_node = new Node(data);
  var curr_node = root;
  
  while(curr_node)
  {
    if (data === curr_node.value)
    {
      console.log("Inserted Value already exists in the tree. Exiting...");
      break;
    }
    if (data < curr_node.value)
    {
      if (!curr_node.left)
      {
        curr_node.left = new_node;
        console.log("Create left node: " + data);
        break;
      }
      else
      {
        console.log("Move left from " + curr_node.value + " to " + curr_node.left.value);
        curr_node = curr_node.left;
      }
    }
    else
    {
      if (!curr_node.right)
      {
        curr_node.right = new_node;
        console.log("Create right node: " + data);
        break;
      }
      else
      {
        console.log("Move right from " + curr_node.value + " to " + curr_node.right.value);
        curr_node = curr_node.right;
      }
    }
  }
}

//---------------------------------Remove--------------------------------------\\

BST.prototype.remove = function(value) {

  var curr_node = this.root;
  var parent_node = this.root;
  var root_delete_flag = false;
  
  if (this.root.value === value)
  {
    root_delete_flag = true;
  }
  
  while (curr_node)
  {
    //Value found --- cover all three cases
    if (value === curr_node.value)
    { 
      //case 1 no children
      if (!curr_node.left && !curr_node.right)
      {
        if (root_delete_flag)
        {
          this.root = null;
          break;
        }
        
        if (parent_node.value < curr_node.value)
        {
          parent_node.right = null;
        }
        else
        {
          parent_node.left = null;
        }
        break;
      }
      
      //case 2 1 child and case 3 both children
      if (curr_node.left || curr_node.right)
      {
        var temp;
        
        //case 3
        if (curr_node.left && curr_node.right)
        {
          var new_parent;
          var mem_left = curr_node.left;
          var mem_right = curr_node.right;
          curr_node = mem_right;
          var mem_right_2 = curr_node.right;
          temp = curr_node;
          
          //find lowest element in right sub-tree
          while (curr_node.left)
          {
            temp = curr_node;
            curr_node = curr_node.left;
          }
          
          //Replaces the deleted value
          if (root_delete_flag)
          {
            this.root = curr_node;
            new_parent = this.root;
          }
          else if (parent_node.value < curr_node.value)
          {
            parent_node.right = curr_node;
            new_parent = parent_node.right;
          }
          else
          {
            parent_node.left = curr_node;
            new_parent = parent_node.left;
          }
          
          //Checks for duplicate if left sub-tree is used
          if (curr_node.value !== temp.value)
          {
            temp.left = null;
            new_parent.right = mem_right;
          }
          else
          {
            new_parent.right = mem_right_2;
          }
          
          new_parent.left = mem_left;
          break;
          
        }
        
        //case 2
        temp = (!curr_node.left) ? curr_node.right : curr_node.left;
        
        if (root_delete_flag)
        {
          this.root = temp;
          break;
        }
        
        if (parent_node.value < curr_node.value)
        {
          parent_node.right = temp;
        }
        else
        {
          parent_node.left = temp;
        }
        
        break;
      }
    }
    
    parent_node = curr_node;
    
    //Traversing
    if (value < curr_node.value)
    {
      if (!curr_node.left)
      {
        console.log("Unable to find value");
        break;
      }
      
      curr_node = curr_node.left;
    }
    else
    {
      if (!curr_node.right)
      {
        console.log("Unable to find value");
        break;
      }
      
      curr_node = curr_node.right;
    }
    
  }
  
  console.log("Deleted or unable to find: " + value);

}

//--------------------------------Searching----------------------------------\\

//Breadth-First Search
function BFS(root_node)
{
  var queue = [];
  
  queue.push(root_node);
  
  while(queue.length)
  {
    var buffer = queue.shift();
    
    console.log(buffer.value);
    
    if (buffer.left)
    {
      queue.push(buffer.left);
    }
    
    if (buffer.right)
    {
      queue.push(buffer.right);
    }
  }
}

//Depth-First Search
function DFS(node) {
  if (node === null)
  {
    return;
  }

  console.log(node.value);
  BFS(node.left);
  BFS(node.right);
}

//---------------------------Identification----------------------------------\\

//Is this a BST?
function checkBST()
{
  
}

//----------------------------------Testing----------------------------------\\

var my_BST = new BST();

my_BST.insert(50);
my_BST.insert(60);
my_BST.insert(55);
my_BST.insert(20);
my_BST.insert(70);
my_BST.insert(80);
my_BST.insert(10);
my_BST.insert(30);
my_BST.insert(65);

BFS(my_BST.root);


  
  
  
  
  
  
  
  

