

const pageTitle = document.getElementById('firstHeading');
const contentBody = document.getElementById('bodyContent');
const CURRENT_PAGE = pageTitle.innerText;

const IDLE_IMG_DATA = 'R0lGODdhHQAgAKIAAAAAAAD/pgAAAP///wBOM6NVZwDekXk/TSH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHQAgAAADsQi63P5PyEmrhGqGzbufkeCNZHAxUql2J5CusClkcT2/HEXqLL4Jg+BAxBIOP8RfkEAIepbNYy4ZWA6Yzo0VO+h1rsxwVxsWezng8rhaxp7J7XXaPH2q7fR6zUbdq3x+JRoqbSsXfSNhMDMuiB4Ei4yNgUgNgHstKJd/mQ4TBaAFBqOhBSAYKKWqoJKoCwKrqq2uLrGls64CB7YFB7iougfCE8LDtCjFvi7JvxgWjRQQCQAh+QQJCgAAACwAAAAAHQAgAAADtQi60v6wrclauDhrR5XVYChNX2hmI1CebDAKbXwJKow6In7bmDD8A94MGNwIfQMC4af5KX9HoTO5HGCmT2tPquwur97nLUP1agPl7tnFDZ/T4m3TPFcbZfgV/qTf54QgYSwSgIFKLTQ1LQSIiYp+NxR9MikkkyYcHRUCBQUGn6AGnZmakp2doKcFjqWmqq+rrZqcsKqssh61triSB7oFB7e4AgfFwQ3GwbwkyTTExsKyETUPpQkAOw==';
const EAST_IMG_DATA = 'R0lGODdhHQAfALMAAAAAAAD/pgAAAP///wBOM63HvqNVZ4lJWW87SADekQAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHQAfAAAEoRDISau9V+jNu8bSFoxkaW6ZYK5s8FFaK5cvEM+4K4R5v985EUkkDA6OpeNABcQJBoRBMspU9aCF6Airbc6gBG0A3LXmyNJxuNxTh9NoXTuwLtXlc6c53/LyT344awQ0P39hJyF7bYRDO4p/jhWBQY+TlCwoIBsGnZ6fBpogEwKgppajpKagqKk2pauhra4aB7YHCLkIs642t7i6vLQeohYRACH5BAkKAAAALAAAAAAdAB8AAAShEMgpqr24zk1r+GAoWpzkiWiqbWfqhivQvnSwCnX+CTKuWzAP8DcohooD3IwmGBAGx6fSl3MWnh8rdvlyErAB75ZaE0PD37EO/T2bbeRaOjSHr3/xuyqvH3HldTs8fIAjJoQ0BEEdfYssiEw8JUN4kiWHAgaam5sJCSSXk5yjmpahHJmknKanFKqrrZOpqjGxHQIIB7oHoLaTubusvo8YsREAIfkECQoAAAAsAAAAAB0AHwAABKEQyEmrvVfozbvG0haMZGlumWCubPBRWiuXLxDPuCuEeb/fORFJJAwOjqXjQAXECQaEQTLKVPWghegIq23OoARtANy15sjScbjcU4fTaF07sC7V5XOnOd/y8k9+OGsEND9/YSche22EQzuKf44VgUGPk5QsKCAbBp2enwaaIBMCoKaWo6SmoKipNqWroa2uAge2Bwi5CDWupLe4urO9HhyjEQAh+QQJCgAAACwAAAAAHQAfAAAEqBDIKaq9uM5Na/hgKFqc5Iloqm1n6oYr0L50sAp1/gkyrlswD/A3KIaKA9yMJhgQBsen0pdzFp4fK3b5chKwAe+WWhNDw9+xDv09m23kWjo0h69/8bsqrx9x5XU7PHyAIyaENARBHX2LLIhMPCVDeJIlhwIGmpubCQkkl5Oco5qWoRyZpJympxSqq62TB68GCKyxAge6BxYIvraxqLu8Mr/AwR0XPcqXEQA7';
const WEST_IMG_DATA = 'R0lGODdhHQAfALMAAAAAAAD/pgAAAP///wBOM63HvqNVZ4lJWW87SADekQAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHQAfAAAEnxDISau9V+jNu8bSFoxkaW6ZYK5s8FFaK5cvEM+4K4R5v8ciUjAnEgyOpeNA5VMZCYMklElUDQgF6OiajTYDV4IWLB5XyWJv2IyLrdVl7zlQLtV7OvxX36byW0N0d3offoJ/LiF+BIg1N4g6FY98NTCTfTsgGwacnZ4GKCAwn6SZoqOknqaniqmclaw2CLMIB7YHsLECtLW3q7GKHrkUEQAh+QQJCgAAACwAAAAAHQAfAAAEoxDIKaq9uM5Na/hgKFqc5Iloqm1n6oYr0L50sAp1/gkybsEz2k8wKIaKA5zOQyQMjk5lzjMgFJyf6vW5xFUJ2MA3PPWCw2NuWXzmpnU25Tk0hwfhrjsepd8DpQFnBH4agIGDhCaAiHsxfV0cj0I8JT92MSU9AgkJBp6fnySZlaClnpSjpKagqKksq6yulQKwBpiyigIHuwcIoriVvL2twJEZshEAIfkECQoAAAAsAAAAAB0AHwAABJ8QyEmrvVfozbvG0haMZGlumWCubPBRWiuXLxDPuCuEeb/HIlIwJxIMjqXjQOVTGQmDJJRJVA0IBejomo02A1eCFiweV8lib9iMi63VZe85UC7Vezr8V9+m8ltDdHd6H36Cfy4hfgSINTeIOhWPfDUwk307IBsGnJ2eBiggMJ+kmaKjpJ6mp4qpnJWsNgIItAgHtwersSG1tri6ux4cIBEAIfkECQoAAAAsAAAAAB0AHwAABKkQyCmqvbjOTWv4YChanOSJaKptZ+qGK9C+dLAKdf4JMm7BM9pPMCiGigOczkMkDI5OZc4zIBScn+r1ucRVCdjANzz1gsNjbll85qZ1NuU5NIcH4a47HqXfA6UBZwR+GoCBg4QmgIh7MX1dHI9CPCU/djElPQIJCQaen58kmZWgpZ6Uo6SmoKipLKusrpUIsAYHrbIyCLsIFge/t7ksvL0ywMHCiheaoiURADs=';
const NORTH_IMG_DATA = 'R0lGODdhHQAgAKIAAAAAAAD/pqNVZ3k/TQAAAADekQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHQAgAAADdgi63P6PyEmrhGqGzbufEeGNZHAxUql2J5CusElkcT2/9arlMc6rvh8pKPyIiiUicqNcNpHPYlS4W3IuRyszk3XOuNYWWPptVHtix0TAbrsFIAzqTS/LFwT623536d18dwQDfwIDgXKDA4sTi4x9KBUukpCVGAkAIfkECQoAAAAsAAAAAB0AIAAAA34IutT+sK3JWrg4a0eV1WAoTV9oZiNQnmwwEm18ESost84tr7rJ96AfEGUbiorGDTKJESadRugwx2zSlk8PFpiS4mikbSwVFh/BHS1BwC643WwBJ91Zx+9xNJ1ix9/1ewx+eICBKoN/hnwDiAIDhYERDQOUj4qGBJWWl3sRdAkAIfkECQoAAAAsAAAAAB0AIAAAA3YIutz+j8hJq4Rqhs27nxHhjWRwMVKpdieQrrBJZHE9v/Wq5THOq74fKSj8iIolInKjXDaRz2JUuFtyLkcrM5N1zrjWFlj6bVR7YsdEwG67BSAM6k0vyxcE+tt+d+ndfHcEA38CA4FygwOLE4uMfSgVLpKQlRgJACH5BAkKAAAALAAAAAAdACAAAAN/CLrU/rCtyVq4OGtHldVgKE1faGYjUJ5sMBJtfBEqLLfOLa+6yfegHxBlG4qKxg0yiREmnUboMMds0pZPDxaYkuJopG0sFRYfwR0tQcAuuN1sASfdWcfvcTSdYsff9XsMfniAgSqDf4Z8A4gCA4WBBAOTjxGQe5KUl4oVD5wKCQA7';
const SOUTH_IMG_DATA = 'R0lGODdhHQAhAKIAAAAAAAD/pgAAAP///wBOM6NVZwDekXk/TSH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHQAhAAADswi63P5PyEmrhGqGzbufkeCNZHAxUql2J5CusClkcT2/HEXqLL4Jg+BAxBIOP8RfkEAIepbNYy4ZWA6Yzo0VO+h1rsxwVxsWezng8rhaxp7J7XXaPH2q7fR6zUbdq3x+JRoqbSsXfSNhMDMuiB4Ei4yNgUgNgHstKJd/mQ4TBaAFBqOhBSAYKKWqoJKoCwKrqq2uLrGls64CB7YFB7iougfCE8LDtCjFvi7JvxgWjRTH0qgJACH5BAkKAAAALAAAAAAdACEAAAO2CLrS/rCtyVq4OGtHldVgKE1faGYjUJ5sMAptfAkqjDoiftuYMPwD3gwY3Ah9AwLhp/kpf0ehM7kcYKZPa0+q7C6v3uctQ/VqA+Xu2cUNn9PibdM8Vxtl+BX+pN/nhCBhLBKAgUotNDUtBIiJin43FH0yKSSTJhwdFQIFBQafoAadmZqSnZ2gpwWOpaaqr6utmpywqqyyHrW2uJIHugUHt7gCB8XBDcbBvJYPKsnCyyTP0a0RpQkAIfkECQoAAAAsAAAAAB0AIQAAA7MIutz+T8hJq4Rqhs27n5HgjWRwMVKpdieQrrApZHE9vxxF6iy+CYPgQMQSDj/EX5BACHqWzWMuGVgOmM6NFTvoda7McFcbFns54PK4Wsaeye112jx9qu30es1G3at8fiUaKm0rF30jYTAzLogeBIuMjYFIDYB7LSiXf5kOEwWgBQajoQUgGCilqqCSqAsCq6qtri6xpbOuAge2BQe4qLoHwhPCw7Qoxb4uyb8YFo0Ux9KoCQAh+QQJCgAAACwAAAAAHQAhAAADtQi60v6wrclauDhrR5XVYChNX2hmI1CebDAKbXwJKow6In7bmDD8A94MGNwIfQMC4af5KX9HoTO5HGCmT2tPquwur97nLUP1agPl7tnFDZ/T4m3TPFcbZfgV/qTf54QgYSwSgIFKLTQ1LQSIiYp+NxR9MikkkyYcHRUCBQUGn6AGnZmakp2doKcFjqWmqq+rrZqcsKqssh61triSB7oFB7e4AgfFwQ3GwbwkyTQRywzN0K3P0AkAOw==';

