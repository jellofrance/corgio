// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000303000000000000000000030300000000000000000000000000000000060000000000000000000000000000000000000000000000000003030000000000000000000000000003030000000000000006000000000000000103030400030300000303000000000000000000000000000000000000000303000000000000000303000600000000000001020202050000000000000000000000000000000000000000000000000000000000000000000000000000060303030303030202020205000000000000000000000000000000000000000000000000000000000000000000000000000006`, img`
..................................................
..................................................
..................................................
....................22.........22.................
.........................22.............22........
.......2222.22..22...................22.......22..
......22222.......................................
22222222222.......................................
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
