let tableSTR = `
<table id="monsters-table" class="border">
    <thead>
        <tr>
            <th data-sort="string">Creature <i class="fas fa-sort"></i></th>
            <th data-sort="float" data-sort-multicolumn="1,1">CR <i class="fas fa-sort"></i></th>
            <th data-sort="string" data-sort-multicolumn="1,1" class="colT">Type <i class="fas fa-sort"></i></th>
            <th data-sort="int" data-sort-multicolumn="1,1" class="colD">Size <i class="fas fa-sort"></i></th>
            <th data-sort="int" data-sort-multicolumn="1,1" class="colP">AC <i class="fas fa-sort"></i></th>
            <th data-sort="int" data-sort-multicolumn="1,1" class="colP">hp <i class="fas fa-sort"></i></th>
            <th data-sort="string" data-sort-multicolumn="1,1" class="colV">Speed <i class="fas fa-sort"></i></th>
            <th data-sort="string" data-sort-multicolumn="1,1" class="colA">Alignment <i class="fas fa-sort"></i>
            </th>
            <th data-sort="string" data-sort-multicolumn="1,1" class="colL">Legendary <i class="fas fa-sort"></i>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=aarakocra"
                    target='_blank'>Aarakocra</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Aarakocra)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV">fly</td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=aberrant-spirit" class='incomplet'
                    target='_blank'>Aberrant Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">40</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=abjurer-wizard" class='incomplet'
                    target='_blank'>Abjurer Wizard</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">104</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=aboleth" target='_blank'>Aboleth</a>
            </td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">135</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=abominable-yeti"
                    target='_blank'>Abominable Yeti</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">137</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=acererak" class='incomplet'
                    target='_blank'>Acererak</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">21</td>
            <td class="colP right">285</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=acolyte" target='_blank'>Acolyte</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-amethyst-dragon"
                    class='incomplet' target='_blank'>Adult Amethyst Dragon</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">229</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-black-dragon"
                    target='_blank'>Adult Black Dragon</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">195</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-blue-dracolich"
                    target='_blank'>Adult Blue Dracolich</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">225</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-blue-dragon"
                    target='_blank'>Adult Blue Dragon</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">225</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-brass-dragon"
                    target='_blank'>Adult Brass Dragon</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">172</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-bronze-dragon"
                    target='_blank'>Adult Bronze Dragon</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">212</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-copper-dragon"
                    target='_blank'>Adult Copper Dragon</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">184</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-crystal-dragon" class='incomplet'
                    target='_blank'>Adult Crystal Dragon</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">172</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-deep-dragon" class='incomplet'
                    target='_blank'>Adult Deep Dragon</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">147</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-emerald-dragon" class='incomplet'
                    target='_blank'>Adult Emerald Dragon</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">207</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-gold-dragon"
                    target='_blank'>Adult Gold Dragon</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">256</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-green-dragon"
                    target='_blank'>Adult Green Dragon</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">207</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-kruthik" class='incomplet'
                    target='_blank'>Adult Kruthik</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-moonstone-dragon"
                    class='incomplet' target='_blank'>Adult Moonstone Dragon</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">195</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-oblex" class='incomplet'
                    target='_blank'>Adult Oblex</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-red-dragon" target='_blank'>Adult
                    Red Dragon</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">256</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-sapphire-dragon"
                    class='incomplet' target='_blank'>Adult Sapphire Dragon</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">225</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-silver-dragon"
                    target='_blank'>Adult Silver Dragon</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">243</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-topaz-dragon" class='incomplet'
                    target='_blank'>Adult Topaz Dragon</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">210</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=adult-white-dragon"
                    target='_blank'>Adult White Dragon</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">200</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=air-elemental" target='_blank'>Air
                    Elemental</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">90</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=air-elemental-myrmidon"
                    class='incomplet' target='_blank'>Air Elemental Myrmidon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">117</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=alhoon" class='incomplet'
                    target='_blank'>Alhoon</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Undead (Mind Flayer, Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">150</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=alkilith" class='incomplet'
                    target='_blank'>Alkilith</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">168</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=allip" class='incomplet'
                    target='_blank'>Allip</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">40</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=allosaurus"
                    target='_blank'>Allosaurus</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">51</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=alustriel-silverhand"
                    target='_blank'>Alustriel Silverhand</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Humanoid (Human, Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">272</td>
            <td class="colV"></td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=amethyst-dragon-wyrmling"
                    class='incomplet' target='_blank'>Amethyst Dragon Wyrmling</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">75</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=amnizu" class='incomplet'
                    target='_blank'>Amnizu</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">21</td>
            <td class="colP right">202</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-amethyst-dragon"
                    class='incomplet' target='_blank'>Ancient Amethyst Dragon</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">444</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-black-dragon"
                    target='_blank'>Ancient Black Dragon</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">367</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-blue-dragon"
                    target='_blank'>Ancient Blue Dragon</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">481</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-brass-dragon"
                    target='_blank'>Ancient Brass Dragon</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">297</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-bronze-dragon"
                    target='_blank'>Ancient Bronze Dragon</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">444</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-copper-dragon"
                    target='_blank'>Ancient Copper Dragon</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">21</td>
            <td class="colP right">350</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-crystal-dragon"
                    class='incomplet' target='_blank'>Ancient Crystal Dragon</a></td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">222</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-deep-dragon" class='incomplet'
                    target='_blank'>Ancient Deep Dragon</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">201</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-dragon-turtle"
                    class='incomplet' target='_blank'>Ancient Dragon Turtle</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">409</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Mythic</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-emerald-dragon"
                    class='incomplet' target='_blank'>Ancient Emerald Dragon</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">332</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-gold-dragon"
                    target='_blank'>Ancient Gold Dragon</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">546</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-green-dragon"
                    target='_blank'>Ancient Green Dragon</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">21</td>
            <td class="colP right">385</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-moonstone-dragon"
                    class='incomplet' target='_blank'>Ancient Moonstone Dragon</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">330</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-red-dragon"
                    target='_blank'>Ancient Red Dragon</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">546</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-sapphire-dragon"
                    class='incomplet' target='_blank'>Ancient Sapphire Dragon</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">370</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-sea-serpent" class='incomplet'
                    target='_blank'>Ancient Sea Serpent</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">17</td>
            <td class="colP right">170</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-shadow" target='_blank'>Ancient
                    Shadow</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-silver-dragon"
                    target='_blank'>Ancient Silver Dragon</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">487</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-topaz-dragon" class='incomplet'
                    target='_blank'>Ancient Topaz Dragon</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">280</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ancient-white-dragon"
                    target='_blank'>Ancient White Dragon</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">333</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=androsphinx"
                    target='_blank'>Androsphinx</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">199</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=angry-sorrowsworn" class='incomplet'
                    target='_blank'>Angry Sorrowsworn</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">255</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=animated-armor"
                    target='_blank'>Animated Armor</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=animated-breath" class='incomplet'
                    target='_blank'>Animated Breath</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">95</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ankheg" target='_blank'>Ankheg</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ankylosaurus"
                    target='_blank'>Ankylosaurus</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">68</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=annis-hag" class='incomplet'
                    target='_blank'>Annis Hag</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">90</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ape" target='_blank'>Ape</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=apprentice-wizard"
                    target='_blank'>Apprentice Wizard</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=arcanaloth"
                    target='_blank'>Arcanaloth</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">104</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=archdruid"
                    target='_blank'>Archdruid</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Humanoid (Druid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">154</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=archer" target='_blank'>Archer</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=archmage" target='_blank'>Archmage</a>
            </td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">99</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=armanite" class='incomplet'
                    target='_blank'>Armanite</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">94</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=asmodeus" class='incomplet'
                    target='_blank'>Asmodeus</a></td>
            <td class="" data-sort-value="30.00">30</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">22</td>
            <td class="colP right">725</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=assassin" target='_blank'>Assassin</a>
            </td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">78</td>
            <td class="colV"></td>
            <td class="colA">any non-good alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=assassin-vine" class='incomplet'
                    target='_blank'>Assassin Vine</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=astral-dreadnought" class='incomplet'
                    target='_blank'>Astral Dreadnought</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Monstrosity (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">297</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=aurak-draconian" class='incomplet'
                    target='_blank'>Aurak Draconian</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Monstrosity (Sorcerer)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=aurochs" class='incomplet'
                    target='_blank'>Aurochs</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast (Cattle)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">38</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=autumn-eladrin" class='incomplet'
                    target='_blank'>Autumn Eladrin</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fey (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">165</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=avatar-of-death" target='_blank'>Avatar
                    of Death</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">0</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=awakened-shrub"
                    target='_blank'>Awakened Shrub</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">9</td>
            <td class="colP right">10</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=awakened-tree" target='_blank'>Awakened
                    Tree</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=axe-beak" target='_blank'>Axe
                    Beak</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=azer" target='_blank'>Azer</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=baalzebul" class='incomplet'
                    target='_blank'>Baalzebul</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">540</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=baaz-draconian" class='incomplet'
                    target='_blank'>Baaz Draconian</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=babau" class='incomplet'
                    target='_blank'>Babau</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">82</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=baboon" target='_blank'>Baboon</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">3</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=badger" target='_blank'>Badger</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">10</td>
            <td class="colP right">3</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bael" class='incomplet'
                    target='_blank'>Bael</a></td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">189</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bag-jelly" class='incomplet'
                    target='_blank'>Bag Jelly</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">8</td>
            <td class="colP right">42</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=balhannoth" class='incomplet'
                    target='_blank'>Balhannoth</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">114</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=balor" target='_blank'>Balor</a>
            </td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">262</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=banderhobb" class='incomplet'
                    target='_blank'>Banderhobb</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bandit" target='_blank'>Bandit</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">any non-lawful alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bandit-captain" target='_blank'>Bandit
                    Captain</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">65</td>
            <td class="colV"></td>
            <td class="colA">any non-lawful alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=banshee" target='_blank'>Banshee</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">58</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=baphomet" class='incomplet'
                    target='_blank'>Baphomet</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">22</td>
            <td class="colP right">319</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=barbed-devil" target='_blank'>Barbed
                    Devil</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">110</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bard" target='_blank'>Bard</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">44</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=barghest" class='incomplet'
                    target='_blank'>Barghest</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=barlgura" target='_blank'>Barlgura</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">68</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=barrowghast" class='incomplet'
                    target='_blank'>Barrowghast</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=basilisk" target='_blank'>Basilisk</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bat" target='_blank'>Bat</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bearded-devil" target='_blank'>Bearded
                    Devil</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=beast-of-the-land" class='incomplet'
                    target='_blank'>Beast of the Land</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">5</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=beast-of-the-sea" class='incomplet'
                    target='_blank'>Beast of the Sea</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">5</td>
            <td class="colV">swim</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=beast-of-the-sky" class='incomplet'
                    target='_blank'>Beast of the Sky</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">4</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=behir" target='_blank'>Behir</a>
            </td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">168</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=beholder" target='_blank'>Beholder</a>
            </td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">180</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=beholder-zombie" class='incomplet'
                    target='_blank'>Beholder Zombie</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">93</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bel" class='incomplet'
                    target='_blank'>Bel</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">364</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=belaphoss"
                    target='_blank'>Belaphoss</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">262</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=belial" class='incomplet'
                    target='_blank'>Belial</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">21</td>
            <td class="colP right">420</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=berbalang" class='incomplet'
                    target='_blank'>Berbalang</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">49</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=berserker"
                    target='_blank'>Berserker</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">any chaotic alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bestial-spirit" target='_blank'>Bestial
                    Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">20</td>
            <td class="colV">fly, swim</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bheur-hag" class='incomplet'
                    target='_blank'>Bheur Hag</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">91</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=black-abishai" class='incomplet'
                    target='_blank'>Black Abishai</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">58</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=black-bear" target='_blank'>Black
                    Bear</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=black-dragon-wyrmling"
                    target='_blank'>Black Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">33</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=black-gauntlet-of-bane"
                    class='incomplet' target='_blank'>Black Gauntlet of Bane</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">51</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=black-pudding" target='_blank'>Black
                    Pudding</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">7</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=blackguard"
                    target='_blank'>Blackguard</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Humanoid (Paladin)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">119</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=blink-dog" target='_blank'>Blink
                    Dog</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=blood-hawk" target='_blank'>Blood
                    Hawk</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">7</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=blue-abishai" class='incomplet'
                    target='_blank'>Blue Abishai</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Fiend (Devil, Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">202</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=blue-dragon-wyrmling"
                    target='_blank'>Blue Dragon Wyrmling</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">52</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=blue-slaad" target='_blank'>Blue
                    Slaad</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">123</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=boar" target='_blank'>Boar</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bodak" class='incomplet'
                    target='_blank'>Bodak</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=boggle" class='incomplet'
                    target='_blank'>Boggle</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bone-devil" target='_blank'>Bone
                    Devil</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">142</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bone-naga" target='_blank'>Bone
                    Naga</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=boneclaw" class='incomplet'
                    target='_blank'>Boneclaw</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">150</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bozak-draconian" class='incomplet'
                    target='_blank'>Bozak Draconian</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity (Sorcerer)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">40</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=brain-in-a-jar" target='_blank'>Brain
                    in a Jar</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">55</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=brass-dragon-wyrmling"
                    target='_blank'>Brass Dragon Wyrmling</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">16</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bronze-dragon-wyrmling"
                    target='_blank'>Bronze Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">32</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=brown-bear" target='_blank'>Brown
                    Bear</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">34</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bugbear" target='_blank'>Bugbear</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bugbear-chief" target='_blank'>Bugbear
                    Chief</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">65</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bulette" target='_blank'>Bulette</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">94</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bulezau" class='incomplet'
                    target='_blank'>Bulezau</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bullywug" target='_blank'>Bullywug</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Bullywug)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">11</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=bullywug-knight"
                    target='_blank'>Bullywug Knight</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">66</td>
            <td class="colV">swim</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cadaver-collector" class='incomplet'
                    target='_blank'>Cadaver Collector</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">189</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cairnwight" class='incomplet'
                    target='_blank'>Cairnwight</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cambion" target='_blank'>Cambion</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">82</td>
            <td class="colV">fly</td>
            <td class="colA">any evil alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=camel" target='_blank'>Camel</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">9</td>
            <td class="colP right">15</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=canoloth" class='incomplet'
                    target='_blank'>Canoloth</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">120</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=carrion-crawler"
                    target='_blank'>Carrion Crawler</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">51</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cat" target='_blank'>Cat</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">2</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=catoblepas" class='incomplet'
                    target='_blank'>Catoblepas</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cave-fisher" class='incomplet'
                    target='_blank'>Cave Fisher</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=celestial-spirit" class='incomplet'
                    target='_blank'>Celestial Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">40</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=centaur" target='_blank'>Centaur</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=chain-devil" target='_blank'>Chain
                    Devil</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=champion" target='_blank'>Champion</a>
            </td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">143</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=chasme" target='_blank'>Chasme</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">84</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=chimera" target='_blank'>Chimera</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">114</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=chitine" class='incomplet'
                    target='_blank'>Chitine</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=choker" class='incomplet'
                    target='_blank'>Choker</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">16</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=choldrith" class='incomplet'
                    target='_blank'>Choldrith</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity (Cleric)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">66</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=chromatic-greatwyrm" class='incomplet'
                    target='_blank'>Chromatic Greatwyrm</a></td>
            <td class="" data-sort-value="27.00">27</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">533</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Mythic</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=chuul" target='_blank'>Chuul</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">93</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cinder-hulk" class='incomplet'
                    target='_blank'>Cinder Hulk</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=clay-golem" target='_blank'>Clay
                    Golem</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">133</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cloaker" target='_blank'>Cloaker</a>
            </td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">78</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=clockwork-iron-cobra" class='incomplet'
                    target='_blank'>Clockwork Iron Cobra</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">91</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cloud-giant" target='_blank'>Cloud
                    Giant</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">200</td>
            <td class="colV"></td>
            <td class="colA">neutral good </td>
            <td class="colL"></td>
        </tr>
        <tr>
            </td>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cloud-giant-destiny-gambler"
                    class='incomplet' target='_blank'>Cloud Giant Destiny Gambler</a></td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Giant (Bard)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">337</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cloud-giant-of-evil-air"
                    class='incomplet' target='_blank'>Cloud Giant of Evil Air</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">200</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cloud-giant-smiling-one"
                    class='incomplet' target='_blank'>Cloud Giant Smiling One</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">250</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cockatrice"
                    target='_blank'>Cockatrice</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">27</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=commoner" target='_blank'>Commoner</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">4</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=conjurer-wizard" class='incomplet'
                    target='_blank'>Conjurer Wizard</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=constrictor-snake"
                    target='_blank'>Constrictor Snake</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=construct-spirit" class='incomplet'
                    target='_blank'>Construct Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">40</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=copper-dragon-wyrmling"
                    target='_blank'>Copper Dragon Wyrmling</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=corpse-flower" class='incomplet'
                    target='_blank'>Corpse Flower</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=couatl" target='_blank'>Couatl</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">97</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=crab" target='_blank'>Crab</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">11</td>
            <td class="colP right">2</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cradle-of-the-cloud-scion"
                    class='incomplet' target='_blank'>Cradle of the Cloud Scion</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">19</td>
            <td class="colP right">624</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cradle-of-the-fire-scion"
                    class='incomplet' target='_blank'>Cradle of the Fire Scion</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">555</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cradle-of-the-frost-scion"
                    class='incomplet' target='_blank'>Cradle of the Frost Scion</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">499</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cradle-of-the-hill-scion"
                    class='incomplet' target='_blank'>Cradle of the Hill Scion</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">19</td>
            <td class="colP right">402</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cradle-of-the-stone-scion"
                    class='incomplet' target='_blank'>Cradle of the Stone Scion</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">455</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cradle-of-the-storm-scion"
                    class='incomplet' target='_blank'>Cradle of the Storm Scion</a></td>
            <td class="" data-sort-value="27.00">27</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">19</td>
            <td class="colP right">682</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cranium-rat" class='incomplet'
                    target='_blank'>Cranium Rat</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">2</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=crawling-claw" target='_blank'>Crawling
                    Claw</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">2</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=crocodile"
                    target='_blank'>Crocodile</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">19</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=crokek-toeck" class='incomplet'
                    target='_blank'>Crokek'toeck</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">15</td>
            <td class="colP right">297</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=crystal-dragon-wyrmling"
                    class='incomplet' target='_blank'>Crystal Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">32</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cult-fanatic" target='_blank'>Cult
                    Fanatic</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">any non-good alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cultist" target='_blank'>Cultist</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">any non-good alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=cyclops" target='_blank'>Cyclops</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dancing-item" target='_blank'>Dancing
                    Item</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">10</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dao" target='_blank'>Dao</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">187</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=darkling" class='incomplet'
                    target='_blank'>Darkling</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=darkling-elder" class='incomplet'
                    target='_blank'>Darkling Elder</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=darkmantle"
                    target='_blank'>Darkmantle</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-dog" target='_blank'>Death
                    Dog</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-giant-reaper" class='incomplet'
                    target='_blank'>Death Giant Reaper</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">172</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-giant-shrouded-one"
                    class='incomplet' target='_blank'>Death Giant Shrouded One</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Giant (Wizard)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">195</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-kiss" class='incomplet'
                    target='_blank'>Death Kiss</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Aberration (Beholder)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">142</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-knight" target='_blank'>Death
                    Knight</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">180</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-slaad" target='_blank'>Death
                    Slaad</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Aberration (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">170</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-tyrant" class='incomplet'
                    target='_blank'>Death Tyrant</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">187</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=death-s-head-of-bhaal"
                    class='incomplet' target='_blank'>Death's Head of Bhaal</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">76</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deathlock" class='incomplet'
                    target='_blank'>Deathlock</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Undead (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">36</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deathlock-mastermind" class='incomplet'
                    target='_blank'>Deathlock Mastermind</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Undead (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">110</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deathlock-wight" class='incomplet'
                    target='_blank'>Deathlock Wight</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Undead (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">37</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deep-dragon-wyrmling" class='incomplet'
                    target='_blank'>Deep Dragon Wyrmling</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">27</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deep-gnome-svirfneblin"
                    target='_blank'>Deep Gnome (Svirfneblin)</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Gnome)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">16</td>
            <td class="colV"></td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deep-rothe" class='incomplet'
                    target='_blank'>Deep Rothé</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast (Cattle)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deep-scion" class='incomplet'
                    target='_blank'>Deep Scion</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">67</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deer" target='_blank'>Deer</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">4</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=demilich" target='_blank'>Demilich</a>
            </td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">20</td>
            <td class="colP right">80</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=demogorgon"
                    target='_blank'>Demogorgon</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">22</td>
            <td class="colP right">464</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=derro" class='incomplet'
                    target='_blank'>Derro</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=derro-savant" class='incomplet'
                    target='_blank'>Derro Savant</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Aberration (Sorcerer)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">36</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=deva" target='_blank'>Deva</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">136</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=devilroot"
                    target='_blank'>Devilroot</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">105</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=devourer" class='incomplet'
                    target='_blank'>Devourer</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">189</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dhergoloth" class='incomplet'
                    target='_blank'>Dhergoloth</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">119</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dire-troll" class='incomplet'
                    target='_blank'>Dire Troll</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">172</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dire-wolf" target='_blank'>Dire
                    Wolf</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">37</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dispater" class='incomplet'
                    target='_blank'>Dispater</a></td>
            <td class="" data-sort-value="27.00">27</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">21</td>
            <td class="colP right">412</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=displacer-beast"
                    target='_blank'>Displacer Beast</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=diviner-wizard" class='incomplet'
                    target='_blank'>Diviner Wizard</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">90</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=djinni" target='_blank'>Djinni</a>
            </td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">161</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dolphin" class='incomplet'
                    target='_blank'>Dolphin</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dolphin-delighter" class='incomplet'
                    target='_blank'>Dolphin Delighter</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">27</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=doppelganger"
                    target='_blank'>Doppelganger</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dracohydra" class='incomplet'
                    target='_blank'>Dracohydra</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">218</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconian-dreadnought"
                    class='incomplet' target='_blank'>Draconian Dreadnought</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">57</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconian-foot-soldier"
                    class='incomplet' target='_blank'>Draconian Foot Soldier</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconian-infiltrator"
                    class='incomplet' target='_blank'>Draconian Infiltrator</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconian-mage" class='incomplet'
                    target='_blank'>Draconian Mage</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">40</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconian-mastermind" class='incomplet'
                    target='_blank'>Draconian Mastermind</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconic-shard" class='incomplet'
                    target='_blank'>Draconic Shard</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">168</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draconic-spirit"
                    target='_blank'>Draconic Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">50</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draegloth" class='incomplet'
                    target='_blank'>Draegloth</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">123</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=draft-horse" target='_blank'>Draft
                    Horse</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragon-blessed" class='incomplet'
                    target='_blank'>Dragon Blessed</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragon-chosen" class='incomplet'
                    target='_blank'>Dragon Chosen</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragon-speaker" class='incomplet'
                    target='_blank'>Dragon Speaker</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">36</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragon-turtle" target='_blank'>Dragon
                    Turtle</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">341</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragon-turtle-wyrmling"
                    class='incomplet' target='_blank'>Dragon Turtle Wyrmling</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">90</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonblood-ooze" class='incomplet'
                    target='_blank'>Dragonblood Ooze</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">68</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonbone-golem" class='incomplet'
                    target='_blank'>Dragonbone Golem</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">161</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonborn-of-bahamut"
                    class='incomplet' target='_blank'>Dragonborn of Bahamut</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">93</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonborn-of-sardior"
                    class='incomplet' target='_blank'>Dragonborn of Sardior</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">75</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonborn-of-tiamat" class='incomplet'
                    target='_blank'>Dragonborn of Tiamat</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonflesh-abomination"
                    class='incomplet' target='_blank'>Dragonflesh Abomination</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">66</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonflesh-grafter" class='incomplet'
                    target='_blank'>Dragonflesh Grafter</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dragonnel" class='incomplet'
                    target='_blank'>Dragonnel</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">58</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drake-companion" target='_blank'>Drake
                    Companion</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">5</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dretch" target='_blank'>Dretch</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drider" target='_blank'>Drider</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">123</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow" target='_blank'>Drow</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-arachnomancer" class='incomplet'
                    target='_blank'>Drow Arachnomancer</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">162</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-elite-warrior"
                    target='_blank'>Drow Elite Warrior</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-favored-consort" class='incomplet'
                    target='_blank'>Drow Favored Consort</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Humanoid (Elf, Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">240</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-house-captain" class='incomplet'
                    target='_blank'>Drow House Captain</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">162</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-inquisitor" class='incomplet'
                    target='_blank'>Drow Inquisitor</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Humanoid (Cleric, Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">149</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-mage" target='_blank'>Drow
                    Mage</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-matron-mother" class='incomplet'
                    target='_blank'>Drow Matron Mother</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Humanoid (Cleric, Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">247</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-priestess-of-lolth"
                    target='_blank'>Drow Priestess of Lolth</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=drow-shadowblade" class='incomplet'
                    target='_blank'>Drow Shadowblade</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">150</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=druid" target='_blank'>Druid</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dryad" target='_blank'>Dryad</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar" target='_blank'>Duergar</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-despot" class='incomplet'
                    target='_blank'>Duergar Despot</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">21</td>
            <td class="colP right">119</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-kavalrachni" class='incomplet'
                    target='_blank'>Duergar Kavalrachni</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-mind-master" class='incomplet'
                    target='_blank'>Duergar Mind Master</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-soulblade" class='incomplet'
                    target='_blank'>Duergar Soulblade</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-stone-guard" class='incomplet'
                    target='_blank'>Duergar Stone Guard</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-warlord" class='incomplet'
                    target='_blank'>Duergar Warlord</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duergar-xarrorn" class='incomplet'
                    target='_blank'>Duergar Xarrorn</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Dwarf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=duodrone" class='incomplet'
                    target='_blank'>Duodrone</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dust-hulk" class='incomplet'
                    target='_blank'>Dust Hulk</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">68</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dust-mephit" target='_blank'>Dust
                    Mephit</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">17</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=dybbuk" class='incomplet'
                    target='_blank'>Dybbuk</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">37</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=eagle" target='_blank'>Eagle</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">3</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=earth-elemental" target='_blank'>Earth
                    Elemental</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">126</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=earth-elemental-myrmidon"
                    class='incomplet' target='_blank'>Earth Elemental Myrmidon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=echo-of-demogorgon" class='incomplet'
                    target='_blank'>Echo of Demogorgon</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=efreeti" target='_blank'>Efreeti</a>
            </td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">200</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=eidolon" class='incomplet'
                    target='_blank'>Eidolon</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">9</td>
            <td class="colP right">63</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elder-brain" class='incomplet'
                    target='_blank'>Elder Brain</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Aberration (Mind Flayer)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">210</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elder-brain-dragon" class='incomplet'
                    target='_blank'>Elder Brain Dragon</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">17</td>
            <td class="colP right">350</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elder-oblex" class='incomplet'
                    target='_blank'>Elder Oblex</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">115</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elder-tempest" class='incomplet'
                    target='_blank'>Elder Tempest</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">19</td>
            <td class="colP right">264</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elemental-spirit" class='incomplet'
                    target='_blank'>Elemental Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">50</td>
            <td class="colV">fly, swim</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elephant" target='_blank'>Elephant</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">76</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=elk" target='_blank'>Elk</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=emerald-dragon-wyrmling"
                    class='incomplet' target='_blank'>Emerald Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">39</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=empyrean" target='_blank'>Empyrean</a>
            </td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Celestial (Titan)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">22</td>
            <td class="colP right">313</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic good </td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=enchanter-wizard" class='incomplet'
                    target='_blank'>Enchanter Wizard</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">49</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=eranki-supreme-commander"
                    class='incomplet' target='_blank'>eranki Supreme Commander</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">187</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=erinyes" target='_blank'>Erinyes</a>
            </td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">153</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ettercap" target='_blank'>Ettercap</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">44</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ettin" target='_blank'>Ettin</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ettin-ceremorph" class='incomplet'
                    target='_blank'>Ettin Ceremorph</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">104</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=evoker-wizard" class='incomplet'
                    target='_blank'>Evoker Wizard</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">121</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=expert-lvl-1" target='_blank'>Expert
                    (lvl 1)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=expert-lvl-2" target='_blank'>Expert
                    (lvl 2)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">16</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=expert-lvl-3" target='_blank'>Expert
                    (lvl 3)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=expert-lvl-4" target='_blank'>Expert
                    (lvl 4)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=expert-lvl-5" target='_blank'>Expert
                    (lvl 5)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=expert-lvl-6" target='_blank'>Expert
                    (lvl 6)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">38</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=eyedrake" class='incomplet'
                    target='_blank'>Eyedrake</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">119</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=faerie-dragon" target='_blank'>Faerie
                    Dragon</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">15</td>
            <td class="colP right">14</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=female-steeder" class='incomplet'
                    target='_blank'>Female Steeder</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">30</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fensir-devourer" class='incomplet'
                    target='_blank'>Fensir Devourer</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fensir-skirmisher" class='incomplet'
                    target='_blank'>Fensir Skirmisher</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">94</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fey-spirit" class='incomplet'
                    target='_blank'>Fey Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">30</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fiendish-spirit" class='incomplet'
                    target='_blank'>Fiendish Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">50</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fierna" class='incomplet'
                    target='_blank'>Fierna</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">367</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=firbolg-primeval-warden"
                    class='incomplet' target='_blank'>Firbolg Primeval Warden</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Druid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">65</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=firbolg-wanderer" class='incomplet'
                    target='_blank'>Firbolg Wanderer</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Cleric)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">90</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-elemental" target='_blank'>Fire
                    Elemental</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">102</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-elemental-myrmidon"
                    class='incomplet' target='_blank'>Fire Elemental Myrmidon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">123</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-giant" target='_blank'>Fire
                    Giant</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">162</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-giant-dreadnought"
                    class='incomplet' target='_blank'>Fire Giant Dreadnought</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">21</td>
            <td class="colP right">187</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-giant-forgecaller"
                    class='incomplet' target='_blank'>Fire Giant Forgecaller</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Giant (Cleric)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">312</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-giant-of-evil-fire"
                    class='incomplet' target='_blank'>Fire Giant of Evil Fire</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">150</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-hellion" class='incomplet'
                    target='_blank'>Fire Hellion</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">175</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fire-snake" target='_blank'>Fire
                    Snake</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=firegaunt" class='incomplet'
                    target='_blank'>Firegaunt</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">175</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=firenewt-warlock-of-imix"
                    class='incomplet' target='_blank'>Firenewt Warlock of Imix</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=firenewt-warrior" class='incomplet'
                    target='_blank'>Firenewt Warrior</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fist-of-bane" class='incomplet'
                    target='_blank'>Fist of Bane</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flail-snail" class='incomplet'
                    target='_blank'>Flail Snail</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flameskull"
                    target='_blank'>Flameskull</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">40</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flesh-colossus" class='incomplet'
                    target='_blank'>Flesh Colossus</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">14</td>
            <td class="colP right">280</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flesh-golem" target='_blank'>Flesh
                    Golem</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">9</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flind" class='incomplet'
                    target='_blank'>Flind</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Fiend (Gnoll)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flumph" target='_blank'>Flumph</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">7</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flying-snake" target='_blank'>Flying
                    Snake</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">14</td>
            <td class="colP right">5</td>
            <td class="colV">fly, swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=flying-sword" target='_blank'>Flying
                    Sword</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">17</td>
            <td class="colP right">17</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fomorian" target='_blank'>Fomorian</a>
            </td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">149</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fomorian-deep-crawler"
                    class='incomplet' target='_blank'>Fomorian Deep Crawler</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">184</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fomorian-noble" class='incomplet'
                    target='_blank'>Fomorian Noble</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Giant (Wizard)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">253</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            </td>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fomorian-warlock-of-the-dark"
                    class='incomplet' target='_blank'>Fomorian Warlock of the Dark</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">207</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fox" class='incomplet'
                    target='_blank'>Fox</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">2</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fraz-urb-luu" class='incomplet'
                    target='_blank'>Fraz-Urb'luu</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">337</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frog" target='_blank'>Frog</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">11</td>
            <td class="colP right">1</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=froghemoth" class='incomplet'
                    target='_blank'>Froghemoth</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">161</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frost-druid" class='incomplet'
                    target='_blank'>Frost Druid</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">67</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frost-giant" target='_blank'>Frost
                    Giant</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            </td>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frost-giant-everlasting-one"
                    class='incomplet' target='_blank'>Frost Giant Everlasting One</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">189</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frost-giant-ice-shaper"
                    class='incomplet' target='_blank'>Frost Giant Ice Shaper</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Giant (Cleric)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">310</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frost-giant-of-evil-water"
                    class='incomplet' target='_blank'>Frost Giant of Evil Water</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">172</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frost-salamander" class='incomplet'
                    target='_blank'>Frost Salamander</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">168</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=frostmourn" class='incomplet'
                    target='_blank'>Frostmourn</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">195</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=fury-of-kostchtchie" class='incomplet'
                    target='_blank'>Fury of Kostchtchie</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">216</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=galeb-duhr" target='_blank'>Galeb
                    Duhr</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gargantua" class='incomplet'
                    target='_blank'>Gargantua</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">17</td>
            <td class="colP right">388</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gargoyle" target='_blank'>Gargoyle</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">52</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gas-spore" target='_blank'>Gas
                    Spore</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">5</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gauth" class='incomplet'
                    target='_blank'>Gauth</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Aberration (Beholder)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">52</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gazer" target='_blank'>Gazer</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Aberration (Beholder)</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">13</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gelatinous-cube"
                    target='_blank'>Gelatinous Cube</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">6</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gem-greatwyrm" class='incomplet'
                    target='_blank'>Gem Greatwyrm</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">21</td>
            <td class="colP right">507</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gem-stalker" class='incomplet'
                    target='_blank'>Gem Stalker</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=geryon" class='incomplet'
                    target='_blank'>Geryon</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">300</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ghast" target='_blank'>Ghast</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">36</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ghost" target='_blank'>Ghost</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">45</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ghost-dragon" class='incomplet'
                    target='_blank'>Ghost Dragon</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">10</td>
            <td class="colP right">324</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ghoul" target='_blank'>Ghoul</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-ape" target='_blank'>Giant
                    Ape</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">157</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-badger" target='_blank'>Giant
                    Badger</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-bat" target='_blank'>Giant
                    Bat</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-boar" target='_blank'>Giant
                    Boar</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">42</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-centipede" target='_blank'>Giant
                    Centipede</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">4</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-constrictor-snake"
                    target='_blank'>Giant Constrictor Snake</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">60</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-crab" target='_blank'>Giant
                    Crab</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">13</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-crocodile" target='_blank'>Giant
                    Crocodile</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">85</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-eagle" target='_blank'>Giant
                    Eagle</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">26</td>
            <td class="colV">fly</td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-elk" target='_blank'>Giant
                    Elk</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">42</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-fire-beetle"
                    target='_blank'>Giant Fire Beetle</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">4</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-frog" target='_blank'>Giant
                    Frog</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">18</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-goat" target='_blank'>Giant
                    Goat</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-goose" class='incomplet'
                    target='_blank'>Giant Goose</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">60</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-hyena" target='_blank'>Giant
                    Hyena</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-lizard" target='_blank'>Giant
                    Lizard</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-lynx" class='incomplet'
                    target='_blank'>Giant Lynx</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-octopus" target='_blank'>Giant
                    Octopus</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">52</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-owl" target='_blank'>Giant
                    Owl</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">19</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-ox" class='incomplet'
                    target='_blank'>Giant Ox</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">105</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-poisonous-snake"
                    target='_blank'>Giant Poisonous Snake</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">11</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-ram" class='incomplet'
                    target='_blank'>Giant Ram</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">28</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-rat" target='_blank'>Giant
                    Rat</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-scorpion" target='_blank'>Giant
                    Scorpion</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-sea-horse" target='_blank'>Giant
                    Sea Horse</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">16</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-shark" target='_blank'>Giant
                    Shark</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">126</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-spider" target='_blank'>Giant
                    Spider</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-strider" class='incomplet'
                    target='_blank'>Giant Strider</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-toad" target='_blank'>Giant
                    Toad</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">39</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-two-headed-goat"
                    target='_blank'>Giant Two-Headed Goat</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-vulture" target='_blank'>Giant
                    Vulture</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-walrus" class='incomplet'
                    target='_blank'>Giant Walrus</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">9</td>
            <td class="colP right">55</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-wasp" target='_blank'>Giant
                    Wasp</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-weasel" target='_blank'>Giant
                    Weasel</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giant-wolf-spider"
                    target='_blank'>Giant Wolf Spider</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gibbering-mouther"
                    target='_blank'>Gibbering Mouther</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">9</td>
            <td class="colP right">67</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=giff" target='_blank'>Giff</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gigant" class='incomplet'
                    target='_blank'>Gigant</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">17</td>
            <td class="colP right">325</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=girallon" class='incomplet'
                    target='_blank'>Girallon</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githyanki-gish" class='incomplet'
                    target='_blank'>Githyanki Gish</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Humanoid (Gith, Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">130</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githyanki-kith-rak" class='incomplet'
                    target='_blank'>Githyanki Kith'rak</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">180</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githyanki-knight"
                    target='_blank'>Githyanki Knight</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">91</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githyanki-warrior"
                    target='_blank'>Githyanki Warrior</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">49</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githzerai-anarch" class='incomplet'
                    target='_blank'>Githzerai Anarch</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">144</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githzerai-enlightened"
                    class='incomplet' target='_blank'>Githzerai Enlightened</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githzerai-monk"
                    target='_blank'>Githzerai Monk</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">38</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=githzerai-zerth"
                    target='_blank'>Githzerai Zerth</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid (Gith)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=glabrezu" target='_blank'>Glabrezu</a>
            </td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">157</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gladiator"
                    target='_blank'>Gladiator</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=glasya" class='incomplet'
                    target='_blank'>Glasya</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">21</td>
            <td class="colP right">380</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gnoll" target='_blank'>Gnoll</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Gnoll)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gnoll-fang-of-yeenoghu"
                    target='_blank'>Gnoll Fang of Yeenoghu</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend (Gnoll)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">65</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gnoll-flesh-gnawer" class='incomplet'
                    target='_blank'>Gnoll Flesh Gnawer</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gnoll-hunter" class='incomplet'
                    target='_blank'>Gnoll Hunter</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gnoll-pack-lord" target='_blank'>Gnoll
                    Pack Lord</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Gnoll)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">49</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gnoll-witherling" class='incomplet'
                    target='_blank'>Gnoll Witherling</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=goat" target='_blank'>Goat</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">4</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=goblin" target='_blank'>Goblin</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=goblin-boss" target='_blank'>Goblin
                    Boss</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">17</td>
            <td class="colP right">21</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gold-dragon-wyrmling"
                    target='_blank'>Gold Dragon Wyrmling</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">60</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=goliath-giant-kin" class='incomplet'
                    target='_blank'>Goliath Giant-Kin</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gorgon" target='_blank'>Gorgon</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">114</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=goristro" target='_blank'>Goristro</a>
            </td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">310</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gray-ooze" target='_blank'>Gray
                    Ooze</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">8</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gray-render" class='incomplet'
                    target='_blank'>Gray Render</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">189</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gray-slaad" target='_blank'>Gray
                    Slaad</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Aberration (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=graz-zt" class='incomplet'
                    target='_blank'>Graz'zt</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">20</td>
            <td class="colP right">346</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=green-abishai" class='incomplet'
                    target='_blank'>Green Abishai</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">195</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=green-dragon-wyrmling"
                    target='_blank'>Green Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">38</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=green-hag" target='_blank'>Green
                    Hag</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">82</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=green-slaad" target='_blank'>Green
                    Slaad</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Aberration (Shapechanger)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grell" target='_blank'>Grell</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">55</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grick" target='_blank'>Grick</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grick-alpha" target='_blank'>Grick
                    alpha</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=griffon" target='_blank'>Griffon</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">59</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grimlock" target='_blank'>Grimlock</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Grimlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grinning-cat" class='incomplet'
                    target='_blank'>Grinning Cat</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grung" class='incomplet'
                    target='_blank'>Grung</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grung-elite-warrior" class='incomplet'
                    target='_blank'>Grung Elite Warrior</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">49</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=grung-wildling" class='incomplet'
                    target='_blank'>Grung Wildling</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">16</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=guard" target='_blank'>Guard</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=guard-drake" target='_blank'>Guard
                    Drake</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=guardian-naga" target='_blank'>Guardian
                    Naga</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=gynosphinx"
                    target='_blank'>Gynosphinx</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">136</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=halaster-blackcloak" class='incomplet'
                    target='_blank'>Halaster Blackcloak</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">246</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=half-ogre"
                    target='_blank'>Half-Ogre</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">30</td>
            <td class="colV"></td>
            <td class="colA">any chaotic alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=half-red-dragon-veteran"
                    target='_blank'>Half-Red Dragon Veteran</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">65</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hare" class='incomplet'
                    target='_blank'>Hare</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">1</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=harpy" target='_blank'>Harpy</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">38</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hawk" target='_blank'>Hawk</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hell-hound" target='_blank'>Hell
                    Hound</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hellfire-engine" class='incomplet'
                    target='_blank'>Hellfire Engine</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">216</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hellwasp" class='incomplet'
                    target='_blank'>Hellwasp</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">52</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=helmed-horror" target='_blank'>Helmed
                    Horror</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">60</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hezrou" target='_blank'>Hezrou</a>
            </td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hill-giant" target='_blank'>Hill
                    Giant</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">105</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hill-giant-avalancher"
                    class='incomplet' target='_blank'>Hill Giant Avalancher</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Giant (Druid)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">220</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hippogriff"
                    target='_blank'>Hippogriff</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">19</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hoard-mimic" class='incomplet'
                    target='_blank'>Hoard Mimic</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">123</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hoard-scarab" class='incomplet'
                    target='_blank'>Hoard Scarab</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">14</td>
            <td class="colP right">7</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hobgoblin"
                    target='_blank'>Hobgoblin</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hobgoblin-captain"
                    target='_blank'>Hobgoblin Captain</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hobgoblin-devastator" class='incomplet'
                    target='_blank'>Hobgoblin Devastator</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fey (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hobgoblin-iron-shadow"
                    class='incomplet' target='_blank'>Hobgoblin Iron Shadow</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Fey (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hobgoblin-warlord"
                    target='_blank'>Hobgoblin Warlord</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid (Goblinoid)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">97</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hollow-dragon" class='incomplet'
                    target='_blank'>Hollow Dragon</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">241</td>
            <td class="colV">fly</td>
            <td class="colA">any alignment</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=homunculus"
                    target='_blank'>Homunculus</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">5</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=homunculus-servant"
                    target='_blank'>Homunculus Servant</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hook-horror" target='_blank'>Hook
                    Horror</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=horned-devil" target='_blank'>Horned
                    Devil</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">178</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=howler" class='incomplet'
                    target='_blank'>Howler</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">90</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hungry-sorrowsworn" class='incomplet'
                    target='_blank'>Hungry Sorrowsworn</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">225</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hunter-shark" target='_blank'>Hunter
                    Shark</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">45</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hutijin" class='incomplet'
                    target='_blank'>Hutijin</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">200</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hydra" target='_blank'>Hydra</a>
            </td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">172</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hydroloth" class='incomplet'
                    target='_blank'>Hydroloth</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">135</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=hyena" target='_blank'>Hyena</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">5</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ice-devil" target='_blank'>Ice
                    Devil</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">180</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ice-mephit" target='_blank'>Ice
                    Mephit</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">21</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=iggwilv-the-witch-queen"
                    class='incomplet' target='_blank'>Iggwilv the Witch Queen</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Fey (Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">255</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=illusionist-wizard" class='incomplet'
                    target='_blank'>Illusionist Wizard</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">44</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=imix" class='incomplet'
                    target='_blank'>Imix</a></td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">325</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=imp" target='_blank'>Imp</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fiend (Devil, Shapechanger)</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">10</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=intellect-devourer"
                    target='_blank'>Intellect Devourer</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">21</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=invisible-stalker"
                    target='_blank'>Invisible Stalker</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">104</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=iron-consul" class='incomplet'
                    target='_blank'>Iron Consul</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=iron-golem" target='_blank'>Iron
                    Golem</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">20</td>
            <td class="colP right">210</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=jackal" target='_blank'>Jackal</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">3</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=jackalwere"
                    target='_blank'>Jackalwere</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=jarlaxle-baenre" class='incomplet'
                    target='_blank'>Jarlaxle Baenre</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">24</td>
            <td class="colP right">123</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=juiblex" class='incomplet'
                    target='_blank'>Juiblex</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">350</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kapak-draconian" class='incomplet'
                    target='_blank'>Kapak Draconian</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kender-skirmisher" class='incomplet'
                    target='_blank'>Kender Skirmisher</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">14</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kenku" target='_blank'>Kenku</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Kenku)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ki-rin" class='incomplet'
                    target='_blank'>Ki-rin</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">20</td>
            <td class="colP right">153</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=killer-whale" target='_blank'>Killer
                    Whale</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">90</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=knight" target='_blank'>Knight</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=knucklehead-trout" class='incomplet'
                    target='_blank'>Knucklehead Trout</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">7</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kobold" target='_blank'>Kobold</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (Kobold)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">5</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kobold-dragonshield" class='incomplet'
                    target='_blank'>Kobold Dragonshield</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">44</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kobold-inventor" class='incomplet'
                    target='_blank'>Kobold Inventor</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kobold-scale-sorcerer"
                    class='incomplet' target='_blank'>Kobold Scale Sorcerer</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=korred" class='incomplet'
                    target='_blank'>Korred</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">17</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kraken" target='_blank'>Kraken</a>
            </td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Monstrosity (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">18</td>
            <td class="colP right">472</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kraken-priest" class='incomplet'
                    target='_blank'>Kraken Priest</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">75</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kruthik-hive-lord" class='incomplet'
                    target='_blank'>Kruthik Hive Lord</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">20</td>
            <td class="colP right">102</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kuo-toa" target='_blank'>Kuo-toa</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Kuo-toa)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">18</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kuo-toa-archpriest"
                    target='_blank'>Kuo-toa Archpriest</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid (Kuo-toa)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">97</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=kuo-toa-whip" target='_blank'>Kuo-toa
                    Whip</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Kuo-toa)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">65</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=laeral-silverhand"
                    target='_blank'>Laeral Silverhand</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">228</td>
            <td class="colV"></td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lamia" target='_blank'>Lamia</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">97</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lemure" target='_blank'>Lemure</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">7</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=leucrotta" class='incomplet'
                    target='_blank'>Leucrotta</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=leviathan" class='incomplet'
                    target='_blank'>Leviathan</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">17</td>
            <td class="colP right">328</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=levistus" class='incomplet'
                    target='_blank'>Levistus</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">23</td>
            <td class="colP right">336</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lich" target='_blank'>Lich</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">135</td>
            <td class="colV"></td>
            <td class="colA">any evil alignment</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lightning-hulk" class='incomplet'
                    target='_blank'>Lightning Hulk</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">102</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lion" target='_blank'>Lion</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=liondrake" class='incomplet'
                    target='_blank'>Liondrake</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">119</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lizard" target='_blank'>Lizard</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">10</td>
            <td class="colP right">2</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lizard-king-queen"
                    target='_blank'>Lizard King/Queen</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Lizardfolk)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">78</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lizardfolk"
                    target='_blank'>Lizardfolk</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Lizardfolk)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">22</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lizardfolk-shaman"
                    target='_blank'>Lizardfolk Shaman</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Lizardfolk)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">27</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lonely-sorrowsworn" class='incomplet'
                    target='_blank'>Lonely Sorrowsworn</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lord-soth" class='incomplet'
                    target='_blank'>Lord Soth</a></td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Undead (Paladin)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">228</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=lost-sorrowsworn" class='incomplet'
                    target='_blank'>Lost Sorrowsworn</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">78</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mage" target='_blank'>Mage</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">40</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=magma-mephit" target='_blank'>Magma
                    Mephit</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=magmin" target='_blank'>Magmin</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=male-steeder" class='incomplet'
                    target='_blank'>Male Steeder</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mammon" class='incomplet'
                    target='_blank'>Mammon</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">464</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mammoth" target='_blank'>Mammoth</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">126</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=manes" target='_blank'>Manes</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">9</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=manshoon" class='incomplet'
                    target='_blank'>Manshoon</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">126</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=manticore"
                    target='_blank'>Manticore</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">68</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=marid" target='_blank'>Marid</a>
            </td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">229</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=marilith" target='_blank'>Marilith</a>
            </td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">189</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=martial-arts-adept"
                    target='_blank'>Martial Arts Adept</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=marut" class='incomplet'
                    target='_blank'>Marut</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Construct (Inevitable)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">22</td>
            <td class="colP right">432</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=master-of-souls" class='incomplet'
                    target='_blank'>Master of Souls</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=master-sage" class='incomplet'
                    target='_blank'>Master Sage</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">54</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=master-thief" target='_blank'>Master
                    Thief</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mastiff" target='_blank'>Mastiff</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">5</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=maurezhi" class='incomplet'
                    target='_blank'>Maurezhi</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">88</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=maw-demon" class='incomplet'
                    target='_blank'>Maw Demon</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=maw-of-yeenoghu" class='incomplet'
                    target='_blank'>Maw of Yeenoghu</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">161</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=meazel" class='incomplet'
                    target='_blank'>Meazel</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">35</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=medusa" target='_blank'>Medusa</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=meenlock" class='incomplet'
                    target='_blank'>Meenlock</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">31</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mephistopheles" class='incomplet'
                    target='_blank'>Mephistopheles</a></td>
            <td class="" data-sort-value="27.00">27</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">21</td>
            <td class="colP right">460</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=merfolk" target='_blank'>Merfolk</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (Merfolk)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">11</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=merregon" class='incomplet'
                    target='_blank'>Merregon</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=merrenoloth" class='incomplet'
                    target='_blank'>Merrenoloth</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">40</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=merrow" target='_blank'>Merrow</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">45</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=metallic-greatwyrm" class='incomplet'
                    target='_blank'>Metallic Greatwyrm</a></td>
            <td class="" data-sort-value="28.00">28</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">22</td>
            <td class="colP right">565</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL">Mythic</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mezzoloth"
                    target='_blank'>Mezzoloth</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mighty-servant-of-leuk-o"
                    target='_blank'>Mighty Servant of Leuk-O</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">22</td>
            <td class="colP right">310</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=miirym" class='incomplet'
                    target='_blank'>Miirym</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">262</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mimic" target='_blank'>Mimic</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mind-flayer" target='_blank'>Mind
                    Flayer</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mindwitness" class='incomplet'
                    target='_blank'>Mindwitness</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">75</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=minor-air-elemental"
                    target='_blank'>Minor Air Elemental</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">16</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=minor-earth-elemental"
                    target='_blank'>Minor Earth Elemental</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=minor-fire-elemental"
                    target='_blank'>Minor Fire Elemental</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=minor-water-elemental"
                    target='_blank'>Minor Water Elemental</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">39</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=minotaur" target='_blank'>Minotaur</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">76</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=minotaur-skeleton"
                    target='_blank'>Minotaur Skeleton</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mist-hulk" class='incomplet'
                    target='_blank'>Mist Hulk</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">94</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=moloch" class='incomplet'
                    target='_blank'>Moloch</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">253</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=molydeus" class='incomplet'
                    target='_blank'>Molydeus</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">216</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=monodrone" class='incomplet'
                    target='_blank'>Monodrone</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">5</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=moonstone-dragon-wyrmling"
                    class='incomplet' target='_blank'>Moonstone Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">39</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=morkoth" class='incomplet'
                    target='_blank'>Morkoth</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">165</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mountain-goat" class='incomplet'
                    target='_blank'>Mountain Goat</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mouth-of-grolantor" class='incomplet'
                    target='_blank'>Mouth of Grolantor</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">105</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mud-hulk" class='incomplet'
                    target='_blank'>Mud Hulk</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">68</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mud-mephit" target='_blank'>Mud
                    Mephit</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">27</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=muiral" class='incomplet'
                    target='_blank'>Muiral</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">195</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mule" target='_blank'>Mule</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mummified-warrior"
                    target='_blank'>Mummified Warrior</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">8</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mummy" target='_blank'>Mummy</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=mummy-lord" target='_blank'>Mummy
                    Lord</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">97</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=myconid-adult" target='_blank'>Myconid
                    Adult</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=myconid-sovereign"
                    target='_blank'>Myconid Sovereign</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=myconid-sprout" target='_blank'>Myconid
                    Sprout</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">10</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nabassu" class='incomplet'
                    target='_blank'>Nabassu</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">190</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nagpa" class='incomplet'
                    target='_blank'>Nagpa</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Monstrosity (Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">203</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nalfeshnee"
                    target='_blank'>Nalfeshnee</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">184</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=narzugon" class='incomplet'
                    target='_blank'>Narzugon</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=necromancer-wizard"
                    target='_blank'>Necromancer Wizard</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">110</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=necromite-of-myrkul" class='incomplet'
                    target='_blank'>Necromite of Myrkul</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=needle-blight" target='_blank'>Needle
                    Blight</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=neogi" class='incomplet'
                    target='_blank'>Neogi</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=neogi-hatchling" target='_blank'>Neogi
                    Hatchling</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">11</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=neogi-master" class='incomplet'
                    target='_blank'>Neogi Master</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Aberration (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=neothelid" class='incomplet'
                    target='_blank'>Neothelid</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">16</td>
            <td class="colP right">232</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=night-blade" class='incomplet'
                    target='_blank'>Night Blade</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=night-hag" target='_blank'>Night
                    Hag</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nightmare"
                    target='_blank'>Nightmare</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">68</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nightwalker" class='incomplet'
                    target='_blank'>Nightwalker</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">14</td>
            <td class="colP right">337</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nilbog" class='incomplet'
                    target='_blank'>Nilbog</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fey (Goblinoid)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=noble" target='_blank'>Noble</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nothic" target='_blank'>Nothic</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nupperibo"
                    target='_blank'>Nupperibo</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=nycaloth" target='_blank'>Nycaloth</a>
            </td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">123</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=oblex-spawn" class='incomplet'
                    target='_blank'>Oblex Spawn</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ochre-jelly" target='_blank'>Ochre
                    Jelly</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">8</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=octopus" target='_blank'>Octopus</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">3</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogre" target='_blank'>Ogre</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogre-battering-ram" class='incomplet'
                    target='_blank'>Ogre Battering Ram</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">76</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogre-bolt-launcher" class='incomplet'
                    target='_blank'>Ogre Bolt Launcher</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogre-chain-brute" class='incomplet'
                    target='_blank'>Ogre Chain Brute</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogre-howdah" class='incomplet'
                    target='_blank'>Ogre Howdah</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogre-zombie" target='_blank'>Ogre
                    Zombie</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">8</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ogremoch" class='incomplet'
                    target='_blank'>Ogrémoch</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">526</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=oinoloth" class='incomplet'
                    target='_blank'>Oinoloth</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">119</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=olhydra" class='incomplet'
                    target='_blank'>Olhydra</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">324</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=oni" target='_blank'>Oni</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">110</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc" target='_blank'>Orc</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">15</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc-blade-of-ilneval"
                    target='_blank'>Orc Blade of Ilneval</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc-claw-of-luthic" target='_blank'>Orc
                    Claw of Luthic</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc-eye-of-gruumsh" target='_blank'>Orc
                    Eye of Gruumsh</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc-hand-of-yurtrus"
                    target='_blank'>Orc Hand of Yurtrus</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">30</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc-red-fang-of-shargaas"
                    target='_blank'>Orc Red Fang of Shargaas</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orc-war-chief" target='_blank'>Orc
                    War Chief</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orcus" class='incomplet'
                    target='_blank'>Orcus</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">405</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orog" target='_blank'>Orog</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Orc)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">42</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=orthon" class='incomplet'
                    target='_blank'>Orthon</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">105</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=otyugh" target='_blank'>Otyugh</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">114</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=owl" target='_blank'>Owl</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">11</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=owlbear" target='_blank'>Owlbear</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">59</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ox" class='incomplet'
                    target='_blank'>Ox</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast (Cattle)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">15</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=panther" target='_blank'>Panther</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pegasus" target='_blank'>Pegasus</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">59</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pentadrone" class='incomplet'
                    target='_blank'>Pentadrone</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=peryton" target='_blank'>Peryton</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">33</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=phase-spider" target='_blank'>Phase
                    Spider</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=phoenix" class='incomplet'
                    target='_blank'>Phoenix</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">18</td>
            <td class="colP right">175</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=piercer" target='_blank'>Piercer</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pit-fiend" target='_blank'>Pit
                    Fiend</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">300</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pixie" target='_blank'>Pixie</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">15</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=planetar" target='_blank'>Planetar</a>
            </td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">200</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=plesiosaurus"
                    target='_blank'>Plesiosaurus</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">68</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=poisonous-snake"
                    target='_blank'>Poisonous Snake</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">2</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=polar-bear" target='_blank'>Polar
                    Bear</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">42</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pony" target='_blank'>Pony</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=priest" target='_blank'>Priest</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pseudodragon"
                    target='_blank'>Pseudodragon</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">7</td>
            <td class="colV">fly</td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=pteranodon"
                    target='_blank'>Pteranodon</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">13</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=purple-worm" target='_blank'>Purple
                    Worm</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">18</td>
            <td class="colP right">247</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quadrone" class='incomplet'
                    target='_blank'>Quadrone</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quaggoth" target='_blank'>Quaggoth</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Quaggoth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quaggoth-spore-servant"
                    target='_blank'>Quaggoth Spore Servant</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quasit" target='_blank'>Quasit</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fiend (Demon, Shapechanger)</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quetzalcoatlus"
                    target='_blank'>Quetzalcoatlus</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast (Dinosaur)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">30</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quickling" class='incomplet'
                    target='_blank'>Quickling</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">16</td>
            <td class="colP right">10</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=quipper" target='_blank'>Quipper</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">1</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rakshasa" target='_blank'>Rakshasa</a>
            </td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">110</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rat" target='_blank'>Rat</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">10</td>
            <td class="colP right">1</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=raven" target='_blank'>Raven</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">1</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=reaper-of-bhaal" class='incomplet'
                    target='_blank'>Reaper of Bhaal</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=red-abishai" class='incomplet'
                    target='_blank'>Red Abishai</a></td>
            <td class="" data-sort-value="19.00">19</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">22</td>
            <td class="colP right">289</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=red-dragon-wyrmling"
                    target='_blank'>Red Dragon Wyrmling</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">75</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=red-slaad" target='_blank'>Red
                    Slaad</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=redcap" class='incomplet'
                    target='_blank'>Redcap</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=reef-manta-ray" target='_blank'>Reef
                    Manta Ray</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">16</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=reef-shark" target='_blank'>Reef
                    Shark</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=regisaur" class='incomplet'
                    target='_blank'>Regisaur</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Monstrosity (Dinosaur)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">17</td>
            <td class="colP right">181</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=remorhaz" target='_blank'>Remorhaz</a>
            </td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">195</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=retriever" class='incomplet'
                    target='_blank'>Retriever</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">19</td>
            <td class="colP right">210</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=revenant" target='_blank'>Revenant</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rhinoceros"
                    target='_blank'>Rhinoceros</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=riding-horse" target='_blank'>Riding
                    Horse</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rime-hulk" class='incomplet'
                    target='_blank'>Rime Hulk</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=roc" target='_blank'>Roc</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">15</td>
            <td class="colP right">248</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=roper" target='_blank'>Roper</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">20</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rot-troll" class='incomplet'
                    target='_blank'>Rot Troll</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rothe" target='_blank'>Rothé</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">15</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rug-of-smothering" target='_blank'>Rug
                    of Smothering</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=runic-colossus" class='incomplet'
                    target='_blank'>Runic Colossus</a></td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">315</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rust-monster" target='_blank'>Rust
                    Monster</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=rutterkin" class='incomplet'
                    target='_blank'>Rutterkin</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">37</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=saber-toothed-tiger"
                    target='_blank'>Saber-Toothed Tiger</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">52</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sage" class='incomplet'
                    target='_blank'>Sage</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sahuagin" target='_blank'>Sahuagin</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (Sahuagin)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sahuagin-baron"
                    target='_blank'>Sahuagin Baron</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Sahuagin)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">76</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sahuagin-priestess"
                    target='_blank'>Sahuagin Priestess</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Sahuagin)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">33</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=salamander"
                    target='_blank'>Salamander</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">90</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sapphire-dragon-wyrmling"
                    class='incomplet' target='_blank'>Sapphire Dragon Wyrmling</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">45</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=satyr" target='_blank'>Satyr</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">31</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scarecrow"
                    target='_blank'>Scarecrow</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">36</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scion-of-grolantor" class='incomplet'
                    target='_blank'>Scion of Grolantor</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Giant (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">18</td>
            <td class="colP right">402</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scion-of-memnor" class='incomplet'
                    target='_blank'>Scion of Memnor</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Giant (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">656</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scion-of-skoraeus" class='incomplet'
                    target='_blank'>Scion of Skoraeus</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Giant (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">19</td>
            <td class="colP right">444</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scion-of-stronmaus" class='incomplet'
                    target='_blank'>Scion of Stronmaus</a></td>
            <td class="" data-sort-value="27.00">27</td>
            <td class="colT">Giant (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">656</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scion-of-surtur" class='incomplet'
                    target='_blank'>Scion of Surtur</a></td>
            <td class="" data-sort-value="25.00">25</td>
            <td class="colT">Giant (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">20</td>
            <td class="colP right">546</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scion-of-thrym" class='incomplet'
                    target='_blank'>Scion of Thrym</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Giant (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">19</td>
            <td class="colP right">499</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scorpion" target='_blank'>Scorpion</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">11</td>
            <td class="colP right">1</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=scout" target='_blank'>Scout</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">16</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sea-hag" target='_blank'>Sea
                    Hag</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">52</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sea-horse" target='_blank'>Sea
                    Horse</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">11</td>
            <td class="colP right">1</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sea-spawn" class='incomplet'
                    target='_blank'>Sea Spawn</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">32</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=seal" class='incomplet'
                    target='_blank'>Seal</a></td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">9</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadar-kai-gloom-weaver"
                    class='incomplet' target='_blank'>Shadar-kai Gloom Weaver</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">104</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadar-kai-shadow-dancer"
                    class='incomplet' target='_blank'>Shadar-kai Shadow Dancer</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadar-kai-soul-monger"
                    class='incomplet' target='_blank'>Shadar-kai Soul Monger</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Humanoid (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadow" target='_blank'>Shadow</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">16</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadow-demon" target='_blank'>Shadow
                    Demon</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">66</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadow-mastiff" class='incomplet'
                    target='_blank'>Shadow Mastiff</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadow-mastiff-alpha" class='incomplet'
                    target='_blank'>Shadow Mastiff Alpha</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">44</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shadow-spirit" class='incomplet'
                    target='_blank'>Shadow Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">35</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shambling-mound"
                    target='_blank'>Shambling Mound</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">136</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shield-guardian" target='_blank'>Shield
                    Guardian</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">142</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shoosuva" class='incomplet'
                    target='_blank'>Shoosuva</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=shrieker" target='_blank'>Shrieker</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">5</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sibriex" class='incomplet'
                    target='_blank'>Sibriex</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">150</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=silver-dragon-wyrmling"
                    target='_blank'>Silver Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">45</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sivak-draconian" class='incomplet'
                    target='_blank'>Sivak Draconian</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">57</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=skeletal-knight" class='incomplet'
                    target='_blank'>Skeletal Knight</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=skeleton" target='_blank'>Skeleton</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=skulk" class='incomplet'
                    target='_blank'>Skulk</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=skull-lasher-of-myrkul"
                    class='incomplet' target='_blank'>Skull Lasher of Myrkul</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=skull-lord" class='incomplet'
                    target='_blank'>Skull Lord</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Undead (Sorcerer)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">112</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=slaad-tadpole" target='_blank'>Slaad
                    Tadpole</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">10</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=slithering-tracker" class='incomplet'
                    target='_blank'>Slithering Tracker</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Ooze</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">39</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=smoke-mephit" target='_blank'>Smoke
                    Mephit</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=solar" target='_blank'>Solar</a>
            </td>
            <td class="" data-sort-value="21.00">21</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">21</td>
            <td class="colP right">243</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spawn-of-kyuss" class='incomplet'
                    target='_blank'>Spawn of Kyuss</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">76</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spectator"
                    target='_blank'>Spectator</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">39</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=specter" target='_blank'>Specter</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spectral-cloud" class='incomplet'
                    target='_blank'>Spectral Cloud</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">11</td>
            <td class="colP right">189</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spellcaster-lvl-1"
                    target='_blank'>Spellcaster (lvl 1)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spellcaster-lvl-2"
                    target='_blank'>Spellcaster (lvl 2)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spellcaster-lvl-3"
                    target='_blank'>Spellcaster (lvl 3)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spellcaster-lvl-4"
                    target='_blank'>Spellcaster (lvl 4)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spellcaster-lvl-5"
                    target='_blank'>Spellcaster (lvl 5)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spellcaster-lvl-6"
                    target='_blank'>Spellcaster (lvl 6)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">31</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sperm-whale" class='incomplet'
                    target='_blank'>Sperm Whale</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">13</td>
            <td class="colP right">189</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spider" target='_blank'>Spider</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">1</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spined-devil" target='_blank'>Spined
                    Devil</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spirit-naga" target='_blank'>Spirit
                    Naga</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spirit-troll" class='incomplet'
                    target='_blank'>Spirit Troll</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">130</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spotted-lion" class='incomplet'
                    target='_blank'>Spotted Lion</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">15</td>
            <td class="colP right">66</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spring-eladrin" class='incomplet'
                    target='_blank'>Spring Eladrin</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fey (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">165</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sprite" target='_blank'>Sprite</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">15</td>
            <td class="colP right">2</td>
            <td class="colV">fly</td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=spy" target='_blank'>Spy</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stalker-of-baphomet" class='incomplet'
                    target='_blank'>Stalker of Baphomet</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">200</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=star-spawn-grue" class='incomplet'
                    target='_blank'>Star Spawn Grue</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">11</td>
            <td class="colP right">17</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=star-spawn-hulk" class='incomplet'
                    target='_blank'>Star Spawn Hulk</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=star-spawn-larva-mage"
                    class='incomplet' target='_blank'>Star Spawn Larva Mage</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">168</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=star-spawn-mangler" class='incomplet'
                    target='_blank'>Star Spawn Mangler</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=star-spawn-seer" class='incomplet'
                    target='_blank'>Star Spawn Seer</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">153</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=steam-mephit" target='_blank'>Steam
                    Mephit</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">10</td>
            <td class="colP right">21</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=steel-defender" target='_blank'>Steel
                    Defender</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">2</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=steel-predator" class='incomplet'
                    target='_blank'>Steel Predator</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">20</td>
            <td class="colP right">207</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stench-kow" class='incomplet'
                    target='_blank'>Stench Kow</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Fiend (Cattle)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">10</td>
            <td class="colP right">15</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stirge" target='_blank'>Stirge</a>
            </td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">14</td>
            <td class="colP right">2</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stone-cursed" class='incomplet'
                    target='_blank'>Stone Cursed</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stone-giant" target='_blank'>Stone
                    Giant</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">126</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stone-giant-dreamwalker"
                    class='incomplet' target='_blank'>Stone Giant Dreamwalker</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">161</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stone-giant-of-evil-earth"
                    class='incomplet' target='_blank'>Stone Giant of Evil Earth</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">20</td>
            <td class="colP right">137</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stone-giant-rockspeaker"
                    class='incomplet' target='_blank'>Stone Giant Rockspeaker</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Giant (Wizard)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">276</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=stone-golem" target='_blank'>Stone
                    Golem</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">178</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=storm-crab" class='incomplet'
                    target='_blank'>Storm Crab</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">18</td>
            <td class="colP right">155</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=storm-giant" target='_blank'>Storm
                    Giant</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">230</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=storm-giant-quintessent"
                    class='incomplet' target='_blank'>Storm Giant Quintessent</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">230</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=storm-giant-tempest-caller"
                    class='incomplet' target='_blank'>Storm Giant Tempest Caller</a></td>
            <td class="" data-sort-value="20.00">20</td>
            <td class="colT">Giant (Sorcerer)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">17</td>
            <td class="colP right">310</td>
            <td class="colV">fly, swim</td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=storm-herald" class='incomplet'
                    target='_blank'>Storm Herald</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">287</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=strahd-von-zarovich" class='incomplet'
                    target='_blank'>Strahd von Zarovich</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Undead (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">144</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=succubus" target='_blank'>Succubus</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fiend (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">66</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=summer-eladrin" class='incomplet'
                    target='_blank'>Summer Eladrin</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fey (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">165</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-bats" target='_blank'>Swarm of
                    Bats</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-cranium-rats"
                    class='incomplet' target='_blank'>Swarm of Cranium Rats</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Swarm of Tiny aberrations</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">76</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-insects" target='_blank'>Swarm
                    of Insects</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-poisonous-snakes"
                    target='_blank'>Swarm of Poisonous Snakes</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">36</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-quippers"
                    target='_blank'>Swarm of Quippers</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">28</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-rats" target='_blank'>Swarm of
                    Rats</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">24</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-ravens" target='_blank'>Swarm
                    of Ravens</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">24</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swarm-of-rot-grubs" class='incomplet'
                    target='_blank'>Swarm of Rot Grubs</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Swarm of Tiny beasts</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">8</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=swashbuckler"
                    target='_blank'>Swashbuckler</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">66</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sword-wraith-commander"
                    class='incomplet' target='_blank'>Sword Wraith Commander</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=sword-wraith-warrior" class='incomplet'
                    target='_blank'>Sword Wraith Warrior</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tabaxi-hunter" class='incomplet'
                    target='_blank'>Tabaxi Hunter</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Tabaxi)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">40</td>
            <td class="colV"></td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tabaxi-minstrel" class='incomplet'
                    target='_blank'>Tabaxi Minstrel</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Tabaxi)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tanarukk" class='incomplet'
                    target='_blank'>Tanarukk</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">95</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tarrasque"
                    target='_blank'>Tarrasque</a></td>
            <td class="" data-sort-value="30.00">30</td>
            <td class="colT">Monstrosity (Titan)</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">25</td>
            <td class="colP right">676</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tempest-spirit" class='incomplet'
                    target='_blank'>Tempest Spirit</a></td>
            <td class="" data-sort-value="15.00">15</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">12</td>
            <td class="colP right">195</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=thorny-vegepygmy" class='incomplet'
                    target='_blank'>Thorny Vegepygmy</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=thri-kreen"
                    target='_blank'>Thri-kreen</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Thri-kreen)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=thug" target='_blank'>Thug</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">any non-good alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tiamat" target='_blank'>Tiamat</a>
            </td>
            <td class="" data-sort-value="30.00">30</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">25</td>
            <td class="colP right">615</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tiger" target='_blank'>Tiger</a>
            </td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">37</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tiny-servant" target='_blank'>Tiny
                    Servant</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">15</td>
            <td class="colP right">10</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=titanothere" class='incomplet'
                    target='_blank'>Titanothere</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=titivilus" class='incomplet'
                    target='_blank'>Titivilus</a></td>
            <td class="" data-sort-value="16.00">16</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">20</td>
            <td class="colP right">150</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tlincalli" class='incomplet'
                    target='_blank'>Tlincalli</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">85</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=topaz-dragon-wyrmling"
                    class='incomplet' target='_blank'>Topaz Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">33</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tortle" class='incomplet'
                    target='_blank'>Tortle</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tortle-druid" class='incomplet'
                    target='_blank'>Tortle Druid</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=transmuter-wizard" class='incomplet'
                    target='_blank'>Transmuter Wizard</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">49</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=trapper" class='incomplet'
                    target='_blank'>Trapper</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">68</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=treant" target='_blank'>Treant</a>
            </td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">138</td>
            <td class="colV"></td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tribal-warrior" target='_blank'>Tribal
                    Warrior</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=triceratops"
                    target='_blank'>Triceratops</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">95</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tridrone" class='incomplet'
                    target='_blank'>Tridrone</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Construct</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">16</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=troglodyte"
                    target='_blank'>Troglodyte</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Troglodyte)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=troll" target='_blank'>Troll</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">84</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=troll-amalgam" class='incomplet'
                    target='_blank'>Troll Amalgam</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">15</td>
            <td class="colP right">217</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=troll-mutate" class='incomplet'
                    target='_blank'>Troll Mutate</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">95</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=twig-blight" target='_blank'>Twig
                    Blight</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">4</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=tyrannosaurus-rex"
                    target='_blank'>Tyrannosaurus Rex</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">13</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ulitharid" class='incomplet'
                    target='_blank'>Ulitharid</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Aberration (Mind Flayer)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=ultroloth"
                    target='_blank'>Ultroloth</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">153</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=umber-hulk" target='_blank'>Umber
                    Hulk</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=undead-spirit" class='incomplet'
                    target='_blank'>Undead Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">30</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=unicorn" target='_blank'>Unicorn</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Celestial</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">lawful good</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=uthgardt-shaman" class='incomplet'
                    target='_blank'>Uthgardt Shaman</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">38</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vajra-safahr" class='incomplet'
                    target='_blank'>Vajra Safahr</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">126</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vampire" target='_blank'>Vampire</a>
            </td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Undead (Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">144</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vampire-spawn" target='_blank'>Vampire
                    Spawn</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">82</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vampiric-mist" class='incomplet'
                    target='_blank'>Vampiric Mist</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">30</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vargouille" class='incomplet'
                    target='_blank'>Vargouille</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Fiend</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">12</td>
            <td class="colP right">18</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vecna-the-archlich"
                    target='_blank'>Vecna the Archlich</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Undead (Wizard)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">272</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vegepygmy" class='incomplet'
                    target='_blank'>Vegepygmy</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vegepygmy-chief" class='incomplet'
                    target='_blank'>Vegepygmy Chief</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">14</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vellynne-harpell" class='incomplet'
                    target='_blank'>Vellynne Harpell</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Human)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=velociraptor" class='incomplet'
                    target='_blank'>Velociraptor</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast (Dinosaur)</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">10</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=venerable-shadow"
                    target='_blank'>Venerable Shadow</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">27</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=venom-troll" class='incomplet'
                    target='_blank'>Venom Troll</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Giant</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">94</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=veteran" target='_blank'>Veteran</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">17</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vine-blight" target='_blank'>Vine
                    Blight</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=violet-fungus" target='_blank'>Violet
                    Fungus</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">5</td>
            <td class="colP right">18</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vrock" target='_blank'>Vrock</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">104</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=vulture" target='_blank'>Vulture</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">5</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=walrus" class='incomplet'
                    target='_blank'>Walrus</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">9</td>
            <td class="colP right">22</td>
            <td class="colV">swim</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=war-priest" target='_blank'>War
                    Priest</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Humanoid (Cleric)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">117</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warhorse" target='_blank'>Warhorse</a>
            </td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">11</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warhorse-skeleton"
                    target='_blank'>Warhorse Skeleton</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warlock-of-the-archfey"
                    class='incomplet' target='_blank'>Warlock of the Archfey</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">67</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warlock-of-the-fiend"
                    target='_blank'>Warlock of the Fiend</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">78</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            </td>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warlock-of-the-great-old-one"
                    class='incomplet' target='_blank'>Warlock of the Great Old One</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">91</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warlord" target='_blank'>Warlord</a>
            </td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Humanoid</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">229</td>
            <td class="colV"></td>
            <td class="colA">any alignment</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warrior-lvl-1" target='_blank'>Warrior
                    (lvl 1)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">13</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warrior-lvl-2" target='_blank'>Warrior
                    (lvl 2)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">19</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warrior-lvl-3" target='_blank'>Warrior
                    (lvl 3)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warrior-lvl-4" target='_blank'>Warrior
                    (lvl 4)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">32</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warrior-lvl-5" target='_blank'>Warrior
                    (lvl 5)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">39</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=warrior-lvl-6" target='_blank'>Warrior
                    (lvl 6)</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Humanoid (any race)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wastrilith" class='incomplet'
                    target='_blank'>Wastrilith</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">157</td>
            <td class="colV">swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=water-elemental" target='_blank'>Water
                    Elemental</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">114</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=water-elemental-myrmidon"
                    class='incomplet' target='_blank'>Water Elemental Myrmidon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">127</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=water-weird" target='_blank'>Water
                    Weird</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">58</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=weasel" target='_blank'>Weasel</a>
            </td>
            <td class="" data-sort-value="0.00">0</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">13</td>
            <td class="colP right">1</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=were-bat" class='incomplet'
                    target='_blank'>Were Bat</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Goblin, Shapechanger)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">24</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=werebear" target='_blank'>Werebear</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Humanoid (Human, Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">135</td>
            <td class="colV"></td>
            <td class="colA">neutral good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wereboar" target='_blank'>Wereboar</a>
            </td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Human, Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">10</td>
            <td class="colP right">78</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wererat" target='_blank'>Wererat</a>
            </td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Humanoid (Human, Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=weretiger"
                    target='_blank'>Weretiger</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Humanoid (Human, Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">120</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=werewolf" target='_blank'>Werewolf</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Humanoid (Human, Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">58</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wersten-kern" class='incomplet'
                    target='_blank'>Wersten Kern</a></td>
            <td class="" data-sort-value="14.00">14</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">178</td>
            <td class="colV"></td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=white-abishai" class='incomplet'
                    target='_blank'>White Abishai</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">68</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=white-dragon-wyrmling"
                    target='_blank'>White Dragon Wyrmling</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">16</td>
            <td class="colP right">32</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wight" target='_blank'>Wight</a>
            </td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wild-dog" target='_blank'>Wild
                    Dog</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">5</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wild-dog-alpha" target='_blank'>Wild
                    Dog Alpha</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wildfire-spirit" class='incomplet'
                    target='_blank'>Wildfire Spirit</a></td>
            <td class="" data-sort-value="-1.00">-</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">5</td>
            <td class="colV">fly</td>
            <td class="colA">-</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=will-o--wisp"
                    target='_blank'>Will-o'-Wisp</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="1">Tiny</td>
            <td class="colP ">19</td>
            <td class="colP right">22</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=winged-kobold" target='_blank'>Winged
                    Kobold</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Humanoid (Kobold)</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">7</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=winter-eladrin" class='incomplet'
                    target='_blank'>Winter Eladrin</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fey (Elf)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">165</td>
            <td class="colV"></td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=winter-wolf" target='_blank'>Winter
                    Wolf</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wolf" target='_blank'>Wolf</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Beast</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">11</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wood-woad" class='incomplet'
                    target='_blank'>Wood Woad</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">18</td>
            <td class="colP right">75</td>
            <td class="colV"></td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=worg" target='_blank'>Worg</a></td>
            <td class="" data-sort-value="0.50">1/2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">26</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wraith" target='_blank'>Wraith</a>
            </td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">13</td>
            <td class="colP right">67</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wretched-sorrowsworn" class='incomplet'
                    target='_blank'>Wretched Sorrowsworn</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">15</td>
            <td class="colP right">10</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=wyvern" target='_blank'>Wyvern</a>
            </td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">13</td>
            <td class="colP right">110</td>
            <td class="colV">fly</td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=xorn" target='_blank'>Xorn</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">19</td>
            <td class="colP right">73</td>
            <td class="colV"></td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=xvart" class='incomplet'
                    target='_blank'>Xvart</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">13</td>
            <td class="colP right">7</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=xvart-warlock-of-raxivort"
                    class='incomplet' target='_blank'>Xvart Warlock of Raxivort</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">12</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yagnoloth" class='incomplet'
                    target='_blank'>Yagnoloth</a></td>
            <td class="" data-sort-value="11.00">11</td>
            <td class="colT">Fiend (Yugoloth)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">147</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yan-c-bin" class='incomplet'
                    target='_blank'>Yan-C-Bin</a></td>
            <td class="" data-sort-value="18.00">18</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">22</td>
            <td class="colP right">283</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yeenoghu" class='incomplet'
                    target='_blank'>Yeenoghu</a></td>
            <td class="" data-sort-value="24.00">24</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">20</td>
            <td class="colP right">333</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yellow-musk-creeper" class='incomplet'
                    target='_blank'>Yellow Musk Creeper</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Plant</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">6</td>
            <td class="colP right">60</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yellow-musk-zombie" class='incomplet'
                    target='_blank'>Yellow Musk Zombie</a></td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">9</td>
            <td class="colP right">33</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yeth-hound" class='incomplet'
                    target='_blank'>Yeth Hound</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Fey</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">51</td>
            <td class="colV">fly</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yeti" target='_blank'>Yeti</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">12</td>
            <td class="colP right">51</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yochlol" target='_blank'>Yochlol</a>
            </td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Fiend (Demon, Shapechanger)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">15</td>
            <td class="colP right">136</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-amethyst-dragon"
                    class='incomplet' target='_blank'>Young Amethyst Dragon</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">168</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-black-dragon"
                    target='_blank'>Young Black Dragon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">127</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-blue-dragon"
                    target='_blank'>Young Blue Dragon</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">152</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-brass-dragon"
                    target='_blank'>Young Brass Dragon</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">110</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-bronze-dragon"
                    target='_blank'>Young Bronze Dragon</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">142</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-copper-dragon"
                    target='_blank'>Young Copper Dragon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">119</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-crystal-dragon" class='incomplet'
                    target='_blank'>Young Crystal Dragon</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">95</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-deep-dragon" class='incomplet'
                    target='_blank'>Young Deep Dragon</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">16</td>
            <td class="colP right">93</td>
            <td class="colV">fly, swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-dragon-turtle" class='incomplet'
                    target='_blank'>Young Dragon Turtle</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">19</td>
            <td class="colP right">178</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-emerald-dragon" class='incomplet'
                    target='_blank'>Young Emerald Dragon</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">142</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-gold-dragon"
                    target='_blank'>Young Gold Dragon</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">178</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-green-dragon"
                    target='_blank'>Young Green Dragon</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">136</td>
            <td class="colV">fly, swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-kruthik" class='incomplet'
                    target='_blank'>Young Kruthik</a></td>
            <td class="" data-sort-value="0.12">1/8</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="2">Small</td>
            <td class="colP ">16</td>
            <td class="colP right">9</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-moonstone-dragon"
                    class='incomplet' target='_blank'>Young Moonstone Dragon</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">144</td>
            <td class="colV">fly</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-red-dragon" target='_blank'>Young
                    Red Dragon</a></td>
            <td class="" data-sort-value="10.00">10</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">178</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-red-shadow-dragon"
                    target='_blank'>Young Red Shadow Dragon</a></td>
            <td class="" data-sort-value="13.00">13</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">178</td>
            <td class="colV">fly</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-remorhaz" target='_blank'>Young
                    Remorhaz</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">14</td>
            <td class="colP right">93</td>
            <td class="colV"></td>
            <td class="colA">unaligned</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-sapphire-dragon"
                    class='incomplet' target='_blank'>Young Sapphire Dragon</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">157</td>
            <td class="colV">fly</td>
            <td class="colA">lawful neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-sea-serpent" class='incomplet'
                    target='_blank'>Young Sea Serpent</a></td>
            <td class="" data-sort-value="8.00">8</td>
            <td class="colT">Dragon</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">123</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-silver-dragon"
                    target='_blank'>Young Silver Dragon</a></td>
            <td class="" data-sort-value="9.00">9</td>
            <td class="colT">Dragon (Metallic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">168</td>
            <td class="colV">fly</td>
            <td class="colA">lawful good</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-topaz-dragon" class='incomplet'
                    target='_blank'>Young Topaz Dragon</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Dragon (Gem)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">127</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic neutral</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=young-white-dragon"
                    target='_blank'>Young White Dragon</a></td>
            <td class="" data-sort-value="6.00">6</td>
            <td class="colT">Dragon (Chromatic)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">17</td>
            <td class="colP right">133</td>
            <td class="colV">fly, swim</td>
            <td class="colA">chaotic evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-abomination"
                    target='_blank'>Yuan-ti Abomination</a></td>
            <td class="" data-sort-value="7.00">7</td>
            <td class="colT">Monstrosity (Shapechanger, Yuan-ti)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">15</td>
            <td class="colP right">127</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-anathema" class='incomplet'
                    target='_blank'>Yuan-ti Anathema</a></td>
            <td class="" data-sort-value="12.00">12</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">16</td>
            <td class="colP right">189</td>
            <td class="colV">swim</td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-broodguard" class='incomplet'
                    target='_blank'>Yuan-ti Broodguard</a></td>
            <td class="" data-sort-value="2.00">2</td>
            <td class="colT">Monstrosity</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">45</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-malison"
                    target='_blank'>Yuan-ti Malison</a></td>
            <td class="" data-sort-value="3.00">3</td>
            <td class="colT">Monstrosity (Shapechanger, Yuan-ti)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">12</td>
            <td class="colP right">66</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-mind-whisperer"
                    class='incomplet' target='_blank'>Yuan-ti Mind Whisperer</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Monstrosity (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-nightmare-speaker"
                    class='incomplet' target='_blank'>Yuan-ti Nightmare Speaker</a></td>
            <td class="" data-sort-value="4.00">4</td>
            <td class="colT">Monstrosity (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">71</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-pit-master" class='incomplet'
                    target='_blank'>Yuan-ti Pit Master</a></td>
            <td class="" data-sort-value="5.00">5</td>
            <td class="colT">Monstrosity (Warlock)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">14</td>
            <td class="colP right">88</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=yuan-ti-pureblood"
                    target='_blank'>Yuan-ti Pureblood</a></td>
            <td class="" data-sort-value="1.00">1</td>
            <td class="colT">Humanoid (Yuan-ti)</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">11</td>
            <td class="colP right">40</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=zaratan" class='incomplet'
                    target='_blank'>Zaratan</a></td>
            <td class="" data-sort-value="22.00">22</td>
            <td class="colT">Elemental</td>
            <td class="colD" data-sort-value="6">Gargantuan</td>
            <td class="colP ">21</td>
            <td class="colP right">307</td>
            <td class="colV">swim</td>
            <td class="colA">neutral</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=zargon-the-returner" class='incomplet'
                    target='_blank'>Zargon the Returner</a></td>
            <td class="" data-sort-value="17.00">17</td>
            <td class="colT">Aberration</td>
            <td class="colD" data-sort-value="5">Huge</td>
            <td class="colP ">18</td>
            <td class="colP right">253</td>
            <td class="colV">swim</td>
            <td class="colA">lawful evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=zariel" class='incomplet'
                    target='_blank'>Zariel</a></td>
            <td class="" data-sort-value="26.00">26</td>
            <td class="colT">Fiend (Devil)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">21</td>
            <td class="colP right">420</td>
            <td class="colV">fly</td>
            <td class="colA">lawful evil</td>
            <td class="colL">Legendary</td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=zombie" target='_blank'>Zombie</a>
            </td>
            <td class="" data-sort-value="0.25">1/4</td>
            <td class="colT">Undead</td>
            <td class="colD" data-sort-value="3">Medium</td>
            <td class="colP ">8</td>
            <td class="colP right">22</td>
            <td class="colV"></td>
            <td class="colA">neutral evil</td>
            <td class="colL"></td>
        </tr>
        <tr>
            <td class="item"><a href="https://www.aidedd.org/dnd/monstres.php?vo=zuggtmoy" class='incomplet'
                    target='_blank'>Zuggtmoy</a></td>
            <td class="" data-sort-value="23.00">23</td>
            <td class="colT">Fiend (Demon)</td>
            <td class="colD" data-sort-value="4">Large</td>
            <td class="colP ">18</td>
            <td class="colP right">304</td>
            <td class="colV"></td>
            <td class="colA">chaotic evil</td>
            <td class="colL">Legendary</td>
        </tr>
    </tbody>
</table>
`