const DOOR_DATA = 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAYAAACSN4jeAAAAAXNSR0IArs4c6QAAAjlJREFUWIXNmDFuwkAQRb8dUuAiApdU4QjOLVwjcQWOkCiiRFFyBK6AlJpjcASnQkpjWymgipwiGWc93p1dG2z4EhLetbzPM7OznvHQQpv1srDdk2QBpuNDeT1frLwmazjfTDB8QVcwPvf49CyubQXj1jkVTB2XrGickNxlg7NZy8XFA+PTHTRKt9rxCABSIA9jEQr4NwAH1NJu1stCemsTkKQ8jK2WVuF8HRQATMcHJFlQA5Kg9sfQODdKt4iKd4m9ogqYFFdtrERSgaWXe3t9KdevWUwVWe0UKJP4M7mbRTAANfNL7mqqUbpFkgUVKPLaAPg1oS4ou7AUl2kz+DRJ5H1CmdbZrJdFmceInOCiv/H9McRkmHZPyFRLsKVp+2epSBv8fblRknVXXko+T6qXsJZuzQE/dqLaLefV99dH+f/m7r78zzkGtTzSYdCrUHRNcJyjtxjjULbxs4FJ+a5NHrSCTYZp5Xzk112pN1d+3j5ox9UNoKrXPMYhTFDzxcrz1c/ZJAuw82adw9GPtPNm9XRBQMDlzkn+AVGC8RySh3FvJ4BaSU3Hh7Igud6z0jTBa8IuxNcQy7drkQ/oy3R1h3bxBUsFMIkz+LoJqlpcmidtoQB9UV0DIzhe350r1kxWV3eiEYxu5OJwbV2bh7EY8KoataFsfQsT8M6baV9Y6o8578okC0S3mqDyMNbGkq316dxRPKVZp8679mKtFtNtiDZqAuUEBsDayHVRZ11rkqmHZrJqUyDSD4K5K7f5orLgAAAAAElFTkSuQmCC';

