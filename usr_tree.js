function get_all_subnode(openId) {
	return [
		{openId: "xxxx1", name:"yyyy1"},
		{openId: "xxxx2", name:"yyyy2"},
		{openId: "xxxx3", name:"yyyy3"}
	]
}

function create_tree(root, max) {
    if (max < 0)
       return
	root.subnode = get_all_subnode(root.openId)
    for (var i = 0; i < root.subnode.length; i++)
        //console.log(root.subnode[i])
        create_tree(root.subnode[i], max - 1)
}

function search_node(root, openId) {
    var ret = null
    if (root.subnode == null)
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

var root = {}
root.openId = "xxxx0"
create_tree(root, 2)
node = search_node(root, "xxxx2")
console.log(node)
