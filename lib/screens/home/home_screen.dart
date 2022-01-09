import 'package:flutter/material.dart';

import 'components/app_bar.dart';
import 'components/about_me.dart';
import 'components/banner.dart';
import 'components/scaffold_background.dart';

class MyHomeScreen extends StatelessWidget {
  const MyHomeScreen({Key? key}) : super(key: key);

  static final ValueNotifier<bool> scrollBarIsAtTheTop =
      ValueNotifier<bool>(true);

  static final ScrollController scrollController = ScrollController();

  bool _onScroll(ScrollUpdateNotification notification) {
    if (scrollController.offset <= scrollController.position.minScrollExtent &&
        !scrollController.position.outOfRange) {
      scrollBarIsAtTheTop.value = true;
    } else {
      scrollBarIsAtTheTop.value = false;
    }
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      body: Stack(
        children: [
          const MyScaffoldBackground(),
          NotificationListener<ScrollUpdateNotification>(
            onNotification: _onScroll,
            child: ListView(
              controller: scrollController,
              children: const [
                MyBanner(),
                MyAboutMe(),
              ],
            ),
          ),
          const MyAppBar(),
        ],
      ),
    );
  }
}