var adventure;  // async: get adventure data

const jo = document.createElement('img');
const movementInterval = 16;
const movementSpeed = 4;
const DOWN_KEY = 'ArrowDown';
const UP_KEY = 'ArrowUp';
const LEFT_KEY = 'ArrowLeft';
const RIGHT_KEY = 'ArrowRight';
const ENTER_KEY = 'Enter';
const movementKeys = [];

setup();

function setup() {
    getAdventureData((data) => {
        // There is currently no reason data should be set in content, but good to have the check just in case
        if (!dataExists(data)) {
            setDefaultData();
            setup();
            return;
        }
        adventure = data;
        if (window.location.href == adventure.history[adventure.history.length-1]) {
            createJo();
            addEventListeners();
            if (adventure.end == CURRENT_PAGE) {
                confetti();
                addEndGameElement();
            } else {
                makeDoors();
                addUIElements();
            }
        }
    });
}

function addEventListeners() {
    document.addEventListener('keydown', function (e) {
        if ([DOWN_KEY, UP_KEY, LEFT_KEY, RIGHT_KEY, ENTER_KEY].includes(e.code) || (e.code == "KeyF" && e.ctrlKey))
            e.preventDefault();
        switch (e.code) {
            case DOWN_KEY : 
                !movementKeys.includes(DOWN_KEY) && downPushed();
                break;
            case UP_KEY : 
                !movementKeys.includes(UP_KEY) && upPushed();
                break;
            case LEFT_KEY : 
                !movementKeys.includes(LEFT_KEY) && leftPushed();
                break;
            case RIGHT_KEY :
                !movementKeys.includes(RIGHT_KEY) && rightPushed();
                break;
            case ENTER_KEY :
                enterPushed();
                break;
        }
    });
}

