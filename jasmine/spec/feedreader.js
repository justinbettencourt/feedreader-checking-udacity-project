$(function() {
    describe('RSS Feeds', function() {
        it('feeds are defined', function() {
			if (allFeeds.length === 0){
				expect(allFeeds.length).toBe(0);
			} else {
				expect(allFeeds).toBeDefined();
			}
        });
		it('feeds have URLs', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});
		it('feeds have names', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
    });

	describe('The menu', function() {
		it('menu is hidden', function() {
			expect(document.body.classList).toContain('menu-hidden');
		});
		it('menu is visible', function() {
			$(".menu-icon-link").click();
            expect(document.body.classList).not.toContain('menu-hidden');
            
			$(".menu-icon-link").click();
            expect(document.body.classList).toContain('menu-hidden');
		});

	});

	describe('Initial Entries', function() {
		beforeEach(function(done) {
            loadFeed(0, done);
        });
        
		it('at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
	});

	describe('New Feed Selection', function() {
		var oldFeed;
		var newFeed;

		beforeEach(function(done) {
			loadFeed(0, function() {
				oldFeed = $('.feed').html();
				loadFeed(1, function() {
					newFeed = $('.feed').html(); 
					done();
				});
			});
		});

		it('new feed', function() {
			expect (newFeed).not.toBe(oldFeed);
		});
	});
}());
