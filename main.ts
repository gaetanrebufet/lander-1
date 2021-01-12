namespace SpriteKind {
    export const Thrustkind = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        land()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -400
    animation.runImageAnimation(
    thrust,
    [img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . 4 4 4 4 . . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . 4 4 . 4 4 4 . . . . . . 
        . . . 4 4 4 . 4 . 4 . . . . . . 
        . . . 4 4 . . 4 . 4 4 . . . . . 
        . . . . . . 4 4 . . 4 . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . 4 4 4 4 . . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 2 2 4 4 . . . . . . . 
        . . . . 4 2 2 4 . . . . . . . . 
        . . . . 4 4 2 4 4 . . . . . . . 
        . 4 4 4 4 2 2 4 4 4 . . . . . . 
        . . . . 4 2 2 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 . . . . . . . 
        . 4 4 4 . . . . 4 . . . . . . . 
        . . 4 . . . . . 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    info.changeLifeBy(-1)
    thrust_x_shift = 2
})
function Start () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccbbbbbbbbddddddddddd1111111111111111111111111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbbbdddddddddd11111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbbbdddddddddd11111111111111111111111
        ffffaffffffffffafffffaafffffafffffffffffffffffaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbbbddddddddd111111111111111111111
        ffffafffffffffafafffffaaffffaffaaaaffffaaaaaffaffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbbbbddddddd1111111111111111111
        ffffafffffffffafafffffafafffaffaffaafffaffffffaffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccbbbbbbbbddddddddd111111111111111
        ffffaffffffffafffaffffafafffaffafffaaffaffffffaffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccbbbbbbbbdddddddd1111111111111
        ffffaffffffffaaaaaffffaffaffaffaffffaffaaaffffaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbddddddddddd11111111
        ffffafffffffaffffaffffafffafaffaffffaffaffffffaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbdddddddddd111111
        ffffafffffffafffffafffaffffaaffaffffaffaffffffafaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbbbbbbdddddddddd111
        ffffaffffffaffffffafffafffffaffafaaafffaffffffafffaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbbbbbbdddddddddd
        ffffaffffffafffffffafffffffffffaaafffffaffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccbbbbbbbbbdddddd
        ffffaaaaaafffffffffffffffffffffffffffffaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccbbbbbbbbdddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbbbbbbd
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccbbb
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffcfffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffcffffffcbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcbcccccccccfffcfffffdeedffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfcbcccccccfffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccccccccbccccccccffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbcbcccccffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccbcccccbcccccccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffcfbcccccccccccbccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffcdccbccccbccccbcccccccbfccccfffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffccbbbbccccccbbcccccbcbcccccffcccffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffccfffcbbccbbbccccccbccccbbcccccccffcccffcccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcfcccccbbbbbbbccccccccccbbccbccccccccccccfccbcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffcbbcccddbbbbbcccccccccccbccccccbcccccccfcccccccfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffcfffbbbbbcccccccccccccccccccbcccccccccccccffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffccccccccccccbcccccccffffccccccccccccffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcccccccccffffbccccfffffffffccccccbccfffffffffffcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffdccccffffffffccccffffffffffffcccccfffffffffffffcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffccccffffffffffccffffffcffffffffccffffffffcfffffccffccfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffcffffffffffffccfffcbccffffcffffffffffffcfffffffccfccfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcbffffffffffffcfcbccccccfffffffcffffffffcfffffffcfffcc1bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfccccccccfffffffffffffffcffffffffcffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffcccccccffffffffbffffffcfffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcffccccccffffffccccccccfffffffffffffcffffffffffccbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcfbccccffffffcfffccccccccffcfffffbffffcfffcfffffffb11ddcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffffccccccccbfffffffffffbffccffffffffb1ddd1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbcfffffffffffffccfffccfffffffcccdbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcccbffffffffffffcbcfffffffffffffcfccfffffccffffffccfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffffffffffffffffffffcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbefffcfffffffffffffffffffffffffffcfffffffbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffeffffcffffffffffffffffffffffffbcfffccfffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffbfffffcffffffffffffffffffcffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffcffffffffffffffffffffffffffecfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffccfffffffffffffffffffcbbcefeeebeffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffffffffffffffffffffccfffffffffffffffffffffcccffceefecbfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffccfffffffffecffcffffffffffffffffffffffffffffeeffffebffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffecfffffffffffffffffffffffffffffffeeffffeedfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffccfcebbcffceeffffffffffffffffffffffffffffffceffffffeebffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffffccfceeebfebbbffffffffffffffffffffffffffffffeefcffffffedfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdfffffefeffefffffffffcffffffffffffffffffffeefffffffffbbffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffebbcdeeffceefeebcffffffffffffffffffffffffffffecfefffffffffbbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffebbcbceefefffffeefffffcffffffffffffffffffffffececffffffffffbbffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffebbcdcebefeffeccbfffffcfffffffffffffffffffffceffffffffffffffedfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffcffffefffffffffffe4bcbeeccfceceefbcfffffcfffffcffffffffffffffeeffffffffffffffeedffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffbbbdbeeeceeeceebeeeeeeeffffffffffffffffffffefffffffffffffffffbbfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffebcdbbeeeebeececebeebeefffffccfcffffffffffceffffffffffffffffffbdffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffebfdbefeebbececebeeebeeefffffcccffffffcffffccfffffffffffffffffbbbfffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffcbfddcefeebdcceceeeeeeeefffffcccccfccccccfccb1cccffffffffffffffebcffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefbbeeeebeebeeeebecebbeccfccfccccccccccccccccecdddcffffcccbcbcceecfffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffddcfffffffffffffbfbbcffccceeeeeeccccbeecccccccccccccccbcbdbbedbbdbccddddddbbdb1ceecffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffddcebbeb4deecccccceebecccccccccccd111ddbdeccbbcffccbcffcddcffcfceefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffffefbdeeceeeeeeeeeeecceebcbdbcddcdbbbd111d1d1ddd1bdddbbcffcfffffffffeeeffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffceefffffffffffffffefbdceeeeeeeeeeeeeccbddd1111dbbdbb1bb1bbddbcccbccfffffffffffffffffffecfffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbeceffffffffffffffcfbbbeeeeeeeecccfccbbbdcccccccddbdddecbbeccccccffffffffffffffffffffffefffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcedefeefffccffffcffcccbdbeeeceeefcfffcccccccccbbedd1dddeececccffccffffffffffffffffffffffffbefffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffceefcfecfceeefccccccccbdbebeebbccfcbcccecccceddbd1d1dbcbbcbcfcffffccfffffffffffffffffffffffbeffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcefffffeccf4bcbbbcccbebdbcbbddbcbcbeebecccccccccdddd111111bcffffffffffffffffffffffffffffffffeffcebefcffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbcefffffececececbccbcbecbbbbbbbccceb4e4ccccccccccd1111111dbccfffffffffffffffffffffffffffffffffeeebebfcffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffeefffffceccfeecccbcccccdbbbccceececcbbbccccbbd1ddd1111dbbbbccffffffffffffffffffffffffffffffccbbbddbefffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffeefffffcceffeeccccccbbbbbccccebbcbbddbccccbdbdbdbdd1dcccccccffffffffffffffffffffffffffffcccdb11dbcfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffbfeeffffffcbeceebccbddcdbbbbcccbbd1dbbcccccccdbbbdddddccccccffffffffffffffffffffffffffffffb11d1dbcfffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffbceebfffffcceceecbbdbbcbbdbbbd111dbd1dbccccccbbbbdddbdfffffffffffffffffffffffffffffffffffffffecffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffccceecfffffccbddebdbecbcccddd1111ddddddbbcccccbbbbbddbdcffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcccceeccffffcbcbcebd1dbbbbbbddd111d1dbdddbbccccccdbbdbbbbfffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffccccceecffffcbfcecded1ddddcbddbd11dd111ddbbccccccccbbbcdcffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcccccdceebfffbcceebbd4eedbbcb11bbd1111dbbbbbbccccccccccccccefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcccccccbcefcffcceeeccedeccdeccbddbdbbcccccbcccccccccccccccccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffcccccccccccecfcd11bbbeccdbcccccccccbdbccccccccccccccccccccccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffccccccccccccecbcccffffffcbdcccccccccbdbccbdccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffccccccccccbcbbccffffffffffffffffcccccebbbbccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcccccccccdcecfdffffffffcffffffffcbbddbbebcb1cbccccccffffffffffffffcfffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcccccccecdeeeffcffffffffffbccbbebbbddd1cffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcccccfcf1bcdfcffffffffffffeccccb11b1dccffffffffffffffffffffffffccfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcffcfcedbcfffffffffffffffffebdddbcccfffffffffffffffffffffffffcccccdcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcfcebfffffffffffffffffffffffffccffffffffffffffffffffffffccbbd1dbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffecfffffffffffffffffffffffffffcfffffffffffffffffffffffbd11d1dcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffcffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffceffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffecffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcceccccb11cfffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcccbdbd11dfffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffccb111dcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcbcccccffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.showLongText("Try to land  safely while avoiding asteroids!", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    Gravity = 100
    tiles.setTilemap(tiles.createTilemap(hex`200040000505050505050505050505050505050505050505050505050505050505050505000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000303000000000000000000000000000000000004000400000000000003000000000000000000000000000000000000000000000400040000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000040000000000000000000000000000040000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000040000000000000000000000000000000400000000000000000000000000000004000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000030300000000000000000000000000000000000000000000000000000000000000000000000000040000030000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000001000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000003000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000101000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000001000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000004010000000300000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202`, img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        22222222222222222222222222222222
        `, [myTiles.transparency16,sprites.castle.rock0,sprites.builtin.brick,sprites.castle.rock1,sprites.castle.rock2,sprites.builtin.oceanSand12], TileScale.Sixteen))
    mySprite = sprites.create(img`
        . . . . . e e c c e e . . . . . 
        . . . . e 2 2 d d 2 2 e . . . . 
        . . . 2 c d a a a a d c 2 . . . 
        . . e 2 c a 2 2 2 2 a c 2 e . . 
        . . f 2 2 d 2 2 2 2 d c 2 f . . 
        . . f 2 2 4 2 2 2 2 2 2 2 f . . 
        . 2 f 2 2 4 2 2 2 2 2 2 2 f 2 . 
        . 2 f 2 c 2 4 4 2 2 2 c 2 f 2 . 
        d 2 e 2 c e c c c c e c 2 e 2 . 
        2 2 e 2 e c b b b b c e 2 e 2 2 
        2 2 e 2 e b b b b b b e 2 e 2 2 
        2 . e e e e e e e e e e e e . 2 
        2 . . e 4 e e e e e e 4 e . . 2 
        . . . 4 4 4 e e e e 4 4 4 . . . 
        . . . 4 4 4 e e e e 4 4 4 . . . 
        . . . 4 . 4 . . . . 4 . 4 . . . 
        `, SpriteKind.Player)
    mySprite.setVelocity(0, 0)
    mySprite.ay = Gravity
    mySprite.setFlag(SpriteFlag.StayInScreen, false)
    mySprite.setPosition(69, 0)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanSand12)
    info.startCountdown(60)
    mySprite.setFlag(SpriteFlag.ShowPhysics, false)
    thrust = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Thrustkind)
    thrust.setFlag(SpriteFlag.Ghost, true)
    thrust_x_shift = 0
    info.setLife(100)
}
function land () {
    if (mySprite.vx < 10 && mySprite.vy < 100) {
        pause(1000)
        game.over(true)
    } else {
        destroy()
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 50
    animation.runImageAnimation(
    thrust,
    [img`
        . . . 4 . . . . . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        . . . 4 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . 4 . . . . . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        . . . . 4 4 . . . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        . . . 4 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 . . . . . . . . . . . 
        . . . . 4 4 . . . . . . . . . . 
        . . . . 4 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    info.changeLifeBy(-1)
    thrust_x_shift = -5
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    stopThrust()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    stopThrust()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = -50
    animation.runImageAnimation(
    thrust,
    [img`
        . . . . . . . . . . . . 4 . . . 
        . . . . . . . . . . . 4 4 4 . . 
        . . . . . . . . . . 4 4 4 4 4 4 
        . . . . . . . . . . . 4 4 4 . . 
        . . . . . . . . . . . . 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 4 . . . 
        . . . . . . . . . . . 4 4 4 . . 
        . . . . . . . . . . 4 4 . . . . 
        . . . . . . . . . . . 4 4 4 . . 
        . . . . . . . . . . . . 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 4 . . . . 
        . . . . . . . . . . 4 4 . . . . 
        . . . . . . . . . . . 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    thrust_x_shift = 5
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = Gravity
    stopThrust()
})
function stopThrust () {
    thrust_x_shift = 0
    animation.stopAnimation(animation.AnimationTypes.All, thrust)
    thrust.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
function destroy () {
    mySprite.destroy(effects.disintegrate, 1)
    timer.after(1000, function () {
        game.over(false)
    })
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock2, function (sprite, location) {
    destroy()
})
let Gravity = 0
let thrust_x_shift = 0
let thrust: Sprite = null
let mySprite: Sprite = null
Start()
game.onUpdate(function () {
    thrust.setPosition(mySprite.x + thrust_x_shift, mySprite.y + 10)
})