function makeDoors() {
    let links = [...contentBody.getElementsByTagName('a')];
    let maxNumOfLinksToProcess = 10000;
    links.length > maxNumOfLinksToProcess && links.splice(maxNumOfLinksToProcess);
    for (let i = 0; i < links.length; i++) {
        if (    
            /* EXCLUSIONS */
            links[i].classList.length   // mw-* generally not important
            || /^\[\d+\]$/.test(links[i].innerText) // Of form [<number>]; citation links
            || !links[i].href.startsWith(window.location.origin+"/wiki/")
            // || links[i].parentElement.tagName != 'P'
            ) {
            links.splice(i,1);
            i--;
        }
    }
    let maxNumOfLinks = 5000;
    links.length > maxNumOfLinks && links.splice(maxNumOfLinks);
    for (let i = 0; i < links.length; i++) {
        links[i].append(newDoor(links[i]));
    }
}

function newDoor(link) {
    let door = document.createElement('img');
    door.className = 'door';
    door.src = 'data:image/png;base64,' + DOOR_DATA;
    door.style = 'position: absolute; transform: translateY(-10px); opacity: 0.9;';
    if (hasStandardParent(link)) {
        door.style.zIndex = -1;
        door.style.transform = "translate(-36px, -10px)";
    } else {
        door.style.opacity = 0.7;
    }
    return door;

    function hasStandardParent(link) {
        if (!link.parentElement)
            return false;
        if (link.parentElement.tagName == 'P')
            return true;
        if (link.parentElement.parentElement && link.parentElement.tagName == 'I' && link.parentElement.parentElement && link.parentElement.parentElement.tagName == 'P')
            return true;
        return false;
    }
}

