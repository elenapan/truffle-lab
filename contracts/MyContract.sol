pragma solidity ^0.5.0;

contract MyContract {

    struct Post {
        string title;
        string url;
        address author;
        uint upvotes;
    }

    Post[] public posts;

    event NewPost(string title, address author);

    function createPost(string memory _title, string memory _url) public {
        posts.push(Post(_title, _url, msg.sender, 0));
        emit NewPost(_title, msg.sender);
    }

    function getNumberOfPosts() public view returns(uint) {
        return posts.length;
    }

    function upvotePost(uint _postId) public {
        posts[_postId].upvotes++;
    }
}
