var i = 0
data_table = [
  [
		{openId: "xxxx11", name:"yyyy11"},
		{openId: "xxxx12", name:"yyyy12"}
  ],
  [
		{openId: "xxxx21", name:"yyyy21"},
		{openId: "xxxx22", name:"yyyy22"},
		{openId: "xxxx23", name:"yyyy23"}
  ],
  [
		{openId: "xxxx31", name:"yyyy31"},
		{openId: "xxxx32", name:"yyyy32"},
		{openId: "xxxx33", name:"yyyy33"}
  ],
  [
		{openId: "xxxx41", name:"yyyy41"},
		{openId: "xxxx42", name:"yyyy42"},
		{openId: "xxxx43", name:"yyyy43"}
  ],
  [
		{openId: "xxxx51", name:"yyyy51"},
		{openId: "xxxx52", name:"yyyy52"},
		{openId: "xxxx53", name:"yyyy53"}
  ]
]

function isNull(data){ 
    return (data == "" || data == undefined || data == null) ? 1 : 0; 
}

function get_all_subnode(openId) {
  if (i < 4) {
    return data_table[i++];
  }
  else
    i = 0;
  
}

function get_all_subnode1() {
	return [
		{openId: "xxxx11", name:"yyyy11"},
		{openId: "xxxx22", name:"yyyy22"},
		{openId: "xxxx33", name:"yyyy33"}
	]
}
  
function create_tree(tree_node, max) {
    if (max <= 0)
       return

    if (isNull(tree_node))
       return

	tree_node.subnode = get_all_subnode(tree_node.openId)
    if (isNull(tree_node.subnode))
       return
    for (var i = 0; i < tree_node.subnode.length; i++)
        create_tree(tree_node.subnode[i], max - 1)
}

function search_node(root, openId) {
    var ret = null
    if (isNull(root.subnode))
        return null
    for (var i = 0; i < root.subnode.length; i++) {
        if (root.subnode[i].openId == openId)
            return root.subnode[i]
        else {
            ret = search_node(root.subnode[i], openId)
            if (ret != null) {
                return ret
            }
        }
    }
    return null
}

function update_tree(root) {
    root.subnode = get_all_subnode1()
}
 
function search_l1node_num(node) {
    if (isNull(node) || isNull(node.subnode))
        return 0
    else {
        if (isNull(node.subnode.length))
          return 0
        else
          return node.subnode.length
    }
}

function search_l2node_num(node) {
    var num = 0
    if (isNull(node) || isNull(node.subnode))
        return 0
    else {
        for (var i = 0; i < node.subnode.length; i++) {
            num += search_l1node_num(node.subnode[i])
        }
        return num
    }
}

function search_l3node_num(node) {
    var num = 0
    if (isNull(node) || isNull(node.subnode))
        return 0
    else {
        for (var i = 0; i < node.subnode.length; i++) {
            num += search_l2node_num(node.subnode[i])
        }
        return num
    }
}
  
  
var root = {}
root.openId = "xxxx0"
create_tree(root, 2)
console.log(root)
node = search_node(root, "xxxx12")
console.log(node)
console.log(search_l1node_num(node))
console.log(search_l2node_num(root))
console.log(search_l3node_num(root))