function enterDoor() {
    // dist between jo & door
    const MAX_DIST = 32**2; // using sq dist
    const pos = jo_pos();
    const doors = [...document.getElementsByClassName('door')];
    let closest_door = null;
    let closest_dist = MAX_DIST;
    
    for (let i = 0; i < doors.length; i++) {
        const door_pos = get_pos(doors[i]);
        const current_dist = sq_dist(door_pos, pos);
        if (current_dist < closest_dist) {
            closest_dist = current_dist;
            closest_door = doors[i];
        }
    }
    if (closest_door == null)
        return;

    
    adventure.history.push(closest_door.parentElement.href);
    
    saveAdventure(() => {
        closest_door.parentElement.click();
    });
}

function confetti() {
    const NUM_FETTI_PER_BATCH = 20;
    const NUM_BATCHES = 20;
    for (let i = 0; i < NUM_BATCHES; i++) {
        setTimeout(confetti_batch, i*200);
    }
    const colors = ['red', 'blue', 'green', 'purple'];
    const width = 5;
    function confetti_batch() {
        let conf = Array(NUM_FETTI_PER_BATCH);
        for (let i = 0; i < NUM_FETTI_PER_BATCH; i++) {
            const piece = document.createElement('confetti');
            const color = colors[Math.floor(Math.random()*colors.length)];
            piece.style = `border-radius: ${width*0.5}px; border: none; background-color: ${color}; position: absolute; z-index: 100000;`;
            piece.style.width = toPx(width);
            piece.style.height = toPx(width);
            piece.style.left = toPx(Math.random() * window.innerWidth);
            piece.style.top = toPx(Math.random()*-100);
            piece.style.transform = "rotate(0deg)";
            document.body.append(piece);
            conf[i] = {
                el: piece,
                vel: {
                    x: 5-Math.random()*10,
                    y: 5-Math.random()*10
                }
            }
        }
        const grav = 1;
        do_conf();
        function do_conf() {
            let highest_piece = 0;
            for (let i = 0; i < NUM_FETTI_PER_BATCH; i++) {
                const piece = conf[i].el;
                conf[i].vel.x *= 0.99;
                conf[i].vel.y += grav;
                const old_pos = {
                    x: toNumber(piece.style.left),
                    y: toNumber(piece.style.top)
                }
                const new_pos = {
                    x: old_pos.x + conf[i].vel.x,
                    y: old_pos.y + conf[i].vel.y
                }
                if (new_pos.y > highest_piece)
                    highest_piece = new_pos.y;
                piece.style.transform = `rotate(${Math.atan2(new_pos.y-old_pos.y, new_pos.x-old_pos.x)+Math.PI/2}rad)`;
                piece.style.height = toPx(dist(old_pos, new_pos));
                piece.style.top = toPx(new_pos.y);
                piece.style.left = toPx(new_pos.x);
            }
            if (highest_piece < window.scrollY+window.innerHeight+20) {
                setTimeout(do_conf, 16);
            } else {
                for (let i = 0; i < NUM_FETTI_PER_BATCH; i++) {
                    const piece = conf[i].el;
                    piece.remove();
                }
            }
        }
    }
}

function addEndGameElement() {

}

