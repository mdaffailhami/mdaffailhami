// import 'package:flutter/material.dart';

// import 'components/app_bar.dart';
// import 'components/about_me.dart';
// import 'components/banner.dart';
// import 'components/scaffold_background.dart';

// class MyHomeScreen extends StatelessWidget {
//   const MyHomeScreen({Key? key}) : super(key: key);

//   static final ValueNotifier<bool> scrollBarIsAtTheTop =
//       ValueNotifier<bool>(true);

//   static final ScrollController scrollController = ScrollController();

//   bool _onScroll(ScrollUpdateNotification notification) {
//     if (scrollController.offset <= scrollController.position.minScrollExtent &&
//         !scrollController.position.outOfRange) {
//       scrollBarIsAtTheTop.value = true;
//     } else {
//       scrollBarIsAtTheTop.value = false;
//     }
//     return true;
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Theme.of(context).colorScheme.background,
//       body: Stack(
//         children: [
//           const MyScaffoldBackground(),
//           NotificationListener<ScrollUpdateNotification>(
//             onNotification: _onScroll,
//             child: ListView(
//               controller: scrollController,
//               children: const [
//                 MyBanner(),
//                 MyAboutMe(),
//                 MyAboutMe(),
//                 MyAboutMe(),
//                 MyAboutMe(),
//                 MyAboutMe(),
//               ],
//             ),
//           ),
//           const MyAppBar(),
//         ],
//       ),
//     );
//   }
// }

import 'package:flutter/material.dart';

import 'components/app_bar.dart';
import 'components/projects.dart';
import 'components/skills.dart';
import 'components/about_me.dart';
import 'components/background.dart';

class MyHomeScreen extends StatelessWidget {
  const MyHomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        MyBackground(),
        Scaffold(
          backgroundColor: Colors.transparent,
          drawer: Drawer(),
          body: CustomScrollView(
            slivers: [
              MyAppBar(),
              SliverToBoxAdapter(
                child: Column(
                  children: [
                    MyAboutMe(),
                    MySkillsSection(),
                    Container(
                      decoration: BoxDecoration(
                        color: Theme.of(context).colorScheme.background,
                        borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(10),
                          topRight: Radius.circular(10),
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsets.symmetric(
                            vertical: 20,
                            horizontal:
                                MediaQuery.of(context).size.width * 0.1),
                        child: Column(
                          children: [
                            MyProjects(),
                          ],
                        ),
                      ),
                    ),
                    // MyAboutMe(),
                    // MyAboutMe(),
                    // MyAboutMe(),
                    // MyAboutMe(),
                  ],
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}
