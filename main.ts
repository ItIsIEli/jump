namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const bob = SpriteKind.create()
}
let list: tiles.Location[] = []
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 4
    mySprite.setImage(img`
        . . f f f . . . . . . . . . . . 
        . f f f f f f f f . . . . f . . 
        . f e d f e d f e f . . f a f . 
        . f e d f e d f e f . f c a c f 
        . f e d d e d d e f . f c c c f 
        . f e e e e e e e f f f f c f . 
        . f e e e e e e e e e e e e e f 
        . . f e e f f f f f f f f f f . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e e f e f . . . . . 
        . . f e e e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PEW_PEW_GO_THAT_WAY == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c . c . . . . . . . . . . . . 
            . . c . c . . . . . . a a . . . 
            . e e e e e e e e e e e a a . . 
            . . c . c . . . . . . a . . . . 
            . c . c . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
    } else if (PEW_PEW_GO_THAT_WAY == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . c . c . 
            . . . a a . . . . . . c . c . . 
            . . a a e e e e e e e e e e e . 
            . . . . a . . . . . . c . c . . 
            . . . . . . . . . . . . c . c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
    } else if (PEW_PEW_GO_THAT_WAY == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c . e . c . . . . . 
            . . . . . . . c e c . . . . . . 
            . . . . . . c . e . c . . . . . 
            . . . . . . . c e c . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . a e a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 100)
    } else if (PEW_PEW_GO_THAT_WAY == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . a e a . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . c . e . c . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . c . e . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 3
    mySprite.setImage(img`
        . . . . . . . . . . . f f f . . 
        . . f . . . . f f f f f f f f . 
        . f a f . . f e d d e d d e f . 
        f c a c f . f e f d e f d e f . 
        f c c c f . f e f d e f d e f . 
        . f c f f f f e e e e e e e f . 
        f e e e e e e e e e e e e e f . 
        . f f f f f f f f f f e e f . . 
        . . . . . f e e e e e e e f . . 
        . . . . . f e f e e e e e f . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e f . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f e e e e e e e f . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bob = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f f 2 f f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f f 2 f f . . . . . . 
        . . f f . f f 2 f f . f f . . . 
        f . . f f . d f d . f f . . f . 
        . f . . f f f f f f f . . f . . 
        . . f f f d f f f d f f f . . . 
        . . . f . f d f d f . f . . . . 
        f f f . . f . . . f . . f f f . 
        . . . . f . . . . . f . . . . . 
        `, SpriteKind.Enemy)
    bob.setPosition(mySprite.x + 60, mySprite.y + -60)
    bob.follow(mySprite, 60)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 1
    mySprite.setImage(img`
        . . f f f . . . . . . . . . . . 
        . f f f f f f f f . . . . f . . 
        . f e d d e d d e f . . f a f . 
        . f e d f e d f e f . f c a c f 
        . f e d f e d f e f . f c c c f 
        . f e e e e e e e f f f f c f . 
        . f e e e e e e e e e e e e e f 
        . . f e e f f f f f f f f f f . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e e f e f . . . . . 
        . . f e e e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 2
    mySprite.setImage(img`
        . . f f f . . . . . . . . . . . 
        . f f f f f f f f . . . . f . . 
        . f e d d e d d e f . . f a f . 
        . f e d d e d d e f . f c a c f 
        . f e f f e f f e f . f c c c f 
        . f e e e e e e e f f f f c f . 
        . f e e e e e e e e e e e e e f 
        . . f e e f f f f f f f f f f . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e e f e f . . . . . 
        . . f e e e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
let bob: Sprite = null
let projectile: Sprite = null
let Door: Sprite = null
let PEW_PEW_GO_THAT_WAY = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaccaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaa
    acccaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaacaacccaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaacaacccaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaacaacccaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaa6a
    aacaaccaaaccaaccaaaaccaaaaaaaaaaaaaaaaccaacaaccaaaccaaccaaaaccaaaaaaaaaaaaaaaaccaacaaccaaaccaaccaaaaccaaaaaaaaaaaaaaaaccaacaaccaaaccaaccaaaaccaaaaaaaaaaaaaaaa66
    ccccccaacaaccaccaacaccaaaaaaaaaaaaaacc7cccccccaacaaccaccaacaccaaaaaaaaaaaaaacc7cccccccaacaaccaccaacaccaaaaaaaaaaaaaacc7cccccccaacaaccaccaacaccaaaaaaaaaaaaaacc76
    cccccaaaccacccccaccccaaaaaaaaaaaaacccc77cccccaaaccacccccaccccaaaaaaaaaaaaacccc77cccccaaaccacccccaccccaaaaaaaaaaaaacccc77cccccaaaccacccccaccccaaaaaaaaaaaaacccc77
    cccccacccccccc7cccccaaacaaaaaacccaaaccc7cccccacccccccc7cccccaaacaaaaaacccaaaccc7cccccacccccccc7cccccaaacaaaaaacccaaaccc7cccccacccccccc7cccccaaacaaaaaacccaaaccc7
    ccccccccccccc77cc77cccccaacccaaaccaaacccccccccccccccc77cc77cccccaacccaaaccaaacccccccccccccccc77cc77cccccaacccaaaccaaacccccccccccccccc77cc77cccccaacccaaaccaaaccc
    ccccccccccccc7cccc77cccaac77ccaaccccccccccccccccccccc7cccc77cccaac77ccaaccccccccccccccccccccc7cccc77cccaac77ccaaccccccccccccccccccccc7cccc77cccaac77ccaacccccccc
    ccbccccccccccccccccccccacc777ccacccccccccceccccccccccccccccccccacc777ccacccccccccceccccccccccccccccccccacc777ccacccccccccceccccccccccccccccccccacc777ccacccccccc
    ccbcccccccccccccccccccccce677cccccccccccccecccccccccccccccccccccce677cccccccccccccecccccccccccccccccccccce677cccccccccccccecccccccccccccccccccccce677ccccccccccc
    ccbccccccccccccccccccccccee67ccccccccccccceccccccccccccccccccccccee67ccccccccccccceccccccccccccccccccccccee67ccccccccccccceccccccccccccccccccccccee67ccccccccccc
    ccbccccccc6eecccccccc66cceeecccccccccccccceccccccc6eecccccccc66cceeecccccccccccccceccccccc6eecccccccc66cceeecccccccccccccceccccccc6eecccccccc66cceeecccccccccccc
    ccbcccccc66beeccccccbb6ccceeccccccccccccccecccccc666eecccccc666ccceeccccccccccccccecccccc666eecccccc666ccceeccccccccccccccecccccc666eecccccc666ccceecccccccccccc
    cbbccc9cc6666eeec6cccb66cceeccccccccccccceeccc9cc6666eeec6cccb66cceeccccccccccccceeccc9cc6666eeec6cccb66cceeccccccccccccceeccc9cc6666eeec6cccb66cceecccccccccccc
    cbbcccb6cc66b6eee66ccb66cceeecccccccccccceecccb6cc66b6eee66ccb66cceeecccccccccccceecccb6cc66b6eee66ccb66cceeecccccccccccceecccb6cc66b6eee66ccb66cceeeccccccccccc
    cbbccbb6666b666ee66bbb6cccceecccccccccccceeccbb6666b666ee66bbb6cccceecccccccccccceeccbb6666b666ee66bbb6cccceecccccccccccceeccbb6666b666ee66bbb6cccceeccccccccccc
    bbbcccb6666b666ee66bb66cc6deeecc6ccccccceeecccb6666b666ee66bb66cc6beeecc6ccccccceeecccb6666b666ee66bb66cc6beeecc6ccccccceeecccb6666b666ee66bb66cc6beeecc6ccccccc
    bbbbbcb6666b666eee6bb666666eeecc666ccccceeebbcb6666b666eee6bb666666eeecc666ccccceeebbcb6666b666eee6bb666666eeecc666ccccceeebbcb6666b666eee6bb666666eeecc666ccccc
    bbb6bbb6666b6666ee6bb6666b6eee6c66cccccceee6bbb6666b6666ee6bb6666b6eee6c66cccccceee6bbb6666b6666ee6bb6666b6eee6c66cccccceee6bbb6666b6666ee6bb6666b6eee6c66cccccc
    bbb6bbb666b66666eeebb6666b6eee6666cc66cceee6bbb666b66666eeebb6666b6eee6666cc66cceee6bbb666b66666eeebb6666b6eee6666cc66cceee6bbb666b66666eeebb6666b6eee6666cc66cc
    bbbbbbb666b666666eebb6666b6eeee6666b666ceeebbbb666b666666eebb6666b6eeee6666b666ceeebbbb666b666666eebb6666b6eeee6666b666ceeebbbb666b666666eebb6666b6eeee6666b666c
    bb6bbbb66bb6666666ee6666bb6eeee6666b6666ee6bbbb66bb6666666ee6666bb6eeee6666b6666ee6bbbb66bb6666666ee6666bb6eeee6666b6666ee6bbbb66bb6666666ee6666bb6eeee6666b6666
    bb66bbbbb666666666eee666b666eee6666b6666ee66bbbbb666666666eee666b666eee6666b6666ee66bbbbb666666666eee666b666eee6666b6666ee66bbbbb666666666eee666b666eee6666b6666
    bb66bbbb6666666666beeeebb666eee6666b666eee66bbbb6666666666beeeebb666eee6666b666eee66bbbb6666666666beeeebb666eee6666b666eee66bbbb6666666666beeeebb666eee6666b666e
    bb66bbb66666666666bbeeee6666eeee666b666eee66bbb66666666666bbeeee6666eeee666b666eee66bbb66666666666bbeeee6666eeee666b666eee66bbb66666666666bbeeee6666eeee666b666e
    bb66bbb66666666666bbeeeeee66eeee666b666eee66bbb66666666666bbeeeeee66eeee666b666eee66bbb66666666666bbeeeeee66eeee666b666eee66bbb66666666666bbeeeeee66eeee666b666e
    b6666bb6666666666bbbbeeeeeeeeeeee666b66ee6666bb6666666666bbbbeeeeeeeeeeee666b66ee6666bb6666666666bbbbeeeeeeeeeeee666b66ee6666bb6666666666bbbbeeeeeeeeeeee666b66e
    b6666bbb666666666bb66666eeeeeeeee666b66ee6666bbb666666666bb66666eeeeeeeee666b66ee6666bbb666666666bb66666eeeeeeeee666b66ee6666bbb666666666bb66666eeeeeeeee666b66e
    b6666bbbb66666666bb666666eeeeeeee666b6eee6666bbbb66666666bb666666eeeeeeee666b6eee6666bbbb66666666bb666666eeeeeeee666b6eee6666bbbb66666666bb666666eeeeeeee666b6ee
    b6666bbbbb666666bbb6666666eeeeeee666beeee6666bbbbb666666bbb6666666eeeeeee666beeee6666bbbbb666666bbb6666666eeeeeee666beeee6666bbbbb666666bbb6666666eeeeeee666beee
    bb66666bbbbb6666bbb666666666eeeee666eeeebb66666bbbbb6666bbb666666666eeeee666eeeebb66666bbbbb6666bbb666666666eeeee666eeeebb66666bbbbb6666bbb666666666eeeee666eeee
    6b66666bbbbbbb6bbb6666666666eeeee66eeee66b66666bbbbbbb6bbb6666666666eeeee66eeee66b66666bbbbbbb6bbb6666666666eeeee66eeee66b66666bbbbbbb6bbb6666666666eeeee66eeee6
    6b666666bbbbbbbbbb6666666666eeeee66eee666b666666bbbbbbbbbb6666666666eeeee66eee666b666666bbbbbbbbbb6666666666eeeee66eee666b666666bbbbbbbbbb6666666666eeeee66eee66
    6b666666bbbbbbbbb66666666666eeeee66ee6666b666666bbbbbbbbb66666666666eeeee66ee6666b666666bbbbbbbbb66666666666eeeee66ee6666b666666bbbbbbbbb66666666666eeeee66ee666
    6bb66666bbbbbbb6666666666666eeeee66eeb666bb66666bbbbbbb6666666666666eeeee66eeb666bb66666bbbbbbb6666666666666eeeee66eeb666bb66666bbbbbbb6666666666666eeeee66eeb66
    66bb6666bbbbbb66666666666666eeeee66eeb6666bb6666bbbbbb66666666666666eeeee66eeb6666bb6666bbbbbb66666666666666eeeee66eeb6666bb6666bbbbbb66666666666666eeeee66eeb66
    66bbb666bbbbbb66666666666666eeeee6eeebb666bbb666bbbbbb66666666666666eeeee6eeebb666bbb666bbbbbb66666666666666eeeee6eeebb666bbb666bbbbbb66666666666666eeeee6eeebb6
    6666bbbbbbbbbb6666666666666eeeeee6eee6b66666bbbbbbbbbb6666666666666eeeeee6eee6b66666bbbbbbbbbb6666666666666eeeeee6eee6b66666bbbbbbbbbb6666666666666eeeeee6eee6b6
    6666bbbbbbbbbb6666666666666eeeeeeeee66b66666bbbbbbbbbb6666666666666eeeeeeeee66b66666bbbbbbbbbb6666666666666eeeeeeeee66b66666bbbbbbbbbb6666666666666eeeeeeeee66b6
    666666bbbbbbbb6666666666666eeeeeeeee66bb666666bbbbbbbb6666666666666eeeeeeeee66bb666666bbbbbbbb6666666666666eeeeeeeee66bb666666bbbbbbbb6666666666666eeeeeeeee66bb
    b6666666bbbbbb666666666666eeeeeeeee6666bb6666666bbbbbb666666666666eeeeeeeee6666bb6666666bbbbbb666666666666eeeeeeeee6666bb6666666bbbbbb666666666666eeeeeeeee6666b
    bb6666666bbbbb666666666666eeeeeeeee66666bb6666666bbbbb666666666666eeeeeeeee66666bb6666666bbbbb666666666666eeeeeeeee66666bb6666666bbbbb666666666666eeeeeeeee66666
    bb6666666bbbbb666666666666eeeeeeee666666bb6666666bbbbb666666666666eeeeeeee666666bb6666666bbbbb666666666666eeeeeeee666666bb6666666bbbbb666666666666eeeeeeee666666
    6b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee666666
    6b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee666666
    6b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee666666
    6b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee6666666b6666666bbbbb66666666666eeeeeeeee666666
    6bb666666bbbbb66666666666eeeeeeee66666666bb666666bbbbb66666666666eeeeeeee66666666bb666666bbbbb66666666666eeeeeeee66666666bb666666bbbbb66666666666eeeeeeee6666666
    6bb666666bbbbb66666666666eeeeeeee66666666bb666666bbbbb66666666666eeeeeeee66666666bb666666bbbbb66666666666eeeeeeee66666666bb666666bbbbb66666666666eeeeeeee6666666
    bbb666666bbbbb66666666666eeeeeeee6666666bbb666666bbbbb66666666666eeeeeeee6666666bbb666666bbbbb66666666666eeeeeeee6666666bbb666666bbbbb66666666666eeeeeeee6666666
    bb6666666bbbbb66666666666eeeeeeee6666666bb6666666bbbbb66666666666eeeeeeee6666666bb6666666bbbbb66666666666eeeeeeee6666666bb6666666bbbbb66666666666eeeeeeee6666666
    bb6666666bbbbbb6666666666eeeeeeee6666666bb6666666bbbbbb6666666666eeeeeeee6666666bb6666666bbbbbb6666666666eeeeeeee6666666bb6666666bbbbbb6666666666eeeeeeee6666666
    bb6666666bbbbbb6666666666eeeeeeee6666666bb6666666bbbbbb6666666666eeeeeeee6666666bb6666666bbbbbb6666666666eeeeeeee6666666bb6666666bbbbbb6666666666eeeeeeee6666666
    bb6666666bbbbbb6666666666eeeeeee66666666bb6666666bbbbbb6666666666eeeeeee66666666bb6666666bbbbbb6666666666eeeeeee66666666bb6666666bbbbbb6666666666eeeeeee66666666
    b66666666bbbbbb6666666666eeeeeee6666666bb66666666bbbbbb6666666666eeeeeee6666666bb66666666bbbbbb6666666666eeeeeee6666666bb66666666bbbbbb6666666666eeeeeee6666666b
    b66666666bbbbbb6666666666eeeeeee666666bbb66666666bbbbbb6666666666eeeeeee666666bbb66666666bbbbbb6666666666eeeeeee666666bbb66666666bbbbbb6666666666eeeeeee666666bb
    b66666666bbbbbb6666666666eeeeeee666666bbb66666666bbbbbb6666666666eeeeeee666666bbb66666666bbbbbb6666666666eeeeeee666666bbb66666666bbbbbb6666666666eeeeeee666666bb
    666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb
    666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb
    666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb666666666bbbbbbb666666666eeeeeee66666bbb
    666666666bbbbbbbb66666666eeeeeee6666bbbb666666666bbbbbbbb66666666eeeeeee6666bbbb666666666bbbbbbbb66666666eeeeeee6666bbbb666666666bbbbbbbb66666666eeeeeee6666bbbb
    666666666bbbbbbbb66666666eeeeeee6666bbbb666666666bbbbbbbb66666666eeeeeee6666bbbb666666666bbbbbbbb66666666eeeeeee6666bbbb666666666bbbbbbbb66666666eeeeeee6666bbbb
    666666666bbbbbbbb66666666eeeeeee6666bbb6666666666bbbbbbbb66666666eeeeeee6666bbb6666666666bbbbbbbb66666666eeeeeee6666bbb6666666666bbbbbbbb66666666eeeeeee6666bbb9
    6666666666bbbbbbbb666666eeeeeeee6666bbb66666666666bbbbbbbb666666eeeeeeee6666bbb66666666666bbbbbbbb666666eeeeeeee6666bbb66666666666bbbbbbbb666666eeeeeeee6666bbb9
    b666666666bbbbbbbb666666eeeeeeeebbbbbbbbb666666666bbbbbbbb666666eeeeeeeebbbbbbbbb666666666bbbbbbbb666666eeeeeeeebbbbbbbbb666666666bbbbbbbb666666eeeeeeeebbbbbbbb
    bbbbb66666bbbbbbbb666666eeeeeeeeebbbbbbbbbbbb66666bbbbbbbb666666eeeeeeeeebbbbbbbbbbbb66666bbbbbbbb666666eeeeeeeeebbbbbbbbbbbb66666bbbbbbbb666666eeeeeeeeebbbbbbb
    bbbbbbbb66bbbbbbbbb666bbeeeeeeeeebbbbbbbbbbbbbbb66bbbbbbbbb666bbeeeeeeeeebbbbbbbbbbbbbbb66bbbbbbbbb666bbeeeeeeeeebbbbbbbbbbbbbbb66bbbbbbbbb666bbeeeeeeeeebbbbbbb
    bbbbbbbbbbbbbbbbbbb6bbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbb6bbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbb6bbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbb6bbbbeeeeeeeeebbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeebbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbb
    bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbb
    bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbb
    bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbb
    bbbbbbbbbbbbbbbbbbbaaaaaaaaaaeeeeeebbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaeeeeeebbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaeeeeeebbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaeeeeeebbbbb
    bbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaebbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaebbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaebbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaebbbbb
    bbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaabbbb
    bbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabb
    bbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
mySprite = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    . f f f f f f f f . . . . f . . 
    . f e d d e d d e f . . f a f . 
    . f e d f e d f e f . f c a c f 
    . f e d f e d f e f . f c c c f 
    . f e e e e e e e f f f f c f . 
    . f e e e e e e e e e e e e e f 
    . . f e e f f f f f f f f f f . 
    . . f e e e e e e e f . . . . . 
    . . f e e e e e f e f . . . . . 
    . . f e e e e e e e f . . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(8, 120)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
PEW_PEW_GO_THAT_WAY = 1
for (let value of list) {
    Door = sprites.create(assets.tile`myTile1`, SpriteKind.Door)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