function addUIElements() {
    const info_div = document.createElement('info');
    info_div.id = 'info';
    info_div.style = "position: fixed; right: 50px; top: 68px; width: 100px; min-height: 100px; border: 2px solid black; background-color: white; color: black; font-family: fangsong; z-index: 1000000; padding: 5px;"

    const goal_text = document.createElement('p');
    goal_text.innerText = 'Goal: ';
    const goal_a = document.createElement('a');
    goal_a.style = "font-family: sans-serif;";
    const goal = adventure.end;
    goal_a.innerText = goal;
    goal_a.title = goal;    // need for wikipedia's preview menu on hover
    goal_a.href = getWikiUrl(goal);
    const goal_img = newDoor(goal_a);
    goal_img.style.zIndex = -1;
    goal_img.style.transform = "translate(-36px, -10px)";
    goal_img.style.opacity = 0.9;
    goal_img.className = '';    // won't be functional w/ other doors
    goal_a.append(goal_img);
    goal_text.append(goal_a);
    info_div.append(goal_text);

    const count_text = document.createElement('p');
    count_text.innerText = 'Realms Visited: ' + adventure.history.length;
    info_div.append(count_text);

    // gives preview window on hover
    document.getElementById("bodyContent").getElementsByTagName("p")[1].append(info_div);
}

function downPushed() {
    movementKeys.push(DOWN_KEY);
    setImage(SOUTH_IMG_DATA);
}

function upPushed() {
    movementKeys.push(UP_KEY);
    setImage(NORTH_IMG_DATA);
}

function leftPushed() {
    movementKeys.push(LEFT_KEY);
    setImage(WEST_IMG_DATA);
}

function rightPushed() {
    movementKeys.push(RIGHT_KEY);
    setImage(EAST_IMG_DATA);
}

function enterPushed() {
    enterDoor();
}

function walk() {
    switch (movementKey()) {
        case DOWN_KEY : 
            walkDown();
            break;
        case UP_KEY : 
            walkUp();
            break;
        case LEFT_KEY : 
            walkLeft();
            break;
        case RIGHT_KEY :
            walkRight();
            break;
    }

    if (moved()) {
        scrollWithJo();
    }

    setTimeout(walk, movementInterval);

    function moved() {
        return !!movementKey();
    }
}

function scrollWithJo() {
    const cushion = 100;
    const bound_top = cushion;
    const bound_bottom = window.innerHeight-cushion;
    const bound_left = cushion;
    const bound_right = window.innerWidth-cushion;
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    if (jo_x() > window.scrollX+bound_right) {
        scrollX = jo_x() - bound_right;
    } else if (jo_x() < window.scrollX+bound_left) {
        scrollX = jo_x() - bound_left;
    }
    if (jo_y()-bound_bottom > window.scrollY) {
        scrollY = jo_y() - bound_bottom;
    } else if (jo_y() < window.scrollY+bound_top) {
        scrollY = jo_y() - bound_top;
    }
    scrollX = constrain(scrollX, 0, document.documentElement.scrollWidth - window.innerWidth);
    scrollY = constrain(scrollY, 0, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo(
        scrollX,
        scrollY
    );
}

document.addEventListener('keyup', function (e) {
    removeKey(e.code);
});

function removeKey(keycode) {
    for (let i = 0; i < movementKeys.length; i++) {
        if (movementKeys[i] == keycode) {
            movementKeys.splice(i, 1);
        }
    }
    if (movementKeys.length === 0) {
        setImage(IDLE_IMG_DATA);
    } else {
        switch (movementKey()) {
            case DOWN_KEY : 
            setImage(SOUTH_IMG_DATA);
            break;
        case UP_KEY : 
            setImage(NORTH_IMG_DATA);
            break;
        case LEFT_KEY : 
            setImage(WEST_IMG_DATA);
            break;
        case RIGHT_KEY :
            setImage(EAST_IMG_DATA);
            break;
        }
    }
}

function movementKey() {
    return movementKeys.length > 0 ? movementKeys[movementKeys.length - 1] : 0;
}

function createJo() {
    setImage(IDLE_IMG_DATA);
    jo.id = 'jo';
    let titleContent = pageTitle;
    if (titleContent.getElementsByTagName('span').length)
        titleContent = titleContent.getElementsByTagName('span')[0];
    let pageTitleBox = titleContent.getBoundingClientRect();
    const absolute_top = pageTitleBox.top + window.scrollY;
    const absolute_right = pageTitleBox.right + window.scrollX;
    jo.style=`position: absolute; z-index: 100000; top:${absolute_top}px;left:${absolute_right}px;`;
    document.body.append(jo);
    walk();
}

function setImage(imageData) {
    jo.src = "data:image/gif;base64," + imageData;
}

function walkDown() {
    incrementTop(movementSpeed);
}

function walkUp() {
    incrementTop(-movementSpeed);
}

function walkLeft() {
    incrementLeft(-movementSpeed);
}

function walkRight() {
    incrementLeft(movementSpeed);
}

function toNumber(value) {
    return parseInt(value.substring(0, value.indexOf('px')));
}

function toPx(value) {
    return value + 'px';
}

function incrementTop(stepSize) {
    jo.style.top = toPx( toNumber( jo.style.top ) + stepSize );
}

function incrementLeft(stepSize) {
    jo.style.left = toPx( toNumber( jo.style.left ) + stepSize );
}

function jo_box() {
    return jo.getBoundingClientRect()
}

function jo_info() {
    const box = jo_box();
    const pos = jo_pos();
    return {
        x: pos.x,
        y: pos.y,
        width: box.width,
        height: box.height,
        left: box.left,
        right: box.right,
        top: box.top,
        bottom: box.bottom,
    }
}

function jo_pos() {
    const box = jo_box();
    return {
        x: toNumber(jo.style.left) + box.width/2,
        y: toNumber(jo.style.top) + box.height/2
    };
}

function jo_x() {
    return jo_pos().x;
}

function jo_y() {
    return jo_pos().y;
}

function jo_size() {
    const box = jo_box();
    return {
        width: box.width,
        height: box.height
    };
}

function jo_width() {
    return jo_size().width;
}

function jo_height() {
    return jo_size().height;
}

function get_pos(el) {
    const box = el.getBoundingClientRect();
    return {
        x: window.scrollX + box.left + box.width / 2,
        y: window.scrollY + box.top + box.height / 2
    };
}

function constrain(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function sq_dist(p1, p2) {
    return (p1.x-p2.x)**2+(p1.y-p2.y)**2;
}

function dist(p1, p2) {
    return sq_dist(p1,p2)**0.5;
}

function getWikiUrl(topic) {
    return 'https://en.wikipedia.org/wiki/' + topic.replaceAll(' ', '_');
}

function getAdventureData(callback) {
    getData((data) => {
        if (dataExists(data)) {
            if (data.wikidata.adventures.length)
                callback(data.wikidata.adventures[0]);
        } else {
            setDefaultData();
        }
    })
}

function getData(callback) {
    chrome.storage.local.get(['wikidata'], (data) => {callback(data);});
}

function setData(data) {
    chrome.storage.local.set(data);
}

function setDefaultData() {
    let data = {
        wikidata: {
            adventures: [
                /*
                    {
                        name: string,
                        id: uid,
                        start: string,
                        goal: string,
                        history: [
                            // url: string
                        ]
                    }
                    */
            ]
        }
    }
    setData(data);
}

function clearData() {
    chrome.storage.local.clear();
}

function dataExists(data) {
    return !!Object.keys(data).length;
}

function saveAdventure(callback) {
    getData((data) => {
        data.wikidata.adventures[0] = adventure;
        setData(data, callback);
    })
}

function setData(data, callback) {
    chrome.storage.local.set(data).then(callback);
}